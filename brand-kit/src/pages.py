#!/usr/bin/env python3
"""Generate a brand-kit page from a folder of built assets."""
import html, json, os, re

SRC = os.path.dirname(os.path.abspath(__file__))

SECTIONS = [("logo", "Logos"), ("mark", "Mark"), ("icon", "App icons & favicons"), ("social", "Social")]


def group(brand_dir):
    groups = {}
    for sec, _ in SECTIONS:
        d = os.path.join(brand_dir, sec)
        if not os.path.isdir(d):
            continue
        for f in sorted(os.listdir(d)):
            stem, ext = os.path.splitext(f)
            if ext == ".ico":
                continue
            m = re.match(r"(.*?)-(\d+)(w?)$", stem)
            key = m.group(1) if m else stem
            if ext == ".png":
                if m:
                    label = f"PNG {m.group(2)}px" if m.group(3) or "x" not in stem else "PNG"
                else:
                    label = "PNG"
                dims = re.search(r"(\d+)x(\d+)$", stem)
                if dims:
                    label = f"PNG {dims.group(1)}×{dims.group(2)}"
                    key = stem
            else:
                label = ext[1:].upper()
            if re.search(r"\d+x\d+$", stem):
                key = stem
            size = os.path.getsize(os.path.join(d, f))
            g = groups.setdefault((sec, key), [])
            g.append(dict(path=f"{sec}/{f}", label=label, size=size, file=f))
    return groups


def sort_variants(vs):
    order = {"SVG": 0, "PDF": 1}
    def k(v):
        n = re.search(r"(\d+)", v["label"])
        return (order.get(v["label"], 2), int(n.group(1)) if n else 0)
    return sorted(vs, key=k)


def human(n):
    return f"{n/1024:.0f} KB" if n < 1024 * 1024 else f"{n/1024/1024:.1f} MB"


def title_for(key):
    t = key.replace("padlr-", "").replace("rll-", "").replace("-", " ")
    t = re.sub(r"\b(\d+)x(\d+)\b", r"\1×\2", t)
    fixes = {"og": "Open Graph", "x header": "X header", "linkedin": "LinkedIn", "youtube": "YouTube",
             "mono": "mono", "app icon": "App icon"}
    for a, b in fixes.items():
        t = re.sub(rf"\b{a}\b", b, t)
    return t[:1].upper() + t[1:]


def tile_for(key, cfg):
    if any(s in key for s in ("social", "og-", "header", "banner", "story", "app-icon", "on-", "favicon", "apple")):
        return "var(--tile-neutral)"
    if "white" in key:
        return cfg["tile_dark"]
    return cfg["tile_light"]


def render(bd, zipname, cfg, out_html):
    groups = group(bd)
    cards_by_sec = {}
    rank = ["stacked-red", "stacked-white", "stacked-black", "horizontal", "emblem", "wordmark", "stacked-on",
            "logo-white", "logo-black", "logo-mono", "app-icon", "favicon", "apple", "avatar", "og-", "x-header",
            "linkedin", "youtube", "story"]
    def prio(item):
        key = item[0][1]
        return next((i for i, r in enumerate(rank) if r in key), 99), key
    for (sec, key), vs in sorted(groups.items(), key=prio):
        vs = sort_variants(vs)
        prev = next((v for v in vs if v["label"] == "SVG"), None) or max(
            (v for v in vs if v["label"].startswith("PNG")), key=lambda v: v["size"])
        if key == "favicon":
            prev = next(v for v in vs if v["file"] == "favicon-512.png")
        wide = sec == "social" and any(s in key for s in ("header", "banner", "og", "youtube"))
        btns = "".join(
            f'<a class="dl" href="{v["path"]}" data-name="{v["file"]}">{v["label"]}'
            f'<span>{human(v["size"])}</span></a>' for v in vs)
        cards_by_sec.setdefault(sec, []).append(
            f'<figure class="card{" wide" if wide else ""}">'
            f'<div class="tile" style="background:{tile_for(key, cfg)}">'
            f'<img src="{prev["path"]}" alt="{html.escape(title_for(key))}" loading="lazy"></div>'
            f'<figcaption><strong>{html.escape(title_for(key))}</strong>'
            f'<div class="btns">{btns}</div></figcaption></figure>')
    sections = ""
    for sec, label in SECTIONS:
        if sec in cards_by_sec:
            sections += (f'<section id="{sec}"><h2>{label}</h2><p class="lede">{cfg["notes"][sec]}</p>'
                         f'<div class="grid">{"".join(cards_by_sec[sec])}</div></section>')
    swatches = "".join(
        f'<div class="sw"><div class="chip" style="background:{hx}"></div>'
        f'<div class="swt"><strong>{n}</strong><button class="hex" data-copy="{hx}">{hx}</button>'
        f'<small>RGB {", ".join(str(int(hx[i:i+2], 16)) for i in (1, 3, 5))}</small>'
        f'<small>{use}</small></div></div>' for n, hx, use in cfg["colours"])
    allfiles = sorted(os.path.relpath(os.path.join(r, f), bd) for r, _, fs in os.walk(bd) for f in fs)
    rules = "".join(f"<li>{r}</li>" for r in cfg["rules"])
    page = cfg["template"].format(
        title=cfg["title"], css=cfg["css"], hero=cfg["hero"], sections=sections, swatches=swatches,
        rules=rules, zip=zipname, files=json.dumps(allfiles),
        count=len(allfiles), js=JS)
    if "mark" not in cards_by_sec:
        page = page.replace('<a href="#mark">Mark</a>', "")
    os.makedirs(os.path.dirname(out_html), exist_ok=True)
    with open(out_html, "w") as f:
        f.write(page)


JS = r"""
<script>
(function(){
  var dlP = (window.claude && window.claude.use) ? window.claude.use("downloads") : Promise.resolve(null);
  var toast = document.getElementById("toast"), t;
  function say(m){ toast.textContent = m; toast.hidden = false; clearTimeout(t); t = setTimeout(function(){ toast.hidden = true; }, 3200); }
  document.addEventListener("click", async function(e){
    var a = e.target.closest("a.dl");
    if (a) {
      var dl = await Promise.race([dlP, new Promise(function(r){ setTimeout(function(){ r(null); }, 50); })]);
      if (!dl) return;               // no save capability here: the plain link opens the file
      e.preventDefault();
      try {
        var blob = await (await fetch(a.getAttribute("href"))).blob();
        await dl.save({ filename: a.dataset.name, data: blob });
        say("Saved " + a.dataset.name);
      } catch (err) {
        if (err && err.code === "declined") return;
        say(err && err.code === "rate_limited" ? "One download at a time. Try again in a moment." : "Couldn't save " + a.dataset.name + ". Open the file and save it from there.");
      }
      return;
    }
    var z = e.target.closest("#zipall");
    if (z) {
      var dz = await dlP;
      if (!dz || !window.JSZip) { say("Downloads aren't available in this view."); return; }
      z.disabled = true; var label = z.firstChild.textContent; z.firstChild.textContent = "Packing… ";
      try {
        var zip = new JSZip(), root = z.dataset.name.replace(/\.zip$/, "");
        var list = JSON.parse(document.getElementById("manifest").textContent);
        await Promise.all(list.map(async function(p){ zip.file(root + "/" + p, await (await fetch(p)).blob()); }));
        var blob = await zip.generateAsync({ type: "blob", compression: "DEFLATE" });
        await dz.save({ filename: z.dataset.name, data: blob });
        say("Saved " + z.dataset.name);
      } catch (err) { if (!(err && err.code === "declined")) say("Couldn't build the zip. Download files one by one instead."); }
      z.disabled = false; z.firstChild.textContent = label;
      return;
    }
    var h = e.target.closest("[data-copy]");
    if (h) {
      try { await navigator.clipboard.writeText(h.dataset.copy); say("Copied " + h.dataset.copy); }
      catch (_) { var r = document.createRange(); r.selectNodeContents(h); var s = getSelection(); s.removeAllRanges(); s.addRange(r); }
    }
  });
})();
</script>
"""

BASE_CSS = """
*{box-sizing:border-box}
body{background:var(--bg);color:var(--fg);font:16px/1.55 var(--body);-webkit-font-smoothing:antialiased}
.wrap{max-width:1180px;margin:0 auto;padding-inline:clamp(16px,4vw,40px);padding-block:0 80px}
nav.top{display:flex;flex-wrap:wrap;gap:6px 22px;align-items:center;padding-block:22px;border-bottom:1px solid var(--line);font:500 12px/1 var(--mono);letter-spacing:.08em;text-transform:uppercase}
nav.top a{color:var(--muted);text-decoration:none}
nav.top a:hover,nav.top a:focus-visible{color:var(--fg)}
nav.top .zipbtn{margin-left:auto}
h2{font:var(--h2);letter-spacing:var(--h2-ls);margin:0;text-wrap:balance}
section{padding-top:72px;display:grid;gap:10px}
.lede{color:var(--muted);max-width:62ch;margin:0 0 18px}
.grid{display:grid;gap:18px;grid-template-columns:repeat(auto-fill,minmax(min(100%,300px),1fr))}
.card{margin:0;display:flex;flex-direction:column;border:1px solid var(--line);border-radius:var(--r);overflow:hidden;background:var(--card);min-width:0}
.card.wide{grid-column:span 2}
@media (max-width:680px){.card.wide{grid-column:auto}}
.tile{aspect-ratio:16/10;position:relative;max-width:100%}
.tile img{position:absolute;left:9%;top:9%;width:82%;height:82%;object-fit:contain;display:block}
figcaption{padding:14px 16px 16px;display:grid;gap:10px;border-top:1px solid var(--line)}
figcaption strong{font:600 14px/1.3 var(--body)}
.btns{display:flex;flex-wrap:wrap;gap:6px}
.dl{display:inline-flex;align-items:baseline;gap:6px;padding:6px 10px;border:1px solid var(--line);border-radius:999px;font:500 12px/1 var(--mono);color:var(--fg);text-decoration:none;background:var(--bg)}
.dl span{color:var(--muted);font-size:11px}
.dl:hover,.dl:focus-visible{border-color:var(--accent);outline:none;box-shadow:0 0 0 2px var(--ring)}
.zipbtn{border:0;cursor:pointer;display:inline-flex;gap:8px;align-items:baseline;padding:10px 16px;border-radius:999px;background:var(--accent);color:var(--on-accent)!important;text-decoration:none;font:600 13px/1 var(--mono);letter-spacing:.02em;text-transform:none}
.zipbtn span{opacity:.7;font-weight:500}
.sws{display:grid;gap:14px;grid-template-columns:repeat(auto-fill,minmax(min(100%,210px),1fr))}
.sw{border:1px solid var(--line);border-radius:var(--r);overflow:hidden;background:var(--card)}
.chip{height:96px;border-bottom:1px solid var(--line)}
.swt{padding:12px 14px;display:grid;gap:3px}
.swt small{color:var(--muted);font:12px/1.4 var(--mono)}
.hex{justify-self:start;font:600 13px/1.2 var(--mono);background:none;border:0;padding:2px 0;color:var(--fg);cursor:copy;border-bottom:1px dashed var(--muted)}
.hex:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
ul.rules{margin:0;padding-left:1.1em;max-width:70ch;display:grid;gap:8px}
#toast{position:fixed;left:50%;transform:translateX(-50%);bottom:calc(20px + env(safe-area-inset-bottom,0px));background:var(--fg);color:var(--bg);padding:10px 16px;border-radius:999px;font:500 13px/1 var(--mono);z-index:5}
footer{margin-top:80px;padding-top:20px;border-top:1px solid var(--line);color:var(--muted);font:12px/1.6 var(--mono)}
@media (prefers-reduced-motion:no-preference){.card{transition:transform .2s ease}.card:hover{transform:translateY(-2px)}}
"""

TEMPLATE = """<title>{title}</title>
{css}
<div class="wrap">
<nav class="top" aria-label="Sections"><a href="#logo">Logos</a><a href="#mark">Mark</a><a href="#icon">Icons</a><a href="#social">Social</a><a href="#colour">Colour</a><a href="#usage">Usage</a>
<button type="button" class="zipbtn" id="zipall" data-name="{zip}">Download full kit .zip <span>{count} files</span></button></nav>
{hero}
{sections}
<section id="colour"><h2>Colour</h2><p class="lede">Click a hex value to copy it.</p><div class="sws">{swatches}</div></section>
<section id="usage"><h2>Usage</h2><ul class="rules">{rules}</ul></section>
<footer>{count} files. The full-kit zip also includes favicon.ico. Vector masters are SVG and PDF; PNGs have transparent backgrounds unless the name says otherwise. Built with potrace and librsvg.</footer>
</div>
<div id="toast" role="status" hidden></div>
<script type="application/json" id="manifest">{files}</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>
{js}
"""

PADLR_CFG = dict(
    title="PADLR. Brand Kit",
    tile_dark="#080809", tile_light="#F2F2EE",
    template=TEMPLATE,
    css="""<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..900&family=JetBrains+Mono:wght@400;500;600&display=swap">
<style>
/* Layout: court-line grid. Dark-first to match the product; the Volt dot is the only colour. */
:root{--bg:#080809;--card:#101012;--fg:#F4F4F1;--muted:#8D8D93;--line:#232326;--accent:#C8FF00;--on-accent:#080809;--ring:rgba(200,255,0,.25);--tile-neutral:#1A191B;
--display:"Archivo",system-ui,sans-serif;--body:"Archivo",system-ui,sans-serif;--mono:"JetBrains Mono",ui-monospace,monospace;
--h2:800 clamp(28px,4vw,40px)/1.05 var(--display);--h2-ls:-.01em;--r:14px;color-scheme:dark}
h2{font-stretch:125%}
.hero{padding-block:clamp(48px,9vw,110px) 10px;display:grid;gap:28px}
.hero .lockup{width:min(100%,780px)}
.hero p{max-width:58ch;color:var(--muted);margin:0;font-size:17px}
.hero .meta{display:flex;flex-wrap:wrap;gap:8px 28px;font:500 12px/1.4 var(--mono);color:var(--muted);text-transform:uppercase;letter-spacing:.08em}
.hero .meta b{color:var(--fg);font-weight:600}
</style>""" + "<style>" + BASE_CSS + "</style>",
    hero="""<header class="hero"><img class="lockup" src="logo/padlr-logo-white.svg" alt="PADLR. logo">
<p>Master logo files for the app, the website and social. The wordmark is rebuilt as exact vector geometry, so every file stays sharp at any size.</p>
<div class="meta"><span>Cap height <b>83 u</b></span><span>Dot Ø <b>0.35 × cap</b></span><span>Stroke <b>25.5 u</b></span></div></header>""",
    notes=dict(
        logo="White for dark backgrounds, black for light. Mono versions set the dot in the letter colour for single-colour print, embroidery and watermarks.",
        mark="The Volt dot on its own: use it for loaders, bullet points, stickers and anywhere the full wordmark is too wide.",
        icon="The P. monogram. Upload the square 1024 PNG to App Store Connect and Google Play; they apply their own corner mask. The rounded version is for web and decks. favicon.ico is in the zip.",
        social="Sized to each platform's current spec. The logo sits in the centre safe zone so profile photos and crop masks don't cover it.",
    ),
    colours=[("Court Black", "#080809", "Primary background"), ("White", "#FFFFFF", "Wordmark on dark"),
             ("Volt", "#C8FF00", "The dot, accents, CTAs"), ("Graphite", "#1A191B", "Cards, surfaces")],
    rules=["Clear space around the logo: one dot diameter on every side.",
           "Minimum width: 88px on screen, 25mm in print. Below that, use the dot or the P. icon.",
           "Keep the dot in Volt on colour versions. Don't recolour it to match a campaign.",
           "Don't stretch, outline, add shadows to or re-typeset the wordmark. Use the supplied files.",
           "On photography, place the white logo over the darkest, calmest part of the image."],
)

RLL_CFG = dict(
    title="Rebel Lion Labs Brand Kit",
    tile_dark="#941919", tile_light="#FAF6F2",
    template=TEMPLATE,
    css="""<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Spectral+SC:wght@600;700&family=Work+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap">
<style>
/* Layout: heraldic stationery. Cream ground, one oxblood accent, small-caps serif for headings. */
:root{--bg:#FAF6F2;--card:#FFFFFF;--fg:#1D1616;--muted:#76625F;--line:#E7DDD6;--accent:#941919;--on-accent:#FFFFFF;--ring:rgba(148,25,25,.18);--tile-neutral:#EFE8E2;
--display:"Spectral SC",Georgia,serif;--body:"Work Sans",system-ui,sans-serif;--mono:"IBM Plex Mono",ui-monospace,monospace;
--h2:700 clamp(28px,4vw,40px)/1.1 var(--display);--h2-ls:.01em;--r:6px}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#171212;--card:#1F1818;--fg:#F4ECE6;--muted:#A8938D;--line:#342828;--accent:#C23A34;--on-accent:#FFFFFF;--ring:rgba(194,58,52,.3);--tile-neutral:#2A2020;color-scheme:dark}}
:root[data-theme="dark"]{--bg:#171212;--card:#1F1818;--fg:#F4ECE6;--muted:#A8938D;--line:#342828;--accent:#C23A34;--on-accent:#FFFFFF;--ring:rgba(194,58,52,.3);--tile-neutral:#2A2020;color-scheme:dark}
.hero{margin-top:28px;padding:clamp(36px,7vw,80px) clamp(20px,5vw,64px);display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.1fr);gap:clamp(24px,5vw,64px);align-items:center;background:#941919;border-radius:var(--r);color:#FAF6F2}
.hero img{width:100%;max-width:380px;justify-self:center}
.hero h1{font:700 clamp(30px,4.6vw,52px)/1.05 var(--display);margin:0 0 14px;letter-spacing:.01em;text-wrap:balance}
.hero p{margin:0;max-width:52ch;opacity:.85}
.hero .meta{margin-top:22px;font:500 12px/1.6 var(--mono);letter-spacing:.06em;text-transform:uppercase;opacity:.75}
@media (max-width:720px){.hero{grid-template-columns:1fr}.hero img{max-width:240px}}
</style>""" + "<style>" + BASE_CSS + "</style>",
    hero="""<header class="hero"><img src="logo/rll-stacked-white.svg" alt="Rebel Lion Labs logo">
<div><h1>Rebel Lion Labs</h1><p>Vector masters of the shield, the wordmark and both lockups, plus icons and social assets. Every file is traced from the original artwork, so the lion keeps its exact shape.</p>
<div class="meta">Stacked · Horizontal · Emblem · Wordmark — in red, white and black</div></div></header>""",
    notes=dict(
        logo="Stacked is the primary lockup. Use the horizontal lockup for website headers, email signatures and anywhere height is tight. The emblem works alone from 24px up.",
        mark="",
        icon="The shield on Rebel Red. Upload the square 1024 PNG to the app stores; the rounded one is for web and decks. favicon.ico is in the zip.",
        social="Red and cream versions for each platform. The emblem avatar stays legible inside circular crops.",
    ),
    colours=[("Rebel Red", "#941919", "Primary brand colour"), ("Cream", "#FAF6F2", "Light background"),
             ("Ink", "#161313", "Text, black version"), ("White", "#FFFFFF", "Reversed logo on red or ink")],
    rules=["Clear space: the height of the shield's top edge fragments on every side, roughly 10% of the emblem height.",
           "Minimum sizes: emblem 24px, horizontal lockup 160px wide, stacked lockup 120px wide.",
           "Use red on cream or white, white on red or ink, and ink only where colour isn't available.",
           "Don't separate the fragments from the shield, rotate the emblem, or set the name in another typeface.",
           "Don't place the red logo on busy photography. Use the white version over a dark overlay."],
)

if __name__ == "__main__":
    import sys
    # usage: pages.py padlr|rll ASSET_DIR OUT_HTML
    brand, assets, out_html = sys.argv[1], os.path.abspath(sys.argv[2]), os.path.abspath(sys.argv[3])
    cfg, zipname = {"padlr": (PADLR_CFG, "padlr-brand-kit.zip"),
                    "rll": (RLL_CFG, "rebel-lion-labs-brand-kit.zip")}[brand]
    render(assets, zipname, cfg, out_html)
    print("wrote", out_html)

#!/usr/bin/env python3
"""Build the PADLR. and Rebel Lion Labs brand kits.

Open-source toolchain: potrace (bitmap -> vector tracing), librsvg / rsvg-convert
(SVG -> PNG/PDF), Pillow + NumPy (pre-processing, .ico). Run from anywhere:

    python3 build.py padlr OUT_DIR   (or: rll OUT_DIR)

The PADLR. wordmark is constructed as exact geometry (below). The RLL emblem and
wordmark are traced from rll-source.png at 8x supersampling.
"""
import os, re, shutil, subprocess, tempfile
import numpy as np
from PIL import Image, ImageFilter

SRC = os.path.dirname(os.path.abspath(__file__))
KIT = os.path.dirname(SRC)

# ---------------------------------------------------------------- palette
PADLR = dict(black="#080809", white="#FFFFFF", volt="#C8FF00", graphite="#1A191B")
RLL = dict(red="#941919", deep="#6E1112", cream="#FAF6F2", ink="#161313", white="#FFFFFF")


def run(*cmd):
    subprocess.run(cmd, check=True)


def write(path, text):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w") as f:
        f.write(text)


def svg_doc(vb, body, w=None, h=None, defs=""):
    x, y, vw, vh = vb
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{x:g} {y:g} {vw:g} {vh:g}" '
            f'width="{w or vw:g}" height="{h or vh:g}">'
            + (f"<defs>{defs}</defs>" if defs else "") + body + "</svg>\n")


def png(svg_path, out, width=None, height=None):
    args = ["rsvg-convert", svg_path, "-o", out]
    if width:
        args += ["-w", str(width)]
    if height:
        args += ["-h", str(height)]
    run(*args)


def pdf(svg_path, out):
    run("rsvg-convert", "-f", "pdf", svg_path, "-o", out)


# =================================================================== PADLR.
# Units: source pixels of the original wordmark (cap height 83).
PADLR_LETTERS = (
    # P
    "M16 15.5H93.5A24 24 0 0 1 117.5 39.5V51.5A24 24 0 0 1 93.5 75.5H41.5V98.5H16Z"
    "M41.5 36V56H86A6 6 0 0 0 92 50V42A6 6 0 0 0 86 36Z"
    # A
    "M106 98.5L154.6 15.5H188.4L237 98.5H209.5L200.1 82.5H142.9L133.5 98.5Z"
    "M171.5 33.6L154 63.5H189Z"
    # D
    "M242 15.5H325.5A28 28 0 0 1 353.5 43.5V70.5A28 28 0 0 1 325.5 98.5H242Z"
    "M268.5 36V78H320A8 8 0 0 0 328 70V44A8 8 0 0 0 320 36Z"
    # L
    "M366 15.5H392.5V78H452.5V98.5H366Z"
    # R
    "M462 15.5H544.5A24 24 0 0 1 568.5 39.5V48.5A24 24 0 0 1 544.5 72.5H537.3"
    "L575.5 98.5H541L488.5 62.8V98.5H462Z"
    "M488.5 36V56H536A6 6 0 0 0 542 50V42A6 6 0 0 0 536 36Z"
)
P_ONLY = ("M16 15.5H93.5A24 24 0 0 1 117.5 39.5V51.5A24 24 0 0 1 93.5 75.5H41.5V98.5H16Z"
          "M41.5 36V56H86A6 6 0 0 0 92 50V42A6 6 0 0 0 86 36Z")
DOT_R = 14.6
DOT = (575.5 + 13.8 + DOT_R, 88.6, DOT_R)  # cx, cy, r: same gap to the R as the original ball
PADLR_VB = (16, 15.5, DOT[0] + DOT_R - 16, DOT[1] + DOT_R - 15.5)


def dot(cx, cy, r, fill):
    return f'<circle cx="{cx:g}" cy="{cy:g}" r="{r:g}" fill="{fill}"/>'


def padlr_logo(letter_fill, dot_fill=PADLR["volt"]):
    return f'<path fill="{letter_fill}" fill-rule="evenodd" d="{PADLR_LETTERS}"/>{dot(*DOT, dot_fill)}'


def place(vb, box, pad_frac):
    """Transform that fits viewBox `vb` centred in box (x, y, w, h) with padding."""
    x, y, w, h = box
    iw, ih = w * (1 - 2 * pad_frac), h * (1 - 2 * pad_frac)
    s = min(iw / vb[2], ih / vb[3])
    tx = x + (w - vb[2] * s) / 2 - vb[0] * s
    ty = y + (h - vb[3] * s) / 2 - vb[1] * s
    return f"translate({tx:.3f} {ty:.3f}) scale({s:.5f})"


def build_padlr(out):
    c = PADLR
    logos = {
        "padlr-logo-white": (c["white"], c["volt"]),
        "padlr-logo-black": (c["black"], c["volt"]),
        "padlr-logo-mono-white": (c["white"], c["white"]),
        "padlr-logo-mono-black": (c["black"], c["black"]),
    }
    pad = 8
    vb = (PADLR_VB[0] - pad, PADLR_VB[1] - pad, PADLR_VB[2] + 2 * pad, PADLR_VB[3] + 2 * pad)
    for name, (fill, dot_fill) in logos.items():
        p = f"{out}/logo/{name}.svg"
        write(p, svg_doc(vb, padlr_logo(fill, dot_fill)))
        for w in (1000, 2000, 4000):
            png(p, f"{out}/logo/{name}-{w}w.png", width=w)
        pdf(p, f"{out}/logo/{name}.pdf")

    # Dot mark
    for name, fill in [("padlr-dot", c["volt"]), ("padlr-dot-white", c["white"]), ("padlr-dot-black", c["black"])]:
        p = f"{out}/mark/{name}.svg"
        write(p, svg_doc((0, 0, 100, 100), dot(50, 50, 48, fill)))
        for w in (512, 1024, 2048):
            png(p, f"{out}/mark/{name}-{w}.png", width=w)

    # "P." monogram: P glyph + dot, spaced as in the wordmark.
    def monogram(bg, fg, rounded=False, size=1024):
        cx = 117.5 + 13.8 + DOT_R
        glyph = f'<path fill="{fg}" fill-rule="evenodd" d="{P_ONLY}"/>{dot(cx, DOT[1], DOT_R, c["volt"])}'
        gvb = (16, 15.5, cx + DOT_R - 16, PADLR_VB[3])
        rx = f' rx="{size*0.2237:.1f}"' if rounded else ""
        bgr = f'<rect width="{size}" height="{size}"{rx} fill="{bg}"/>' if bg else ""
        return bgr + f'<g transform="{place(gvb, (0, 0, size, size), 0.2)}">{glyph}</g>'

    for name, bg, fg, rounded in [("padlr-app-icon", c["black"], c["white"], False),
                                  ("padlr-app-icon-rounded", c["black"], c["white"], True),
                                  ("padlr-app-icon-light", c["white"], c["black"], False)]:
        p = f"{out}/icon/{name}.svg"
        write(p, svg_doc((0, 0, 1024, 1024), monogram(bg, fg, rounded)))
        png(p, f"{out}/icon/{name}-1024.png", width=1024)

    # Favicons
    fav = f"{out}/icon/favicon.svg"
    write(fav, svg_doc((0, 0, 64, 64), monogram(c["black"], c["white"], True, 64)))
    base = f"{out}/icon/padlr-app-icon"
    for s in (16, 32, 48, 180, 192, 512):
        nm = "apple-touch-icon-180" if s == 180 else f"favicon-{s}"
        png(f"{base}.svg" if s >= 180 else fav, f"{out}/icon/{nm}.png", width=s)
    Image.open(f"{out}/icon/favicon-48.png").save(
        f"{out}/icon/favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])

    # Social
    social = {
        "padlr-social-avatar-1080": (1080, 1080, 0.14, c["black"], c["white"]),
        "padlr-social-avatar-light-1080": (1080, 1080, 0.14, c["white"], c["black"]),
        "padlr-og-1200x630": (1200, 630, 0.2, c["black"], c["white"]),
        "padlr-x-header-1500x500": (1500, 500, 0.3, c["black"], c["white"]),
        "padlr-linkedin-banner-1584x396": (1584, 396, 0.32, c["black"], c["white"]),
        "padlr-youtube-banner-2560x1440": (2560, 1440, 0.36, c["black"], c["white"]),
        "padlr-story-1080x1920": (1080, 1920, 0.14, c["black"], c["white"]),
    }
    for name, (W, H, padf, bg, fg) in social.items():
        body = padlr_logo(fg)
        tf = place(PADLR_VB, (0, 0, W, H), padf)
        p = f"{out}/social/{name}.svg"
        write(p, svg_doc((0, 0, W, H), f'<rect width="{W}" height="{H}" fill="{bg}"/>'
                         f'<g transform="{tf}">{body}</g>'))
        png(p, f"{out}/social/{name}.png", width=W)


# ====================================================================== RLL
def trace(cov, region, S=8):
    """potrace one region of a coverage map. Returns (transform, path-data list)."""
    m = np.zeros_like(cov)
    y0, y1 = region
    m[y0:y1] = cov[y0:y1]
    h, w = m.shape
    big = Image.fromarray((m * 255).astype(np.uint8)).resize((w * S, h * S), Image.BICUBIC)
    big = big.filter(ImageFilter.GaussianBlur(S * 0.35))
    ink = np.array(big) >= 128
    with tempfile.TemporaryDirectory() as td:
        Image.fromarray(((~ink) * 255).astype(np.uint8)).convert("1").save(f"{td}/a.pbm")
        run("potrace", f"{td}/a.pbm", "-s", "-o", f"{td}/a.svg", "--turdsize", "40",
            "--alphamax", "1.0", "--opttolerance", "0.2", "--flat", "-W", f"{w}pt", "-H", f"{h}pt")
        s = open(f"{td}/a.svg").read()
    tf = re.search(r'<g transform="([^"]+)"', s).group(1)
    ds = re.findall(r'<path d="([^"]+)"', s, re.S)
    return tf, " ".join(" ".join(x.split()) for x in ds)


def build_rll(out):
    c = RLL
    im = Image.open(os.path.join(SRC, "rll-source.png")).convert("RGBA")
    bg = Image.new("RGBA", im.size, (255, 255, 255, 255))
    bg.alpha_composite(im)
    g = np.array(bg.convert("RGB")).astype(float)[..., 1]
    cov = np.clip((255 - g) / (255 - 25), 0, 1)
    etf, ed = trace(cov, (140, 650))
    wtf, wd = trace(cov, (660, 840))
    EMB_VB = (300, 144, 458, 492)   # emblem bbox 308-750 x 152-628 (+8 pad)
    WM_VB = (221, 679, 585, 146)    # wordmark bbox 229-798 x 687-816

    def emblem(fill):
        return f'<g fill="{fill}" transform="{etf}"><path d="{ed}"/></g>'

    def wordmark(fill):
        return f'<g fill="{fill}" transform="{wtf}"><path d="{wd}"/></g>'

    # Stacked lockup (original composition)
    ST_VB = (213, 136, 601, 689)
    # Horizontal lockup: emblem left, wordmark right, wordmark cap-height aligned
    def horizontal(fill):
        e_h = 492.0
        s_w = e_h * 0.62 / WM_VB[3]  # wordmark is 62% of emblem height
        e = f'<g transform="translate({-EMB_VB[0]} {-EMB_VB[1]})">{emblem(fill)}</g>'
        wx = EMB_VB[2] + 70
        wy = (e_h - WM_VB[3] * s_w) / 2
        w = (f'<g transform="translate({wx:.2f} {wy:.2f}) scale({s_w:.4f}) '
             f'translate({-WM_VB[0]} {-WM_VB[1]})">{wordmark(fill)}</g>')
        return (0, 0, wx + WM_VB[2] * s_w, e_h), e + w

    colours = {"red": c["red"], "white": c["white"], "black": c["ink"]}
    for cname, fill in colours.items():
        for kind, vb, body in [("stacked", ST_VB, emblem(fill) + wordmark(fill)),
                               ("emblem", EMB_VB, emblem(fill)),
                               ("wordmark", WM_VB, wordmark(fill)),
                               ("horizontal",) + horizontal(fill)]:
            name = f"rll-{kind}-{cname}"
            p = f"{out}/logo/{name}.svg"
            write(p, svg_doc(vb, body))
            widths = (1000, 2000, 4000) if kind != "emblem" else (512, 1024, 2048, 4096)
            for w in widths:
                png(p, f"{out}/logo/{name}-{w}w.png", width=w)
            pdf(p, f"{out}/logo/{name}.pdf")

    # On-background lockups
    def on_bg(W, H, bgc, fill, padf, kind="stacked", uid=""):
        if kind == "stacked":
            vb, body = ST_VB, emblem(fill) + wordmark(fill)
        elif kind == "emblem":
            vb, body = EMB_VB, emblem(fill)
        else:
            vb, body = horizontal(fill)
        return (f'<rect width="{W}" height="{H}" fill="{bgc}"/>'
                f'<g transform="{place(vb, (0, 0, W, H), padf)}">{body}</g>')

    boards = {
        "rll-stacked-on-cream-2048": (2048, 2048, c["cream"], c["red"], 0.14, "stacked"),
        "rll-stacked-on-red-2048": (2048, 2048, c["red"], c["white"], 0.14, "stacked"),
        "rll-stacked-on-black-2048": (2048, 2048, c["ink"], c["white"], 0.14, "stacked"),
    }
    for name, (W, H, bgc, fill, padf, kind) in boards.items():
        p = f"{out}/logo/{name}.svg"
        write(p, svg_doc((0, 0, W, H), on_bg(W, H, bgc, fill, padf, kind)))
        png(p, f"{out}/logo/{name}.png", width=W)

    # Icons
    icons = {
        "rll-app-icon": (c["red"], c["white"], False),
        "rll-app-icon-rounded": (c["red"], c["white"], True),
        "rll-app-icon-cream": (c["cream"], c["red"], False),
    }
    for name, (bgc, fill, rounded) in icons.items():
        S = 1024
        rx = f' rx="{S*0.2237:.1f}"' if rounded else ""
        body = (f'<rect width="{S}" height="{S}"{rx} fill="{bgc}"/>'
                f'<g transform="{place(EMB_VB, (0, 0, S, S), 0.15)}">{emblem(fill)}</g>')
        p = f"{out}/icon/{name}.svg"
        write(p, svg_doc((0, 0, S, S), body))
        png(p, f"{out}/icon/{name}-1024.png", width=S)
    for s in (16, 32, 48, 180, 192, 512):
        nm = "apple-touch-icon-180" if s == 180 else f"favicon-{s}"
        src = "rll-app-icon" if s >= 180 else "rll-app-icon-rounded"
        png(f"{out}/icon/{src}.svg", f"{out}/icon/{nm}.png", width=s)
    shutil.copy(f"{out}/icon/rll-app-icon-rounded.svg", f"{out}/icon/favicon.svg")
    Image.open(f"{out}/icon/favicon-48.png").save(
        f"{out}/icon/favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])

    social = {
        "rll-social-avatar-1080": (1080, 1080, c["red"], c["white"], 0.17, "emblem"),
        "rll-social-avatar-cream-1080": (1080, 1080, c["cream"], c["red"], 0.17, "emblem"),
        "rll-og-1200x630": (1200, 630, c["cream"], c["red"], 0.2, "horizontal"),
        "rll-x-header-1500x500": (1500, 500, c["red"], c["white"], 0.24, "horizontal"),
        "rll-linkedin-banner-1584x396": (1584, 396, c["cream"], c["red"], 0.24, "horizontal"),
        "rll-youtube-banner-2560x1440": (2560, 1440, c["red"], c["white"], 0.36, "horizontal"),
        "rll-story-1080x1920": (1080, 1920, c["cream"], c["red"], 0.14, "stacked"),
    }
    for name, (W, H, bgc, fill, padf, kind) in social.items():
        p = f"{out}/social/{name}.svg"
        write(p, svg_doc((0, 0, W, H), on_bg(W, H, bgc, fill, padf, kind)))
        png(p, f"{out}/social/{name}.png", width=W)


if __name__ == "__main__":
    import sys
    # usage: build.py padlr|rll OUT_DIR
    brand, out = sys.argv[1], os.path.abspath(sys.argv[2])
    fn = {"padlr": build_padlr, "rll": build_rll}[brand]
    for sub in ("logo", "mark", "icon", "social"):
        shutil.rmtree(os.path.join(out, sub), ignore_errors=True)
    fn(out)
    print("built", out)

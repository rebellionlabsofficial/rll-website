# Rebel Lion Labs brand kit

The logo files live in `public/brand/kit`, so the site can use them directly,
e.g. `/brand/kit/logo/rll-horizontal-red.svg`. The existing
`public/brand/rll-shield*.png` files are untouched.

| Folder | Contents |
| --- | --- |
| `public/brand/kit/logo` | Stacked (primary), horizontal, emblem and wordmark in red, white and black. SVG, PDF, PNG at 1000/2000/4000px (emblem up to 4096px). Stacked lockup on cream, red and black at 2048px |
| `public/brand/kit/icon` | Shield app icons (red, rounded, cream), favicons, `favicon.ico`, Apple touch icon |
| `public/brand/kit/social` | Avatars, Open Graph 1200×630, X header, LinkedIn banner, YouTube banner, story |

Colours: Rebel Red `#941919`, Cream `#FAF6F2`, Ink `#161313`, White `#FFFFFF`.

Rules: clear space of about 10% of the emblem height on every side; minimum
sizes emblem 24px, horizontal lockup 160px wide, stacked lockup 120px wide;
red on cream or white, white on red or ink; never separate the fragments from
the shield or set the name in another typeface.

## Rebuilding

`src/build.py` traces `src/rll-source.png` with potrace at 8× supersampling and
exports everything with librsvg (both open source). `src/pages.py` regenerates
`page/rebel-lion-labs.html`, the downloadable brand-kit page.

```sh
apt-get install potrace librsvg2-bin && pip install pillow numpy
python3 brand-kit/src/build.py rll public/brand/kit
python3 brand-kit/src/pages.py rll public/brand/kit brand-kit/page/rebel-lion-labs.html
```

The same `build.py` also builds the PADLR. kit (`padlr`), which lives in the
padlr-website repo.

# rebellionlabs.app

The Rebel Lion Labs website: Next.js (App Router), exported as static files and
served by Cloudflare Workers.

## Commands

```bash
npm run dev               # local site at http://localhost:3000 (no enquiry endpoint)
npm run preview           # build, then run the site and Worker locally on Cloudflare's runtime
npm run build             # static export to out/
npm run lint
npm run typecheck:worker  # type-check worker/index.ts against wrangler.jsonc
```

In `npm run preview`, enquiries aren't sent. Wrangler prints them and saves
them under `.wrangler/tmp/email/`.

## How it's hosted

- **Pages and files**: `npm run build` exports every page to `out/`. Cloudflare
  serves them from its cache. `public/_headers` sets the security headers and
  caching, and `public/_redirects` lists moved URLs.
- **Enquiry form**: `src/components/ContactForm.tsx` posts to `/api/enquiry`.
  `worker/index.ts` checks the enquiry and emails it to our Gmail through
  Cloudflare Email Routing. It can only send to that one verified address,
  which is set in `wrangler.jsonc`.
- **Deploys**: Cloudflare Workers Builds watches this repo. A push to `main`
  runs `npm run build` and then `npx wrangler deploy`. Other branches get a
  preview version with its own URL. There's no deploy limit to worry about
  on the free plan.

### Build settings in Cloudflare

Workers & Pages → `rll-website` → Settings → Build:

- Git repository: `rebellionlabsofficial/rll-website`, production branch `main`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- The Worker name must stay `rll-website`, to match `wrangler.jsonc`.

## Cloudflare set-up (done once)

- Zone `rebellionlabs.app` with:
  - Email Routing on
  - Gmail verified as the destination
  - SSL Full (strict), Always Use HTTPS, TLS 1.2+
  - Email obfuscation off (it rewrites the HTML)
  - Browser cache TTL set to respect the site's headers
- `www` redirects to the main domain with a 301 (a Cloudflare redirect rule).
- AI crawlers are allowed, because the site is written to be quoted by AI
  answers (see `public/llms.txt`).
- The Worker `rll-website` serves `rebellionlabs.app` and
  `www.rebellionlabs.app` as custom domains, from `routes` in
  `wrangler.jsonc`.

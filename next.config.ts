import type { NextConfig } from "next";

// The site is exported as plain HTML, CSS and JS into out/ and served by
// Cloudflare (see wrangler.jsonc and worker/index.ts).
//
// A static export can't use Next.js headers() or redirects(), so those live
// in files Cloudflare reads from the export:
//   public/_headers    security headers (CSP and friends) and caching
//   public/_redirects  old URLs that moved
const nextConfig: NextConfig = {
  output: "export",
  // No image server on a static host. Images are served as they are, so
  // keep the files in public/ small (WebP for screenshots).
  images: { unoptimized: true },
};

export default nextConfig;

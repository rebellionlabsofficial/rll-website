import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

// Declared explicitly (not via the opengraph-image file convention) because a
// page that sets its own `openGraph` would otherwise drop the inherited image.
export const SHARE_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Rebel Lion Labs — Apps built for the players, by a player. Home of PADLR.",
};

interface PageMetadataOptions {
  /** Page title; omitted on the home page so the root default title applies. */
  title?: string;
  description: string;
  path: string;
}

// Next.js merges metadata shallowly, so a page that sets `openGraph` replaces
// the layout's entirely. Building every page's metadata here keeps the
// canonical URL, Open Graph and Twitter fields complete and page-specific.
export function pageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const fullTitle = title
    ? `${title} | ${SITE.name}`
    : `${SITE.name} — ${SITE.tagline}`;

  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: SITE.name,
      locale: "en_IE",
      type: "website",
      images: [SHARE_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [SHARE_IMAGE],
    },
  };
}

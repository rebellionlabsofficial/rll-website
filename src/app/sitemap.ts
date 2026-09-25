import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

// Search engines only trust lastModified if it changes when the content does,
// so these are fixed dates rather than the build time. Update a page's date
// when you change what it says.
const PAGES: {
  path: string;
  lastModified: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  {
    path: "",
    lastModified: "2026-09-25",
    changeFrequency: "monthly",
    priority: 1,
  },
  {
    path: "/products",
    lastModified: "2026-09-25",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/about",
    lastModified: "2026-09-25",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/contact",
    lastModified: "2026-09-25",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    path: "/privacy",
    lastModified: "2026-09-25",
    changeFrequency: "yearly",
    priority: 0.3,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(({ path, ...page }) => ({
    url: `${SITE.url}${path}`,
    ...page,
  }));
}

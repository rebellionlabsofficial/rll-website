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
    lastModified: "2026-11-22",
    changeFrequency: "monthly",
    priority: 1,
  },
  {
    path: "/services",
    lastModified: "2026-11-22",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/services/websites",
    lastModified: "2026-11-22",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/services/ai",
    lastModified: "2026-11-22",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/services/apps",
    lastModified: "2026-11-22",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/work",
    lastModified: "2026-11-22",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/work/padlr",
    lastModified: "2026-11-22",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/about",
    lastModified: "2026-11-22",
    changeFrequency: "yearly",
    priority: 0.7,
  },
  {
    path: "/contact",
    lastModified: "2026-11-22",
    changeFrequency: "yearly",
    priority: 0.6,
  },
  {
    path: "/privacy",
    lastModified: "2026-11-22",
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

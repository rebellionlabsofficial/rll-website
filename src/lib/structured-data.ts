import type {
  BreadcrumbList,
  MobileApplication,
  Organization,
  Person,
  Service,
  WebSite,
} from "schema-dts";
import { FOUNDER, PADLR, SERVICES, SITE } from "@/lib/constants";

// Schema.org data for search engines, typed with schema-dts so a misspelt or
// misplaced property fails the type check. The full organisation lives on the
// home page; other nodes carry its @id plus a name and URL, so each page still
// makes sense on its own.

const ORGANIZATION_ID = `${SITE.url}/#organization`;

const publisher: Organization = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: SITE.name,
  url: SITE.url,
};

// schema-dts also allows an Organization to be a bare name; this one is a node.
export const organization: Exclude<Organization, string> = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/logo.png`,
  email: SITE.email,
  alternateName: SITE.short,
  description: SITE.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cork",
    addressCountry: "IE",
  },
  areaServed: { "@type": "Country", name: "Ireland" },
  founder: { "@id": `${SITE.url}/about#founder` },
  knowsAbout: [
    "Web design",
    "Website development",
    "iOS app development",
    "Artificial intelligence for small businesses",
    "ChatGPT",
    "Claude",
    "Google Gemini",
    "Microsoft Copilot",
    "Data protection",
  ],
  brand: { "@type": "Brand", name: "PADLR" },
  sameAs: [SITE.linkedin],
};

export const founder: Exclude<Person, string> = {
  "@type": "Person",
  "@id": `${SITE.url}/about#founder`,
  name: FOUNDER.name,
  jobTitle: FOUNDER.role,
  worksFor: publisher,
  ...(FOUNDER.photo ? { image: `${SITE.url}${FOUNDER.photo}` } : {}),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cork",
    addressCountry: "IE",
  },
};

export const serviceNodes: Service[] = SERVICES.map((service) => ({
  "@type": "Service",
  "@id": `${SITE.url}/services#${service.id}`,
  name: service.title,
  description: service.summary,
  provider: publisher,
  areaServed: { "@type": "Country", name: "Ireland" },
  offers: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: service.price,
      priceCurrency: "EUR",
    },
  },
}));

export const website: WebSite = {
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  name: SITE.name,
  url: SITE.url,
  inLanguage: "en-IE",
  publisher,
};

export const padlrApp: MobileApplication = {
  "@type": "MobileApplication",
  "@id": `${SITE.url}/work/padlr#app`,
  // The App Store name has no trailing full stop; the wordmark does.
  name: "PADLR",
  alternateName: PADLR.name,
  description: PADLR.about,
  url: PADLR.links.website,
  image: `${PADLR.links.website}/og-image.png`,
  screenshot: `${SITE.url}/padlr-app-preview.png`,
  operatingSystem: "iOS",
  applicationCategory: "SportsApplication",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  ...(PADLR.appStoreUrl ? { installUrl: PADLR.appStoreUrl } : {}),
  author: publisher,
  publisher,
};

/** Home > page trail, so results show the page name instead of the URL. */
export function breadcrumbs(name: string, path: string): BreadcrumbList {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name, item: `${SITE.url}${path}` },
    ],
  };
}

import type {
  BreadcrumbList,
  FAQPage,
  MobileApplication,
  Organization,
  WebSite,
} from "schema-dts";
import { PADLR, PADLR_FAQS, SITE } from "@/lib/constants";

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
  description:
    "Rebel Lion Labs is a sports app studio in Dublin, Ireland, and the maker of PADLR., a padel app for skill ratings, match logging and finding players.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dublin",
    addressCountry: "IE",
  },
  brand: { "@type": "Brand", name: "PADLR" },
  sameAs: [SITE.linkedin],
};

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
  "@id": `${SITE.url}/products#padlr`,
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
  author: publisher,
  publisher,
};

export const padlrFaqs: FAQPage = {
  "@type": "FAQPage",
  "@id": `${SITE.url}/products#faq`,
  mainEntity: PADLR_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
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

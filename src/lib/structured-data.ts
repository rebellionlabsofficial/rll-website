import type {
  BreadcrumbList,
  FAQPage,
  MobileApplication,
  Offer,
  Organization,
  Person,
  ProfessionalService,
  Service,
  WebSite,
} from "schema-dts";
import { FOUNDER, PADLR, SERVICES, SITE } from "@/lib/constants";
import type { Faq, ServicePage } from "@/lib/service-pages";

// Schema.org data for search engines, typed with schema-dts so a misspelt or
// misplaced property fails the type check. The full organisation lives on the
// home page; other nodes carry its @id plus a name and URL, so each page still
// makes sense on its own.

const ORGANIZATION_ID = `${SITE.url}/#organization`;
const FOUNDER_ID = `${SITE.url}/about#founder`;

const publisher: Organization = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: SITE.name,
  url: SITE.url,
};

const AREA_SERVED = [
  { "@type": "City", name: "Cork" },
  { "@type": "AdministrativeArea", name: "Munster" },
  { "@type": "Country", name: "Ireland" },
] as const;

// A service-area business, so no street address is published.
export const organization: Exclude<ProfessionalService, string> = {
  "@type": "ProfessionalService",
  "@id": ORGANIZATION_ID,
  name: SITE.name,
  alternateName: SITE.short,
  url: SITE.url,
  logo: `${SITE.url}/logo.png`,
  image: `${SITE.url}/og-image.png`,
  email: SITE.email,
  description: SITE.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cork",
    addressRegion: "County Cork",
    addressCountry: "IE",
  },
  areaServed: [...AREA_SERVED],
  priceRange: `From €${Math.min(...SERVICES.map((s) => s.price))}`,
  founder: { "@id": FOUNDER_ID },
  knowsAbout: [
    "Web design",
    "Website development",
    "iOS app development",
    "AI training for small businesses",
    "Microsoft 365 Copilot set-up",
    "Copilot Studio",
    "Claude Code",
    "Model Context Protocol (MCP)",
    "AI automation",
    "ChatGPT",
    "Claude",
    "Google Gemini",
    "Microsoft Copilot",
    "AI use policies",
    "EU AI Act AI literacy",
    "GDPR",
    "Information security",
  ],
  brand: { "@type": "Brand", name: "PADLR" },
  sameAs: [SITE.linkedin],
};

export const founder: Exclude<Person, string> = {
  "@type": "Person",
  "@id": FOUNDER_ID,
  name: FOUNDER.name,
  jobTitle: FOUNDER.role,
  description:
    "Founder of Rebel Lion Labs in Cork. An IT manager with a background in tech and cybersecurity.",
  worksFor: publisher,
  ...(FOUNDER.photo ? { image: `${SITE.url}${FOUNDER.photo}` } : {}),
  knowsAbout: [
    "IT management",
    "Cybersecurity",
    "Microsoft 365",
    "iOS development",
    "AI adoption",
    "Claude Code",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cork",
    addressCountry: "IE",
  },
};

function offers(id: string): Offer[] {
  const service = SERVICES.find((s) => s.id === id);
  if (!service) return [];
  return service.packages.map((pkg) => ({
    "@type": "Offer",
    name: pkg.name,
    description: pkg.description,
    priceSpecification:
      "unit" in pkg
        ? {
            "@type": "UnitPriceSpecification",
            price: pkg.price,
            priceCurrency: "EUR",
            unitText: "month",
          }
        : {
            "@type": "PriceSpecification",
            minPrice: pkg.price,
            priceCurrency: "EUR",
          },
  }));
}

export function serviceNode(page: ServicePage): Service {
  const service = SERVICES.find((s) => s.id === page.id);
  return {
    "@type": "Service",
    "@id": `${SITE.url}/services/${page.id}#service`,
    name: page.serviceName,
    serviceType: page.serviceType,
    description: service?.summary,
    url: `${SITE.url}/services/${page.id}`,
    provider: publisher,
    areaServed: [...AREA_SERVED],
    offers: offers(page.id),
  };
}

export function faqPage(faqs: readonly Faq[], path: string): FAQPage {
  return {
    "@type": "FAQPage",
    "@id": `${SITE.url}${path}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

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

/** Home > ... > page trail, so results show page names instead of the URL. */
export function breadcrumbs(
  ...trail: readonly [name: string, path: string][]
): BreadcrumbList {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      ...trail.map(([name, path], index) => ({
        "@type": "ListItem" as const,
        position: index + 2,
        name,
        item: `${SITE.url}${path}`,
      })),
    ],
  };
}

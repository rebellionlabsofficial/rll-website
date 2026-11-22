// Site content in one place. Keep PADLR. facts general (what the app does,
// not counts of countries, languages or tests) so nothing here goes stale
// when the app grows. Live numbers come from src/lib/padlr-stats.ts instead.

const PADLR_SITE = "https://playpadlr.app";

// Launch-day switch. Paste the App Store link here when PADLR. goes live and
// every waitlist button and "coming soon" line switches over.
const APP_STORE_URL = null as string | null;

export const PADLR_LAUNCHED = APP_STORE_URL !== null;

/** The main PADLR. call to action: the waitlist before launch, the App Store after. */
export const PADLR_CTA = APP_STORE_URL
  ? { href: APP_STORE_URL, label: "Download PADLR.", short: "Get the app" }
  : {
      href: `${PADLR_SITE}/#waitlist`,
      label: "Join the waitlist",
      short: "Join waitlist",
    };

export const SITE = {
  name: "Rebel Lion Labs",
  short: "RL Labs",
  tagline: "Websites, apps and practical AI, built in Cork.",
  // Home page <title>. Other pages use "<page title> | Rebel Lion Labs".
  title: "Rebel Lion Labs | Websites, Apps and AI for Irish Businesses",
  description:
    "Rebel Lion Labs builds websites and apps for small businesses and helps teams put AI tools like ChatGPT to work, safely. Based in Cork. The first chat is free.",
  url: "https://rebellionlabs.app",
  email: "rebellionlabsofficial@gmail.com",
  location: "Cork, Ireland",
  linkedin: "https://www.linkedin.com/company/rebel-lion-labs/",
} as const;

export const FOUNDER = {
  name: "Levent Arslan",
  role: "Founder",
  // Drop a square photo into public/ and set its path here, e.g. "/levent.jpg".
  photo: null as string | null,
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    id: "websites",
    icon: "globe",
    title: "Websites",
    ask: "Ask about a website",
    summary:
      "A fast, good-looking website that tells people what you do and makes it easy to get in touch.",
    includes: [
      "Up to five pages, designed for phones first",
      "Contact form that sends enquiries straight to you",
      "Set up on your own domain, with Google Search basics done",
      "Fast loading and accessible, checked with Google's own tools",
    ],
    price: 750,
    extra:
      "Hosting and small updates from €25 a month, or look after it yourself.",
  },
  {
    id: "ai",
    icon: "sparkles",
    title: "AI for your business",
    ask: "Ask about AI help",
    summary:
      "Practical help getting ChatGPT and similar tools into your team's day-to-day work, without putting customer data at risk.",
    includes: [
      "A half-day session with your team, in Cork or online",
      "We pick the jobs where AI saves time: ideas, planning, writing, admin",
      "Prompts and templates set up for your business",
      "Plain rules on what information should never go into an AI tool",
    ],
    price: 350,
    extra: "Follow-up help by the hour or on a monthly plan.",
  },
  {
    id: "apps",
    icon: "smartphone",
    title: "Apps",
    ask: "Ask about an app",
    summary:
      "iPhone apps built properly, from first idea to the App Store, the same way PADLR. was built.",
    includes: [
      "Scoping session to agree what the first version needs",
      "Design, build and testing",
      "App Store submission and review",
      "Support after launch",
    ],
    price: 5000,
    extra:
      "Most apps are quoted in stages, so you only commit to one at a time.",
  },
] as const;

export const PRICE_NOTE =
  "Prices are a starting point. Every project is different, so you get a fixed quote in writing after our first chat, before any work starts.";

export const PROCESS = [
  {
    title: "Free chat",
    description:
      "A 20-minute call or coffee in Cork. You tell me what you need, and I tell you honestly whether I can help.",
  },
  {
    title: "Fixed quote",
    description:
      "A written plan with the price and timeline, so there are no surprises.",
  },
  {
    title: "Build",
    description:
      "Regular check-ins while I build, so you see progress and can change direction early.",
  },
  {
    title: "Launch and handover",
    description:
      "Your site, domain and content stay in your name. I show you how it all works.",
  },
] as const;

export const STRENGTHS = [
  {
    icon: "message-square",
    title: "Plain English",
    description:
      "No jargon. You'll know what you're paying for, why it matters and what happens next.",
  },
  {
    icon: "shield-check",
    title: "Security built in",
    description:
      "My day job is in information security and compliance, so privacy and GDPR are part of the plan from the start, especially with AI.",
  },
  {
    icon: "gauge",
    title: "Fast and findable",
    description:
      "Sites load quickly on phones and are set up so Google can understand them.",
  },
  {
    icon: "map-pin",
    title: "Local",
    description:
      "Based in Cork, happy to meet in person, and working with businesses anywhere in Ireland.",
  },
] as const;

type ProjectKind = "Website" | "App" | "AI";

interface Project {
  slug: string;
  name: string;
  kinds: readonly ProjectKind[];
  summary: string;
  /** Live address. Leave null until the site launches. */
  url: string | null;
  /** Our own page about the project, if it has one. */
  page?: string;
  /** A short quote from the client, once they've given one. */
  review?: { quote: string; name: string };
}

export const PROJECTS: readonly Project[] = [
  {
    slug: "padlr",
    name: "PADLR.",
    kinds: ["App", "Website"],
    summary:
      "My own padel app for iPhone: skill ratings, match logging and finding players, with a marketing site at playpadlr.app.",
    url: PADLR_SITE,
    page: "/work/padlr",
  },
  {
    slug: "your-best-life",
    name: "Your Best Life",
    kinds: ["AI"],
    summary:
      "Helped the team behind Cork's Your Best Life wellness events bring ChatGPT into their workflow: brainstorming event ideas, planning what happens on the day and developing new business ideas.",
    url: "https://www.yourbestlife.ie",
  },
  {
    slug: "all-about-cork",
    name: "All About Cork",
    kinds: ["AI"],
    summary:
      "Set up ChatGPT for All About Cork, the Cork lifestyle and news site, to help with ideas for events, planning them out and expanding on new business ideas.",
    url: "https://allaboutcork.ie",
  },
  {
    slug: "mike-lynch-electrical",
    name: "Mike Lynch Electrical",
    kinds: ["Website"],
    summary:
      "A new website for an electrical business, so customers can see what they do and get in touch.",
    url: null,
  },
  {
    slug: "luke-cahill-fitness",
    name: "Luke Cahill Fitness",
    kinds: ["Website"],
    summary:
      "A new website for a personal trainer, built to bring in new clients.",
    url: null,
  },
  {
    slug: "rebel-lion-labs",
    name: "Rebel Lion Labs",
    kinds: ["Website"],
    summary:
      "This site. It scores 100 for accessibility, best practices and SEO in Google's Lighthouse checks.",
    url: "https://rebellionlabs.app",
  },
];

export const PADLR = {
  name: "PADLR.",
  tagline: "Your Rating. Your Game. Your Community.",
  summary: "The padel app for ratings, matches and finding players.",
  about:
    "PADLR. is an app for padel players. It gives you a skill rating on a 0–7 scale that updates after every confirmed competitive match and shows you why it moved. You can also log matches, find players near you, join open games and climb the leaderboards. The rating runs on OpenSkill, a Bayesian system built for team sports.",
  appStoreUrl: APP_STORE_URL,
  links: {
    website: PADLR_SITE,
    blog: `${PADLR_SITE}/blog/`,
    support: `${PADLR_SITE}/docs/support/`,
    privacy: `${PADLR_SITE}/docs/privacy/`,
    terms: `${PADLR_SITE}/docs/terms/`,
    eula: `${PADLR_SITE}/docs/eula/`,
  },
  // What the build involved: no counts, so it never needs updating.
  build: [
    {
      title: "Native iPhone app",
      description: "Built in SwiftUI, with a Firebase backend.",
    },
    {
      title: "A rating people trust",
      description:
        "A Bayesian rating engine for doubles, covered by automated tests and explained in plain language after every match.",
    },
    {
      title: "Marketing site and blog",
      description:
        "playpadlr.app, with guides and a waitlist, built to rank for padel searches.",
    },
  ],
  features: [
    {
      icon: "badge-check",
      title: "Trusted Ratings",
      short: "A 0–7 rating that shows you why it moved.",
    },
    {
      icon: "zap",
      title: "Quick Match Logging",
      short: "Singles or doubles, set by set, confirmed by an opponent.",
    },
    {
      icon: "messages",
      title: "Social Feed",
      short: "Results and milestones from the players you follow.",
    },
    {
      icon: "trophy",
      title: "Leaderboards",
      short: "See where you rank among friends, at your club and beyond.",
    },
    {
      icon: "user-search",
      title: "Discover Players",
      short: "Find players near you at your level.",
    },
    {
      icon: "award",
      title: "Badges",
      short: "Earn them for milestones, streaks and more.",
    },
    {
      icon: "calendar-check",
      title: "Open Games",
      short:
        "Set up a game or join one nearby. You book the court with the venue.",
    },
    {
      icon: "message-circle",
      title: "Messaging",
      short: "Direct messages and group chats for your matches.",
    },
  ],
  socials: [
    {
      label: "Instagram",
      icon: "instagram",
      href: "https://www.instagram.com/playpadlr/",
    },
    {
      label: "TikTok",
      icon: "tiktok",
      href: "https://www.tiktok.com/@playpadlr",
    },
    { label: "X", icon: "x", href: "https://x.com/playPADLR" },
    {
      label: "Facebook",
      icon: "facebook",
      href: "https://www.facebook.com/PlayPADLR",
    },
  ],
} as const;

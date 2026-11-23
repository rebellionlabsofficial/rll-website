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
  title: "Web Design, Apps and AI Training in Cork | Rebel Lion Labs",
  description:
    "Rebel Lion Labs is a Cork studio building websites from €595 and iPhone apps, and setting up AI tools like Copilot and ChatGPT for teams. Free first chat.",
  url: "https://rebellionlabs.app",
  // Forwarded to our Gmail inbox by Cloudflare Email Routing.
  email: "levent@rebellionlabs.app",
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

// Starting prices, set from published Cork and Irish competitor prices in
// late 2026 (see the pricing research report). "price" is the headline
// "from" price shown on service cards.
export const SERVICES = [
  {
    id: "websites",
    icon: "globe",
    title: "Websites",
    ask: "Ask about a website",
    summary:
      "A fast, good-looking website that tells people what you do and makes it easy to get in touch.",
    includes: [
      "Designed for phones first, with your logo, colours and photos",
      "Enquiry form that sends messages straight to your inbox",
      "Google Search basics and your Google Business Profile set up",
      "Privacy notice, security settings and accessibility checks done properly",
    ],
    packages: [
      {
        name: "One-page site",
        price: 595,
        description:
          "Everything on one page: who you are, what you do and how to reach you.",
      },
      {
        name: "Business site",
        price: 1195,
        description:
          "Up to five pages, help with your wording, and 30 days of free changes after launch.",
      },
      {
        name: "Online shop",
        price: 2250,
        description:
          "Sell online with card payments and shipping set up, plus training so you can run it yourself.",
      },
    ],
    price: 595,
    extra:
      "Care plans from €39 a month cover hosting, backups and security updates, or €79 a month with 30 minutes of changes included. Extra pages €95.",
  },
  {
    id: "ai",
    icon: "sparkles",
    title: "AI set-up and training",
    ask: "Ask about AI",
    summary:
      "We set up Microsoft Copilot, Gemini, ChatGPT, Claude and Claude Code for your business, connect them to the software you already use, and train your team to get real work out of them.",
    includes: [
      "The right AI tools and plans for how you work, set up and configured properly",
      "Connected to your email, files and business apps, with custom assistants that know your business",
      "Hands-on training for your team, built around their own tasks",
      "Clear rules on data: an AI use policy with every set-up, and a record of who was trained",
    ],
    packages: [
      {
        name: "AI kick-start",
        price: 750,
        description:
          "A two-hour training session for up to 12 people, in Cork or online, on the AI tools you already have.",
      },
      {
        name: "AI workspace set-up",
        price: 1450,
        description:
          "Microsoft 365 Copilot, Gemini, ChatGPT Business or Claude Team set up and connected to your files and email, with custom assistants, an AI use policy and a half-day of team training.",
      },
      {
        name: "Automations and AI agents",
        price: 995,
        description:
          "AI connected to the apps you run your business on, so routine jobs happen on their own. Priced per workflow, with training for whoever looks after it.",
      },
      {
        name: "Claude Code for technical teams",
        price: 1200,
        description:
          "Claude Code installed and configured with plugins, skills, MCP connectors and GitHub, plus hands-on training for your developers.",
      },
    ],
    price: 750,
    extra:
      "Ongoing AI support from €250 a month, for new tools, new assistants and questions as they come up.",
  },
  {
    id: "apps",
    icon: "smartphone",
    title: "Apps",
    ask: "Ask about an app",
    summary:
      "iPhone apps built properly, from first idea to the App Store, the same way we built PADLR.",
    includes: [
      "A discovery stage that turns your idea into screens, a plan and a fixed price",
      "Native iPhone app design, build and testing",
      "App Store submission and review handled for you",
      "30 days of bug fixes after launch, then optional care",
    ],
    packages: [
      {
        name: "Discovery sprint",
        price: 950,
        description:
          "Two days to produce screen designs, a written spec and a fixed quote. Credited in full if you go ahead with the build.",
      },
      {
        name: "First version (MVP)",
        price: 7950,
        description:
          "A focused iPhone app with the core features your users need, ready for the App Store. Paid in stages.",
      },
      {
        name: "App care",
        price: 149,
        unit: "a month",
        description:
          "Updates for new iOS versions, monitoring, and up to two hours of fixes each month.",
      },
    ],
    price: 7950,
    extra:
      "Android can follow as a second stage once the iPhone app is live. Apple charges its own developer fee of about €99 a year.",
  },
] as const;

// True while the studio isn't registered for VAT. Change this line if that changes.
export const VAT_NOTE =
  "We're not registered for VAT, so no VAT is added to these prices.";

export const PRICE_NOTE =
  "Prices are a starting point. Every project is different, so you get a fixed quote in writing after our first chat, before any work starts.";

export const PROCESS = [
  {
    title: "Free chat",
    description:
      "A 20-minute call or a coffee in Cork. You tell us what you need, and we tell you honestly whether we can help.",
  },
  {
    title: "Fixed quote",
    description:
      "A written plan with the price and timeline, so there are no surprises.",
  },
  {
    title: "Build",
    description:
      "Regular check-ins while we build, so you see progress and can change direction early.",
  },
  {
    title: "Launch and handover",
    description:
      "Your site, domain and content stay in your name, and we show you how it all works.",
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
      "Our background is in tech and cybersecurity, so tools are set up properly and privacy and GDPR are part of the plan from the start.",
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
  /** App Store link, for app projects once they're live. */
  app?: string | null;
  /** A short quote from the client, once they've given one. */
  review?: { quote: string; name: string };
}

export const PROJECTS: readonly Project[] = [
  {
    slug: "padlr",
    name: "PADLR.",
    kinds: ["App", "Website"],
    summary:
      "Our own padel app for iPhone: skill ratings, match logging and finding players, with its website at playpadlr.app.",
    url: PADLR_SITE,
    page: "/work/padlr",
    app: APP_STORE_URL,
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

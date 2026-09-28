// This site summarises PADLR. and links to https://playpadlr.app for the
// details. Keep only facts here that rarely change (what the app does, the
// launch, countries, the rating scale), so the two sites can't drift apart.

const PADLR_SITE = "https://playpadlr.app";

// Launch-day switch. Paste the App Store link here when PADLR. goes live and
// every waitlist button, launch date and "coming soon" line switches over.
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

const LANGUAGES = 14;

const COUNTRIES = [
  "Argentina",
  "Austria",
  "Bahrain",
  "Belgium",
  "Brazil",
  "Canada",
  "Chile",
  "Colombia",
  "Denmark",
  "Finland",
  "France",
  "Germany",
  "Ireland",
  "Italy",
  "Kuwait",
  "Netherlands",
  "Norway",
  "Poland",
  "Portugal",
  "Qatar",
  "Saudi Arabia",
  "Spain",
  "Sweden",
  "Switzerland",
  "UAE",
  "UK",
  "Uruguay",
  "US",
] as const;

export const SITE = {
  name: "Rebel Lion Labs",
  tagline: "Apps Built for the Players, by a Player",
  // Home page <title>. Other pages use "<page title> | Rebel Lion Labs".
  title: "Rebel Lion Labs | Makers of the PADLR. Padel Rating App",
  description: `Sports app studio in Dublin, Ireland. We make PADLR., the padel app for skill ratings, match logging and finding players. ${
    PADLR_LAUNCHED ? "Out now on iOS." : "On iOS from November 2026."
  }`,
  url: "https://rebellionlabs.app",
  email: "rebellionlabsofficial@gmail.com",
  location: "Dublin, Ireland",
  linkedin: "https://www.linkedin.com/company/rebel-lion-labs/",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
] as const;

export const PILLARS = [
  {
    title: "Made by players",
    description:
      "We play the sports we build for, so we design for what actually happens on court and in the minutes after a match.",
  },
  {
    title: "Built around people",
    description:
      "Sport is social. Our apps help you find people to play with, keep a rivalry going and climb your club's leaderboard.",
  },
  {
    title: "Properly engineered",
    description:
      "A rating only works if players trust it. PADLR.'s rating engine alone has more than 250 automated tests.",
  },
] as const;

export const PRINCIPLES = [
  {
    title: "Transparency",
    description:
      "You should always know why your rating moved. PADLR. explains every change in plain language, so a drop makes sense and a rise shows what earned it.",
  },
  {
    title: "Fairness",
    description:
      "Every result goes to the other players in the match to confirm, so nobody can just claim a win. The maths allows for partner strength, and automatic checks look for anyone trying to game the system.",
  },
  {
    title: "Community",
    description:
      "Padel is social, and PADLR. is too. You can follow friends' matches, earn badges for milestones and find new players at your level.",
  },
  {
    title: "Simplicity",
    description:
      "Logging a match should take 30 seconds: add the players, enter the score, done. If logging feels like a chore, people stop doing it.",
  },
] as const;

export const PADEL_STATS = [
  { value: "30M+", label: "Padel players worldwide" },
  { value: "130+", label: "Countries that play padel" },
  { value: "50,000+", label: "Courts worldwide, with more opening every week" },
] as const;

export const PADLR = {
  name: "PADLR.",
  tagline: "Your Rating. Your Game. Your Community.",
  summary: "The padel app for ratings, matches and finding players.",
  description: `Track your skill rating, record matches, find players, book games and climb the leaderboards, all in one app across ${COUNTRIES.length} countries.`,
  about:
    "PADLR. is an app for padel players. It gives you a skill rating on a 0–7 scale that updates after every confirmed competitive match and shows you why it moved. You can also log matches, find players near you, book games and climb the leaderboards. The rating runs on OpenSkill, a Bayesian system built for team sports.",
  launch: "November 2026",
  appStoreUrl: APP_STORE_URL,
  links: {
    website: PADLR_SITE,
    blog: `${PADLR_SITE}/blog/`,
    support: `${PADLR_SITE}/docs/support/`,
    privacy: `${PADLR_SITE}/docs/privacy/`,
    terms: `${PADLR_SITE}/docs/terms/`,
    eula: `${PADLR_SITE}/docs/eula/`,
  },
  stats: [
    {
      value: String(COUNTRIES.length),
      label: PADLR_LAUNCHED ? "Countries" : "Countries at launch",
    },
    { value: String(LANGUAGES), label: "Languages" },
    { value: "0–7", label: "Rating scale" },
    { value: "30s", label: "To log a match" },
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
      short: "Singles or doubles, set by set, confirmed by another player.",
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
      title: "Book & Join Matches",
      short: "Create open matches or join games nearby.",
    },
    {
      icon: "message-circle",
      title: "Messaging",
      short: "Direct messages and group chats for your matches.",
    },
  ],
  countries: COUNTRIES,
  languages: LANGUAGES,
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

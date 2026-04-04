export const SITE = {
  name: "Rebel Lion Labs",
  tagline: "Apps Built for the Players, by a Player",
  description:
    "Rebel Lion Labs builds sports apps that match the passion of players and fans. Home of PADLR - the rating-first padel app.",
  url: "https://rebellionlabs.app",
  email: "rebellionlabsofficial@gmail.com",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
] as const;

export const PILLARS = [
  {
    number: "01",
    total: "03",
    title: "Player-First Design",
    description:
      "Every feature starts with the player. We build tools that feel intuitive on the court, not just in the boardroom.",
  },
  {
    number: "02",
    total: "03",
    title: "Community-Driven",
    description:
      "Sports are social. Our apps connect players, fuel rivalries, and bring communities closer together.",
  },
  {
    number: "03",
    total: "03",
    title: "Passion Meets Technology",
    description:
      "We combine a deep love of sport with cutting-edge technology to create experiences that players actually want to use.",
  },
] as const;

export const PRODUCTS = [
  {
    name: "PADLR",
    tagline: "Your Rating. Your Game. Your Community.",
    description:
      "The rating-first padel app. Track your skill with Bayesian-powered ratings, log matches in 30 seconds, climb leaderboards across 23 countries, and connect with your padel community.",
    status: "Coming Spring 2026",
    href: "https://playpadlr.app",
    features: [
      "Bayesian skill ratings (0-7 scale)",
      "30-second match logging",
      "Global & local leaderboards",
      "Social feed with match cards",
      "Badges & achievements",
    ],
  },
] as const;

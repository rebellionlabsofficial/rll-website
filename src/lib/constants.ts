// PADLR. copy mirrors https://playpadlr.app (source: rebellionlabsofficial/padlr-website).
// When that site changes, update PADLR below so both sites tell the same story.

export const SITE = {
  name: "Rebel Lion Labs",
  tagline: "Apps Built for the Players, by a Player",
  description:
    "Rebel Lion Labs is a sports app studio in Dublin, Ireland, building apps that match the passion of players and fans. Home of PADLR. — the ultimate padel companion app, free on iOS in 28 countries.",
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
    title: "Player-First Design",
    description:
      "Every feature starts with the player. We build tools that feel intuitive on the court, not just in the boardroom.",
  },
  {
    title: "Community-Driven",
    description:
      "Sports are social. Our apps connect players, fuel rivalries, and bring communities closer together.",
  },
  {
    title: "Passion Meets Technology",
    description:
      "We combine a deep love of sport with serious engineering to create experiences that players actually want to use.",
  },
] as const;

export const PRINCIPLES = [
  {
    title: "Transparency",
    description:
      "You should always know why your rating moved. After every match we show who you played, the expected outcome, the actual outcome, and how each factor shaped the change.",
  },
  {
    title: "Fairness",
    description:
      "Every result needs opponent confirmation. Team-aware maths accounts for partner strength, and manipulation detection keeps the leaderboards honest.",
  },
  {
    title: "Community",
    description:
      "Sport is social. Feeds, reactions, badges, and player discovery make our apps feel like a club — not a utility.",
  },
  {
    title: "Simplicity",
    description:
      "Logging a match should take 30 seconds. The moment it feels like a chore people stop, so we obsess over removing friction.",
  },
] as const;

export const PADEL_STATS = [
  { value: "30M+", label: "Padel players worldwide" },
  { value: "130+", label: "Countries where padel is played" },
  { value: "50,000+", label: "Courts worldwide — and climbing" },
] as const;

export const PADLR = {
  name: "PADLR.",
  tagline: "Your Rating. Your Game. Your Community.",
  summary: "The ultimate padel companion app.",
  description:
    "Track your skill rating, record matches, find players, book games, and climb the leaderboards — all in one app across 28 countries.",
  about:
    "PADLR. is the ultimate companion app for padel players. Track your skill rating, record matches, find players near you, book games, and climb the leaderboards. Powered by the OpenSkill Bayesian algorithm, every player gets a transparent, mathematically sound skill rating that updates after every confirmed match. Whether you're a total beginner or an elite competitor, PADLR. gives you the tools to improve your game and connect with the padel community.",
  appStoreId: "6759811329",
  links: {
    website: "https://playpadlr.app",
    appStore: "https://apps.apple.com/app/padlr/id6759811329",
    support: "https://playpadlr.app/docs/support/",
    privacy: "https://playpadlr.app/docs/privacy/",
    terms: "https://playpadlr.app/docs/terms/",
  },
  stats: [
    { value: "28", label: "Countries at launch" },
    { value: "0–7", label: "Rating scale" },
    { value: "300+", label: "Automated tests" },
    { value: "30s", label: "To log a match" },
  ],
  features: [
    {
      icon: "badge-check",
      title: "Trusted Ratings",
      short:
        "A transparent 0–7 Bayesian rating that shows exactly why it moved.",
      description:
        "Bayesian-powered skill rating on a 0–7 scale. Accounts for score margins, opponent strength, and win streaks. Confidence ring shows how established your rating is. You always see exactly why your rating moved.",
    },
    {
      icon: "zap",
      title: "Log Matches in 30 Seconds",
      short: "Singles or doubles, set by set, confirmed by your opponents.",
      description:
        "Log singles or doubles with full set-by-set scoring. Support for advantage, golden point, and Star Point (FIP 2026) deuce rules. Opponents confirm the result with 48-hour auto-confirm. Ratings update instantly.",
    },
    {
      icon: "messages",
      title: "Social Feed",
      short: "Results, badges, and milestones from the players you follow.",
      description:
        "See match results, badge celebrations, and milestones from players you follow. React with emojis, leave comments with threaded replies, and get real-time updates as matches are confirmed.",
    },
    {
      icon: "trophy",
      title: "Leaderboards",
      short: "Global, country, city, club, and friends rankings.",
      description:
        "Global, country, city, club, and friends leaderboards. Filter by gender, time period, and activity. Podium view for top 3. Track most active players and biggest rating risers.",
    },
    {
      icon: "user-search",
      title: "Discover Players",
      short: "Find players near you by location and rating range.",
      description:
        "Discover nearby players based on your location. Search by name or browse by rating range. Contact matching finds friends already on PADLR. Follow players and set your profile to private with follow requests.",
    },
    {
      icon: "award",
      title: "Badges & Achievements",
      short: "Five categories, four rarity tiers from Bronze to Platinum.",
      description:
        "Earn badges across five categories — Milestone, Rating, Streak, Social, and Discovery — with four rarity tiers from Bronze to Platinum. Celebration animations when you unlock a badge. Track your collection progress in the badge gallery.",
    },
    {
      icon: "calendar-check",
      title: "Book & Join Matches",
      short: "Create open matches or join nearby games in a tap.",
      description:
        "Create open matches with date, time, venue, and skill range. Browse and join nearby games. Automatic team balancing for doubles. Add matches to your device calendar with one tap.",
    },
    {
      icon: "message-circle",
      title: "Messaging",
      short: "DMs, match group chats, and chats for your regular crew.",
      description:
        "Direct messages with any player you've matched with or mutually follow. Match group chats auto-created for booked matches. Custom group chats for your regular playing group.",
    },
  ],
  steps: [
    {
      title: "Set Your Level",
      description:
        "Choose your skill level during onboarding. PADLR. seeds your starting rating and the Bayesian engine calibrates from there — usually within 5–10 matches.",
    },
    {
      title: "Log Matches",
      description:
        "Enter scores and tag players after every game. Opponents confirm the result. Your rating updates in real time based on the result, score margin, and opponent strength.",
    },
    {
      title: "Climb the Rankings",
      description:
        "Watch your confidence ring tighten as the system learns your true level. Climb the leaderboards, earn badges, and grow your padel community.",
    },
  ],
  rating: {
    intro:
      "Unlike basic Elo systems designed for 1v1 chess, PADLR. uses Bayesian team estimation built for doubles sports. Three factors drive every rating change:",
    factors: [
      {
        icon: "trending-up",
        title: "Result vs Expectation",
        description:
          "Upsets carry more weight. Beat a higher-rated team and your rating jumps. Lose to a lower-rated team and it drops more.",
      },
      {
        icon: "gauge",
        title: "Score Margins",
        description:
          "A 6-0 6-0 win moves your rating more than a 7-6 7-6 win. Close losses barely dip your rating.",
      },
      {
        icon: "shield",
        title: "Team-Aware & Fair",
        description:
          "Individual ratings within team context. Carrying a weaker partner? The system knows. Opponent confirmation prevents inflated records.",
      },
    ],
    comparison: [
      "Score margins",
      "Doubles handling",
      "Confidence modelling",
      "Opponent confirmation",
      "Manipulation detection",
    ],
  },
  pro: {
    intro:
      "PADLR. is free and fully featured — match recording, ratings, social feed, messaging, booking, leaderboards, and badges all included. Pro unlocks advanced analytics that turn your match data into a roadmap for improvement.",
    features: [
      "Partner analytics — best partner, most played, nemesis",
      "Head-to-head records against specific opponents",
      "Court position and venue performance insights",
      "Day and time performance analysis",
      "Rating trajectory predictions",
      "Player comparison tool",
      "Cost breakdown per match",
    ],
    note: "Less than the cost of one court booking per month",
  },
  roadmap: [
    {
      when: "Summer 2026",
      title: "Leagues & Tournaments",
      description:
        "Knockout brackets, round-robin, Americano & Mexicano formats. All results feed into your rating.",
    },
    {
      when: "Late Summer 2026",
      title: "Apple Watch & HealthKit",
      description:
        "Live scoring from your wrist, heart rate tracking, and padel as a proper workout in Apple Health.",
    },
    {
      when: "Later 2026",
      title: "Club Integration",
      description:
        "Club profiles, event promotion, booking partnerships. Your PADLR. profile becomes your padel passport.",
    },
    {
      when: "On the Horizon",
      title: "Coaching & Training",
      description:
        "Coach marketplace, training tools, and structured improvement plans powered by your match data.",
    },
  ],
  countries: [
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
  ],
  languages: 14,
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

// Studio-level milestone that sits after PADLR.'s own roadmap.
export const STUDIO_ROADMAP_ITEM = {
  when: "Beyond PADLR.",
  title: "More Sports & Merch",
  description:
    "New sports, new apps — each one purpose-built for its players. Plus exclusive merch and apparel for the community.",
} as const;

// PADLR. facts mirror https://playpadlr.app (source: rebellionlabsofficial/padlr-website,
// synced with main at d2096c6 on 2026-09-25). The wording here is our own, but
// the facts must match: when that site changes, update PADLR below.

export const SITE = {
  name: "Rebel Lion Labs",
  tagline: "Apps Built for the Players, by a Player",
  // Home page <title>. Other pages use "<page title> | Rebel Lion Labs".
  title: "Rebel Lion Labs | Makers of the PADLR. Padel Rating App",
  description:
    "Sports app studio in Dublin, Ireland. We make PADLR., the padel app for skill ratings, match logging and finding players. On iOS from November 2026.",
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
      "A rating only works if players trust it. PADLR. has more than 2,500 automated tests, and over 250 of them cover the rating engine alone.",
  },
] as const;

export const PRINCIPLES = [
  {
    title: "Transparency",
    description:
      'You should always know why your rating moved. After every rated match, the "Why your level moved" sheet explains it in plain language: your expected chance of winning, how the score margin affected the change, and how settled your rating is.',
  },
  {
    title: "Fairness",
    description:
      "Every result goes to the other players in the match to confirm. Ratings only move once one of them confirms, or after 48 hours with no reply. The maths allows for partner strength, and automatic checks look for anyone trying to game the system.",
  },
  {
    title: "Community",
    description:
      "Padel is social, and PADLR. is too. You can like and comment on friends' matches, earn badges for milestones and find new players at your level.",
  },
  {
    title: "Simplicity",
    description:
      "Logging a match should take 30 seconds: add the players, enter the score, done. Once another player confirms it, your rating and the leaderboards update. If logging feels like a chore, people stop doing it.",
  },
] as const;

export const PADEL_STATS = [
  { value: "30M+", label: "Padel players worldwide" },
  { value: "130+", label: "Countries that play padel" },
  { value: "50,000+", label: "Courts worldwide, with more opening every week" },
] as const;

const PADLR_SITE = "https://playpadlr.app";

export const PADLR = {
  name: "PADLR.",
  tagline: "Your Rating. Your Game. Your Community.",
  summary: "The padel app for ratings, matches and finding players.",
  description:
    "Track your skill rating, record matches, find players, book games and climb the leaderboards, all in one app across 28 countries.",
  about:
    "PADLR. is an app for padel players. It gives you a skill rating on a 0–7 scale that updates after every confirmed competitive match and shows you why it moved. You can also log matches, find players near you, book games and climb the leaderboards. The rating runs on OpenSkill, a Bayesian system built for team sports. PADLR. is for every level, from total beginners to elite players.",
  // Not released yet: it goes to App Store review first, so link to the
  // waitlist rather than the store until launch.
  launch: "November 2026",
  links: {
    website: PADLR_SITE,
    waitlist: `${PADLR_SITE}/#waitlist`,
    blog: `${PADLR_SITE}/blog/`,
    ratingSystem: `${PADLR_SITE}/blog/blog-rating-system.html`,
    ratingScale: `${PADLR_SITE}/blog/blog-rating-scale-explained.html`,
    matchConfirmation: `${PADLR_SITE}/blog/blog-match-confirmation.html`,
    vsPlaytomic: `${PADLR_SITE}/blog/blog-padlr-vs-playtomic.html`,
    pro: `${PADLR_SITE}/blog/blog-padlr-pro.html`,
    roadmap: `${PADLR_SITE}/blog/blog-roadmap.html`,
    features: `${PADLR_SITE}/blog/blog-features-guide.html`,
    support: `${PADLR_SITE}/docs/support/`,
    privacy: `${PADLR_SITE}/docs/privacy/`,
    terms: `${PADLR_SITE}/docs/terms/`,
    eula: `${PADLR_SITE}/docs/eula/`,
  },
  stats: [
    { value: "28", label: "Countries at launch" },
    { value: "0–7", label: "Rating scale" },
    { value: "2,500+", label: "Automated tests" },
    { value: "30s", label: "To log a match" },
  ],
  features: [
    {
      icon: "badge-check",
      title: "Trusted Ratings",
      short: "A 0–7 rating that shows you why it moved.",
      description:
        "Your skill rating sits on a 0–7 scale. It weighs score margins, opponent strength and upsets, and a confidence ring shows how settled it is. After every rated match you can see why it went up or down.",
    },
    {
      icon: "zap",
      title: "Log Matches in 30 Seconds",
      short: "Singles or doubles, set by set, confirmed by another player.",
      description:
        "Log singles or doubles set by set, with advantage, golden point or Star Point (FIP 2026) deuce rules. Another player confirms the result, or it confirms automatically after 48 hours, and then your rating updates.",
    },
    {
      icon: "messages",
      title: "Social Feed",
      short: "Results, badges and milestones from players you follow.",
      description:
        "See results, new badges and milestones from the players you follow. Like posts, comment and reply, and get live updates as matches are confirmed.",
    },
    {
      icon: "trophy",
      title: "Leaderboards",
      short: "Global, country, local, club and friends rankings.",
      description:
        "Rank yourself against the world, your country, your area, your club or your friends, and filter by gender and time period. The top three get a podium, and you can see who plays the most and whose rating is climbing fastest.",
    },
    {
      icon: "user-search",
      title: "Discover Players",
      short: "Find players near you by location and rating.",
      description:
        "Find players nearby, search by name or browse by rating range. Contact matching shows which friends are already on PADLR. Follow players, or make your profile private and approve follow requests.",
    },
    {
      icon: "award",
      title: "Badges & Achievements",
      short: "50 badges in four tiers, from Bronze to Platinum.",
      description:
        "Earn 50 badges in five categories (Milestone, Rating, Streak, Social and Discovery) across four tiers from Bronze to Platinum. Your collection lives on the Badges tab of your profile.",
    },
    {
      icon: "calendar-check",
      title: "Book & Join Matches",
      short: "Create open matches or join games nearby.",
      description:
        "Set up an open match with a date, time, venue and skill range, or join a game near you. PADLR. balances doubles teams automatically, and one tap adds the match to your calendar.",
    },
    {
      icon: "message-circle",
      title: "Messaging",
      short: "Direct messages, match chats and a chat for your regular group.",
      description:
        "Message players who follow you back and anyone you've played or booked a match with. Every booked match gets its own group chat, and you can start one for the people you play with every week.",
    },
  ],
  steps: [
    {
      title: "Set Your Level",
      description:
        "Answer four quick questions about your game when you sign up. PADLR. gives you a cautious starting rating, then calibrates it over your first 15 or so matches.",
    },
    {
      title: "Log Matches",
      description:
        "Enter the score and tag the other players after each game. Once another player confirms, your rating updates based on the result, the score margin and how strong your opponents were.",
    },
    {
      title: "Climb the Rankings",
      description:
        "Your confidence ring fills as the system learns your level. Climb the leaderboards, earn badges and meet more players.",
    },
  ],
  rating: {
    intro:
      "Basic Elo was designed for one-on-one games like chess. PADLR. uses a Bayesian team rating built for doubles, and three things decide how far your rating moves:",
    factors: [
      {
        icon: "trending-up",
        title: "Result vs Expectation",
        description:
          "Upsets count for more. Beat a higher-rated team and your rating jumps. Lose to a lower-rated team and it drops further.",
      },
      {
        icon: "gauge",
        title: "Score Margins",
        description:
          "A 6-0 6-0 win moves your rating more than a 7-6 7-6 win, and a close loss barely dents it.",
      },
      {
        icon: "shield",
        title: "Team-Aware & Fair",
        description:
          "Everyone has their own rating, judged in the context of their team. Beat a strong pair with a weaker partner and you gain more, because nobody expected you to win. Match confirmation helps keep the records honest.",
      },
    ],
    comparison: [
      "Score margins",
      "Doubles handling",
      "Confidence modelling",
      "Match confirmation",
      "Manipulation detection",
    ],
  },
  pro: {
    intro:
      "PADLR. is free to use, with match logging, ratings, the social feed, messaging, booking, leaderboards and badges all included. Pro adds detailed stats that show where your game can improve, plus your full match history and unlimited match alerts.",
    features: [
      "Partner chemistry and your full partner list",
      "Head-to-head records against specific opponents",
      "Court side and venue performance insights",
      "Day and time performance analysis",
      "Rating forecast based on your recent trend",
      "Player comparison tool",
      "Cost tracker for your matches",
      "No ads",
    ],
    note: "Less than the cost of one court booking per month",
  },
  roadmap: [
    {
      when: "Spring 2027",
      title: "Leagues & Tournaments",
      description:
        "Knockout brackets, round robins, and Americano and Mexicano formats, with every result counting towards your rating.",
    },
    {
      when: "Summer 2027",
      title: "Apple Watch & HealthKit",
      description:
        "Keep score from your wrist, track your heart rate and log padel as a proper workout in Apple Health.",
    },
    {
      when: "Later 2027",
      title: "Club Integration",
      description:
        "Club profiles, event promotion and booking partnerships, so your PADLR. profile becomes your padel passport.",
    },
    {
      when: "On the Horizon",
      title: "Coaching & Training",
      description:
        "A coach marketplace, training tools and improvement plans built from your match data.",
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

interface Faq {
  question: string;
  answer: string;
  /** Where to read more: a PADLR. blog post, or a page on this site. */
  link: { label: string; href: string };
}

// Answers people search for. Shown on /products and published as FAQPage
// structured data, so keep every answer true to playpadlr.app.
export const PADLR_FAQS: readonly Faq[] = [
  {
    question: "What is PADLR.?",
    answer:
      "PADLR. is a padel app for iPhone, made by Rebel Lion Labs. It gives you a skill rating on a 0–7 scale, lets you log singles and doubles matches in about 30 seconds and helps you find players and open games near you. It also has leaderboards, a social feed, messaging and 50 badges to collect.",
    link: { label: "Every feature, explained", href: PADLR.links.features },
  },
  {
    question: "When and where can I get PADLR.?",
    answer: `PADLR. launches on iOS in ${PADLR.launch}. It will be available in ${PADLR.countries.length} countries, including Ireland, the UK, Spain, Italy, the US and the UAE, in ${PADLR.languages} languages. Join the waitlist on playpadlr.app to hear as soon as it's out.`,
    link: { label: "Join the waitlist", href: PADLR.links.waitlist },
  },
  {
    question: "How does the PADLR. padel rating work?",
    answer:
      "PADLR. uses OpenSkill, a Bayesian rating system designed for team games, so it handles doubles properly. How much your rating changes depends on the result compared with what was expected, the score margin, and the strength of your partner and both opponents. Only competitive matches are rated, and after each one PADLR. shows you why your rating moved.",
    link: {
      label: "How the rating system works",
      href: PADLR.links.ratingSystem,
    },
  },
  {
    question: "How is my starting level set?",
    answer:
      "When you sign up you answer four quick questions about your game, or enter a padel rating you already have. The quiz gives a cautious estimate, capped at 5.0, and most of the calibration happens over your first 15 or so matches.",
    link: {
      label: "What each level from 0 to 7 means",
      href: PADLR.links.ratingScale,
    },
  },
  {
    question: "Who confirms a match result?",
    answer:
      "When you log a match, the other players get a notification, and one confirmation from any of them is enough. If nobody responds within 48 hours, the match confirms automatically. Your rating only changes once a match is confirmed. If someone disputes the score, the match isn't rated until it's settled, and a dispute left for seven days expires without being rated.",
    link: {
      label: "How match confirmation works",
      href: PADLR.links.matchConfirmation,
    },
  },
  {
    question: "Is PADLR. free?",
    answer:
      "Yes. Match logging, ratings, the social feed, messaging, booking, leaderboards and badges are all free. PADLR. Pro adds detailed stats such as partner chemistry, head-to-head records and a rating forecast, plus your full match history, unlimited match alerts and no ads.",
    link: { label: "What PADLR. Pro adds", href: PADLR.links.pro },
  },
  {
    question: "Does PADLR. replace Playtomic?",
    answer:
      "No. PADLR. doesn't book courts, so if you reserve courts on Playtomic, keep doing that. Use PADLR. to log the match afterwards: if you log it as competitive, it counts towards your PADLR. rating. PADLR. isn't affiliated with Playtomic.",
    link: {
      label: "PADLR. and Playtomic compared",
      href: PADLR.links.vsPlaytomic,
    },
  },
  {
    question: "Who makes PADLR.?",
    answer:
      "Rebel Lion Labs, a small sports app studio in Dublin, Ireland. PADLR. is our first app.",
    link: { label: "About Rebel Lion Labs", href: "/about" },
  },
];

// Studio-level milestone that sits after PADLR.'s own roadmap.
export const STUDIO_ROADMAP_ITEM = {
  when: "Beyond PADLR.",
  title: "More Sports & Merch",
  description:
    "New apps for other sports, one at a time, plus merch and apparel for the community.",
} as const;

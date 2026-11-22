// Content for the focused service pages at /services/<id>. Each page targets
// what Irish small businesses search for, and its Q&As feed both the visible
// page and the FAQPage structured data, so the two can't drift apart.

import { SERVICES } from "@/lib/constants";

type ServiceId = (typeof SERVICES)[number]["id"];

export interface Faq {
  question: string;
  answer: string;
}

interface Section {
  heading: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
}

export interface ServicePage {
  id: ServiceId;
  /** Full <title>, keyword first. */
  metaTitle: string;
  metaDescription: string;
  /** H1, split so the end can be set in the accent style. */
  heading: [string, string];
  intro: string;
  /** Name and type used in the Service structured data. */
  serviceName: string;
  serviceType: string;
  pricesHeading: string;
  sections: readonly Section[];
  proof: { heading: string; slugs: readonly string[] };
  faqs: readonly Faq[];
}

export const SERVICE_PAGES: readonly ServicePage[] = [
  {
    id: "websites",
    metaTitle: "Web Design Cork: Small Business Websites from €595 | RL Labs",
    metaDescription:
      "Small business websites in Cork from €595, built for phones and Google, with a fixed quote, Google Business Profile set-up and a site you own. Free first chat.",
    heading: ["Web design for small businesses", "in Cork."],
    intro:
      "We design and build websites for small businesses in Cork and across Munster. You get a fast site that works on phones, shows up properly on Google and makes it easy for customers to get in touch. You get a fixed price in writing before we start, and the site is yours.",
    serviceName: "Small business web design in Cork",
    serviceType: "Web design",
    pricesHeading: "Website packages and prices",
    sections: [
      {
        heading: "New website or a redesign of your current one",
        paragraphs: [
          "Already have a website that's slow, dated or hard to update? We can refresh it, move it to faster hosting, or rebuild it from scratch. When pages move, we redirect the old addresses so you keep the Google rankings you've built up.",
          "We'll look at your current site in the free chat and tell you honestly which option makes sense. Redesigns are quoted once we've seen what you have.",
        ],
      },
      {
        heading: "Built to be found on Google",
        paragraphs: [
          "Every site gets the basics right: clear page titles and descriptions, a sitemap, fast loading on phones and your Google Business Profile set up, so customers can find you on Google Maps. That gets you found for your business name and helps with local searches like yours.",
        ],
      },
    ],
    proof: {
      heading: "Websites we've built",
      slugs: ["mike-lynch-electrical", "luke-cahill-fitness", "padlr"],
    },
    faqs: [
      {
        question: "How much does a small business website cost in Ireland?",
        answer:
          "Most small businesses in Ireland pay between about €600 and €2,500 for a website from a small studio. Template and AI site builders start lower, and agencies usually charge €2,500 to €6,000 or more. Our prices start at €595 for a one-page site, €1,195 for a site of up to five pages and €2,250 for an online shop. Hosting, backups and security updates cost from €39 a month.",
      },
      {
        question: "How long does it take to build a website?",
        answer:
          "A one-page site usually takes one to two weeks, and a five-page business site three to four weeks. The biggest factor is how quickly we get your wording and photos. You'll get a launch date in your written quote.",
      },
      {
        question: "Do I own my website and domain?",
        answer:
          "Yes. Your domain is registered in your name, and the content and design are yours. If you ever want to move on, we'll hand over everything you need to move the site.",
      },
      {
        question: "Can you redesign or update my existing website?",
        answer:
          "Yes. We can refresh an old site, move it to faster hosting, or rebuild it from scratch while keeping your Google rankings by redirecting old page addresses. We'll look at your current site in the free chat and tell you which option makes sense.",
      },
      {
        question: "Will my website show up on Google?",
        answer:
          "We set up the basics properly: page titles, descriptions, a sitemap, fast loading and your Google Business Profile. That gets you found for your business name and helps with local searches. Ranking for competitive searches takes time and regular content, and nobody can honestly guarantee a position.",
      },
    ],
  },
  {
    id: "ai",
    metaTitle: "AI Training for Cork Businesses: ChatGPT and Copilot | RL Labs",
    metaDescription:
      "Hands-on ChatGPT, Copilot, Claude and Gemini training for Irish teams, in Cork or online, from €750, with clear rules on what data stays out of AI tools.",
    heading: ["AI training and support for small businesses", "in Cork."],
    intro:
      "We help small teams in Cork and across Ireland use ChatGPT, Microsoft Copilot, Claude and Gemini in their everyday work. Training is hands-on and built around your own tasks. Every session also covers what information must never go into AI tools, and leaves you with a record of who was trained.",
    serviceName: "AI training and consultancy for small businesses in Cork",
    serviceType: "AI training",
    pricesHeading: "AI training packages and prices",
    sections: [
      {
        heading: "ChatGPT, Copilot, Claude and Gemini training for your team",
        paragraphs: [
          "We start with the tool that fits how you already work. If your business runs on Microsoft 365, that's usually Copilot. On Google Workspace, it's Gemini. Otherwise ChatGPT or Claude. Then we train your team on real tasks from your week: writing emails and posts, planning events, summarising documents and turning rough ideas into plans.",
        ],
      },
      {
        heading: "An AI use policy for your business",
        paragraphs: [
          "A one-page policy written with you in plain English. It's included in the Safe AI workshop, or available on its own from €750. It covers:",
        ],
        bullets: [
          "Which AI tools staff may use, and on which accounts",
          "What information must never go into them, such as customer details and passwords",
          "When a person must check AI output before it's used",
          "Who to ask when someone isn't sure",
        ],
      },
      {
        heading: "The EU AI Act and AI literacy",
        paragraphs: [
          "If your staff use AI tools at work, the EU AI Act asks you to take steps to support their AI literacy. Our sessions are a practical way to do that: training on the tools they use, a written AI use policy, and a record of who was trained. We don't issue certificates, and no training on its own makes a business compliant.",
        ],
      },
      {
        heading: "Looking for an AI consultant in Cork?",
        paragraphs: [
          "Most small businesses need training and clear rules more than a strategy report, so that's where we start. When a task comes up again and again, we can automate it for you, for example with a custom GPT or an automated workflow, from €995.",
        ],
      },
    ],
    proof: {
      heading: "Who we've helped",
      slugs: ["your-best-life", "all-about-cork"],
    },
    faqs: [
      {
        question: "Is it safe to put business information into ChatGPT?",
        answer:
          "It depends on the plan and the settings. Business plans such as ChatGPT Business and Enterprise, Microsoft 365 Copilot with a work account, Gemini in Google Workspace and Claude's Team and Enterprise plans don't use your data to train their models by default. Free and personal accounts may, unless you turn that off. Whatever the plan, don't paste in customer personal data, passwords or confidential figures unless your AI use policy allows it.",
      },
      {
        question: "What does the EU AI Act mean for a small business?",
        answer:
          "If your staff use AI tools at work, the EU AI Act asks you to take steps to support their AI literacy, so they understand the tools well enough to use them safely. This has applied since 2 February 2025, and there's no exemption for small businesses. No certificate is required. A short training session, a written AI use policy and a record of who was trained is a sensible way to show you've taken those steps.",
      },
      {
        question: "What should an AI use policy include?",
        answer:
          "A one-page policy should say which AI tools staff may use and on which accounts, what information must never go into them, when a person must check AI output before it's used, and who to ask when unsure. We write it with you in plain English as part of our Safe AI workshop, or on its own from €750.",
      },
      {
        question: "Do you offer Copilot training?",
        answer:
          "Yes. If your business runs on Microsoft 365, we train your team on Copilot in Outlook, Word, Excel and Teams, using your own tasks. We'll also check which Copilot you have, because the free Copilot Chat and the paid Microsoft 365 Copilot can do different things.",
      },
      {
        question: "Which AI tool should my business use?",
        answer:
          "Usually the one that fits the software you already pay for: Copilot if you use Microsoft 365, Gemini if you use Google Workspace, and ChatGPT or Claude otherwise. The right business plan matters more than the brand, because it decides how your data is handled.",
      },
    ],
  },
  {
    id: "apps",
    metaTitle: "iPhone App Developer in Cork: MVP from €7,950 | RL Labs",
    metaDescription:
      "Native iPhone apps built in Cork, from a €950 discovery sprint to an App Store-ready first version from €7,950. Fixed price, paid in stages.",
    heading: ["iPhone app development", "in Cork."],
    intro:
      "We design and build native iPhone apps for businesses and founders in Cork and across Ireland. We took our own app, PADLR., from first sketch to the App Store, and we bring the same process to yours: a short discovery sprint, a fixed price, then a build paid in stages.",
    serviceName: "iPhone app development in Cork",
    serviceType: "iOS app development",
    pricesHeading: "App development packages and prices",
    sections: [
      {
        heading: "How an app project works",
        paragraphs: [
          "Apps are built in stages, so you only commit to one at a time.",
        ],
        bullets: [
          "Discovery sprint: two days to turn your idea into screen designs, a written spec and a fixed price",
          "First version: the core features your users need, built natively for iPhone and tested",
          "App Store: we handle submission and Apple's review",
          "Care: updates for new iOS versions, monitoring and fixes after launch",
        ],
      },
      {
        heading: "What about Android?",
        paragraphs: [
          "We build native iPhone apps first. Once your iPhone app is live and proving itself, Android can follow as a second stage, quoted separately.",
        ],
      },
    ],
    proof: { heading: "Case study: PADLR.", slugs: ["padlr"] },
    faqs: [
      {
        question: "How much does it cost to build an app in Ireland?",
        answer:
          "Small Irish studios typically quote €5,000 to €25,000 for a first version of an app, and larger agencies €25,000 to €40,000 or more per platform. Our discovery sprint costs €950 and gives you screen designs and a fixed price. A focused first iPhone app starts at €7,950. Apple also charges about €99 a year for a developer account.",
      },
      {
        question: "Do you build Android apps?",
        answer:
          "We build native iPhone apps first. Once your iPhone app is live and proving itself, Android can follow as a second stage, quoted separately.",
      },
      {
        question: "What happens in the discovery sprint?",
        answer:
          "Over two days we turn your idea into screen designs, a written spec and a fixed quote for the build. It costs €950, and that's credited in full if you go ahead with the build.",
      },
    ],
  },
];

export function servicePage(id: string): ServicePage | undefined {
  return SERVICE_PAGES.find((page) => page.id === id);
}

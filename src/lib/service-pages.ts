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
    metaTitle: "AI Set-up and Training in Cork: Copilot, ChatGPT | RL Labs",
    metaDescription:
      "We set up Microsoft Copilot, Gemini, ChatGPT, Claude and Claude Code for Irish businesses, connect them to your software and train your team. From €750.",
    heading: ["AI set-up and training for businesses", "in Cork."],
    intro:
      "We set up AI tools for small businesses in Cork and across Ireland, and train your team to use them well. That might be Microsoft 365 Copilot connected to your email and SharePoint, Gemini in Google Workspace, a ChatGPT or Claude workspace with assistants that know your business, automations that link AI to the apps you already use, or Claude Code for your developers.",
    serviceName: "AI set-up, integration and training for businesses in Cork",
    serviceType: "AI consulting and training",
    pricesHeading: "AI set-up and training packages",
    sections: [
      {
        heading: "Microsoft 365 Copilot and Google Gemini set-up",
        paragraphs: [
          "If your business runs on Microsoft 365 or Google Workspace, the AI you need is often already there. We get it working properly:",
        ],
        bullets: [
          "Choose the right licences, so you don't pay for features nobody uses",
          "Check SharePoint, OneDrive and Drive sharing first, so Copilot or Gemini can't surface files people shouldn't see",
          "Set up Copilot in Outlook, Teams, Word and Excel, or Gemini in Gmail, Docs and Sheets",
          "Build Copilot agents in Copilot Studio, or Gemini Gems, that answer questions from your own documents",
        ],
      },
      {
        heading: "ChatGPT and Claude workspaces for your team",
        paragraphs: [
          "For teams that want ChatGPT or Claude, we set up a business workspace rather than personal accounts, so your data is handled under business terms and everyone shares the same tools.",
        ],
        bullets: [
          "ChatGPT Business or Claude Team accounts, with the right data settings",
          "Connections to Google Drive, SharePoint, Slack and other apps you use",
          "Custom GPTs and Claude Projects loaded with your price lists, policies and templates",
          "Claude skills and shared prompts for the jobs you do every week",
        ],
      },
      {
        heading: "Automations and AI agents",
        paragraphs: [
          "We connect AI to the apps you run your business on, using Zapier, Make, Power Automate or n8n, and MCP connectors that let assistants work directly with your tools. Typical jobs:",
        ],
        bullets: [
          "Drafting replies to new enquiries from your website or inbox",
          "Turning meeting notes into tasks in your project or CRM tool",
          "Filling quotes, reports and documents from form answers",
          "Answering common customer questions from your own information",
        ],
      },
      {
        heading: "Claude Code for technical teams",
        paragraphs: [
          "If your team writes code or manages technical systems, Claude Code can take on real engineering work. We install and configure it properly and show your developers how to use it day to day.",
        ],
        bullets: [
          "Plugins and skills for your stack and the way your team works",
          "MCP servers connecting Claude Code to GitHub, your issue tracker and internal tools",
          "Project instructions (CLAUDE.md), hooks and permission settings, so it follows your rules",
          "Training on planning work, reviewing changes and keeping it safe in your repositories",
        ],
      },
      {
        heading: "Training that sticks, and rules that keep your data safe",
        paragraphs: [
          "Every set-up includes hands-on training built around your team's own tasks, so people keep using the tools after we leave. We also write a one-page AI use policy with you and keep a record of who was trained, which supports the EU AI Act's AI literacy requirement. We don't issue certificates, and no training on its own makes a business compliant.",
        ],
      },
    ],
    proof: {
      heading: "Who we've helped",
      slugs: ["your-best-life", "all-about-cork"],
    },
    faqs: [
      {
        question: "Can you connect AI to the software we already use?",
        answer:
          "Usually, yes. Copilot and Gemini work inside Microsoft 365 and Google Workspace. ChatGPT and Claude connect to apps like Google Drive, SharePoint and Slack, and tools like Zapier, Make, Power Automate, n8n and MCP connectors link AI to most business software. We'll tell you in the free chat what's possible with your set-up.",
      },
      {
        question: "Do you set up Microsoft 365 Copilot?",
        answer:
          "Yes. We help you choose the right licences, check your SharePoint and OneDrive sharing so Copilot can't surface files it shouldn't, set it up in Outlook, Teams, Word and Excel, and train your team. We can also build Copilot agents in Copilot Studio that answer questions from your own documents.",
      },
      {
        question: "What is Claude Code, and does my business need it?",
        answer:
          "Claude Code is Anthropic's AI tool for software development. It can read a codebase, make changes, run tests and work with GitHub. It's worth it for teams that write code or manage technical systems. We install it with the plugins, skills and MCP connectors your team needs, and train your developers to use it safely.",
      },
      {
        question: "Which AI tool should my business use?",
        answer:
          "Usually the one that fits the software you already pay for: Copilot if you use Microsoft 365, Gemini if you use Google Workspace, and ChatGPT or Claude otherwise. The right business plan matters more than the brand, because it decides how your data is handled.",
      },
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

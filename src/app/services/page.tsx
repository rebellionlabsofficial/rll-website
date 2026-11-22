import Link from "next/link";
import ButtonLink from "@/components/ButtonLink";
import CtaBand from "@/components/CtaBand";
import Eyebrow from "@/components/Eyebrow";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import ProcessSteps from "@/components/ProcessSteps";
import SectionHeading from "@/components/SectionHeading";
import { PRICE_NOTE, SERVICES } from "@/lib/constants";
import { fromPrice } from "@/lib/format";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbs, serviceNodes } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "Services and Prices: Websites, Apps and AI",
  description:
    "Websites from €750, AI sessions for your team from €350 and iPhone apps from €5,000. Based in Cork, working across Ireland, with a fixed quote before any work starts.",
  path: "/services",
});

// Which pieces of work to point to from each service.
const PROOF: Record<string, string[]> = {
  websites: ["Mike Lynch Electrical", "Luke Cahill Fitness", "playpadlr.app"],
  ai: ["Your Best Life", "All About Cork"],
  apps: ["PADLR."],
};

const QUESTIONS = [
  {
    question: "Why are the prices “from”?",
    answer:
      "Because every business needs something slightly different. After our first chat you get a fixed price in writing, and that's the price you pay unless you ask for more.",
  },
  {
    question: "Do I own my website?",
    answer:
      "Yes. The domain, the content and the site are yours. If you ever want to move on, I'll hand everything over.",
  },
  {
    question: "Is it safe to use ChatGPT with my business?",
    answer:
      "It can be, with some care. Part of every AI session is agreeing what should never go into these tools, such as customer details, and which settings to change so your chats aren't used to train the models.",
  },
  {
    question: "Do you work outside Cork?",
    answer:
      "Yes. I'm happy to meet in person around Cork, and everything else works well over video calls.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={[breadcrumbs("Services", "/services"), ...serviceNodes]} />

      <section className="relative isolate overflow-clip pb-16 pt-32 sm:pt-36 lg:pt-44">
        <div
          aria-hidden="true"
          className="bg-grid mask-radial absolute inset-0 -z-10"
        />
        <div className="container-page max-w-3xl lg:max-w-page">
          <Eyebrow className="rise">Services and prices</Eyebrow>
          <h1 className="rise rise-d1 display mt-7 max-w-4xl text-[clamp(3rem,7vw,5.5rem)]">
            Clear prices, <span className="accent text-lion">no jargon.</span>
          </h1>
          <p className="rise rise-d2 mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            {PRICE_NOTE}
          </p>
          <nav
            aria-label="Services"
            className="rise rise-d3 mt-10 flex flex-wrap gap-3"
          >
            {SERVICES.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-white/60 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink/30 hover:bg-white"
              >
                <Icon name={service.icon} className="h-4 w-4 text-lion" />
                {service.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="container-page space-y-5">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="reveal grid gap-10 rounded-[2rem] border border-line bg-white p-8 shadow-card sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-14"
            >
              <div className="lg:col-span-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lion-tint text-lion">
                  <Icon name={service.icon} />
                </span>
                <h2 className="heading mt-7 text-4xl sm:text-5xl">
                  {service.title}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                  {service.summary}
                </p>
                <p className="mt-8 text-3xl font-semibold tracking-tight text-ink">
                  {fromPrice(service.price)}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {service.extra}
                </p>
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <h3 className="eyebrow text-ink-muted">What you get</h3>
                <ul className="mt-5 space-y-3.5">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 leading-relaxed text-ink-soft"
                    >
                      <Icon
                        name="check"
                        className="mt-1 h-4 w-4 shrink-0 text-lion"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 border-t border-line pt-6 text-sm text-ink-muted">
                  Examples: {PROOF[service.id].join(", ")}.{" "}
                  <Link
                    href="/work"
                    className="font-medium text-lion underline-offset-4 hover:underline"
                  >
                    See the work
                  </Link>
                </p>
                <ButtonLink href="/contact" className="mt-8">
                  {service.ask}
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-white/50 py-24 sm:py-32">
        <div className="container-page">
          <div className="reveal">
            <SectionHeading
              eyebrow="How it works"
              title={
                <>
                  Four steps,{" "}
                  <span className="accent text-lion">no surprises.</span>
                </>
              }
            />
          </div>
          <div className="mt-14">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="reveal lg:col-span-4">
            <SectionHeading
              eyebrow="Questions"
              title={
                <>
                  Good to <span className="accent text-lion">know.</span>
                </>
              }
            />
          </div>
          <dl className="reveal reveal-1 divide-y divide-line border-y border-line lg:col-span-8">
            {QUESTIONS.map((item) => (
              <div key={item.question} className="py-6">
                <dt className="text-lg font-semibold tracking-tight text-ink">
                  {item.question}
                </dt>
                <dd className="mt-2 max-w-2xl leading-relaxed text-ink-soft">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBand
        title="Not sure what you need?"
        lead="That's what the free chat is for. Tell me what's slowing your business down, and we'll work out together whether a website, an app or AI is the right fix."
      >
        <ButtonLink href="/contact" variant="light" size="lg">
          Book a free chat
        </ButtonLink>
      </CtaBand>
    </>
  );
}

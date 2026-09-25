import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import CtaBand from "@/components/CtaBand";
import Eyebrow from "@/components/Eyebrow";
import JsonLd from "@/components/JsonLd";
import SectionHeading from "@/components/SectionHeading";
import { PADEL_STATS, PADLR, PRINCIPLES, SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbs } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "About Us: Sports App Studio in Dublin",
  description:
    "Rebel Lion Labs is a small sports app studio in Dublin, Ireland. We started with padel and built PADLR., an app for padel ratings, matches and finding players.",
  path: "/about",
});

const FACTS = [
  { label: "Based in", value: SITE.location },
  { label: "First app", value: "PADLR. (padel)" },
  {
    label: "Launching",
    value: `${PADLR.launch} · ${PADLR.countries.length} countries`,
  },
  { label: "Approach", value: "One sport at a time" },
];

const CHAPTERS = [
  {
    step: "01",
    title: "Padel",
    description: `PADLR., launching on iOS in ${PADLR.launch}.`,
    status: "Nov 2026",
    current: true,
  },
  {
    step: "02",
    title: "More sports",
    description: "A dedicated app for each new sport.",
    status: "Next",
    current: false,
  },
  {
    step: "03",
    title: "Merch & apparel",
    description: "Clothing and kit for players and fans.",
    status: "Later",
    current: false,
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbs("About", "/about")} />

      {/* Hero */}
      <section className="relative isolate overflow-clip pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-44">
        <div
          aria-hidden="true"
          className="bg-grid mask-radial absolute inset-0 -z-10"
        />
        <div className="container-page grid items-end gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Eyebrow className="rise">About Rebel Lion Labs</Eyebrow>
            <h1 className="rise rise-d1 display mt-7 text-[clamp(3rem,7vw,5.5rem)]">
              We build the apps we wanted{" "}
              <span className="accent text-lion">as players.</span>
            </h1>
            <p className="rise rise-d2 mt-8 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
              Rebel Lion Labs is a small sports app studio in Dublin. We make
              one app per sport, and we started with padel.
            </p>
          </div>
          <div className="rise rise-d3 lg:col-span-5">
            <div className="rounded-3xl border border-line bg-white p-7 shadow-card sm:p-8">
              <Image
                src="/brand/rll-shield.png"
                alt=""
                width={357}
                height={384}
                className="h-14 w-auto"
              />
              <dl className="mt-8 divide-y divide-line">
                {FACTS.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-baseline justify-between gap-6 py-3.5"
                  >
                    <dt className="eyebrow text-ink-muted">{fact.label}</dt>
                    <dd className="text-right font-medium text-ink">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="border-t border-line bg-white/50 py-24 sm:py-32">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="reveal lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                eyebrow="Our story"
                title={
                  <>
                    Born on <span className="accent text-lion">the court.</span>
                  </>
                }
              />
            </div>
          </div>
          <div className="reveal reveal-1 space-y-6 text-lg leading-relaxed text-ink-soft lg:col-span-8 lg:pt-12">
            <p>
              Rebel Lion Labs started out of frustration. We&apos;ve played
              sport all our lives and tried just about every app, tracker and
              platform going, and none of them got it right. They never matched
              how much players care about their game.
            </p>
            <p>
              Padel made the problem impossible to ignore. You finish a match,
              the score is on the whiteboard, and there&apos;s nowhere useful to
              put it: no rating to update, no leaderboard to climb, no way to
              find better opponents for next week. You book the court in one
              app, sort out the game on WhatsApp and keep the rankings in a
              spreadsheet. Then the result is gone.
            </p>
            <p>
              We decided to build our own apps, for players and by people who
              play. Each app focuses on one sport and gets the details of that
              sport right.
            </p>
            <figure className="!mt-12 border-l-2 border-lion pl-6 sm:pl-8">
              <blockquote className="font-serif text-3xl italic leading-snug text-ink sm:text-4xl">
                “We were staring at a score that was about to be wiped off the
                whiteboard, thinking: why doesn&apos;t this exist?”
              </blockquote>
              <figcaption className="eyebrow mt-5 text-ink-muted">
                How PADLR. started
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Why padel */}
      <section className="py-24 sm:py-32">
        <div className="container-page">
          <div className="reveal">
            <SectionHeading
              eyebrow="Why padel first"
              title={
                <>
                  The world&apos;s fastest-growing{" "}
                  <span className="accent text-lion">racquet sport.</span>
                </>
              }
            />
          </div>
          <dl className="mt-14 grid gap-5 md:grid-cols-3">
            {PADEL_STATS.map((stat, index) => (
              <div
                key={stat.label}
                className={`reveal ${["", "reveal-1", "reveal-2"][index]} flex flex-col-reverse rounded-3xl border border-line bg-white p-8 shadow-card`}
              >
                <dt className="mt-3 text-ink-soft">{stat.label}</dt>
                <dd className="display text-6xl text-lion sm:text-7xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
          <div className="reveal mt-14 grid gap-6 text-lg leading-relaxed text-ink-soft md:grid-cols-2 md:gap-10">
            <p>
              Padel is growing fast all over the world, but the apps players use
              haven&apos;t kept up. Most people still track results in group
              chats, argue about who&apos;s a 3.5 and who&apos;s a 4.0, and
              struggle to find opponents at their level.
            </p>
            <p>
              PADLR. is the app we needed every time we walked off court with a
              result and nowhere to put it. That made padel the obvious place to
              start.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-canvas-deep py-24 sm:py-32">
        <div className="container-page">
          <div className="reveal">
            <SectionHeading
              eyebrow="How we build"
              title={
                <>
                  The four principles{" "}
                  <span className="accent text-lion">we build by.</span>
                </>
              }
              lead="We wrote these down early on. They've guided every product decision since."
            />
          </div>
          <ol className="mt-14 grid gap-5 sm:grid-cols-2">
            {PRINCIPLES.map((principle, index) => (
              <li
                key={principle.title}
                className={`reveal ${index % 2 ? "reveal-1" : ""} rounded-3xl border border-line bg-white p-8 sm:p-10`}
              >
                <p className="font-mono text-xs tracking-[0.2em] text-lion">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                  {principle.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">
                  {principle.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Debut */}
      <section className="py-3 sm:py-4">
        <div
          data-surface="dark"
          className="panel-inset relative isolate overflow-clip bg-padlr-ink py-20 text-white sm:py-24"
        >
          <div
            aria-hidden="true"
            className="absolute -left-32 -top-32 -z-10 h-[32rem] w-[32rem] rounded-full bg-padlr-neon/[0.08] blur-[120px]"
          />
          <div className="container-page grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="reveal lg:col-span-7">
              <Eyebrow tone="neon">Our first app · Padel</Eyebrow>
              <Image
                src="/PADLRLogo.png"
                alt="PADLR."
                width={360}
                height={55}
                className="mt-8 h-9 w-auto sm:h-11"
              />
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
                {PADLR.about}
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <ButtonLink
                  href={PADLR.links.waitlist}
                  external
                  variant="neon"
                  size="lg"
                >
                  Join the waitlist
                </ButtonLink>
                <ButtonLink href="/products" variant="ghost-dark" size="lg">
                  See how it works
                </ButtonLink>
              </div>
            </div>
            <dl className="reveal reveal-1 grid grid-cols-2 gap-px overflow-clip rounded-3xl border border-white/10 bg-white/10 lg:col-span-5">
              {PADLR.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col-reverse bg-padlr-ink p-6 sm:p-8"
                >
                  <dt className="mt-2 text-sm text-white/60">{stat.label}</dt>
                  <dd className="text-4xl font-semibold tracking-tight text-padlr-neon sm:text-5xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 sm:py-32">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="reveal lg:col-span-5">
            <SectionHeading
              eyebrow="Our vision"
              title={
                <>
                  One sport <span className="accent text-lion">at a time.</span>
                </>
              }
            />
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-soft">
              <p>
                PADLR. is our first app, and there will be more. We give each
                sport its own app instead of squeezing every sport into one.
              </p>
              <p>
                After padel we&apos;ll take on other sports, one at a time. We
                also plan to make merch and apparel for the community.
              </p>
            </div>
          </div>
          <ol className="grid content-center gap-4 lg:col-span-6 lg:col-start-7">
            {CHAPTERS.map((chapter, index) => {
              const { current } = chapter;
              return (
                <li
                  key={chapter.title}
                  className={`reveal ${["", "reveal-1", "reveal-2"][index]} flex items-center gap-6 rounded-3xl border p-6 sm:p-7 ${
                    current
                      ? "border-ink bg-ink text-white"
                      : "border-dashed border-line-strong bg-white/50"
                  }`}
                >
                  <span
                    className={`font-serif text-4xl italic ${current ? "text-padlr-neon" : "text-lion"}`}
                  >
                    {chapter.step}
                  </span>
                  <div className="flex-1">
                    <h3
                      className={`text-xl font-semibold tracking-tight ${current ? "text-white" : ""}`}
                    >
                      {chapter.title}
                    </h3>
                    <p
                      className={`mt-1 text-[15px] ${current ? "text-white/70" : "text-ink-soft"}`}
                    >
                      {chapter.description}
                    </p>
                  </div>
                  <span
                    className={`eyebrow shrink-0 rounded-full px-3 py-1.5 ${
                      current
                        ? "bg-padlr-neon text-padlr-ink"
                        : "border border-line-strong text-ink-muted"
                    }`}
                  >
                    {chapter.status}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <CtaBand
        title="Want to get involved?"
        lead="We'd like to hear from players, clubs, partners and investors. Send us a message and we'll get back to you."
      >
        <ButtonLink href="/contact" variant="light" size="lg">
          Get in touch
        </ButtonLink>
        <ButtonLink href="/products" variant="ghost-dark" size="lg">
          View our apps
        </ButtonLink>
      </CtaBand>
    </>
  );
}

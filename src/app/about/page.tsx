import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import CtaBand from "@/components/CtaBand";
import Eyebrow from "@/components/Eyebrow";
import SectionHeading from "@/components/SectionHeading";
import { PADEL_STATS, PADLR, PRINCIPLES, SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About Us — Sports App Development Studio",
  description:
    "Rebel Lion Labs is a sports app studio in Dublin, Ireland, building player-first mobile apps. We started with padel — one of the fastest-growing sports in the world — and PADLR., the ultimate padel companion app.",
  path: "/about",
});

const FACTS = [
  { label: "Based in", value: SITE.location },
  { label: "Debut app", value: "PADLR. — padel" },
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
    description: `PADLR. — launching on iOS in ${PADLR.launch}.`,
    status: "Nov 2026",
    current: true,
  },
  {
    step: "02",
    title: "More sports",
    description: "Purpose-built apps, one sport at a time.",
    status: "Next",
    current: false,
  },
  {
    step: "03",
    title: "Merch & apparel",
    description: "For the players who live and breathe their sport.",
    status: "Later",
    current: false,
  },
];

export default function AboutPage() {
  return (
    <>
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
              Built from passion,{" "}
              <span className="accent text-lion">driven by purpose.</span>
            </h1>
            <p className="rise rise-d2 mt-8 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
              We&apos;re a small, determined sports app studio on a mission to
              build technology that matches the passion of the people who play.
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
              Rebel Lion Labs was born out of frustration. As a lifelong sports
              player who had tried every app, every tracker, and every platform
              — none of them got it right. The passion players bring to the
              court was never reflected in the tools built to serve them.
            </p>
            <p>
              Padel made it impossible to ignore. Finish a match and the score
              sits on the whiteboard with nowhere to go that matters — no rating
              to update, no leaderboard to climb, no way to find better
              opponents next week. Courts are booked in one app, games are
              organised in WhatsApp, rankings live in spreadsheets. The result
              just evaporates.
            </p>
            <p>
              That frustration became a mission: build the dedicated sports apps
              that should have existed all along — crafted for the players, by a
              player. Apps that understand the culture, the competition, and the
              community that make each sport special.
            </p>
            <figure className="!mt-12 border-l-2 border-lion pl-6 sm:pl-8">
              <blockquote className="font-serif text-3xl italic leading-snug text-ink sm:text-4xl">
                “The rating is not a feature. The rating is the foundation.”
              </blockquote>
              <figcaption className="eyebrow mt-5 text-ink-muted">
                The idea PADLR. is built on
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
              Padel is exploding globally — yet the technology serving its
              players hasn&apos;t kept up. Most players still track matches in
              group chats, argue about skill levels without any data, and have
              no easy way to find opponents at their level.
            </p>
            <p>
              We saw the chance to build the definitive digital home for padel
              players. That&apos;s why PADLR. is our debut: the app we wished
              existed when we stepped onto the court.
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
                  Four principles.{" "}
                  <span className="accent text-lion">Non-negotiable.</span>
                </>
              }
              lead="We wrote these down early. They've guided every product decision since."
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
              <Eyebrow tone="neon">What we build · Our debut</Eyebrow>
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
                  Explore the app
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
                We&apos;re not building one app — we&apos;re building a family
                of apps. Each one purpose-built for a specific sport, each one
                designed to be the ultimate digital companion for the players of
                that game.
              </p>
              <p>
                Starting with padel and expanding sport by sport, Rebel Lion
                Labs is on a mission to become the home of sports technology
                that truly understands its players. As our community grows, so
                will our offering — including exclusive merch and apparel.
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
        title="Want to be part of the journey?"
        lead="Whether you're a player, a partner, or an investor — we'd love to connect."
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

import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import CtaBand from "@/components/CtaBand";
import Eyebrow from "@/components/Eyebrow";
import Faq from "@/components/Faq";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import PhoneFrame from "@/components/PhoneFrame";
import Roadmap from "@/components/Roadmap";
import SectionHeading from "@/components/SectionHeading";
import { PADLR } from "@/lib/constants";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbs, padlrApp, padlrFaqs } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "PADLR. Padel Rating App for iPhone",
  description:
    "PADLR. is our padel app for iPhone. Get a fair 0–7 padel rating, log matches in 30 seconds, find players at your level and climb the leaderboards.",
  path: "/products",
});

const SCREENS = [
  {
    src: "/padlr-app-preview.png",
    width: 1320,
    height: 2868,
    label: "Feed",
    alt: "PADLR. padel app feed with a doubles match result and a Level Up achievement",
  },
  {
    src: "/padlr/stats.webp",
    width: 720,
    height: 1565,
    label: "Stats",
    alt: "PADLR. stats screen with a 3.9 padel rating, confidence ring and rating history chart",
  },
  {
    src: "/padlr/discover.webp",
    width: 720,
    height: 1565,
    label: "Discover",
    alt: "PADLR. discover screen listing open padel games and players nearby",
  },
  {
    src: "/padlr/leaderboards.webp",
    width: 720,
    height: 1565,
    label: "Rankings",
    alt: "PADLR. padel leaderboards with a podium of the most active players",
  },
  {
    src: "/padlr/match.webp",
    width: 720,
    height: 1565,
    label: "Match Details",
    alt: "PADLR. match details for a doubles win, with each player's rating change",
  },
];

export default function ProductsPage() {
  return (
    <>
      <JsonLd
        data={[breadcrumbs("Products", "/products"), padlrApp, padlrFaqs]}
      />

      {/* Hero + product index */}
      <section className="relative isolate overflow-clip pb-16 pt-32 sm:pt-36 lg:pt-44">
        <div
          aria-hidden="true"
          className="bg-grid mask-radial absolute inset-0 -z-10"
        />
        <div className="container-page">
          <div className="max-w-3xl">
            <Eyebrow className="rise">Our apps</Eyebrow>
            <h1 className="rise rise-d1 display mt-7 text-[clamp(3rem,7vw,5.5rem)]">
              Sports apps, starting with{" "}
              <span className="accent text-lion">padel.</span>
            </h1>
            <p className="rise rise-d2 mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
              We build each app for one sport, with the people who play it. The
              first is PADLR., a padel app for skill ratings, match logging and
              finding players at your level.
            </p>
          </div>

          <div className="rise rise-d3 mt-14 grid gap-5 md:grid-cols-5">
            <a
              href="#padlr"
              data-surface="dark"
              className="group relative isolate overflow-clip rounded-3xl bg-padlr-ink p-8 text-white shadow-lift md:col-span-3"
            >
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full bg-padlr-neon/15 blur-[80px] transition-opacity duration-500 group-hover:opacity-80"
              />
              <div className="flex items-start justify-between gap-4">
                <Image
                  src="/PADLRLogo.png"
                  alt="PADLR."
                  width={360}
                  height={55}
                  className="h-7 w-auto"
                />
                <span className="eyebrow rounded-full bg-padlr-neon px-3 py-1.5 text-padlr-ink">
                  {PADLR.launch}
                </span>
              </div>
              <p className="mt-10 text-2xl font-semibold tracking-tight">
                {PADLR.tagline}
              </p>
              <p className="mt-3 max-w-md text-white/65">
                {PADLR.summary} Launching on iOS in {PADLR.launch} across{" "}
                {PADLR.countries.length} countries.
              </p>
              <p className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-padlr-neon">
                Explore PADLR.
                <Icon
                  name="arrow-right"
                  className="h-4 w-4 rotate-90 transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </p>
            </a>
            <div className="flex flex-col justify-between rounded-3xl border border-dashed border-line-strong bg-white/50 p-8 md:col-span-2">
              <div className="flex items-start justify-between gap-4">
                <p className="text-xl font-semibold tracking-tight text-ink">
                  Next sport
                </p>
                <span className="eyebrow rounded-full border border-line-strong px-3 py-1.5 text-ink-muted">
                  In the works
                </span>
              </div>
              <div>
                <p className="mt-10 text-ink-soft">
                  We&apos;re building one sport at a time. If you&apos;d like to
                  hear about the next one first, or help shape it, get in touch.
                </p>
                <ButtonLink
                  href="/contact"
                  variant="secondary"
                  className="mt-6"
                >
                  Get in touch
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PADLR. overview */}
      <section
        id="padlr"
        aria-labelledby="padlr-heading"
        data-surface="dark"
        className="panel-inset relative isolate overflow-clip bg-padlr-ink py-20 text-white sm:py-28"
      >
        <div
          aria-hidden="true"
          className="bg-grid-dark absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_30%_10%,#000_15%,transparent_60%)]"
        />
        <div
          aria-hidden="true"
          className="absolute -left-40 -top-40 -z-10 h-[40rem] w-[40rem] rounded-full bg-padlr-neon/[0.08] blur-[120px]"
        />
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="reveal lg:col-span-7">
              <Eyebrow tone="neon">PADLR. · Padel app</Eyebrow>
              <Image
                src="/PADLRLogo.png"
                alt="PADLR."
                width={360}
                height={55}
                className="mt-8 h-10 w-auto sm:h-12"
              />
              <h2
                id="padlr-heading"
                className="heading mt-8 text-[2.5rem] text-white sm:text-6xl"
              >
                Your <span className="text-padlr-neon">Rating.</span> Your Game.
                Your Community.
              </h2>
            </div>
            <div className="reveal reveal-1 lg:col-span-5 lg:pt-16">
              <p className="text-lg leading-relaxed text-white/70">
                {PADLR.about}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink
                  href={PADLR.links.waitlist}
                  external
                  variant="neon"
                  size="lg"
                >
                  Join the waitlist
                </ButtonLink>
                <ButtonLink
                  href={PADLR.links.website}
                  external
                  variant="ghost-dark"
                  size="lg"
                >
                  playpadlr.app
                </ButtonLink>
              </div>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-white/55">
                iOS · {PADLR.launch} · {PADLR.countries.length} countries ·{" "}
                {PADLR.languages} languages
              </p>
            </div>
          </div>

          <ul
            aria-label="PADLR. app screens"
            className="no-scrollbar -mx-5 mt-16 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-6 lg:overflow-visible lg:px-0"
          >
            {SCREENS.map((screen, index) => (
              <li
                key={screen.label}
                className={`reveal ${["", "reveal-1", "reveal-2", "reveal-3", "reveal-3"][index]} w-[62vw] max-w-[250px] shrink-0 snap-center lg:w-auto lg:max-w-none`}
              >
                <PhoneFrame
                  src={screen.src}
                  alt={screen.alt}
                  width={screen.width}
                  height={screen.height}
                  sizes="(min-width: 1024px) 220px, 62vw"
                />
                <p className="mt-4 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-white/55">
                  {screen.label}
                </p>
              </li>
            ))}
          </ul>

          <dl className="reveal mt-16 grid grid-cols-2 gap-px overflow-clip rounded-3xl border border-white/10 bg-white/10 lg:grid-cols-4">
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
      </section>

      {/* Features */}
      <section className="py-24 sm:py-32">
        <div className="container-page">
          <div className="reveal">
            <SectionHeading
              eyebrow="Features"
              title={
                <>
                  Built for{" "}
                  <span className="accent text-lion">padel players.</span>
                </>
              }
              lead="Everything you need to track your matches, find people to play with and prove your level."
            />
          </div>
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PADLR.features.map((feature, index) => (
              <li
                key={feature.title}
                className={`reveal ${["", "reveal-1", "reveal-2", "reveal-3"][index % 4]}`}
              >
                <div className="group flex h-full flex-col rounded-3xl border border-line bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-padlr-ink text-padlr-neon">
                    <Icon name={feature.icon} />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-line bg-white/50 py-24 sm:py-32">
        <div className="container-page">
          <div className="reveal">
            <SectionHeading
              eyebrow="How it works"
              title={
                <>
                  Three steps to{" "}
                  <span className="accent text-lion">your real level.</span>
                </>
              }
              align="center"
            />
          </div>
          <div className="relative mt-16">
            <span
              aria-hidden="true"
              className="absolute left-[16.5%] right-[16.5%] top-8 hidden h-px bg-line-strong md:block"
            />
            <ol className="relative grid gap-12 md:grid-cols-3 md:gap-8">
              {PADLR.steps.map((step, index) => (
                <li
                  key={step.title}
                  className={`reveal ${["", "reveal-1", "reveal-2"][index]} relative text-center`}
                >
                  <span className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ink font-serif text-3xl italic text-padlr-neon shadow-lift">
                    {index + 1}
                  </span>
                  <h3 className="mt-7 text-xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mx-auto mt-3 max-w-xs leading-relaxed text-ink-soft">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Rating engine */}
      <section className="pt-3 sm:pt-4">
        <div
          data-surface="dark"
          className="panel-inset relative isolate overflow-clip bg-padlr-ink py-20 text-white sm:py-24"
        >
          <div
            aria-hidden="true"
            className="absolute -right-32 bottom-0 -z-10 h-[32rem] w-[32rem] rounded-full bg-padlr-neon/[0.07] blur-[120px]"
          />
          <div className="container-page grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
            <div className="reveal lg:col-span-5">
              <div className="rounded-[2rem] border border-white/10 bg-padlr-raised p-8 sm:p-10">
                <span className="eyebrow rounded-full bg-padlr-neon/10 px-3 py-1.5 text-padlr-neon">
                  OpenSkill engine
                </span>
                <div className="relative mx-auto mt-10 h-52 w-52">
                  <svg
                    viewBox="0 0 208 208"
                    className="h-full w-full -rotate-90"
                    aria-hidden="true"
                  >
                    <circle
                      cx="104"
                      cy="104"
                      r="92"
                      fill="none"
                      stroke="#262527"
                      strokeWidth="12"
                    />
                    <circle
                      cx="104"
                      cy="104"
                      r="92"
                      fill="none"
                      stroke="#C8FF00"
                      strokeWidth="12"
                      strokeLinecap="round"
                      strokeDasharray="578"
                      strokeDashoffset="58"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-semibold tracking-tight text-padlr-neon">
                      3.9
                    </span>
                    <span className="eyebrow mt-1 text-white/55">
                      Confident
                    </span>
                  </div>
                </div>
                <h3 className="mt-10 text-center text-lg font-semibold text-white">
                  Your confidence ring
                </h3>
                <p className="mt-2 text-center text-sm leading-relaxed text-white/60">
                  The ring shows how sure the system is about your rating. It
                  fills up as you play more matches, and a full ring means your
                  rating is well established.
                </p>
              </div>
            </div>

            <div className="reveal reveal-1 lg:col-span-7">
              <Eyebrow tone="neon">The rating system</Eyebrow>
              <h2 className="heading mt-5 text-[2.25rem] text-white sm:text-5xl">
                How the padel rating{" "}
                <span className="text-padlr-neon">works.</span>
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/65">
                {PADLR.rating.intro}
              </p>
              <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
                {PADLR.rating.factors.map((factor) => (
                  <li key={factor.title} className="flex gap-4 py-5">
                    <Icon
                      name={factor.icon}
                      className="mt-0.5 h-5 w-5 shrink-0 text-padlr-neon"
                    />
                    <div>
                      <h3 className="font-semibold text-white">
                        {factor.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/60">
                        {factor.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 overflow-clip rounded-2xl border border-white/10">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">
                    How the PADLR. rating compares with a basic Elo system
                  </caption>
                  <thead className="bg-white/[0.04]">
                    <tr>
                      <th
                        scope="col"
                        className="eyebrow px-5 py-4 font-medium text-white/55"
                      >
                        Feature
                      </th>
                      <th
                        scope="col"
                        className="eyebrow px-5 py-4 text-center font-medium text-padlr-neon"
                      >
                        PADLR.
                      </th>
                      <th
                        scope="col"
                        className="eyebrow px-5 py-4 text-center font-medium text-white/55"
                      >
                        Basic Elo
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {PADLR.rating.comparison.map((row) => (
                      <tr key={row}>
                        <th
                          scope="row"
                          className="px-5 py-3.5 font-normal text-white/80"
                        >
                          {row}
                        </th>
                        <td className="px-5 py-3.5">
                          <Icon
                            name="check"
                            className="mx-auto h-5 w-5 text-padlr-neon"
                          />
                          <span className="sr-only">Yes</span>
                        </td>
                        <td className="px-5 py-3.5">
                          <Icon
                            name="x"
                            className="mx-auto h-5 w-5 text-white/30"
                          />
                          <span className="sr-only">No</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <a
                href={PADLR.links.ratingSystem}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-padlr-neon underline-offset-4 hover:underline"
              >
                Read how PADLR. calculates your rating
                <Icon name="arrow-up-right" className="h-4 w-4" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PADLR. Pro */}
      <section className="py-24 sm:py-32">
        <div className="container-page">
          <div
            data-surface="dark"
            className="reveal relative isolate overflow-clip rounded-[2rem] bg-gradient-to-br from-padlr-raised to-padlr-ink p-8 text-white ring-1 ring-padlr-neon/25 sm:p-12 lg:p-16"
          >
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <span className="eyebrow rounded-full bg-padlr-neon px-3 py-1.5 text-padlr-ink">
                  Premium
                </span>
                <h2 className="heading mt-7 text-[2.5rem] text-white sm:text-6xl">
                  PADLR. <span className="text-padlr-neon">Pro</span>
                </h2>
                <p className="mt-5 max-w-xl leading-relaxed text-white/65">
                  {PADLR.pro.intro}
                </p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {PADLR.pro.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-white/85"
                    >
                      <Icon
                        name="check"
                        className="mt-0.5 h-4 w-4 shrink-0 text-padlr-neon"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center lg:col-span-5">
                <div className="relative mx-auto flex h-48 w-48 items-center justify-center rounded-full border-2 border-padlr-neon/30 sm:h-56 sm:w-56">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full bg-padlr-neon/5 blur-xl"
                  />
                  <span className="relative text-6xl font-semibold tracking-tight text-padlr-neon">
                    PRO
                  </span>
                </div>
                <p className="mt-6 text-sm text-white/60">{PADLR.pro.note}</p>
                <ButtonLink
                  href={PADLR.links.waitlist}
                  external
                  variant="neon"
                  className="mt-6"
                >
                  Get Pro at launch
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="border-t border-line py-24 sm:py-32">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="reveal lg:col-span-5">
            <SectionHeading
              eyebrow="Availability"
              title={
                <>
                  Launching in{" "}
                  <span className="accent text-lion">
                    {PADLR.countries.length} countries.
                  </span>
                </>
              }
              lead={`PADLR. launches in ${PADLR.launch} across Europe, the Americas and the Middle East, in ${PADLR.languages} languages.`}
            />
          </div>
          <ul
            aria-label="Countries where PADLR. is launching"
            className="reveal reveal-1 flex flex-wrap content-start gap-2 lg:col-span-7"
          >
            {PADLR.countries.map((country) => (
              <li
                key={country}
                className="rounded-full border border-line bg-white px-4 py-2 text-sm text-ink-soft"
              >
                {country}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="bg-canvas-deep py-24 sm:py-32">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="reveal lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                eyebrow="Roadmap"
                title={
                  <>
                    What&apos;s <span className="accent text-lion">next.</span>
                  </>
                }
                lead="What's planned for PADLR. after launch, and where Rebel Lion Labs goes next."
              />
              <ButtonLink
                href={PADLR.links.roadmap}
                external
                variant="secondary"
                className="mt-9"
              >
                Read the full roadmap
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <Roadmap />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 sm:py-32">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="reveal lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                eyebrow="FAQ"
                title={
                  <>
                    Questions about{" "}
                    <span className="accent text-lion">PADLR.</span>
                  </>
                }
                lead="Quick answers about the app, the rating and the launch."
              />
            </div>
          </div>
          <div className="reveal reveal-1 lg:col-span-8">
            <Faq />
          </div>
        </div>
      </section>

      <div className="pt-3 sm:pt-4">
        <CtaBand
          title="Get PADLR. at launch."
          lead="Join the waitlist on playpadlr.app and you'll hear as soon as PADLR. is on the App Store."
        >
          <ButtonLink
            href={PADLR.links.waitlist}
            external
            variant="light"
            size="lg"
          >
            Join the waitlist
          </ButtonLink>
          <ButtonLink
            href={PADLR.links.website}
            external
            variant="ghost-dark"
            size="lg"
          >
            Visit playpadlr.app
          </ButtonLink>
        </CtaBand>
      </div>
    </>
  );
}

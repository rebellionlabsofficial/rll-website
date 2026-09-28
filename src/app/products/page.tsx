import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import CtaBand from "@/components/CtaBand";
import Eyebrow from "@/components/Eyebrow";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import PhoneFrame from "@/components/PhoneFrame";
import SectionHeading from "@/components/SectionHeading";
import { PADLR, PADLR_CTA, PADLR_LAUNCHED } from "@/lib/constants";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbs, padlrApp } from "@/lib/structured-data";

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
      <JsonLd data={[breadcrumbs("Products", "/products"), padlrApp]} />

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
                  {PADLR_LAUNCHED ? "Out now" : PADLR.launch}
                </span>
              </div>
              <p className="mt-10 text-2xl font-semibold tracking-tight">
                {PADLR.tagline}
              </p>
              <p className="mt-3 max-w-md text-white/65">
                {PADLR.summary}{" "}
                {PADLR_LAUNCHED
                  ? `Out now on iOS in ${PADLR.countries.length} countries.`
                  : `Launching on iOS in ${PADLR.launch} across ${PADLR.countries.length} countries.`}
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
                  href={PADLR_CTA.href}
                  external
                  variant="neon"
                  size="lg"
                >
                  {PADLR_CTA.label}
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
                iOS · {PADLR_LAUNCHED ? "Out now" : PADLR.launch} ·{" "}
                {PADLR.countries.length} countries · {PADLR.languages} languages
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

      {/* What it does, in brief. The detail lives on playpadlr.app. */}
      <section className="py-24 sm:py-32">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="reveal lg:col-span-5">
            <SectionHeading
              eyebrow="In the app"
              title={
                <>
                  Built for{" "}
                  <span className="accent text-lion">padel players.</span>
                </>
              }
              lead="Everything you need to track your matches, find people to play with and prove your level. The full feature list, PADLR. Pro and the roadmap are on playpadlr.app."
            />
            <ButtonLink
              href={PADLR.links.website}
              external
              variant="secondary"
              className="mt-9"
            >
              See every feature on playpadlr.app
            </ButtonLink>
          </div>
          <ul className="reveal reveal-1 grid content-start gap-3 sm:grid-cols-2 lg:col-span-7">
            {PADLR.features.map((feature) => (
              <li
                key={feature.title}
                className="flex gap-4 rounded-2xl border border-line bg-white p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-padlr-ink text-padlr-neon">
                  <Icon name={feature.icon} />
                </span>
                <div>
                  <h3 className="font-semibold tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                    {feature.short}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="pt-3 sm:pt-4">
        <CtaBand
          title="See everything PADLR. does."
          lead={`Features, PADLR. Pro, the rating system and the roadmap are all on playpadlr.app. ${
            PADLR_LAUNCHED
              ? "The app is free on the App Store."
              : "Join the waitlist there to hear when it's out."
          }`}
        >
          <ButtonLink
            href={PADLR.links.website}
            external
            variant="light"
            size="lg"
          >
            Visit playpadlr.app
          </ButtonLink>
          <ButtonLink
            href={PADLR_CTA.href}
            external
            variant="ghost-dark"
            size="lg"
          >
            {PADLR_CTA.label}
          </ButtonLink>
        </CtaBand>
      </div>
    </>
  );
}

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
import { getPadlrStats } from "@/lib/padlr-stats";
import { breadcrumbs, padlrApp } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "PADLR Case Study: an iPhone App Built in Cork",
  description:
    "How we designed and built PADLR., a padel app for iPhone with a 0 to 7 skill rating, match logging and player discovery, plus its website.",
  path: "/work/padlr",
});

const SCREENS = [
  {
    src: "/padlr-app-preview.png",
    width: 1284,
    height: 2778,
    label: "Feed",
    alt: "PADLR. padel app feed with a doubles match result and a Globe Trotter badge",
  },
  {
    src: "/padlr/stats.webp",
    width: 720,
    height: 1558,
    label: "Stats",
    alt: "PADLR. stats screen with a 3.6 padel level, its confidence ring and the level chart over the last 30 matches",
  },
  {
    src: "/padlr/discover.webp",
    width: 720,
    height: 1558,
    label: "Discover",
    alt: "PADLR. discover screen listing open padel games and players nearby",
  },
  {
    src: "/padlr/leaderboards.webp",
    width: 720,
    height: 1558,
    label: "Rankings",
    alt: "PADLR. padel rankings among friends, with a podium of the most active players",
  },
  {
    src: "/padlr/matches.webp",
    width: 720,
    height: 1558,
    label: "Matches",
    alt: "PADLR. match history with recent form, a win streak and the level change after each match",
  },
];

export default async function PadlrPage() {
  const stats = await getPadlrStats();

  return (
    <>
      <JsonLd data={[breadcrumbs(["PADLR.", "/work/padlr"]), padlrApp]} />

      <section className="pt-24 sm:pt-28">
        <div
          data-surface="dark"
          className="panel-inset relative isolate overflow-clip bg-padlr-ink py-20 text-white sm:py-24"
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
              <div className="lg:col-span-7">
                <Eyebrow tone="neon" className="rise">
                  Case study · App and website
                </Eyebrow>
                <h1 className="rise rise-d1 mt-8">
                  <Image
                    src="/padlr/padlr-logo-white.svg"
                    alt="PADLR."
                    width={603}
                    height={88}
                    priority
                    className="h-10 w-auto sm:h-12"
                  />
                  <span className="sr-only">
                    : a padel app for iPhone, designed and built by Rebel Lion
                    Labs
                  </span>
                </h1>
                <p className="rise rise-d1 heading mt-8 text-[2.5rem] text-white sm:text-6xl">
                  Your <span className="text-padlr-neon">Rating.</span> Your
                  Game. Your Community.
                </p>
              </div>
              <div className="rise rise-d2 lg:col-span-5 lg:pt-16">
                <p className="text-lg leading-relaxed text-white/70">
                  {PADLR.about}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink
                    href={PADLR.links.website}
                    external
                    variant="neon"
                    size="lg"
                  >
                    Visit the website
                  </ButtonLink>
                  <ButtonLink
                    href={PADLR_CTA.href}
                    external
                    variant="ghost-dark"
                    size="lg"
                  >
                    {PADLR_LAUNCHED ? "Get the app" : "Join the app waitlist"}
                  </ButtonLink>
                </div>
                <dl className="mt-8 grid gap-3 border-t border-white/10 pt-6 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="eyebrow text-white/45">Website</dt>
                    <dd className="mt-1.5">
                      <a
                        href={PADLR.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-white underline-offset-4 hover:underline"
                      >
                        playpadlr.app
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-white/45">iPhone app</dt>
                    <dd className="mt-1.5">
                      {PADLR.appStoreUrl ? (
                        <a
                          href={PADLR.appStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-white underline-offset-4 hover:underline"
                        >
                          On the App Store
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      ) : (
                        <span className="text-white/70">
                          Coming soon to the App Store
                        </span>
                      )}
                    </dd>
                  </div>
                </dl>
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

            {stats.length > 0 && (
              <dl className="reveal mt-16 grid gap-px overflow-clip rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-3">
                {stats.map((stat) => (
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
            )}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="reveal lg:col-span-5">
            <SectionHeading
              eyebrow="What we built"
              title={
                <>
                  From idea to the{" "}
                  <span className="accent text-lion">App Store.</span>
                </>
              }
              lead="PADLR. started on a padel court, with a score on a whiteboard and nowhere useful to put it. We designed and built the whole thing: the app, the rating system behind it and its website."
            />
          </div>
          <ol className="reveal reveal-1 grid content-start gap-4 lg:col-span-7">
            {PADLR.build.map((item, index) => (
              <li
                key={item.title}
                className="flex gap-5 rounded-2xl border border-line bg-white p-6"
              >
                <span className="font-serif text-3xl italic leading-none text-lion">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-1 leading-relaxed text-ink-soft">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line bg-white/50 py-24 sm:py-32">
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
              lead="The full feature list, PADLR. Pro and the roadmap are on playpadlr.app."
            />
            <ButtonLink
              href={PADLR.links.website}
              external
              variant="secondary"
              className="mt-9"
            >
              Visit playpadlr.app
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

      <CtaBand
        title="Want an app like this?"
        lead="We can take your idea from a sketch to the App Store. Start with a free chat about what you have in mind."
      >
        <ButtonLink href="/contact" variant="light" size="lg">
          Book a free chat
        </ButtonLink>
        <ButtonLink href="/services/apps" variant="ghost-dark" size="lg">
          App pricing
        </ButtonLink>
      </CtaBand>
    </>
  );
}

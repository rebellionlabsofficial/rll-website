import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import Icon from "@/components/Icon";
import PhoneFrame from "@/components/PhoneFrame";
import { PADLR } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative isolate overflow-clip pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-44">
      <div
        aria-hidden="true"
        className="bg-grid mask-radial absolute inset-0 -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute -left-40 -top-40 -z-10 h-[34rem] w-[34rem] rounded-full bg-lion/[0.07] blur-3xl"
      />

      <div className="container-page grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <a
            href={PADLR.links.appStore}
            target="_blank"
            rel="noopener noreferrer"
            className="rise group inline-flex items-center gap-3 rounded-full border border-line bg-white/80 py-1.5 pl-1.5 pr-4 text-sm shadow-card backdrop-blur transition-colors hover:border-line-strong"
          >
            <span className="rounded-full bg-ink px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-padlr-neon">
              Live
            </span>
            <span className="text-ink-soft">
              PADLR. is free on the App Store
            </span>
            <Icon
              name="arrow-up-right"
              className="h-4 w-4 text-ink-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>

          <h1 className="rise rise-d1 display mt-8 text-[clamp(3rem,7.4vw,6rem)]">
            Apps built for the players,{" "}
            <span className="accent text-lion">by a player.</span>
          </h1>

          <p className="rise rise-d2 mt-8 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            Rebel Lion Labs is a sports app studio in Dublin building apps that
            match the passion of the people who play them. Our debut,{" "}
            <span className="font-semibold text-ink">PADLR.</span>, is the
            ultimate padel companion — free on iOS in 28 countries.
          </p>

          <div className="rise rise-d3 mt-10 flex flex-wrap items-center gap-3">
            <ButtonLink href="/products" size="lg">
              Explore PADLR.
            </ButtonLink>
            <ButtonLink href="/about" variant="secondary" size="lg">
              Our story
            </ButtonLink>
          </div>
        </div>

        <div className="rise rise-d2 relative mx-auto w-full max-w-[26rem] lg:col-span-5 lg:max-w-none">
          <div
            data-surface="dark"
            className="relative isolate flow-root aspect-[4/5] overflow-clip rounded-[2.25rem] bg-padlr-ink shadow-lift"
          >
            <div
              aria-hidden="true"
              className="bg-grid-dark absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_50%_20%,#000_20%,transparent_70%)]"
            />
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/3 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-padlr-neon/20 blur-[90px]"
            />
            <Image
              src="/PADLRLogo.png"
              alt="PADLR."
              width={360}
              height={55}
              className="mx-auto mt-9 h-5 w-auto sm:h-6"
            />
            <PhoneFrame
              src="/padlr-app-preview.png"
              alt="The PADLR. app feed, showing a confirmed doubles match between four players and a level-up achievement"
              width={1320}
              height={2868}
              sizes="(min-width: 1024px) 270px, 62vw"
              priority
              className="absolute left-1/2 top-[20%] w-[64%] -translate-x-1/2"
            />
          </div>

          <div className="absolute -left-3 top-[30%] rounded-2xl border border-line bg-white/90 px-4 py-3 shadow-lift backdrop-blur sm:-left-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
              Skill rating
            </p>
            <p className="mt-1 text-2xl font-semibold tracking-tight text-ink">
              0–7
            </p>
            <p className="text-xs text-ink-muted">OpenSkill Bayesian</p>
          </div>
          <div className="absolute -right-3 bottom-[14%] rounded-2xl border border-line bg-white/90 px-4 py-3 shadow-lift backdrop-blur sm:-right-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
              Log a match
            </p>
            <p className="mt-1 text-2xl font-semibold tracking-tight text-ink">
              30s
            </p>
            <p className="text-xs text-ink-muted">Opponent-confirmed</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import PhoneFrame from "@/components/PhoneFrame";
import { FOUNDER, SITE } from "@/lib/constants";

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
          <p className="rise eyebrow inline-flex items-center gap-2.5 text-ink-muted">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-lion"
            />
            {SITE.short} · {SITE.location}
          </p>

          <h1 className="rise rise-d1 display mt-8 text-[clamp(3rem,7vw,5.75rem)]">
            Websites, apps and AI that{" "}
            <span className="accent text-lion">work for you.</span>
          </h1>

          <p className="rise rise-d2 mt-8 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            I&apos;m {FOUNDER.name.split(" ")[0]}, and {SITE.name} is my studio
            in Cork. I build websites and apps for small businesses, and I help
            teams use AI tools like ChatGPT in their everyday work, safely.
          </p>

          <div className="rise rise-d3 mt-10 flex flex-wrap items-center gap-3">
            <ButtonLink href="/contact" size="lg">
              Book a free chat
            </ButtonLink>
            <ButtonLink href="/work" variant="secondary" size="lg">
              See the work
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
              src="/padlr/padlr-logo-white.svg"
              alt="PADLR."
              width={603}
              height={88}
              className="mx-auto mt-9 h-5 w-auto sm:h-6"
            />
            <PhoneFrame
              src="/padlr-app-preview.png"
              alt="The PADLR. padel app feed, showing a confirmed doubles match between four players and a Globe Trotter badge"
              width={1284}
              height={2778}
              sizes="(min-width: 1024px) 270px, 62vw"
              priority
              className="absolute left-1/2 top-[20%] w-[64%] -translate-x-1/2"
            />
          </div>

          <div className="absolute -left-3 top-[30%] rounded-2xl border border-line bg-white/90 px-4 py-3 shadow-lift backdrop-blur sm:-left-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
              Recent work
            </p>
            <p className="mt-1 text-lg font-semibold tracking-tight text-ink">
              PADLR.
            </p>
            <p className="text-xs text-ink-muted">iPhone app and website</p>
          </div>
          <div className="absolute -right-3 bottom-[14%] rounded-2xl border border-line bg-white/90 px-4 py-3 shadow-lift backdrop-blur sm:-right-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
              Also
            </p>
            <p className="mt-1 text-lg font-semibold tracking-tight text-ink">
              AI set-up
            </p>
            <p className="text-xs text-ink-muted">For Cork businesses</p>
          </div>
        </div>
      </div>
    </section>
  );
}

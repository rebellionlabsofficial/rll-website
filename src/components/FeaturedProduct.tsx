import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import Eyebrow from "@/components/Eyebrow";
import Icon from "@/components/Icon";
import PhoneFrame from "@/components/PhoneFrame";
import { PADLR } from "@/lib/constants";

export default function FeaturedProduct() {
  return (
    <section
      aria-labelledby="featured-product"
      data-surface="dark"
      className="panel-inset relative isolate overflow-clip bg-padlr-ink py-20 text-white sm:py-28"
    >
      <div
        aria-hidden="true"
        className="bg-grid-dark absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_75%_15%,#000_15%,transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 -z-10 h-[38rem] w-[38rem] rounded-full bg-padlr-neon/[0.09] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-48 -left-32 -z-10 h-[30rem] w-[30rem] rounded-full bg-padlr-neon/[0.06] blur-[120px]"
      />

      <div className="container-page">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="reveal lg:col-span-6">
            <Eyebrow tone="neon">Our first app · Padel</Eyebrow>
            <Image
              src="/PADLRLogo.png"
              alt="PADLR."
              width={360}
              height={55}
              className="mt-8 h-9 w-auto sm:h-11"
            />
            <h2
              id="featured-product"
              className="heading mt-8 text-[2.5rem] text-white sm:text-5xl lg:text-[3.5rem]"
            >
              Your <span className="text-padlr-neon">Rating.</span> Your Game.
              Your Community.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">
              {PADLR.summary} {PADLR.description}
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
                See how PADLR. works
              </ButtonLink>
            </div>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-white/55">
              iOS · {PADLR.launch} · {PADLR.countries.length} countries
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="mx-auto flex max-w-md items-end justify-center lg:max-w-lg">
              <div className="reveal reveal-1 w-[44%] max-w-[250px]">
                <PhoneFrame
                  src="/padlr/stats.webp"
                  alt="PADLR. stats screen showing a 3.9 padel rating, a confidence ring and a rating history chart"
                  sizes="(min-width: 1024px) 250px, 40vw"
                  className="mb-12 opacity-80"
                />
              </div>
              <div className="reveal reveal-2 relative z-10 -ml-[10%] w-[50%] max-w-[285px]">
                <PhoneFrame
                  src="/padlr/leaderboards.webp"
                  alt="PADLR. padel leaderboards with a podium of the most active players"
                  sizes="(min-width: 1024px) 285px, 46vw"
                />
              </div>
            </div>
          </div>
        </div>

        <dl className="reveal mt-20 grid grid-cols-2 gap-px overflow-clip rounded-3xl border border-white/10 bg-white/10 lg:grid-cols-4">
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

        <ul className="reveal mt-5 grid gap-px overflow-clip rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {PADLR.features.map((feature) => (
            <li
              key={feature.title}
              className="flex gap-4 bg-padlr-ink p-5 sm:block sm:p-7"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-padlr-neon">
                <Icon name={feature.icon} />
              </span>
              <div>
                <h3 className="font-semibold tracking-tight text-white sm:mt-5">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60 sm:mt-2">
                  {feature.short}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

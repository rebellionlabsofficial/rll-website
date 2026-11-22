import Image from "next/image";
import Link from "next/link";
import ButtonLink from "@/components/ButtonLink";
import CtaBand from "@/components/CtaBand";
import Eyebrow from "@/components/Eyebrow";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import SectionHeading from "@/components/SectionHeading";
import { FOUNDER, SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbs, founder } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "About Rebel Lion Labs | Cork Web, App and AI Studio",
  absolute: true,
  description:
    "Rebel Lion Labs is a Cork studio founded by Levent Arslan, with a background in information security. We build websites and apps and run AI training.",
  path: "/about",
});

const FACTS = [
  { label: "Based in", value: SITE.location },
  { label: "Founder", value: FOUNDER.name },
  { label: "Builds", value: "Websites, apps, AI set-ups" },
  { label: "First app", value: "PADLR. (padel)" },
];

const initials = FOUNDER.name
  .split(" ")
  .map((part) => part[0])
  .join("");

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[breadcrumbs(["About", "/about"]), founder]} />

      <section className="relative isolate overflow-clip pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-44">
        <div
          aria-hidden="true"
          className="bg-grid mask-radial absolute inset-0 -z-10"
        />
        <div className="container-page grid items-end gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Eyebrow className="rise">About us</Eyebrow>
            <h1 className="rise rise-d1 display mt-7 text-[clamp(3rem,7vw,5.5rem)]">
              Built properly,{" "}
              <span className="accent text-lion">explained plainly.</span>
            </h1>
            <p className="rise rise-d2 mt-8 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
              {SITE.name}, or RL Labs for short, is a studio in Cork. We build
              websites and apps, and we help small businesses get real use out
              of AI without the risks.
            </p>
          </div>
          <div className="rise rise-d3 lg:col-span-5">
            <div className="rounded-3xl border border-line bg-white p-7 shadow-card sm:p-8">
              {FOUNDER.photo ? (
                <Image
                  src={FOUNDER.photo}
                  alt={FOUNDER.name}
                  width={160}
                  height={160}
                  className="h-20 w-20 rounded-full object-cover"
                />
              ) : (
                <span
                  aria-hidden="true"
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-lion font-serif text-3xl italic text-white"
                >
                  {initials}
                </span>
              )}
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

      <section className="border-t border-line bg-white/50 py-24 sm:py-32">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="reveal lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                eyebrow="Our story"
                title={
                  <>
                    Started on a{" "}
                    <span className="accent text-lion">padel court.</span>
                  </>
                }
              />
            </div>
          </div>
          <div className="reveal reveal-1 space-y-6 text-lg leading-relaxed text-ink-soft lg:col-span-8 lg:pt-12">
            <p>
              RL Labs began with PADLR. After a game of padel, the score sat on
              a whiteboard with nowhere useful to put it, so we built an app for
              it: a fair skill rating, quick match logging and an easy way to
              find people to play with. We designed and built the whole thing,
              along with its website.
            </p>
            <p>
              Our founder, {FOUNDER.name}, works in information security and
              compliance. That shapes how we build: sites that are quick and
              secure, and AI set-ups where everyone knows what data is safe to
              share and what isn&apos;t.
            </p>
            <p>
              Now we do the same for other businesses. We build websites for
              local businesses, and we&apos;ve helped teams in Cork use ChatGPT
              for event ideas, planning and new business ideas. If you&apos;d
              like the same, we&apos;d be glad to hear from you.
            </p>
            <Link
              href="/work/padlr"
              className="group !mt-10 flex items-center gap-5 rounded-2xl bg-padlr-ink p-5 text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Image
                src="/padlr/padlr-logo-white.svg"
                alt="PADLR."
                width={603}
                height={88}
                className="h-6 w-auto"
              />
              <span className="flex-1 text-base text-white/70">
                Read how we built it
              </span>
              <Icon
                name="arrow-right"
                className="h-5 w-5 text-padlr-neon transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="reveal">
            <h2 className="heading text-3xl sm:text-4xl">
              Who you&apos;ll work with
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-soft">
              <p>
                {FOUNDER.name} founded {SITE.name} and does the work. Outside RL
                Labs, {FOUNDER.name.split(" ")[0]} works in information security
                and compliance, covering NIS2, supplier risk and security
                awareness training.
              </p>
              <p>
                So every project here treats privacy and security as part of the
                job: GDPR-friendly forms, sensible security settings on every
                site, and AI training that starts with what data should stay out
                of AI tools.
              </p>
            </div>
          </div>
          <div className="reveal reveal-1">
            <h2 className="heading text-3xl sm:text-4xl">Why Cork</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-soft">
              <p>
                We&apos;re based in Cork, and we&apos;d rather meet you over a
                coffee than a sales call. We meet clients in person around Cork
                city and county.
              </p>
              <p>
                For businesses elsewhere in Ireland, everything works well over
                video calls, from the first chat to training your team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's talk about your project."
        lead="Website, app or AI, the first chat is free and there's no obligation."
      >
        <ButtonLink href="/contact" variant="light" size="lg">
          Book a free chat
        </ButtonLink>
        <ButtonLink href="/services" variant="ghost-dark" size="lg">
          Services and prices
        </ButtonLink>
      </CtaBand>
    </>
  );
}

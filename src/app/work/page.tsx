import ButtonLink from "@/components/ButtonLink";
import CtaBand from "@/components/CtaBand";
import Eyebrow from "@/components/Eyebrow";
import JsonLd from "@/components/JsonLd";
import ProjectCards from "@/components/ProjectCards";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbs } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "Work: Websites, Apps and AI Projects",
  description:
    "Projects by Rebel Lion Labs: the PADLR. padel app, websites for local businesses, and ChatGPT set-ups for Cork businesses Your Best Life and All About Cork.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <JsonLd data={breadcrumbs("Work", "/work")} />

      <section className="relative isolate overflow-clip pb-16 pt-32 sm:pt-36 lg:pt-44">
        <div
          aria-hidden="true"
          className="bg-grid mask-radial absolute inset-0 -z-10"
        />
        <div className="container-page">
          <Eyebrow className="rise">Work</Eyebrow>
          <h1 className="rise rise-d1 display mt-7 max-w-4xl text-[clamp(3rem,7vw,5.5rem)]">
            What I&apos;ve <span className="accent text-lion">built.</span>
          </h1>
          <p className="rise rise-d2 mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            An iPhone app, websites for local businesses, and AI set-ups for
            teams in Cork. New projects are added as they launch.
          </p>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="container-page">
          <ProjectCards headingLevel="h2" reveal={false} />
        </div>
      </section>

      <CtaBand
        title="Could your business be next?"
        lead="Tell me what you need. The first chat is free."
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

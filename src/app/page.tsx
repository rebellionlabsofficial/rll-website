import Hero from "@/components/Hero";
import ButtonLink from "@/components/ButtonLink";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import ProcessSteps from "@/components/ProcessSteps";
import ProjectCards from "@/components/ProjectCards";
import SectionHeading from "@/components/SectionHeading";
import ServiceCards from "@/components/ServiceCards";
import Strengths from "@/components/Strengths";
import { PRICE_NOTE, SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/metadata";
import { founder, organization, website } from "@/lib/structured-data";

export const metadata = pageMetadata({
  description: SITE.description,
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={[organization, founder, website]} />
      <Hero />

      <section className="border-t border-line py-24 sm:py-32">
        <div className="container-page">
          <div className="reveal flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              eyebrow="What we do"
              title={
                <>
                  Three ways we can{" "}
                  <span className="accent text-lion">help.</span>
                </>
              }
              lead={PRICE_NOTE}
            />
            <ButtonLink href="/services" variant="secondary">
              All services and prices
            </ButtonLink>
          </div>
          <div className="mt-14">
            <ServiceCards />
          </div>
        </div>
      </section>

      <section className="bg-canvas-deep py-24 sm:py-32">
        <div className="container-page">
          <div className="reveal flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              eyebrow="Recent work"
              title={
                <>
                  Built for real{" "}
                  <span className="accent text-lion">businesses.</span>
                </>
              }
              lead="Websites, an app and AI set-ups for businesses in Cork and beyond."
            />
            <ButtonLink href="/work" variant="secondary">
              See all the work
            </ButtonLink>
          </div>
          <div className="mt-14">
            <ProjectCards
              slugs={["padlr", "your-best-life", "all-about-cork"]}
            />
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="reveal lg:col-span-4">
            <SectionHeading
              eyebrow="Why work with us"
              title={
                <>
                  Straight answers,{" "}
                  <span className="accent text-lion">solid work.</span>
                </>
              }
            />
          </div>
          <div className="lg:col-span-8">
            <Strengths />
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-white/50 py-24 sm:py-32">
        <div className="container-page">
          <div className="reveal">
            <SectionHeading
              eyebrow="How it works"
              title={
                <>
                  From first chat to{" "}
                  <span className="accent text-lion">launch.</span>
                </>
              }
            />
          </div>
          <div className="mt-14">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <CtaBand
        title="Got a project in mind?"
        logo
        lead="Tell us what you need. The first chat is free, and you'll get a straight answer on whether we can help."
      >
        <ButtonLink href="#enquire" variant="light" size="lg">
          Send an enquiry
        </ButtonLink>
        <ButtonLink
          href={`mailto:${SITE.email}`}
          variant="ghost-dark"
          size="lg"
          icon="mail"
        >
          Email us
        </ButtonLink>
      </CtaBand>
    </>
  );
}

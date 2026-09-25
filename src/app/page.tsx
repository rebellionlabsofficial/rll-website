import Hero from "@/components/Hero";
import CountryMarquee from "@/components/CountryMarquee";
import PillarCards from "@/components/PillarCards";
import FeaturedProduct from "@/components/FeaturedProduct";
import SectionHeading from "@/components/SectionHeading";
import Roadmap from "@/components/Roadmap";
import CtaBand from "@/components/CtaBand";
import ButtonLink from "@/components/ButtonLink";
import JsonLd from "@/components/JsonLd";
import { PADLR, SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/metadata";
import { organization, website } from "@/lib/structured-data";

export const metadata = pageMetadata({
  description: SITE.description,
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={[organization, website]} />
      <Hero />

      <section
        aria-label="Where PADLR. is launching"
        className="border-y border-line bg-white/40"
      >
        <div className="container-page flex items-center gap-8 py-5">
          <p className="eyebrow hidden shrink-0 text-ink sm:block">
            Launching in {PADLR.countries.length} countries
          </p>
          <CountryMarquee countries={PADLR.countries} />
        </div>
      </section>

      <PillarCards />
      <FeaturedProduct />

      <section className="py-24 sm:py-32">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="reveal lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                eyebrow="What's next"
                title={
                  <>
                    Building{" "}
                    <span className="accent text-lion">sport by sport.</span>
                  </>
                }
                lead="What's coming to PADLR. after launch, and what Rebel Lion Labs plans to build next."
              />
              <ButtonLink
                href="/products#roadmap"
                variant="secondary"
                className="mt-9"
              >
                Full roadmap
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <Roadmap />
          </div>
        </div>
      </section>

      <CtaBand
        title="Talk to us."
        lead="We'd like to hear from players, clubs, partners and investors. Use the contact form or send us an email."
      >
        <ButtonLink href="/contact" variant="light" size="lg">
          Get in touch
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

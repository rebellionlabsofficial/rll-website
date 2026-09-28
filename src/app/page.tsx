import Hero from "@/components/Hero";
import CountryMarquee from "@/components/CountryMarquee";
import PillarCards from "@/components/PillarCards";
import FeaturedProduct from "@/components/FeaturedProduct";
import CtaBand from "@/components/CtaBand";
import ButtonLink from "@/components/ButtonLink";
import JsonLd from "@/components/JsonLd";
import { PADLR, PADLR_LAUNCHED, SITE } from "@/lib/constants";
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
        aria-label={
          PADLR_LAUNCHED
            ? "Where PADLR. is available"
            : "Where PADLR. is launching"
        }
        className="border-y border-line bg-white/40"
      >
        <div className="container-page flex items-center gap-8 py-5">
          <p className="eyebrow hidden shrink-0 text-ink sm:block">
            {PADLR_LAUNCHED ? "Available" : "Launching"} in{" "}
            {PADLR.countries.length} countries
          </p>
          <CountryMarquee countries={PADLR.countries} />
        </div>
      </section>

      <PillarCards />
      <FeaturedProduct />

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

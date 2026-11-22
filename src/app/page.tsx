import Hero from "@/components/Hero";
import PillarCards from "@/components/PillarCards";
import FeaturedProduct from "@/components/FeaturedProduct";
import CtaBand from "@/components/CtaBand";
import ButtonLink from "@/components/ButtonLink";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/constants";
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

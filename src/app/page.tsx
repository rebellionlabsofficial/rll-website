import Link from "next/link";
import Hero from "@/components/Hero";
import PillarCards from "@/components/PillarCards";
import FeaturedProduct from "@/components/FeaturedProduct";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Home() {
  return (
    <>
      <Hero />
      <PillarCards />
      <FeaturedProduct />

      {/* Partner CTA */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollAnimation>
            <h2 className="font-heading text-3xl font-bold text-text-heading md:text-4xl">
              Interested in What We&apos;re Building?
            </h2>
            <p className="mt-4 text-text-body">
              Whether you&apos;re a player, a partner, or just curious — we&apos;d
              love to hear from you.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-brand-red px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-brand-red-dark"
            >
              Get in Touch
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}

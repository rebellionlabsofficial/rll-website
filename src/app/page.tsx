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

      {/* Vision Teaser */}
      <section className="relative overflow-hidden bg-surface-grey py-24 px-6">
        {/* Decorative gradient accent */}
        <div className="gradient-blur top-0 right-0 h-[400px] w-[400px] bg-[#8B1A1A] opacity-[0.06]" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <ScrollAnimation>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-red">
              What&apos;s Next
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold text-text-heading md:text-4xl">
              This Is Just the Beginning
            </h2>
            <p className="mt-4 text-lg text-text-body">
              PADLR is our first step. We&apos;re building a family of sports
              apps — each one designed to be the ultimate companion for players
              of that sport. More apps, more sports, and exclusive merch are on
              the horizon.
            </p>
          </ScrollAnimation>
        </div>
      </section>

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

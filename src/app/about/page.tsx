import type { Metadata } from "next";
import ScrollAnimation from "@/components/ScrollAnimation";
import PillarCards from "@/components/PillarCards";

export const metadata: Metadata = {
  title: "About",
  description:
    "Rebel Lion Labs builds sports apps with the passion of a player. Learn about our mission to bridge the gap between sports and technology.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden px-6 pt-20">
        {/* Decorative gradient accents */}
        <div className="gradient-blur -top-20 -left-20 h-[400px] w-[400px] bg-[#8B1A1A] opacity-[0.08]" />
        <div className="gradient-blur -bottom-20 -right-20 h-[350px] w-[350px] bg-[#D4856A] opacity-[0.06]" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <ScrollAnimation>
            <h1 className="font-heading text-5xl font-bold leading-tight text-text-heading md:text-7xl">
              Built from Passion,{" "}
              <span className="text-brand-red">Driven by Purpose</span>
            </h1>
          </ScrollAnimation>
        </div>
      </section>

      {/* Founder Story */}
      <section className="bg-surface-grey py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollAnimation>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-red">
              Our Story
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold text-text-heading">
              Born on the Court
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.15}>
            <div className="mt-8 space-y-6 text-text-body leading-relaxed">
              <p>
                Rebel Lion Labs was born out of frustration. A lifelong sports
                player who had tried every app, every tracker, every platform —
                and none of them got it right. The passion that players bring to
                the court was never reflected in the tools built to serve them.
              </p>
              <p>
                Generic fitness apps with sport bolted on as an afterthought.
                Rating systems that felt like black boxes. Communities
                fragmented across a dozen different platforms. Players deserved
                better.
              </p>
              <p>
                So we set out to build what should have existed all along: apps
                made specifically for the players, by someone who understands
                what it means to compete, to improve, and to be part of a
                sporting community.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Values — reuse PillarCards */}
      <PillarCards />

      {/* Vision */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollAnimation>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-red">
              Our Vision
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold text-text-heading">
              The One-Stop Shop for Every Sport
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.15}>
            <div className="mt-8 space-y-6 text-text-body leading-relaxed">
              <p>
                We&apos;re not building one app. We&apos;re building a family of
                apps — each one purpose-built for a specific sport, each one
                designed to be the ultimate companion for players of that game.
              </p>
              <p>
                Starting with padel and expanding sport by sport, Rebel Lion
                Labs is on a mission to become the home of sports technology
                that actually understands its players. Ratings, communities,
                stats, and gear — all in one place, for every sport.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}

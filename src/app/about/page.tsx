import type { Metadata } from "next";
import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";
import PillarCards from "@/components/PillarCards";
import PadlrName from "@/components/PadlrName";

export const metadata: Metadata = {
  title: "About Us — Sports App Development Studio",
  description:
    "Rebel Lion Labs is a sports app development studio building player-first mobile apps. Starting with padel — the world's fastest-growing racquet sport — we create technology that matches the passion of players and fans.",
  keywords:
    "sports app development, padel app, sports technology startup, mobile app studio, padel technology, racquet sports app, sports software development",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden px-6 pt-20">
        <div className="gradient-blur -top-20 -left-20 h-[400px] w-[400px] bg-[#8B1A1A] opacity-[0.08]" />
        <div className="gradient-blur -bottom-20 -right-20 h-[350px] w-[350px] bg-[#D4856A] opacity-[0.06]" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <ScrollAnimation>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-red">
              About Rebel Lion Labs
            </span>
            <h1 className="mt-4 font-heading text-5xl font-bold leading-tight text-text-heading md:text-7xl">
              Built from Passion,{" "}
              <span className="text-brand-red">Driven by Purpose</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-text-body">
              We&apos;re a sports app development studio on a mission to build
              technology that matches the passion of the people who play.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Origin Story */}
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
                Rebel Lion Labs was born out of frustration. As a lifelong sports
                player who had tried every app, every tracker, and every platform
                — none of them got it right. The passion that players bring to
                the court was never reflected in the tools built to serve them.
              </p>
              <p>
                Generic fitness apps with sport bolted on as an afterthought.
                Rating systems that felt like black boxes. Communities fragmented
                across a dozen different platforms. Players deserved better —
                they deserved apps built specifically for their sport, by someone
                who truly understands the game.
              </p>
              <p>
                That frustration became a mission. Rebel Lion Labs was founded to
                build what should have existed all along: dedicated sports apps
                crafted for the players, by a player. Apps that understand the
                culture, the competition, and the community that makes each
                sport special.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* The Padel Opportunity */}
      <section className="relative overflow-hidden py-24 px-6">
        <div className="gradient-blur top-0 right-0 h-[400px] w-[400px] bg-[#8B1A1A] opacity-[0.05]" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <ScrollAnimation>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-red">
              Why Padel First
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold text-text-heading md:text-4xl">
              The World&apos;s Fastest-Growing Racquet Sport
            </h2>
          </ScrollAnimation>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <ScrollAnimation delay={0}>
              <div className="rounded-2xl bg-surface-grey p-8 text-center">
                <p className="font-heading text-4xl font-bold text-brand-red">
                  25M+
                </p>
                <p className="mt-2 text-sm text-text-body">
                  Active padel players worldwide and growing rapidly year over
                  year
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.15}>
              <div className="rounded-2xl bg-surface-grey p-8 text-center">
                <p className="font-heading text-4xl font-bold text-brand-red">
                  90+
                </p>
                <p className="mt-2 text-sm text-text-body">
                  Countries where padel is now played, with new courts opening
                  daily
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.3}>
              <div className="rounded-2xl bg-surface-grey p-8 text-center">
                <p className="font-heading text-4xl font-bold text-brand-red">
                  #1
                </p>
                <p className="mt-2 text-sm text-text-body">
                  Fastest-growing sport in Europe, Latin America, and the Middle
                  East
                </p>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation delay={0.15}>
            <div className="mx-auto mt-12 max-w-3xl space-y-6 text-text-body leading-relaxed">
              <p>
                Padel is exploding globally — yet the technology serving its
                players hasn&apos;t kept up. Most padel players still track
                matches in group chats, argue about skill levels without any
                data, and have no way to find opponents at their level.
              </p>
              <p>
                We saw an opportunity to build the definitive digital platform
                for padel players. That&apos;s why{" "}
                <PadlrName dotColor="text-[#C8FF00]" /> — our rating-first
                padel app — is our debut product. It&apos;s the app we wished
                existed when we stepped onto the court.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* What We Build */}
      <section className="relative overflow-hidden bg-[#080809] py-24 px-6">
        <div className="gradient-blur top-0 left-0 h-[400px] w-[400px] bg-[#C8FF00] opacity-[0.06]" />
        <div className="gradient-blur bottom-0 right-0 h-[300px] w-[300px] bg-[#C8FF00] opacity-[0.04]" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <ScrollAnimation>
            <span className="text-sm font-semibold uppercase tracking-wider text-[#C8FF00]">
              What We Build
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold text-white md:text-4xl">
              Our Debut:{" "}
              <PadlrName className="text-white" dotColor="text-[#C8FF00]" />
            </h2>
          </ScrollAnimation>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <ScrollAnimation delay={0.15}>
              <div className="space-y-6 text-white/80 leading-relaxed">
                <p>
                  <PadlrName dotColor="text-[#C8FF00]" /> is a rating-first
                  padel app that gives every player a transparent, Bayesian-powered
                  skill rating. No more guesswork. No more black boxes. Just
                  a clear number that reflects how you play.
                </p>
                <p>
                  Beyond ratings, it&apos;s a complete padel companion — match
                  logging in 30 seconds, leaderboards across 23 countries, a
                  social feed to stay connected with your community, and badges
                  that celebrate your milestones.
                </p>
                <p>
                  <PadlrName dotColor="text-[#C8FF00]" /> launches Spring 2026
                  on iOS, with Apple Watch and HealthKit integration coming later
                  that year.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.3}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: "0–7", label: "Bayesian skill rating scale" },
                  { stat: "30s", label: "To log a match" },
                  { stat: "23", label: "Countries on leaderboards" },
                  { stat: "5", label: "Badge rarity tiers" },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/10 bg-white/5 p-6 text-center"
                  >
                    <p className="font-heading text-2xl font-bold text-[#C8FF00]">
                      {item.stat}
                    </p>
                    <p className="mt-1 text-xs text-white/50">{item.label}</p>
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation delay={0.15}>
            <div className="mt-10">
              <a
                href="https://playpadlr.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-[#C8FF00] px-8 py-3 text-sm font-semibold text-[#080809] transition-all duration-300 hover:scale-105 hover:bg-[#D4FF33]"
              >
                Visit PADLR.
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Values */}
      <PillarCards />

      {/* Vision */}
      <section className="relative overflow-hidden py-24 px-6">
        <div className="gradient-blur bottom-0 left-0 h-[400px] w-[400px] bg-[#8B1A1A] opacity-[0.05]" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <ScrollAnimation>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-red">
              Our Vision
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold text-text-heading">
              One Sport at a Time
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.15}>
            <div className="mt-8 space-y-6 text-text-body leading-relaxed">
              <p>
                We&apos;re not building one app — we&apos;re building a family
                of apps. Each one purpose-built for a specific sport, each one
                designed to be the ultimate digital companion for players of
                that game.
              </p>
              <p>
                Starting with padel and expanding sport by sport, Rebel Lion
                Labs is on a mission to become the home of sports technology
                that truly understands its players. Ratings, communities, stats,
                and gear — all in one place, for every sport.
              </p>
              <p>
                As our community grows, so will our offering — including
                exclusive merch and apparel designed for the players who live and
                breathe their sport.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-grey py-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollAnimation>
            <h2 className="font-heading text-3xl font-bold text-text-heading md:text-4xl">
              Want to Be Part of the Journey?
            </h2>
            <p className="mt-4 text-text-body">
              Whether you&apos;re a player, a partner, or an investor — we&apos;d
              love to connect.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-brand-red px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-brand-red-dark"
              >
                Get in Touch
              </Link>
              <Link
                href="/products"
                className="inline-block rounded-full border border-brand-red px-8 py-3 text-sm font-semibold text-brand-red transition-all duration-300 hover:bg-brand-red hover:text-white"
              >
                View Our Products
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}

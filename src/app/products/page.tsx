import type { Metadata } from "next";
import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";
import PadlrName from "@/components/PadlrName";

export const metadata: Metadata = {
  title: "Our Apps — Sports Apps Built for Players",
  description:
    "Explore sports apps by Rebel Lion Labs. PADLR. is our rating-first padel app with Bayesian skill ratings, match logging, leaderboards across 23 countries, and a thriving player community. Launching Spring 2026.",
  keywords:
    "padel app, padel rating app, padel score tracker, sports apps, padel leaderboard, padel community app, Bayesian rating padel, racquet sports app",
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-32 pb-16">
        <div className="gradient-blur -top-20 -right-20 h-[350px] w-[350px] bg-[#8B1A1A] opacity-[0.07]" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <ScrollAnimation>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-red">
              Our Products
            </span>
            <h1 className="mt-4 font-heading text-5xl font-bold text-text-heading md:text-6xl">
              Sports Apps That{" "}
              <span className="text-brand-red">Get It</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-body">
              Every app we build is purpose-made for a single sport. No
              generic fitness trackers. No one-size-fits-all platforms. Just
              dedicated tools built by people who actually play.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* PADLR. Flagship Section */}
      <section className="relative overflow-hidden bg-[#080809] py-24 px-6">
        <div className="gradient-blur top-0 left-0 h-[500px] w-[500px] bg-[#C8FF00] opacity-[0.07]" />
        <div className="gradient-blur bottom-0 right-0 h-[400px] w-[400px] bg-[#C8FF00] opacity-[0.05]" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <ScrollAnimation>
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
              <PadlrName className="text-white" dotColor="text-[#C8FF00]" />
            </h2>
            <p className="mt-2 text-sm text-[#C8FF00]">
              Your Rating. Your Game. Your Community.
            </p>
          </ScrollAnimation>

          <div className="mt-12 grid gap-12 md:grid-cols-2">
            {/* Left - Description */}
            <ScrollAnimation delay={0.15}>
              <div className="space-y-6 text-white/80 leading-relaxed">
                <p>
                  <PadlrName dotColor="text-[#C8FF00]" /> is the rating-first
                  padel app — built to give every player a transparent,
                  mathematically sound skill rating. Powered by Bayesian
                  algorithms that account for score margins, opponent strength,
                  and team dynamics, your rating tells the truth about your game.
                </p>
                <p>
                  But it&apos;s more than a number.{" "}
                  <PadlrName dotColor="text-[#C8FF00]" /> is a complete padel
                  companion. Log matches in 30 seconds, climb leaderboards
                  across 23 countries, connect with your community through a
                  social feed of match cards, and collect badges as you hit
                  milestones.
                </p>
                <p>
                  Whether you&apos;re a casual weekend player or grinding for the
                  top of the leaderboard,{" "}
                  <PadlrName dotColor="text-[#C8FF00]" /> is designed to make
                  your padel experience better.
                </p>
                <a
                  href="https://playpadlr.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block rounded-full bg-[#C8FF00] px-8 py-3 text-sm font-semibold text-[#080809] transition-all duration-300 hover:scale-105 hover:bg-[#D4FF33]"
                >
                  Visit PADLR. Website
                </a>
              </div>
            </ScrollAnimation>

            {/* Right - Features */}
            <ScrollAnimation delay={0.3}>
              <div className="space-y-4">
                {[
                  {
                    title: "Bayesian Skill Ratings",
                    desc: "A transparent 0-7 rating that reflects how you actually play — no black boxes, no guesswork",
                  },
                  {
                    title: "Global Leaderboards",
                    desc: "Compete across global, country, city, and friend-based rankings — see where you stand at every level",
                  },
                  {
                    title: "Social Match Feed",
                    desc: "Every match becomes a card in your feed — scores, rating changes, reactions, and comments from your community",
                  },
                  {
                    title: "Player Discovery",
                    desc: "Find opponents at your skill level nearby — no more mismatched games or empty courts",
                  },
                ].map((feature, i) => (
                  <div
                    key={feature.title}
                    className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#C8FF00]" />
                      <div>
                        <h3 className="text-sm font-semibold text-white">
                          {feature.title}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-white/50">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          </div>

          {/* Stats Row */}
          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { stat: "0–7", label: "Skill rating scale" },
              { stat: "30s", label: "To log a match" },
              { stat: "23", label: "Countries" },
              { stat: "5", label: "Badge rarity tiers" },
            ].map((item) => (
              <ScrollAnimation key={item.label} delay={0.15}>
                <div className="rounded-xl border border-white/10 bg-white/5 py-6 text-center">
                  <p className="font-heading text-3xl font-bold text-[#C8FF00]">
                    {item.stat}
                  </p>
                  <p className="mt-1 text-xs text-white/40">{item.label}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>

        </div>
      </section>

      {/* Roadmap / What's Coming */}
      <section className="relative overflow-hidden py-24 px-6">
        <div className="gradient-blur bottom-0 -left-20 h-[300px] w-[300px] bg-[#8B1A1A] opacity-[0.05]" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <ScrollAnimation>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-red">
              Roadmap
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold text-text-heading md:text-4xl">
              What&apos;s Coming Next
            </h2>
            <p className="mt-4 max-w-2xl text-text-body">
              We&apos;re building sport by sport. Here&apos;s what&apos;s on the
              horizon for Rebel Lion Labs.
            </p>
          </ScrollAnimation>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <ScrollAnimation delay={0}>
              <div className="rounded-2xl border-l-4 border-l-[#C8FF00] bg-surface-grey p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C8FF00]">
                  Spring 2026
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold text-text-heading">
                  <PadlrName dotColor="text-[#C8FF00]" /> iOS Launch
                </h3>
                <p className="mt-2 text-sm text-text-body">
                  Full release of the rating-first padel app on the App Store.
                  Ratings, match logging, leaderboards, social feed, and badges.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.15}>
              <div className="rounded-2xl border-l-4 border-l-brand-red bg-surface-grey p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-red">
                  Summer 2026
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold text-text-heading">
                  Apple Watch & HealthKit
                </h3>
                <p className="mt-2 text-sm text-text-body">
                  Track your padel sessions from your wrist. Heart rate, calories,
                  and session duration synced automatically with your{" "}
                  <PadlrName dotColor="text-[#C8FF00]" /> profile.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.3}>
              <div className="rounded-2xl border-l-4 border-l-text-light bg-surface-grey p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-text-light">
                  Future
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold text-text-heading">
                  More Sports & Merch
                </h3>
                <p className="mt-2 text-sm text-text-body">
                  New sports, new apps — each one purpose-built for its players.
                  Plus exclusive merch and apparel for the community.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-grey py-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollAnimation>
            <h2 className="font-heading text-3xl font-bold text-text-heading md:text-4xl">
              Want to Know When We Launch?
            </h2>
            <p className="mt-4 text-text-body">
              Drop us a message and be the first to know when{" "}
              <PadlrName dotColor="text-[#C8FF00]" /> hits the App Store.
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

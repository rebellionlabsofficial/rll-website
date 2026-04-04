"use client";

import ScrollAnimation from "@/components/ScrollAnimation";
import PadlrName from "@/components/PadlrName";
import { PRODUCTS } from "@/lib/constants";

export default function FeaturedProduct() {
  const product = PRODUCTS[0];

  return (
    <section className="relative overflow-hidden bg-[#080809] py-16 px-6">
      {/* Decorative gradient accents */}
      <div className="gradient-blur top-0 right-0 h-[500px] w-[500px] bg-[#C8FF00] opacity-[0.07]" />
      <div className="gradient-blur bottom-0 left-0 h-[400px] w-[400px] bg-[#C8FF00] opacity-[0.05]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <ScrollAnimation>
          <span className="text-sm font-semibold uppercase tracking-wider text-[#C8FF00]">
            Featured Product
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-white md:text-4xl">
            <PadlrName dotColor="text-[#C8FF00]" />
          </h2>
          <p className="mt-1 text-lg text-white/70">{product.tagline}</p>
        </ScrollAnimation>

        <div className="mt-0 grid items-center gap-12 md:grid-cols-2">
          <ScrollAnimation delay={0.15}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <p className="text-white/80 leading-relaxed">
                {product.description}
              </p>
              <ul className="mt-6 space-y-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#C8FF00]" />
                    <span className="text-white/70">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center gap-4">
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-[#C8FF00] px-6 py-2.5 text-sm font-semibold text-[#080809] transition-all duration-300 hover:scale-105 hover:bg-[#D4FF33]"
                >
                  Learn More
                </a>
                <span className="rounded-full border border-[#C8FF00]/30 bg-[#C8FF00]/10 px-4 py-1.5 text-xs font-medium text-[#C8FF00]">
                  {product.status}
                </span>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.3}>
            <div className="relative flex items-center justify-center py-8">
              <div className="relative flex h-[480px] w-[240px] items-center justify-center rounded-[2.5rem] border border-white/10 bg-white/5 shadow-lg shadow-[#C8FF00]/5">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#C8FF00] text-3xl font-bold text-[#080809] font-heading">
                    P
                  </div>
                  <p className="text-sm text-white/40">
                    App preview coming soon
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

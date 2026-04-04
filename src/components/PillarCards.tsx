"use client";

import ScrollAnimation from "@/components/ScrollAnimation";
import { PILLARS } from "@/lib/constants";

export default function PillarCards() {
  return (
    <section className="relative overflow-hidden bg-surface-grey py-24 px-6">
      {/* Decorative gradient blur orbs */}
      <div className="gradient-blur -top-40 -right-40 h-[500px] w-[500px] bg-[#8B1A1A] opacity-[0.06]" />
      <div className="gradient-blur -bottom-32 -left-32 h-[400px] w-[400px] bg-[#D4856A] opacity-[0.05]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <ScrollAnimation>
          <h2 className="font-heading text-3xl font-bold text-text-heading md:text-4xl">
            What Drives Us
          </h2>
          <p className="mt-4 max-w-xl text-text-body">
            Every app we build starts with three core principles.
          </p>
        </ScrollAnimation>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {PILLARS.map((pillar, index) => (
            <ScrollAnimation key={pillar.number} delay={index * 0.15} className="flex">
              <div className="group flex flex-1 flex-col rounded-2xl border-l-4 border-l-transparent bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-l-brand-red hover:shadow-md">
                <span className="text-sm font-medium text-brand-red">
                  {pillar.number}/{pillar.total}
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold text-text-heading">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-body">
                  {pillar.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}

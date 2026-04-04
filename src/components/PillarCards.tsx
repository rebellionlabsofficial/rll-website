"use client";

import ScrollAnimation from "@/components/ScrollAnimation";
import { PILLARS } from "@/lib/constants";

export default function PillarCards() {
  return (
    <section className="bg-surface-grey py-24 px-6">
      <div className="mx-auto max-w-6xl">
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
            <ScrollAnimation key={pillar.number} delay={index * 0.15}>
              <div className="group rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
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

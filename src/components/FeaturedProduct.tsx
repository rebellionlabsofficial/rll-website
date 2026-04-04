"use client";

import ScrollAnimation from "@/components/ScrollAnimation";
import { PRODUCTS } from "@/lib/constants";

export default function FeaturedProduct() {
  const product = PRODUCTS[0];

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <ScrollAnimation>
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-red">
            Featured Product
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-text-heading md:text-4xl">
            {product.name}
          </h2>
          <p className="mt-2 text-lg text-text-body">{product.tagline}</p>
        </ScrollAnimation>

        <div className="mt-12 grid items-center gap-12 md:grid-cols-2">
          <ScrollAnimation delay={0.15}>
            <div className="rounded-2xl bg-surface-grey p-8">
              <p className="text-text-body leading-relaxed">
                {product.description}
              </p>
              <ul className="mt-6 space-y-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-brand-red" />
                    <span className="text-text-body">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center gap-4">
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-brand-red px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-brand-red-dark"
                >
                  Learn More
                </a>
                <span className="rounded-full bg-brand-red/10 px-4 py-1.5 text-xs font-medium text-brand-red">
                  {product.status}
                </span>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.3}>
            <div className="flex aspect-square items-center justify-center rounded-2xl bg-surface-grey">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-red text-3xl font-bold text-white font-heading">
                  P
                </div>
                <p className="text-sm text-text-light">
                  App preview coming soon
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

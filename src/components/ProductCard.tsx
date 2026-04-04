"use client";

import ScrollAnimation from "@/components/ScrollAnimation";

interface ProductCardProps {
  name: string;
  tagline: string;
  description: string;
  status: string;
  href: string;
  features: readonly string[];
  delay?: number;
}

export default function ProductCard({
  name,
  tagline,
  description,
  status,
  href,
  features,
  delay = 0,
}: ProductCardProps) {
  return (
    <ScrollAnimation delay={delay}>
      <div className="group rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-heading text-2xl font-bold text-text-heading">
              {name}
            </h3>
            <p className="mt-1 text-sm text-brand-red">{tagline}</p>
          </div>
          <span className="rounded-full bg-brand-red/10 px-3 py-1 text-xs font-medium text-brand-red">
            {status}
          </span>
        </div>

        <p className="mt-4 text-text-body leading-relaxed">{description}</p>

        <ul className="mt-6 space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm">
              <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-brand-red" />
              <span className="text-text-body">{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-brand-red px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-brand-red-dark"
        >
          Visit Website
        </a>
      </div>
    </ScrollAnimation>
  );
}

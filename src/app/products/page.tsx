import type { Metadata } from "next";
import ScrollAnimation from "@/components/ScrollAnimation";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore apps by Rebel Lion Labs. PADLR - the rating-first padel app with Bayesian skill ratings, leaderboards, and community features.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-32 pb-16">
        <div className="mx-auto max-w-6xl">
          <ScrollAnimation>
            <h1 className="font-heading text-5xl font-bold text-text-heading md:text-6xl">
              Our Products
            </h1>
            <p className="mt-4 max-w-xl text-lg text-text-body">
              Sports apps built with the passion of a player. Each one designed
              to be the ultimate companion for its sport.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-surface-grey py-24 px-6">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          {PRODUCTS.map((product, index) => (
            <ProductCard
              key={product.name}
              name={product.name}
              tagline={product.tagline}
              description={product.description}
              status={product.status}
              href={product.href}
              features={product.features}
              delay={index * 0.15}
            />
          ))}
        </div>
      </section>

      {/* More Coming */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollAnimation>
            <h2 className="font-heading text-3xl font-bold text-text-heading">
              More on the Way
            </h2>
            <p className="mt-4 text-text-body">
              We&apos;re expanding sport by sport. Have a sport you&apos;d love
              to see us build for? Let us know.
            </p>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import ButtonLink from "@/components/ButtonLink";
import Eyebrow from "@/components/Eyebrow";

export const metadata: Metadata = { title: "Page not found" };

// Rendered for any unmatched URL. Next.js serves it with a 404 status and a
// noindex tag, so it never shows up in search results.
export default function NotFound() {
  return (
    <section className="relative isolate overflow-clip pb-24 pt-32 sm:pb-32 sm:pt-36 lg:pt-44">
      <div
        aria-hidden="true"
        className="bg-grid mask-radial absolute inset-0 -z-10"
      />
      <div className="container-page">
        <div className="max-w-3xl">
          <Eyebrow className="rise">Error 404</Eyebrow>
          <h1 className="rise rise-d1 display mt-7 text-[clamp(3rem,7vw,5.5rem)]">
            That ball went <span className="accent text-lion">out.</span>
          </h1>
          <p className="rise rise-d2 mt-8 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            We can&apos;t find the page you were looking for. It may have moved,
            or the link might be wrong.
          </p>
          <div className="rise rise-d3 mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/" size="lg">
              Go to the home page
            </ButtonLink>
            <ButtonLink href="/products" variant="secondary" size="lg">
              See PADLR.
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import ScrollAnimation from "@/components/ScrollAnimation";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Rebel Lion Labs. Whether you're a player, a partner, or just curious — we'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <section className="px-6 pt-32 pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-2">
          {/* Left — info */}
          <ScrollAnimation>
            <div>
              <h1 className="font-heading text-5xl font-bold text-text-heading md:text-6xl">
                Let&apos;s Talk
              </h1>
              <p className="mt-4 text-lg text-text-body">
                Whether you&apos;re a player with feedback, a partner with an
                idea, or just curious about what we&apos;re building — drop us a
                line.
              </p>

              <div className="mt-12 space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-text-light">
                    Email
                  </h3>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="mt-1 block text-text-heading transition-colors hover:text-brand-red"
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right — form */}
          <ScrollAnimation delay={0.15}>
            <ContactForm />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

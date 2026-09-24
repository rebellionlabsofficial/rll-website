import ContactForm from "@/components/ContactForm";
import Eyebrow from "@/components/Eyebrow";
import Icon, { BrandIcon } from "@/components/Icon";
import { PADLR, SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with Rebel Lion Labs in Dublin, Ireland. Whether you're a player, a partner, an investor, or just curious — we'd love to hear from you.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="relative isolate overflow-clip pb-24 pt-32 sm:pb-32 sm:pt-36 lg:pt-44">
      <div
        aria-hidden="true"
        className="bg-grid mask-radial absolute inset-0 -z-10"
      />
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <Eyebrow className="rise">Contact</Eyebrow>
          <h1 className="rise rise-d1 display mt-7 text-[clamp(3rem,7vw,5.5rem)]">
            Let&apos;s <span className="accent text-lion">talk.</span>
          </h1>
          <p className="rise rise-d2 mt-8 max-w-md text-lg leading-relaxed text-ink-soft">
            Whether you&apos;re a player with feedback, a partner with an idea,
            or an investor curious about what we&apos;re building — drop us a
            line.
          </p>

          <ul className="rise rise-d3 mt-12 space-y-3">
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-4 pr-5 shadow-card transition-colors hover:border-line-strong"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lion-tint text-lion">
                  <Icon name="mail" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="eyebrow block text-ink-muted">Email</span>
                  <span className="mt-1 block truncate font-medium text-ink">
                    {SITE.email}
                  </span>
                </span>
                <Icon
                  name="arrow-right"
                  className="h-4 w-4 text-ink-muted transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </li>
            <li className="flex items-center gap-4 rounded-2xl border border-line bg-white/60 p-4 pr-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-canvas-deep text-ink">
                <Icon name="map-pin" />
              </span>
              <span>
                <span className="eyebrow block text-ink-muted">Studio</span>
                <span className="mt-1 block font-medium text-ink">
                  {SITE.location}
                </span>
              </span>
            </li>
            <li>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-line bg-white/60 p-4 pr-5 transition-colors hover:border-line-strong hover:bg-white"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-canvas-deep text-ink">
                  <BrandIcon name="linkedin" />
                </span>
                <span className="flex-1">
                  <span className="eyebrow block text-ink-muted">LinkedIn</span>
                  <span className="mt-1 block font-medium text-ink">
                    Rebel Lion Labs
                  </span>
                </span>
                <Icon
                  name="arrow-up-right"
                  className="h-4 w-4 text-ink-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>

          <div
            data-surface="dark"
            className="rise rise-d4 mt-8 rounded-2xl bg-padlr-ink p-6 text-white"
          >
            <p className="flex items-center gap-2 font-semibold">
              <Icon name="life-buoy" className="h-5 w-5 text-padlr-neon" />
              Need help with PADLR.?
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/65">
              Account, match, and subscription questions are answered fastest in
              the PADLR. support centre.
            </p>
            <a
              href={PADLR.links.support}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-padlr-neon underline-offset-4 hover:underline"
            >
              Visit PADLR. support
              <Icon name="arrow-up-right" className="h-4 w-4" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>

        <div className="rise rise-d2 lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

import ButtonLink from "@/components/ButtonLink";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import { SITE } from "@/lib/constants";

const POINTS = [
  "Free first chat, no obligation",
  "Fixed quote in writing before any work starts",
  "Based in Cork, working across Ireland",
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-clip pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-40">
      <div
        aria-hidden="true"
        className="bg-grid mask-radial absolute inset-0 -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute -left-40 -top-40 -z-10 h-[34rem] w-[34rem] rounded-full bg-lion/[0.07] blur-3xl"
      />

      <div className="container-page grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <p className="rise eyebrow inline-flex items-center gap-2.5 text-ink-muted">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-lion"
            />
            {SITE.short} · {SITE.location}
          </p>

          <h1 className="rise rise-d1 display mt-8 text-[clamp(3rem,6.4vw,5.25rem)]">
            Websites, apps and AI training for{" "}
            <span className="accent text-lion">Cork businesses.</span>
          </h1>

          <p className="rise rise-d2 mt-8 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            {SITE.name} is a studio in Cork. We build websites and apps for
            small businesses, and we set up AI tools like Copilot, ChatGPT,
            Claude and Gemini and train your team to use them well.
          </p>

          <ul className="rise rise-d2 mt-8 space-y-3">
            {POINTS.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 text-[15px] text-ink-soft"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lion-tint text-lion">
                  <Icon name="check" className="h-3.5 w-3.5" />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className="rise rise-d3 mt-10 flex flex-wrap items-center gap-3">
            <ButtonLink href="/work" variant="secondary" size="lg">
              See our work
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary" size="lg">
              Services and prices
            </ButtonLink>
          </div>
        </div>

        <div id="enquire" className="rise rise-d2 lg:col-span-6">
          <ContactForm title="Tell us about your project" compact />
        </div>
      </div>
    </section>
  );
}

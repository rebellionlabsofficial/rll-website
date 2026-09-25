import SectionHeading from "@/components/SectionHeading";
import { PILLARS } from "@/lib/constants";

const STAGGER = ["", "reveal-1", "reveal-2"];
const pad = (n: number) => String(n).padStart(2, "0");

export default function PillarCards() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-page">
        <div className="reveal">
          <SectionHeading
            eyebrow="What drives us"
            title={
              <>
                Every app starts with{" "}
                <span className="accent text-lion">the player.</span>
              </>
            }
            lead="Three ideas sit behind everything we build, whatever the sport."
          />
        </div>

        <ol className="mt-14 grid gap-5 md:grid-cols-3">
          {PILLARS.map((pillar, index) => (
            <li key={pillar.title} className={`reveal ${STAGGER[index]}`}>
              <div className="group relative flex h-full flex-col overflow-clip rounded-3xl border border-line bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-5xl italic leading-none text-lion">
                    {pad(index + 1)}
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.2em] text-ink-muted">
                    / {pad(PILLARS.length)}
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-semibold tracking-tight sm:mt-12">
                  {pillar.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">
                  {pillar.description}
                </p>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-lion transition-transform duration-500 group-hover:scale-x-100"
                />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

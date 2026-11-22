import { notFound } from "next/navigation";
import ButtonLink from "@/components/ButtonLink";
import CtaBand from "@/components/CtaBand";
import Eyebrow from "@/components/Eyebrow";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import ProcessSteps from "@/components/ProcessSteps";
import ProjectCards from "@/components/ProjectCards";
import SectionHeading from "@/components/SectionHeading";
import ServicePackages from "@/components/ServicePackages";
import { SERVICES, VAT_NOTE } from "@/lib/constants";
import { pageMetadata } from "@/lib/metadata";
import { SERVICE_PAGES, servicePage } from "@/lib/service-pages";
import { breadcrumbs, faqPage, serviceNode } from "@/lib/structured-data";

// Only the three services exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_PAGES.map((page) => ({ id: page.id }));
}

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props) {
  const page = servicePage((await params).id);
  if (!page) return {};
  return pageMetadata({
    title: page.metaTitle,
    absolute: true,
    description: page.metaDescription,
    path: `/services/${page.id}`,
  });
}

const QUESTIONS_HEADING = {
  websites: "Questions about websites",
  ai: "Questions about AI",
  apps: "Questions about apps",
} as const;

export default async function ServiceDetailPage({ params }: Props) {
  const page = servicePage((await params).id);
  const service = SERVICES.find((s) => s.id === page?.id);
  if (!page || !service) notFound();

  const path = `/services/${page.id}`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbs(["Services", "/services"], [service.title, path]),
          serviceNode(page),
          faqPage(page.faqs, path),
        ]}
      />

      <section className="relative isolate overflow-clip pb-16 pt-32 sm:pt-36 lg:pt-44">
        <div
          aria-hidden="true"
          className="bg-grid mask-radial absolute inset-0 -z-10"
        />
        <div className="container-page">
          <Eyebrow className="rise">{service.title}</Eyebrow>
          <h1 className="rise rise-d1 display mt-7 max-w-4xl text-[clamp(2.75rem,6vw,5rem)]">
            {page.heading[0]}{" "}
            <span className="accent text-lion">{page.heading[1]}</span>
          </h1>
          <p className="rise rise-d2 mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            {page.intro}
          </p>
          <div className="rise rise-d3 mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/contact" size="lg">
              {service.ask}
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary" size="lg">
              All services and prices
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="container-page">
          <div className="grid gap-10 rounded-[2rem] border border-line bg-white p-8 shadow-card sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-14">
            <div className="lg:col-span-5">
              <h2 className="heading text-3xl sm:text-4xl">
                {page.pricesHeading}
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Fixed quote in writing before any work starts. {VAT_NOTE}
              </p>
              <h3 className="eyebrow mt-8 text-ink-muted">
                What&apos;s covered
              </h3>
              <ul className="mt-5 space-y-3.5">
                {service.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 leading-relaxed text-ink-soft"
                  >
                    <Icon
                      name="check"
                      className="mt-1 h-4 w-4 shrink-0 text-lion"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <ServicePackages id={page.id} />
            </div>
          </div>
        </div>
      </section>

      {page.sections.map((section, index) => (
        <section
          key={section.heading}
          className={`py-20 sm:py-24 ${index % 2 ? "" : "border-t border-line bg-white/50"}`}
        >
          <div className="container-page grid gap-8 lg:grid-cols-12 lg:gap-10">
            <h2 className="reveal heading text-3xl sm:text-4xl lg:col-span-5">
              {section.heading}
            </h2>
            <div className="reveal reveal-1 space-y-5 text-lg leading-relaxed text-ink-soft lg:col-span-7">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets && (
                <ul className="space-y-3">
                  {section.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Icon
                        name="check"
                        className="mt-1.5 h-4 w-4 shrink-0 text-lion"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-line bg-canvas-deep py-24 sm:py-32">
        <div className="container-page">
          <div className="reveal">
            <SectionHeading eyebrow="Our work" title={page.proof.heading} />
          </div>
          <div className="mt-12">
            <ProjectCards slugs={page.proof.slugs} />
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-page">
          <div className="reveal">
            <SectionHeading eyebrow="How it works" title="How we work" />
          </div>
          <div className="mt-12">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-white/50 py-24 sm:py-32">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="reveal lg:col-span-4">
            <SectionHeading
              eyebrow="Questions"
              title={QUESTIONS_HEADING[page.id]}
            />
          </div>
          <div className="reveal reveal-1 divide-y divide-line border-y border-line lg:col-span-8">
            {page.faqs.map((faq) => (
              <div key={faq.question} className="py-6">
                <h3 className="text-lg font-semibold tracking-tight text-ink">
                  {faq.question}
                </h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-ink-soft">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Tell us what you need."
        lead="The first chat is free, and you'll get a straight answer on whether we can help."
        logo
      >
        <ButtonLink href="/contact" variant="light" size="lg">
          Send an enquiry
        </ButtonLink>
        <ButtonLink href="/services" variant="ghost-dark" size="lg">
          All services and prices
        </ButtonLink>
      </CtaBand>
    </>
  );
}

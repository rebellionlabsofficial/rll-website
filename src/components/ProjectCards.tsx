import Link from "next/link";
import Icon from "@/components/Icon";
import { PROJECTS } from "@/lib/constants";

const STAGGER = ["", "reveal-1", "reveal-2"];

interface ProjectCardsProps {
  /** Show only these projects, in this order. Defaults to all of them. */
  slugs?: readonly string[];
  /** h2 when the cards are the page's main content, h3 inside a section. */
  headingLevel?: "h2" | "h3";
  /** Fade in on scroll. Off where the cards are the first thing on the page. */
  reveal?: boolean;
}

function displayHost(url: string) {
  return new URL(url).host.replace(/^www\./, "");
}

export default function ProjectCards({
  slugs,
  headingLevel: Heading = "h3",
  reveal = true,
}: ProjectCardsProps) {
  const projects = slugs
    ? slugs.flatMap((slug) => PROJECTS.filter((p) => p.slug === slug))
    : PROJECTS;

  return (
    <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <li
          key={project.slug}
          id={project.slug}
          className={`${reveal ? `reveal ${STAGGER[index % 3]}` : ""} flex flex-col rounded-3xl border border-line bg-white p-7 shadow-card`}
        >
          <div className="flex flex-wrap items-center gap-2">
            {project.kinds.map((kind) => (
              <span
                key={kind}
                className="eyebrow rounded-full bg-canvas-deep px-3 py-1.5 text-ink-soft"
              >
                {kind}
              </span>
            ))}
            {!project.url && (
              <span className="eyebrow rounded-full border border-dashed border-line-strong px-3 py-1.5 text-ink-muted">
                Launching soon
              </span>
            )}
          </div>
          <Heading className="mt-6 text-xl font-semibold tracking-tight">
            {project.name}
          </Heading>
          <p className="mt-3 flex-1 leading-relaxed text-ink-soft">
            {project.summary}
          </p>
          {project.review && (
            <figure className="mt-5 border-l-2 border-lion pl-4">
              <blockquote className="text-[15px] italic leading-relaxed text-ink">
                “{project.review.quote}”
              </blockquote>
              <figcaption className="mt-2 text-sm text-ink-muted">
                {project.review.name}
              </figcaption>
            </figure>
          )}
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-5 text-sm font-medium">
            {project.page && (
              <Link
                href={project.page}
                className="inline-flex items-center gap-1.5 text-lion underline-offset-4 hover:underline"
              >
                Read the {project.name} case study
                <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
            )}
            {project.url && project.slug !== "rebel-lion-labs" && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-ink-soft underline-offset-4 hover:text-ink hover:underline"
              >
                {displayHost(project.url)}
                <Icon name="arrow-up-right" className="h-4 w-4" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
            {project.slug === "rebel-lion-labs" && (
              <span className="text-ink-muted">You&apos;re looking at it</span>
            )}
            {!project.url && (
              <span className="text-ink-muted">Link coming at launch</span>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

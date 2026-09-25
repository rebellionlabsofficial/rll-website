import Link from "next/link";
import Icon from "@/components/Icon";
import { PADLR_FAQS } from "@/lib/constants";

const linkClass =
  "mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-lion underline-offset-4 hover:underline";

// Native <details> needs no JavaScript, and search engines still read the
// answers while they are collapsed.
export default function Faq() {
  return (
    <div className="divide-y divide-line border-y border-line">
      {PADLR_FAQS.map((faq) => {
        const internal = faq.link.href.startsWith("/");
        return (
          <details key={faq.question} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-semibold tracking-tight text-ink transition-colors hover:text-lion [&::-webkit-details-marker]:hidden">
              {faq.question}
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line-strong text-ink-muted transition-transform duration-300 group-open:rotate-180 motion-reduce:transition-none"
              >
                <Icon name="chevron-down" className="h-4 w-4" />
              </span>
            </summary>
            <div className="max-w-2xl pb-7 sm:pr-12">
              <p className="leading-relaxed text-ink-soft">{faq.answer}</p>
              {internal ? (
                <Link href={faq.link.href} className={linkClass}>
                  {faq.link.label}
                  <Icon name="arrow-right" className="h-4 w-4" />
                </Link>
              ) : (
                <a
                  href={faq.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {faq.link.label}
                  <Icon name="arrow-up-right" className="h-4 w-4" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              )}
            </div>
          </details>
        );
      })}
    </div>
  );
}

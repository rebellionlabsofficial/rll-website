import Eyebrow from "@/components/Eyebrow";
import { PADLR, SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy Notice",
  description:
    "How Rebel Lion Labs handles personal data on rebellionlabs.app: what the contact form collects, why, who processes it, how long we keep it, and your rights under GDPR.",
  path: "/privacy",
});

const LAST_UPDATED = "24 September 2026";

const SUMMARY = [
  "We only collect what you choose to send us, through the contact form or by email.",
  "We use it to reply to you. We don't use it for marketing, and we never sell it.",
  "This website doesn't use cookies, analytics, advertising, or tracking.",
  "You can ask us to see, correct, or delete your data at any time.",
];

const SECTIONS = [
  { id: "who-we-are", title: "Who we are" },
  { id: "what-we-collect", title: "What we collect" },
  { id: "how-we-use-it", title: "How we use it, and why" },
  { id: "who-we-share-it-with", title: "Who we share it with" },
  { id: "international-transfers", title: "International transfers" },
  { id: "how-long-we-keep-it", title: "How long we keep it" },
  { id: "cookies", title: "Cookies and tracking" },
  { id: "your-rights", title: "Your rights" },
  { id: "children", title: "Children" },
  { id: "changes", title: "Changes to this notice" },
  { id: "contact", title: "Contact us" },
];

const PURPOSES = [
  {
    purpose: "Replying to your enquiry and any follow-up",
    data: "Your name, email address, the topic you choose, your message, and anything else you include in emails to us.",
    basis:
      "Our legitimate interest in responding to people who contact us (GDPR Article 6(1)(f)). If your enquiry is about working with us — a partnership, for example — taking the steps you've asked for before entering into a contract (Article 6(1)(b)).",
  },
  {
    purpose: "Delivering the website, keeping it secure, and filtering spam",
    data: "Technical details such as your IP address, browser type, and the pages requested, including those sent with a form submission.",
    basis:
      "Our legitimate interest in keeping the site available, secure, and free of abuse (Article 6(1)(f)).",
  },
  {
    purpose: "Meeting our legal obligations",
    data: "Only what the obligation requires.",
    basis:
      "Legal obligation (Article 6(1)(c)) — for example, responding to a lawful request from an authority.",
  },
];

const linkClass =
  "font-medium text-lion underline decoration-lion/30 underline-offset-4 transition-colors hover:decoration-lion";

export default function PrivacyPage() {
  return (
    <>
      <section className="relative isolate overflow-clip pb-14 pt-32 sm:pt-36 lg:pt-44">
        <div
          aria-hidden="true"
          className="bg-grid mask-radial absolute inset-0 -z-10"
        />
        <div className="container-page">
          <div className="max-w-3xl">
            <Eyebrow className="rise">Legal</Eyebrow>
            <h1 className="rise rise-d1 display mt-7 text-[clamp(2.75rem,6vw,4.75rem)]">
              Privacy <span className="accent text-lion">notice.</span>
            </h1>
            <p className="rise rise-d2 mt-6 font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">
              Last updated {LAST_UPDATED}
            </p>
            <p className="rise rise-d2 mt-6 text-lg leading-relaxed text-ink-soft">
              This notice explains how Rebel Lion Labs collects and uses
              personal data through this website, rebellionlabs.app. The PADLR.
              app and the PADLR. waitlist on playpadlr.app are covered by the{" "}
              <a
                href={PADLR.links.privacy}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                PADLR. Privacy Policy
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              .
            </p>
          </div>

          <div className="rise rise-d3 mt-10 max-w-3xl rounded-3xl border border-line bg-white p-7 shadow-card sm:p-8">
            <h2 className="text-lg font-semibold tracking-tight">
              The short version
            </h2>
            <ul className="mt-4 space-y-2.5">
              {SUMMARY.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 leading-relaxed text-ink-soft"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lion"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-line pb-24 pt-14 sm:pb-32">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-10">
          <nav aria-label="On this page" className="lg:col-span-3">
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow text-ink-muted">On this page</p>
              <ol className="mt-4 space-y-2 text-sm">
                {SECTIONS.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-ink-soft transition-colors hover:text-lion"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <article className="legal max-w-3xl lg:col-span-8 lg:col-start-5">
            <h2 id="who-we-are">Who we are</h2>
            <p>
              Rebel Lion Labs, based in {SITE.location}, is the controller of
              the personal data collected through this website. You can reach us
              at{" "}
              <a href={`mailto:${SITE.email}`} className={linkClass}>
                {SITE.email}
              </a>
              .
            </p>

            <h2 id="what-we-collect">What we collect</h2>
            <ul>
              <li>
                <strong>When you use the contact form:</strong> your name, email
                address, the topic you choose, and your message. Netlify, which
                receives the form for us, also records technical details sent
                with it, such as your IP address and browser type, and uses them
                to filter spam.
              </li>
              <li>
                <strong>When you email us:</strong> your email address, your
                name, and whatever you include in your message.
              </li>
              <li>
                <strong>When you visit the site:</strong> like any website, our
                hosting provider processes technical data such as your IP
                address, browser type, and the pages you request, so it can
                deliver the site and keep it secure. We don&apos;t use this to
                identify you.
              </li>
            </ul>
            <p>
              We don&apos;t ask for special categories of data, such as health
              information. Please don&apos;t include any in your message.
            </p>

            <h2 id="how-we-use-it">How we use it, and why</h2>
            <div className="mt-5 space-y-3">
              {PURPOSES.map((item) => (
                <div
                  key={item.purpose}
                  className="rounded-2xl border border-line bg-white p-5 sm:p-6"
                >
                  <h3 className="font-semibold tracking-tight">
                    {item.purpose}
                  </h3>
                  <dl className="mt-3 grid gap-3 text-[15px] leading-relaxed sm:grid-cols-[7.5rem_1fr] sm:gap-x-6">
                    <dt className="eyebrow pt-1 text-ink-muted">Data</dt>
                    <dd className="text-ink-soft">{item.data}</dd>
                    <dt className="eyebrow pt-1 text-ink-muted">Legal basis</dt>
                    <dd className="text-ink-soft">{item.basis}</dd>
                  </dl>
                </div>
              ))}
            </div>
            <p>
              We don&apos;t use your data for marketing, profiling, or automated
              decision-making, and we never sell it.
            </p>

            <h2 id="who-we-share-it-with">Who we share it with</h2>
            <p>
              We use two service providers, who process personal data on our
              behalf and under our instructions:
            </p>
            <ul>
              <li>
                <strong>Netlify, Inc. (USA)</strong> hosts this website and
                receives contact-form submissions for us.
              </li>
              <li>
                <strong>Google LLC (USA)</strong> provides the email service
                (Gmail) we use to read and answer messages.
              </li>
            </ul>
            <p>
              We may also disclose personal data where the law requires it, or
              where it&apos;s needed to establish, exercise, or defend legal
              claims.
            </p>

            <h2 id="international-transfers">International transfers</h2>
            <p>
              Netlify and Google are based in the United States, so your data
              may be transferred outside the European Economic Area. Where that
              happens, we rely on the EU-U.S. Data Privacy Framework for
              providers certified under it, and otherwise on the European
              Commission&apos;s Standard Contractual Clauses in the
              provider&apos;s data processing terms. Data travelling to and from
              this website is encrypted in transit (HTTPS).
            </p>

            <h2 id="how-long-we-keep-it">How long we keep it</h2>
            <ul>
              <li>
                <strong>Enquiries</strong> — form submissions and the emails
                that follow — are kept for up to 12 months after our last
                exchange, then deleted. We keep them longer only if your enquiry
                becomes an ongoing working relationship, or if we need them to
                establish, exercise, or defend legal claims.
              </li>
              <li>
                <strong>Technical data</strong> is handled by our hosting
                provider to deliver and protect the site. We don&apos;t keep our
                own visitor logs.
              </li>
            </ul>

            <h2 id="cookies">Cookies and tracking</h2>
            <p>
              This website doesn&apos;t set cookies, and it doesn&apos;t use
              analytics, advertising, or tracking technologies. Our fonts and
              images are served from this website, so browsing it doesn&apos;t
              send your data to third parties such as Google Fonts.
            </p>
            <p>
              Links to social networks and to playpadlr.app are ordinary links.
              Once you follow one, that site&apos;s own privacy policy applies.
            </p>

            <h2 id="your-rights">Your rights</h2>
            <p>Under the GDPR, you have the right to:</p>
            <ul>
              <li>access the personal data we hold about you;</li>
              <li>have inaccurate data corrected;</li>
              <li>have your data erased;</li>
              <li>restrict how we process it;</li>
              <li>
                object to processing based on our legitimate interests; and
              </li>
              <li>
                receive data you gave us in a portable format, where that right
                applies.
              </li>
            </ul>
            <p>
              To exercise any of these rights, email{" "}
              <a href={`mailto:${SITE.email}`} className={linkClass}>
                {SITE.email}
              </a>
              . We&apos;ll respond within one month, free of charge.
            </p>
            <p>
              You can also complain to a data protection supervisory authority.
              In Ireland, that&apos;s the{" "}
              <a
                href="https://www.dataprotection.ie"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Data Protection Commission
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              ; you can also contact the authority where you live or work.
            </p>

            <h2 id="children">Children</h2>
            <p>
              This website isn&apos;t directed at children under 16, and we
              don&apos;t knowingly collect their personal data. If you think a
              child has sent us their details, contact us and we&apos;ll delete
              them.
            </p>

            <h2 id="changes">Changes to this notice</h2>
            <p>
              We&apos;ll update this notice if the way we handle personal data
              changes. The date at the top shows when it was last revised.
            </p>

            <h2 id="contact">Contact us</h2>
            <p>
              Rebel Lion Labs
              <br />
              {SITE.location}
              <br />
              <a href={`mailto:${SITE.email}`} className={linkClass}>
                {SITE.email}
              </a>
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import Icon, { BrandIcon } from "@/components/Icon";
import { NAV_LINKS, PADLR, SITE } from "@/lib/constants";

const PADLR_LINKS = [
  { label: "Join the waitlist", href: PADLR.links.waitlist },
  { label: "playpadlr.app", href: PADLR.links.website },
  { label: "Support", href: PADLR.links.support },
  { label: "Privacy Policy", href: PADLR.links.privacy },
  { label: "Terms of Service", href: PADLR.links.terms },
  { label: "EULA", href: PADLR.links.eula },
];

const linkClass = "text-sm text-white/65 transition-colors hover:text-white";

export default function Footer() {
  return (
    <footer
      data-surface="dark"
      className="relative mt-3 overflow-clip bg-ink text-white sm:mt-4"
    >
      <div className="container-page grid gap-14 pb-12 pt-20 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-full"
          >
            <Image
              src="/brand/rll-shield-white.png"
              alt=""
              width={357}
              height={384}
              className="h-10 w-auto"
            />
            <span className="text-lg font-semibold tracking-tight">
              Rebel Lion{" "}
              <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-white/60">
                Labs
              </span>
            </span>
          </Link>
          <p className="mt-6 max-w-sm leading-relaxed text-white/65">
            Building sports apps that match the passion of players and fans.
            Home of PADLR.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2.5 text-white/80 transition-colors hover:text-white"
              >
                <Icon name="mail" className="h-4 w-4 text-white/50" />
                {SITE.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-2.5 text-white/65">
              <Icon name="map-pin" className="h-4 w-4 text-white/50" />
              {SITE.location}
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
          <nav aria-label="Footer">
            <h2 className="eyebrow text-white/50">Studio</h2>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-white/50">PADLR.</h2>
            <ul className="mt-5 space-y-3">
              {PADLR_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {link.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h2 className="eyebrow text-white/50">Connect</h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClass} inline-flex items-center gap-2`}
                >
                  <BrandIcon name="linkedin" className="h-4 w-4" />
                  Rebel Lion Labs
                  <span className="sr-only">
                    {" "}
                    on LinkedIn (opens in a new tab)
                  </span>
                </a>
              </li>
              <li>
                <Link href="/contact" className={linkClass}>
                  Partner with us
                </Link>
              </li>
            </ul>
            <p className="mt-8 text-xs text-white/50">Follow PADLR.</p>
            <ul className="mt-3 flex gap-2">
              {PADLR.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`PADLR. on ${social.label} (opens in a new tab)`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-padlr-neon hover:text-padlr-neon"
                  >
                    <BrandIcon name={social.icon} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="container-page">
        <p
          aria-hidden="true"
          className="pointer-events-none select-none whitespace-nowrap text-center font-serif text-[15.5vw] italic leading-[0.8] tracking-tight text-white/[0.06] lg:text-[11.5rem]"
        >
          Rebel Lion Labs
        </p>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Rebel Lion Labs. All rights
            reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              href="/privacy"
              className="underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              Privacy notice
            </Link>
            <p>PADLR. is a trademark of Rebel Lion Labs.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

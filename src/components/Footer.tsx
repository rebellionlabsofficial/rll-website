import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-text-heading text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Image
              src="/logo.png"
              alt="Rebel Lion Labs"
              width={48}
              height={48}
              className="mb-4 h-12 w-auto brightness-0 invert"
            />
            <p className="text-sm text-gray-400">
              Building sports apps that match the passion of players and fans.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Navigation
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Partner CTA */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Get in Touch
            </h3>
            <a
              href={`mailto:${SITE.email}`}
              className="text-sm text-gray-300 transition-colors hover:text-white"
            >
              {SITE.email}
            </a>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block rounded-full border border-brand-red bg-transparent px-6 py-2 text-sm font-medium text-brand-red transition-all hover:bg-brand-red hover:text-white"
              >
                Partner with Us
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Rebel Lion Labs. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

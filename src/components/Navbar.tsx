"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import { NAV_LINKS, PADLR } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const raised = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <nav
        aria-label="Main"
        className={`mx-auto flex max-w-page items-center justify-between rounded-full border py-2 pl-3 pr-2 transition-all duration-300 sm:pl-4 ${
          raised
            ? "border-line bg-white/80 shadow-card backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5 rounded-full"
        >
          <Image
            src="/brand/rll-shield.png"
            alt=""
            width={357}
            height={384}
            priority
            className="h-8 w-auto"
          />
          <span className="text-[15px] font-semibold tracking-tight text-ink">
            Rebel Lion{" "}
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-ink-muted">
              Labs
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-ink/[0.06] text-ink"
                      : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={PADLR.links.appStore}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden h-10 items-center gap-1.5 rounded-full bg-ink px-4 text-sm font-medium text-white transition-colors hover:bg-ink/85 sm:inline-flex"
          >
            Get PADLR.
            <Icon
              name="arrow-up-right"
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
            <span className="sr-only">
              {" "}
              on the App Store (opens in a new tab)
            </span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/[0.06] md:hidden"
          >
            <span aria-hidden="true" className="relative block h-3 w-5">
              <span
                className={`absolute left-0 top-0 h-[1.5px] w-5 rounded-full bg-current transition-transform duration-300 ${
                  open ? "translate-y-[5.25px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-[1.5px] w-5 rounded-full bg-current transition-transform duration-300 ${
                  open ? "-translate-y-[5.25px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="mx-auto mt-2 max-w-page rounded-[1.75rem] border border-line bg-white/95 p-2 shadow-lift backdrop-blur-xl md:hidden"
      >
        <ul>
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-medium tracking-tight transition-colors ${
                    active
                      ? "bg-canvas text-ink"
                      : "text-ink-soft hover:bg-canvas"
                  }`}
                >
                  {link.label}
                  <Icon name="arrow-right" className="h-4 w-4 text-ink-muted" />
                </Link>
              </li>
            );
          })}
        </ul>
        <a
          href={PADLR.links.appStore}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="mt-2 flex h-12 items-center justify-center gap-2 rounded-2xl bg-ink text-[15px] font-medium text-white"
        >
          Get PADLR. — free on the App Store
          <Icon name="arrow-up-right" className="h-4 w-4" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </header>
  );
}

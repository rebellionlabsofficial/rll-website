# Rebel Lion Labs Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a premium, multi-page marketing website for Rebel Lion Labs at rebellionlabs.app, inspired by WorldQuant Foundry's clean aesthetic.

**Architecture:** Next.js 14+ App Router with static generation (SSG) for all pages. Tailwind CSS for styling with a custom theme based on the brand's maroon/red identity. Framer Motion for smooth scroll-triggered animations. Deployed to Netlify with Netlify Forms for the contact page.

**Tech Stack:** Next.js 14+ (App Router), TypeScript, Tailwind CSS, Framer Motion, Netlify

**Spec:** `docs/superpowers/specs/2026-04-04-rebellionlabs-website-design.md`

---

### Task 1: Project Scaffolding & Configuration

**Files:**
- Create: `package.json`, `tsconfig.json`, `tailwind.config.ts`, `next.config.ts`, `postcss.config.mjs`
- Create: `src/app/layout.tsx`, `src/app/globals.css`
- Create: `src/lib/constants.ts`
- Create: `.gitignore`, `netlify.toml`
- Move: `Rebel Lion Labs Logo-Photoroom.png` -> `public/logo.png`

- [ ] **Step 1: Initialize Next.js project**

Run from the `RLL Website` directory:
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
```

When prompted, accept defaults. This creates the full project scaffold.

- [ ] **Step 2: Install dependencies**

```bash
npm install framer-motion
```

- [ ] **Step 3: Configure Tailwind theme with brand colors**

Replace the content of `tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#8B1A1A",
          "red-dark": "#6B1414",
          "red-light": "#A52020",
        },
        surface: {
          white: "#FFFFFF",
          grey: "#F5F5F5",
        },
        text: {
          heading: "#1A1A1A",
          body: "#4A4A4A",
          light: "#6B7280",
        },
      },
      fontFamily: {
        heading: ["var(--font-outfit)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 4: Create constants file**

Create `src/lib/constants.ts`:

```ts
export const SITE = {
  name: "Rebel Lion Labs",
  tagline: "Apps Built for the Players, by a Player",
  description:
    "Rebel Lion Labs builds sports apps that match the passion of players and fans. Home of PADLR - the rating-first padel app.",
  url: "https://rebellionlabs.app",
  email: "rebellionlabsofficial@gmail.com",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
] as const;

export const PILLARS = [
  {
    number: "01",
    total: "03",
    title: "Player-First Design",
    description:
      "Every feature starts with the player. We build tools that feel intuitive on the court, not just in the boardroom.",
  },
  {
    number: "02",
    total: "03",
    title: "Community-Driven",
    description:
      "Sports are social. Our apps connect players, fuel rivalries, and bring communities closer together.",
  },
  {
    number: "03",
    total: "03",
    title: "Passion Meets Technology",
    description:
      "We combine a deep love of sport with cutting-edge technology to create experiences that players actually want to use.",
  },
] as const;

export const PRODUCTS = [
  {
    name: "PADLR",
    tagline: "Your Rating. Your Game. Your Community.",
    description:
      "The rating-first padel app. Track your skill with Bayesian-powered ratings, log matches in 30 seconds, climb leaderboards across 23 countries, and connect with your padel community.",
    status: "Coming Spring 2026",
    href: "https://playpadlr.app",
    features: [
      "Bayesian skill ratings (0-7 scale)",
      "30-second match logging",
      "Global & local leaderboards",
      "Social feed with match cards",
      "Badges & achievements",
    ],
  },
] as const;
```

- [ ] **Step 5: Set up global styles**

Replace `src/app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-surface-white text-text-body antialiased;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-heading text-text-heading;
  }
}
```

- [ ] **Step 6: Set up root layout with fonts**

Replace `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
```

- [ ] **Step 7: Move logo to public directory**

```bash
cp "Rebel Lion Labs Logo-Photoroom.png" public/logo.png
```

- [ ] **Step 8: Create Netlify config**

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

- [ ] **Step 9: Update .gitignore and create placeholder homepage**

Ensure `.gitignore` includes standard Next.js entries (create-next-app handles this).

Replace `src/app/page.tsx` with a placeholder:

```tsx
export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="font-heading text-4xl font-bold text-text-heading">
        Rebel Lion Labs
      </h1>
    </main>
  );
}
```

- [ ] **Step 10: Verify the dev server runs**

```bash
npm run dev
```

Expected: Dev server starts at localhost:3000, shows "Rebel Lion Labs" heading with Outfit font.

- [ ] **Step 11: Commit**

```bash
git init
git add .
git commit -m "chore: scaffold Next.js project with Tailwind, Framer Motion, and brand config"
```

---

### Task 2: ScrollAnimation Component

**Files:**
- Create: `src/components/ScrollAnimation.tsx`

This is the reusable Framer Motion wrapper used across the entire site. Build it first since every subsequent task depends on it.

- [ ] **Step 1: Create ScrollAnimation component**

Create `src/components/ScrollAnimation.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollAnimation({
  children,
  className,
  delay = 0,
}: ScrollAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2: Verify it renders**

Temporarily use it in `src/app/page.tsx`:

```tsx
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <ScrollAnimation>
        <h1 className="font-heading text-4xl font-bold text-text-heading">
          Rebel Lion Labs
        </h1>
      </ScrollAnimation>
    </main>
  );
}
```

Run `npm run dev`, verify the heading fades in on load.

- [ ] **Step 3: Commit**

```bash
git add src/components/ScrollAnimation.tsx src/app/page.tsx
git commit -m "feat: add reusable ScrollAnimation component with Framer Motion"
```

---

### Task 3: Navbar Component

**Files:**
- Create: `src/components/Navbar.tsx`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Create Navbar component**

Create `src/components/Navbar.tsx`:

```tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Rebel Lion Labs"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-text-heading transition-colors hover:text-brand-red"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-brand-red transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-text-heading transition-all duration-300 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-text-heading transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-text-heading transition-all duration-300 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="bg-white px-6 pb-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-text-heading transition-colors hover:text-brand-red"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: Add Navbar to root layout**

Modify `src/app/layout.tsx` — add the Navbar import and render it inside `<body>`:

```tsx
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-body">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Verify**

Run `npm run dev`. Check:
- Navbar shows logo + links on desktop
- Scroll down — navbar gets white background + shadow
- Resize to mobile — hamburger appears, links hidden
- Tap hamburger — mobile menu slides open
- Hover nav links — underline slides in

- [ ] **Step 4: Commit**

```bash
git add src/components/Navbar.tsx src/app/layout.tsx
git commit -m "feat: add sticky Navbar with mobile hamburger menu and scroll effect"
```

---

### Task 4: Footer Component

**Files:**
- Create: `src/components/Footer.tsx`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Create Footer component**

Create `src/components/Footer.tsx`:

```tsx
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
```

- [ ] **Step 2: Add Footer to root layout**

Modify `src/app/layout.tsx` — add the Footer import and render it after `{children}`:

Add to imports:
```tsx
import Footer from "@/components/Footer";
```

Update the body:
```tsx
<body className="font-body">
  <Navbar />
  <main>{children}</main>
  <Footer />
</body>
```

- [ ] **Step 3: Verify**

Run `npm run dev`. Check:
- Footer appears at the bottom with dark background
- Three columns: brand, navigation links, contact/partner CTA
- "Partner with Us" button has red outline, fills red on hover
- Email link works
- Copyright year is current

- [ ] **Step 4: Commit**

```bash
git add src/components/Footer.tsx src/app/layout.tsx
git commit -m "feat: add Footer with navigation, contact, and partner CTA"
```

---

### Task 5: Homepage — Hero Section

**Files:**
- Create: `src/components/Hero.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create Hero component**

Create `src/components/Hero.tsx`:

```tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-heading text-5xl font-bold leading-tight text-text-heading md:text-7xl"
        >
          Apps Built for the Players,{" "}
          <span className="text-brand-red">by a Player</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-2xl text-lg text-text-body md:text-xl"
        >
          We build sports apps that match the passion of the people who play
          them. No more settling for tools that don&apos;t understand the game.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-10"
        >
          <Link
            href="/products"
            className="inline-block rounded-full bg-brand-red px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-brand-red-dark"
          >
            Explore Our Apps
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto h-10 w-6 rounded-full border-2 border-text-light"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="mx-auto mt-2 h-2 w-1 rounded-full bg-text-light"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Update homepage to use Hero**

Replace `src/app/page.tsx`:

```tsx
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
```

- [ ] **Step 3: Verify**

Run `npm run dev`. Check:
- Hero fills viewport height
- Headline, subtext, and CTA animate in with staggered delays
- "by a Player" is in brand red
- CTA button scales up on hover
- Scroll indicator bounces gently

- [ ] **Step 4: Commit**

```bash
git add src/components/Hero.tsx src/app/page.tsx
git commit -m "feat: add Hero section with animated headline and scroll indicator"
```

---

### Task 6: Homepage — Pillar Cards Section

**Files:**
- Create: `src/components/PillarCards.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create PillarCards component**

Create `src/components/PillarCards.tsx`:

```tsx
"use client";

import ScrollAnimation from "@/components/ScrollAnimation";
import { PILLARS } from "@/lib/constants";

export default function PillarCards() {
  return (
    <section className="bg-surface-grey py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <ScrollAnimation>
          <h2 className="font-heading text-3xl font-bold text-text-heading md:text-4xl">
            What Drives Us
          </h2>
          <p className="mt-4 max-w-xl text-text-body">
            Every app we build starts with three core principles.
          </p>
        </ScrollAnimation>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {PILLARS.map((pillar, index) => (
            <ScrollAnimation key={pillar.number} delay={index * 0.15}>
              <div className="group rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <span className="text-sm font-medium text-brand-red">
                  {pillar.number}/{pillar.total}
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold text-text-heading">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-body">
                  {pillar.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add PillarCards to homepage**

Update `src/app/page.tsx`:

```tsx
import Hero from "@/components/Hero";
import PillarCards from "@/components/PillarCards";

export default function Home() {
  return (
    <>
      <Hero />
      <PillarCards />
    </>
  );
}
```

- [ ] **Step 3: Verify**

Run `npm run dev`. Check:
- Grey background section below hero
- Three cards with 01/03, 02/03, 03/03 numbering
- Cards stagger in as you scroll down
- Cards lift slightly on hover with shadow

- [ ] **Step 4: Commit**

```bash
git add src/components/PillarCards.tsx src/app/page.tsx
git commit -m "feat: add numbered PillarCards section to homepage"
```

---

### Task 7: Homepage — Featured Product Section

**Files:**
- Create: `src/components/FeaturedProduct.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create FeaturedProduct component**

Create `src/components/FeaturedProduct.tsx`:

```tsx
"use client";

import ScrollAnimation from "@/components/ScrollAnimation";
import { PRODUCTS } from "@/lib/constants";

export default function FeaturedProduct() {
  const product = PRODUCTS[0];

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <ScrollAnimation>
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-red">
            Featured Product
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-text-heading md:text-4xl">
            {product.name}
          </h2>
          <p className="mt-2 text-lg text-text-body">{product.tagline}</p>
        </ScrollAnimation>

        <div className="mt-12 grid items-center gap-12 md:grid-cols-2">
          <ScrollAnimation delay={0.15}>
            <div className="rounded-2xl bg-surface-grey p-8">
              <p className="text-text-body leading-relaxed">
                {product.description}
              </p>
              <ul className="mt-6 space-y-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-brand-red" />
                    <span className="text-text-body">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center gap-4">
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-brand-red px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-brand-red-dark"
                >
                  Learn More
                </a>
                <span className="rounded-full bg-brand-red/10 px-4 py-1.5 text-xs font-medium text-brand-red">
                  {product.status}
                </span>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.3}>
            <div className="flex aspect-square items-center justify-center rounded-2xl bg-surface-grey">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-red text-3xl font-bold text-white font-heading">
                  P
                </div>
                <p className="text-sm text-text-light">
                  App preview coming soon
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add FeaturedProduct to homepage**

Update `src/app/page.tsx`:

```tsx
import Hero from "@/components/Hero";
import PillarCards from "@/components/PillarCards";
import FeaturedProduct from "@/components/FeaturedProduct";

export default function Home() {
  return (
    <>
      <Hero />
      <PillarCards />
      <FeaturedProduct />
    </>
  );
}
```

- [ ] **Step 3: Verify**

Run `npm run dev`. Check:
- White background section with "Featured Product" label in red
- PADLR name, tagline, description, feature list with red dots
- "Learn More" button links to playpadlr.app in new tab
- Status badge shows "Coming Spring 2026"
- Right side shows placeholder for app preview

- [ ] **Step 4: Commit**

```bash
git add src/components/FeaturedProduct.tsx src/app/page.tsx
git commit -m "feat: add FeaturedProduct section showcasing PADLR"
```

---

### Task 8: Homepage — Vision Teaser & Partner CTA Sections

**Files:**
- Modify: `src/app/page.tsx`

These are lightweight sections — build them inline in the homepage rather than as separate components.

- [ ] **Step 1: Add Vision and Partner CTA sections to homepage**

Update `src/app/page.tsx`:

```tsx
import Link from "next/link";
import Hero from "@/components/Hero";
import PillarCards from "@/components/PillarCards";
import FeaturedProduct from "@/components/FeaturedProduct";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Home() {
  return (
    <>
      <Hero />
      <PillarCards />
      <FeaturedProduct />

      {/* Vision Teaser */}
      <section className="bg-surface-grey py-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollAnimation>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-red">
              What&apos;s Next
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold text-text-heading md:text-4xl">
              This Is Just the Beginning
            </h2>
            <p className="mt-4 text-lg text-text-body">
              PADLR is our first step. We&apos;re building a family of sports
              apps — each one designed to be the ultimate companion for players
              of that sport. More apps, more sports, and exclusive merch are on
              the horizon.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollAnimation>
            <h2 className="font-heading text-3xl font-bold text-text-heading md:text-4xl">
              Interested in What We&apos;re Building?
            </h2>
            <p className="mt-4 text-text-body">
              Whether you&apos;re a player, a partner, or just curious — we&apos;d
              love to hear from you.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-brand-red px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-brand-red-dark"
            >
              Get in Touch
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Verify**

Run `npm run dev`. Check:
- Vision section on grey background with "What's Next" label
- Partner CTA on white with "Get in Touch" button linking to /contact
- Both sections animate in on scroll

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: add Vision Teaser and Partner CTA sections to homepage"
```

---

### Task 9: About Page

**Files:**
- Create: `src/app/about/page.tsx`

- [ ] **Step 1: Create the About page**

Create `src/app/about/page.tsx`:

```tsx
import type { Metadata } from "next";
import ScrollAnimation from "@/components/ScrollAnimation";
import PillarCards from "@/components/PillarCards";

export const metadata: Metadata = {
  title: "About",
  description:
    "Rebel Lion Labs builds sports apps with the passion of a player. Learn about our mission to bridge the gap between sports and technology.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="flex min-h-[60vh] items-center justify-center px-6 pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollAnimation>
            <h1 className="font-heading text-5xl font-bold leading-tight text-text-heading md:text-7xl">
              Built from Passion,{" "}
              <span className="text-brand-red">Driven by Purpose</span>
            </h1>
          </ScrollAnimation>
        </div>
      </section>

      {/* Founder Story */}
      <section className="bg-surface-grey py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollAnimation>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-red">
              Our Story
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold text-text-heading">
              Born on the Court
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.15}>
            <div className="mt-8 space-y-6 text-text-body leading-relaxed">
              <p>
                Rebel Lion Labs was born out of frustration. A lifelong sports
                player who had tried every app, every tracker, every platform —
                and none of them got it right. The passion that players bring to
                the court was never reflected in the tools built to serve them.
              </p>
              <p>
                Generic fitness apps with sport bolted on as an afterthought.
                Rating systems that felt like black boxes. Communities
                fragmented across a dozen different platforms. Players deserved
                better.
              </p>
              <p>
                So we set out to build what should have existed all along: apps
                made specifically for the players, by someone who understands
                what it means to compete, to improve, and to be part of a
                sporting community.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Values — reuse PillarCards */}
      <PillarCards />

      {/* Vision */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollAnimation>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-red">
              Our Vision
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold text-text-heading">
              The One-Stop Shop for Every Sport
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.15}>
            <div className="mt-8 space-y-6 text-text-body leading-relaxed">
              <p>
                We&apos;re not building one app. We&apos;re building a family of
                apps — each one purpose-built for a specific sport, each one
                designed to be the ultimate companion for players of that game.
              </p>
              <p>
                Starting with padel and expanding sport by sport, Rebel Lion
                Labs is on a mission to become the home of sports technology
                that actually understands its players. Ratings, communities,
                stats, and gear — all in one place, for every sport.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Verify**

Run `npm run dev`, navigate to `/about`. Check:
- Hero with "Built from Passion, Driven by Purpose" headline
- Founder story section on grey background
- Pillar cards section (reused from homepage)
- Vision section at the bottom
- All sections animate on scroll
- Page title in browser tab shows "About | Rebel Lion Labs"

- [ ] **Step 3: Commit**

```bash
git add src/app/about/page.tsx
git commit -m "feat: add About page with founder story, values, and vision"
```

---

### Task 10: Products Page

**Files:**
- Create: `src/components/ProductCard.tsx`
- Create: `src/app/products/page.tsx`

- [ ] **Step 1: Create ProductCard component**

Create `src/components/ProductCard.tsx`:

```tsx
"use client";

import ScrollAnimation from "@/components/ScrollAnimation";

interface ProductCardProps {
  name: string;
  tagline: string;
  description: string;
  status: string;
  href: string;
  features: readonly string[];
  delay?: number;
}

export default function ProductCard({
  name,
  tagline,
  description,
  status,
  href,
  features,
  delay = 0,
}: ProductCardProps) {
  return (
    <ScrollAnimation delay={delay}>
      <div className="group rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-heading text-2xl font-bold text-text-heading">
              {name}
            </h3>
            <p className="mt-1 text-sm text-brand-red">{tagline}</p>
          </div>
          <span className="rounded-full bg-brand-red/10 px-3 py-1 text-xs font-medium text-brand-red">
            {status}
          </span>
        </div>

        <p className="mt-4 text-text-body leading-relaxed">{description}</p>

        <ul className="mt-6 space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm">
              <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-brand-red" />
              <span className="text-text-body">{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-brand-red px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-brand-red-dark"
        >
          Visit Website
        </a>
      </div>
    </ScrollAnimation>
  );
}
```

- [ ] **Step 2: Create Products page**

Create `src/app/products/page.tsx`:

```tsx
import type { Metadata } from "next";
import ScrollAnimation from "@/components/ScrollAnimation";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore apps by Rebel Lion Labs. PADLR - the rating-first padel app with Bayesian skill ratings, leaderboards, and community features.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-32 pb-16">
        <div className="mx-auto max-w-6xl">
          <ScrollAnimation>
            <h1 className="font-heading text-5xl font-bold text-text-heading md:text-6xl">
              Our Products
            </h1>
            <p className="mt-4 max-w-xl text-lg text-text-body">
              Sports apps built with the passion of a player. Each one designed
              to be the ultimate companion for its sport.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-surface-grey py-24 px-6">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          {PRODUCTS.map((product, index) => (
            <ProductCard
              key={product.name}
              name={product.name}
              tagline={product.tagline}
              description={product.description}
              status={product.status}
              href={product.href}
              features={product.features}
              delay={index * 0.15}
            />
          ))}
        </div>
      </section>

      {/* More Coming */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollAnimation>
            <h2 className="font-heading text-3xl font-bold text-text-heading">
              More on the Way
            </h2>
            <p className="mt-4 text-text-body">
              We&apos;re expanding sport by sport. Have a sport you&apos;d love
              to see us build for? Let us know.
            </p>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Verify**

Run `npm run dev`, navigate to `/products`. Check:
- Page headline "Our Products" with subtext
- PADLR product card on grey background with all features listed
- "Visit Website" button links to playpadlr.app
- Status badge shows "Coming Spring 2026"
- "More on the Way" section at bottom
- Card lifts on hover

- [ ] **Step 4: Commit**

```bash
git add src/components/ProductCard.tsx src/app/products/page.tsx
git commit -m "feat: add Products page with ProductCard component"
```

---

### Task 11: Contact Page with Netlify Forms

**Files:**
- Create: `src/components/ContactForm.tsx`
- Create: `src/app/contact/page.tsx`

- [ ] **Step 1: Create ContactForm component**

Create `src/components/ContactForm.tsx`:

```tsx
"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
    });

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-surface-grey p-12 text-center">
        <h3 className="font-heading text-2xl font-bold text-text-heading">
          Message Sent
        </h3>
        <p className="mt-2 text-text-body">
          Thanks for reaching out. We&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-text-heading"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 w-full rounded-lg border border-gray-200 bg-surface-grey px-4 py-3 text-sm text-text-heading outline-none transition-colors focus:border-brand-red focus:ring-1 focus:ring-brand-red"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-text-heading"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 w-full rounded-lg border border-gray-200 bg-surface-grey px-4 py-3 text-sm text-text-heading outline-none transition-colors focus:border-brand-red focus:ring-1 focus:ring-brand-red"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-text-heading"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 w-full rounded-lg border border-gray-200 bg-surface-grey px-4 py-3 text-sm text-text-heading outline-none transition-colors focus:border-brand-red focus:ring-1 focus:ring-brand-red"
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-brand-red px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-brand-red-dark"
      >
        Send Message
      </button>
    </form>
  );
}
```

- [ ] **Step 2: Create Contact page**

Create `src/app/contact/page.tsx`:

```tsx
import type { Metadata } from "next";
import ScrollAnimation from "@/components/ScrollAnimation";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Rebel Lion Labs. Whether you're a player, a partner, or just curious — we'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <section className="px-6 pt-32 pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-2">
          {/* Left — info */}
          <ScrollAnimation>
            <div>
              <h1 className="font-heading text-5xl font-bold text-text-heading md:text-6xl">
                Let&apos;s Talk
              </h1>
              <p className="mt-4 text-lg text-text-body">
                Whether you&apos;re a player with feedback, a partner with an
                idea, or just curious about what we&apos;re building — drop us a
                line.
              </p>

              <div className="mt-12 space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-text-light">
                    Email
                  </h3>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="mt-1 block text-text-heading transition-colors hover:text-brand-red"
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right — form */}
          <ScrollAnimation delay={0.15}>
            <ContactForm />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create a hidden HTML form for Netlify detection**

Netlify needs a plain HTML form to detect at build time. Create `public/form-placeholder.html`:

```html
<!-- This hidden form is for Netlify Forms detection at build time -->
<form name="contact" netlify netlify-honeypot="bot-field" hidden>
  <input type="text" name="name" />
  <input type="email" name="email" />
  <textarea name="message"></textarea>
</form>
```

- [ ] **Step 4: Verify**

Run `npm run dev`, navigate to `/contact`. Check:
- Two-column layout: info left, form right
- Email address displayed and clickable
- Form has name, email, message fields
- Form fields get red border on focus
- Submit button has hover effect
- Page title shows "Contact | Rebel Lion Labs"

- [ ] **Step 5: Commit**

```bash
git add src/components/ContactForm.tsx src/app/contact/page.tsx public/form-placeholder.html
git commit -m "feat: add Contact page with Netlify Forms integration"
```

---

### Task 12: SEO — Sitemap & Robots

**Files:**
- Create: `src/app/sitemap.ts`
- Create: `src/app/robots.ts`

- [ ] **Step 1: Create sitemap generator**

Create `src/app/sitemap.ts`:

```ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rebellionlabs.app";

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/products`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
  ];
}
```

- [ ] **Step 2: Create robots.txt generator**

Create `src/app/robots.ts`:

```ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://rebellionlabs.app/sitemap.xml",
  };
}
```

- [ ] **Step 3: Verify**

Run `npm run dev`. Check:
- Visit `localhost:3000/sitemap.xml` — shows XML with all 4 pages
- Visit `localhost:3000/robots.txt` — shows rules and sitemap URL

- [ ] **Step 4: Commit**

```bash
git add src/app/sitemap.ts src/app/robots.ts
git commit -m "feat: add sitemap.xml and robots.txt generation for SEO"
```

---

### Task 13: Build Verification & Final Polish

**Files:**
- Modify: Various files if issues found

- [ ] **Step 1: Run production build**

```bash
npm run build
```

Expected: Build completes with no errors. All 4 pages generated as static HTML.

- [ ] **Step 2: Run production server and test all pages**

```bash
npm run start
```

Check each page at localhost:3000:
- `/` — Hero, pillars, featured product, vision, partner CTA, footer
- `/about` — Hero, story, pillars, vision
- `/products` — Headline, PADLR card, "more coming"
- `/contact` — Info + form layout

Check responsive at mobile widths:
- Navbar hamburger works
- All sections stack properly
- No horizontal overflow

- [ ] **Step 3: Fix any issues found**

If build errors or visual issues are found, fix them.

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "chore: verify production build and final polish"
```

---

## Spec Coverage Check

| Spec Requirement | Task |
|---|---|
| Next.js 14+ App Router + TypeScript | Task 1 |
| Tailwind CSS with brand colors | Task 1 |
| Framer Motion animations | Task 2 |
| Sticky Navbar with mobile hamburger | Task 3 |
| Footer with partner CTA | Task 4 |
| Homepage Hero | Task 5 |
| Numbered Pillar Cards | Task 6 |
| Featured Product (PADLR) | Task 7 |
| Vision Teaser + Partner CTA | Task 8 |
| About Page | Task 9 |
| Products Page | Task 10 |
| Contact Page + Netlify Forms | Task 11 |
| Sitemap + Robots.txt | Task 12 |
| Production build verification | Task 13 |
| SSG for all pages | Task 1 (default in App Router) |
| Responsive / mobile-first | All tasks |
| Scroll animations | Task 2 (used in Tasks 5-11) |
| Hover states (buttons, cards, nav) | Tasks 3, 6, 7, 10 |
| SEO metadata per page | Tasks 1, 9, 10, 11 |
| Netlify deployment config | Task 1 |

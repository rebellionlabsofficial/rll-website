# Rebel Lion Labs Website Design Spec

**Domain:** rebellionlabs.app
**Date:** 2026-04-04
**Status:** Approved

---

## Overview

A premium, modern website for Rebel Lion Labs - an app development company focused on building sports apps that match the passion of players and fans. The flagship product is PADLR, a rating-first padel tennis app launching Spring 2026.

**Primary audiences:**
1. Potential users discovering and downloading apps (like PADLR)
2. Potential investors/partners interested in the company

**Inspiration:** [WorldQuant Foundry](https://www.worldquantfoundry.com/) - clean, premium, confident design with smooth scroll animations, numbered pillar cards, and generous whitespace.

---

## Tech Stack

- **Framework:** Next.js 14+ (App Router) with TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Hosting:** Netlify (with Netlify Forms for contact)
- **All pages statically generated (SSG)** for maximum performance

---

## Branding & Visual Identity

### Color Palette
- **Primary (brand red/maroon):** #8B1A1A - from the logo, used for accents, CTAs, hover states
- **Background:** #FFFFFF (white) with #F5F5F5 (light grey) for alternating section depth
- **Headings:** #1A1A1A (near-black)
- **Body text:** #4A4A4A (dark grey)

### Typography
- **Headings:** Bold, modern sans-serif (Inter or Outfit) - large, confident
- **Body:** Inter for readability
- **"LABS" treatment:** Lighter weight to mirror logo typographic hierarchy

### Visual Style
- White-dominant, clean layout with red brand color as accent (not overwhelming)
- Premium feel through generous whitespace and spacing
- Clean iconography and product screenshots (no stock photography)
- Logo: Existing lion-breaking-shield maroon logo on white

---

## Site Structure

### Pages
1. **Homepage** (`/`)
2. **About** (`/about`)
3. **Products** (`/products`)
4. **Contact** (`/contact`)

### Global Elements
- Sticky navbar with logo + page links
- "Partner with us" as subtle CTA in the footer (not the navbar - keep nav clean)
- Footer with logo, nav links, email, social links, legal

### SEO
- Per-page title, description, Open Graph, and Twitter card metadata via Next.js Metadata API
- Auto-generated sitemap.xml and robots.txt
- Semantic HTML (proper heading hierarchy, landmarks)
- Optimised images via Next.js `<Image>` component
- Optimised fonts via `next/font`

---

## Page Designs

### Homepage

1. **Hero Section**
   - Full-width, white background
   - Large bold headline (e.g., "Apps Built for the Players, by a Player")
   - Supporting subtext about bridging the passion gap in sports tech
   - CTA button: "Explore Our Apps" -> Products page
   - Subtle scroll-down indicator animation

2. **Mission / What We Do**
   - Short, punchy section with the company's "why"
   - Numbered pillar cards (WorldQuant Foundry style):
     - 01/03 - **Player-First Design**
     - 02/03 - **Community-Driven**
     - 03/03 - **Passion Meets Technology**

3. **Featured Product - PADLR**
   - Product showcase card with app screenshot/mockup
   - Brief description + key stats (countries, features)
   - CTA: "Learn More" -> Products page or playpadlr.app

4. **Coming Soon / Vision Teaser**
   - Subtle section hinting at future products and merch
   - Forward-looking without overpromising

5. **Partner CTA**
   - Understated: "Interested in what we're building?"
   - Simple "Get in Touch" button -> Contact page

6. **Footer**

### About Page

- Hero banner with headline (e.g., "Built from Passion, Driven by Purpose")
- Founder story section - brand voice, no personal name, focused on the "why": a lifelong sports player frustrated by apps that didn't match the passion of the players
- Values/pillars section - reusing numbered card pattern
- Vision statement - where Rebel Lion Labs is heading (one-stop shop for sports players)

### Products Page

- Page headline: "Our Products"
- Product cards in a grid layout (currently PADLR only, designed to scale)
- Each card: app icon/screenshot, name, short description, status badge (e.g., "Coming Spring 2026"), link to external site
- Future-proofed for merch section when relevant

### Contact Page

- Clean, simple layout
- Contact form via Netlify Forms (name, email, message)
- Email displayed: rebellionlabsofficial@gmail.com
- Social media links (if applicable)

---

## Animations & Interactions

### Scroll Animations (Framer Motion)
- Elements fade up and slide in slightly on viewport entry
- Staggered delays on grouped items (pillar cards: 01, then 02, then 03)
- Smooth, eased transitions (~0.6s duration)

### Navigation
- Sticky navbar adds background/shadow on scroll
- Smooth page transitions between routes

### Hover States
- CTA buttons: subtle scale-up + colour shift
- Product cards: gentle lift/shadow effect
- Nav links: underline slide-in animation

### Excluded
- No parallax scrolling
- No auto-playing videos
- No aggressive pop-ups or loading animations
- Nothing gimmicky - animations enhance premium feel without drawing attention

---

## Project Structure

```
src/
  app/
    page.tsx          # Homepage
    about/page.tsx    # About
    products/page.tsx # Products
    contact/page.tsx  # Contact
    layout.tsx        # Global layout (nav + footer)
  components/
    Navbar.tsx
    Footer.tsx
    Hero.tsx
    PillarCards.tsx
    ProductCard.tsx
    ContactForm.tsx
    ScrollAnimation.tsx  # Reusable Framer Motion wrapper
  lib/
    constants.ts     # Brand colors, copy, metadata
```

---

## Content Notes

- All copy to be written during implementation (no content provided by client)
- Founder story: lifelong sports player who felt apps didn't match the passion of players/fans - wanted to change that and build a one-stop shop for sports players
- No personal name on the website - brand-first identity
- Contact email: rebellionlabsofficial@gmail.com
- PADLR external link: https://playpadlr.app/

---

## Responsive Design

- Mobile-first approach
- Fully responsive across all breakpoints
- Navbar collapses to hamburger menu on mobile
- Pillar cards stack vertically on smaller screens
- Product grid adapts from multi-column to single column

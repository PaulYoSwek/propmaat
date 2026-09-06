# Propmaat Rebrand + Pin Journey Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebrand the marketing site to Propmaat (cream/charcoal) and ship a homepage-only scroll story where the logo pin leaves the header and lands on a house in an illustrated neighborhood.

**Architecture:** Keep the existing Next.js `[locale]` app, dictionaries, and contact API. Add pure `pin-progress` helpers, an SVG pin + wordmark, a homepage `PinJourney` client island that measures `#propmaat-pin-slot` and `#propmaat-pin-target`, and new home/custom-work copy. Inner pages stay static with a complete wordmark.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, Vitest. No animation libraries, no map SDKs.

## Global Constraints

- Visitor-facing name is Propmaat only — never PandFlow, OKO, or oko.immo
- Price is exactly €50 per seat per month
- Colors: background `#F7F4EE`, surface `#FBF8F2`, ink `#2D2D2D`, muted `#6B6860`, accent `#2D2D2D`, accent hover `#1A1A1A`, accent soft `#E8E4DC`, line `#DDD8CE`, on-ink `#F7F4EE` — no teal, no `#FFFFFF` / `#000000`
- Pin flight is homepage only; Functies / Prijzen / Contact / Privacy use a complete wordmark
- No Mapbox/Leaflet/MapLibre; no GSAP/Motion
- All visitor-facing strings come from `src/i18n/nl.ts` and `src/i18n/en.ts`
- Routes, middleware, contact schema, and form fields do not change
- Read `node_modules/next/dist/docs/` before using Next.js APIs
- Internal npm name `pandflow` may stay

## File map

| File | Responsibility |
|------|----------------|
| `src/lib/pin-progress.ts` | `scrollProgress`, `pointAlong` |
| `src/lib/pin-progress.test.ts` | Unit tests for those helpers |
| `src/app/globals.css` | Cream/charcoal tokens |
| `src/app/icon.svg` | Pin favicon |
| `src/i18n/nl.ts` / `en.ts` | Propmaat copy + home beats + custom work |
| `src/components/brand/propmaat-pin.tsx` | Outline pin SVG |
| `src/components/brand/propmaat-wordmark.tsx` | `Pr` + slot + `pmaat`; home uses empty slot |
| `src/components/site-header.tsx` | Wordmark instead of text |
| `src/components/site-footer.tsx` | Wordmark + Propmaat copyright via dict |
| `src/components/ui.tsx` | Primary button uses `on-ink` |
| `src/components/mocks/shell.tsx` | Propmaat chrome label |
| `src/components/mocks/product-mocks.tsx` | `bg-white` → `bg-surface`; `text-white` → `text-on-ink` |
| `src/app/api/contact/route.ts` | Propmaat email subject/from |
| `src/app/[locale]/not-found.tsx` | Propmaat title |
| `src/app/[locale]/functies/page.tsx` | Propmaat eyebrow + Op maat section |
| `src/app/[locale]/prijzen/page.tsx` | Propmaat name + custom sentence |
| `src/app/[locale]/page.tsx` | Scroll-story homepage |
| `src/components/pin-journey/neighborhood-map.tsx` | Illustrated street + house target |
| `src/components/pin-journey/pin-journey.tsx` | Fixed traveler + dossier class |
| `README.md` | Propmaat |

Do not change `src/i18n/config.ts`, `src/proxy.ts`, `src/lib/contact-schema.ts`, or page routes.

---

### Task 1: Pin progress helpers

**Files:**
- Create: `src/lib/pin-progress.ts`
- Test: `src/lib/pin-progress.test.ts`

**Interfaces:**
- Consumes: nothing
- Produces:
  - `export type Waypoint = { x: number; y: number; scale?: number }`
  - `export function scrollProgress(scrollY: number, startY: number, endY: number): number`
  - `export function pointAlong(progress: number, waypoints: Waypoint[]): { x: number; y: number; scale: number }`

- [ ] **Step 1: Write the failing tests**

Create `src/lib/pin-progress.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { pointAlong, scrollProgress } from "./pin-progress";

describe("scrollProgress", () => {
  it("clamps below the start to 0", () => {
    expect(scrollProgress(-20, 0, 400)).toBe(0);
  });

  it("clamps past the end to 1", () => {
    expect(scrollProgress(800, 0, 400)).toBe(1);
  });

  it("returns the midpoint", () => {
    expect(scrollProgress(200, 0, 400)).toBe(0.5);
  });

  it("returns 0 when the range is empty or inverted", () => {
    expect(scrollProgress(50, 100, 100)).toBe(0);
    expect(scrollProgress(50, 200, 100)).toBe(0);
  });
});

describe("pointAlong", () => {
  it("returns the origin when there are no waypoints", () => {
    expect(pointAlong(0.5, [])).toEqual({ x: 0, y: 0, scale: 1 });
  });

  it("returns the only waypoint", () => {
    expect(pointAlong(0.8, [{ x: 10, y: 20, scale: 1.2 }])).toEqual({
      x: 10,
      y: 20,
      scale: 1.2,
    });
  });

  it("defaults a missing scale to 1", () => {
    expect(pointAlong(0, [{ x: 3, y: 4 }])).toEqual({ x: 3, y: 4, scale: 1 });
  });

  it("interpolates the midpoint of two waypoints", () => {
    expect(
      pointAlong(0.5, [
        { x: 0, y: 0, scale: 1 },
        { x: 10, y: 20, scale: 1.4 },
      ]),
    ).toEqual({ x: 5, y: 10, scale: 1.2 });
  });

  it("clamps progress outside 0–1", () => {
    const waypoints = [
      { x: 0, y: 0, scale: 1 },
      { x: 10, y: 0, scale: 2 },
    ];
    expect(pointAlong(-1, waypoints)).toEqual({ x: 0, y: 0, scale: 1 });
    expect(pointAlong(2, waypoints)).toEqual({ x: 10, y: 0, scale: 2 });
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx vitest run src/lib/pin-progress.test.ts`

Expected: FAIL — cannot find module `./pin-progress`

- [ ] **Step 3: Write the implementation**

Create `src/lib/pin-progress.ts`:

```ts
export type Waypoint = {
  x: number;
  y: number;
  scale?: number;
};

export function scrollProgress(
  scrollY: number,
  startY: number,
  endY: number,
): number {
  if (endY <= startY) return 0;
  const t = (scrollY - startY) / (endY - startY);
  return Math.min(1, Math.max(0, t));
}

export function pointAlong(
  progress: number,
  waypoints: Waypoint[],
): { x: number; y: number; scale: number } {
  if (waypoints.length === 0) return { x: 0, y: 0, scale: 1 };
  if (waypoints.length === 1) {
    const only = waypoints[0];
    return { x: only.x, y: only.y, scale: only.scale ?? 1 };
  }

  const t = Math.min(1, Math.max(0, progress));
  const lastIndex = waypoints.length - 1;
  const scaled = t * lastIndex;
  const index = Math.min(lastIndex - 1, Math.floor(scaled));
  const local = scaled - index;
  const a = waypoints[index];
  const b = waypoints[index + 1];
  const aScale = a.scale ?? 1;
  const bScale = b.scale ?? 1;
  return {
    x: a.x + (b.x - a.x) * local,
    y: a.y + (b.y - a.y) * local,
    scale: aScale + (bScale - aScale) * local,
  };
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npx vitest run src/lib/pin-progress.test.ts`

Expected: PASS (5 `scrollProgress` + 5 `pointAlong`)

- [ ] **Step 5: Commit**

```bash
git add src/lib/pin-progress.ts src/lib/pin-progress.test.ts
git commit -m "Add pin progress helpers and tests."
```

---

### Task 2: Cream and charcoal tokens

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/icon.svg`
- Modify: `src/components/ui.tsx`

**Interfaces:**
- Consumes: nothing
- Produces: CSS tokens `--color-on-ink` / Tailwind `on-ink`; primary buttons use cream text on charcoal

- [ ] **Step 1: Replace tokens in `src/app/globals.css`**

Replace the `:root` and `@theme inline` blocks and the selection rule:

```css
@import "tailwindcss";

:root {
  --background: #f7f4ee;
  --foreground: #2d2d2d;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-surface: #fbf8f2;
  --color-ink: #2d2d2d;
  --color-muted: #6b6860;
  --color-accent: #2d2d2d;
  --color-accent-hover: #1a1a1a;
  --color-accent-soft: #e8e4dc;
  --color-line: #ddd8ce;
  --color-on-ink: #f7f4ee;
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

html {
  background: var(--background);
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-sans), ui-sans-serif, system-ui, sans-serif;
}

::selection {
  background: var(--color-accent-soft);
  color: var(--color-ink);
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-rise {
  animation: rise 0.5s ease-out both;
}

.delay-1 {
  animation-delay: 80ms;
}
.delay-2 {
  animation-delay: 160ms;
}
.delay-3 {
  animation-delay: 240ms;
}

#propmaat-dossier {
  opacity: 0;
  transform: translateY(16px);
  transition:
    opacity 300ms ease,
    transform 300ms ease;
}

#propmaat-dossier.is-landed {
  opacity: 1;
  transform: none;
}

html[data-pin-journey="on"] .pin-static {
  visibility: hidden;
}

@media (prefers-reduced-motion: reduce) {
  .animate-rise {
    animation: none;
  }

  #propmaat-dossier {
    opacity: 1;
    transform: none;
  }
}
```

- [ ] **Step 2: Replace `src/app/icon.svg` with the pin**

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <rect width="32" height="32" rx="8" fill="#F7F4EE"/>
  <path fill="#2D2D2D" fill-rule="evenodd" d="M16 5.2c-3.7 0-6.7 3-6.7 6.7 0 5.6 5.8 12.8 6.4 13.5a.5.5 0 0 0 .6 0c.6-.7 6.4-7.9 6.4-13.5 0-3.7-3-6.7-6.7-6.7zm0 4.3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z"/>
</svg>
```

- [ ] **Step 3: Point primary buttons at `on-ink`**

In `src/components/ui.tsx`, change `primaryButtonClass` to:

```ts
export function primaryButtonClass(extra = "") {
  return `inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-on-ink transition-colors hover:bg-accent-hover ${extra}`;
}
```

Leave `secondaryButtonClass` and `Eyebrow` as they are (they already use `accent` / `surface` / `ink`).

- [ ] **Step 4: Commit**

```bash
git add src/app/globals.css src/app/icon.svg src/components/ui.tsx
git commit -m "Switch marketing tokens to cream and charcoal."
```

---

### Task 3: Propmaat dictionaries

**Files:**
- Modify: `src/i18n/nl.ts`
- Modify: `src/i18n/en.ts`

**Interfaces:**
- Consumes: existing `Dictionary` type from `nl.ts`
- Produces: `brand.name`, rewritten `home` (beats + landing + custom), `features.custom`, `pricing.customNote`; every `PandFlow` string becomes `Propmaat`

- [ ] **Step 1: Update `src/i18n/nl.ts`**

Replace every `PandFlow` with `Propmaat` in `meta`, `footer.copyright`, `home.heroSub`, `home.finalTitle`, `features.intro`, `features.sections` bodies/bullets that name the product, and `pricing.note`.

Add `brand` after `meta` (before `nav`):

```ts
  brand: {
    name: "Propmaat",
  },
```

Replace the entire `home` object with:

```ts
  home: {
    heroTitle: "Eén flow voor pand, deal en gesprek",
    heroSub:
      "Propmaat is de werkruimte voor makelaars. Panden, pipeline en elk gesprek — website, WhatsApp en mail — in één systeem.",
    ctaDemo: "Vraag een demo",
    ctaFeatures: "Bekijk functies",
    beats: [
      {
        title: "Het pand",
        body: "Elk object is een dossier: gegevens, media en een checklist vóór je live gaat.",
      },
      {
        title: "De deal",
        body: "Een pipeline waarin elke deal een eigen dossier heeft.",
      },
      {
        title: "Het gesprek",
        body: "Website-leads, WhatsApp en mail op één plek.",
      },
    ],
    landingEyebrow: "Voorbeeld in het product",
    landingAddress: "Keizerstraat 18, 2000 Antwerpen",
    landingPrice: "€ 649.000",
    landingStatus: "Te koop",
    landingBeds: "4 slpk",
    customTitle: "Jouw kantoor, jouw flow",
    customBody:
      "Propmaat dekt het pad van prospect tot ondertekening. Werkt je kantoor anders, dan voegen we workflows of functies toe op aanvraag. Dat spreken we af in een demo — geen catalogus van extra pakketten.",
    priceEyebrow: "Prijs",
    priceTitle: "€50 per seat per maand",
    priceBody:
      "Eén seat is één login. Alle modules erin, geen verborgen pakketten. Bekijk wat je krijgt.",
    priceCta: "Naar prijzen",
    finalTitle: "Zie Propmaat in je kantoor",
    finalBody:
      "We lopen het product met je door. Geen automatische trial, wel een gerichte demo.",
  },
```

Delete `highlightsEyebrow`, `highlightsTitle`, `highlights`, `whoEyebrow`, `whoTitle`, `whoBody` — they are not on the new home.

Add `features.custom` immediately after `features.intro` (before `sections`):

```ts
    custom: {
      title: "Op maat",
      body: "Propmaat kan workflows of functies toevoegen die bij jouw kantoor passen. Geen modulewinkel: we spreken scope en timing af in een demo.",
      bullets: [
        "Workflows die aansluiten op hoe je kantoor al werkt",
        "Extra velden of stappen op aanvraag",
        "Afgestemd in de demo, geen extra pakket om te kopen",
      ],
    },
```

Add `customNote` on `pricing` after `note`:

```ts
    customNote:
      "Workflows of functies op maat kunnen we toevoegen op aanvraag.",
```

Keep `footer.tagline` as `Eén flow voor pand, deal en gesprek.` and set `footer.copyright` to `© 2026 Propmaat`.

- [ ] **Step 2: Update `src/i18n/en.ts` to the same key tree**

`en.ts` must still satisfy `Dictionary`. Replace every `PandFlow` with `Propmaat`. Add the same new keys:

```ts
  brand: {
    name: "Propmaat",
  },
```

```ts
  home: {
    heroTitle: "One flow for listings, deals, and conversations",
    heroSub:
      "Propmaat is the workspace for estate agents. Listings, pipeline, and every conversation — website, WhatsApp, and email — in one system.",
    ctaDemo: "Request a demo",
    ctaFeatures: "See features",
    beats: [
      {
        title: "The listing",
        body: "Every property is a dossier: details, media, and a checklist before you go live.",
      },
      {
        title: "The deal",
        body: "A pipeline where every deal has its own dossier.",
      },
      {
        title: "The conversation",
        body: "Website leads, WhatsApp, and email in one place.",
      },
    ],
    landingEyebrow: "Sample from the product",
    landingAddress: "Keizerstraat 18, 2000 Antwerp",
    landingPrice: "€ 649,000",
    landingStatus: "For sale",
    landingBeds: "4 bed",
    customTitle: "Your office, your flow",
    customBody:
      "Propmaat covers the path from prospect to signature. If your office works differently, we add workflows or features on request. We scope that in a demo — not a catalog of add-on packs.",
    priceEyebrow: "Price",
    priceTitle: "€50 per seat per month",
    priceBody:
      "One seat is one login. Every module included, no hidden packs. See what you get.",
    priceCta: "View pricing",
    finalTitle: "See Propmaat in your office",
    finalBody:
      "We’ll walk the product with you. No automated trial — a focused demo.",
  },
```

```ts
    custom: {
      title: "Built to fit",
      body: "Propmaat can add workflows or features that fit your office. Not a module shop: we agree scope and timing in a demo.",
      bullets: [
        "Workflows that match how your office already works",
        "Extra fields or steps on request",
        "Scoped in the demo, not sold as an add-on pack",
      ],
    },
```

```ts
    customNote: "Custom workflows or features can be added on request.",
```

- [ ] **Step 3: Typecheck**

Run: `npx tsc --noEmit`

Expected: FAIL on `src/app/[locale]/page.tsx` (and possibly others) because `home.highlights` no longer exists. That is intended; later tasks delete those usages. If `en.ts` itself errors, fix the key tree before continuing. Do not change `page.tsx` in this task.

- [ ] **Step 4: Commit**

```bash
git add src/i18n/nl.ts src/i18n/en.ts
git commit -m "Replace marketing copy with Propmaat."
```

---

### Task 4: Pin and wordmark

**Files:**
- Create: `src/components/brand/propmaat-pin.tsx`
- Create: `src/components/brand/propmaat-wordmark.tsx`

**Interfaces:**
- Consumes: `tryPathKey` from `@/i18n/config`
- Produces:
  - `PropmaatPin({ size?: number; className?: string })`
  - `PropmaatWordmark({ className?: string; forceVariant?: "complete" | "slot" })`
  - Home (`tryPathKey(pathname) === "home"`) and no reduced motion → empty slot with `id="propmaat-pin-slot"`
  - Otherwise → complete mark; slot id still present so measurement is stable

Read `node_modules/next/dist/docs/` for `usePathname` / client components before writing the wordmark.

- [ ] **Step 1: Create `src/components/brand/propmaat-pin.tsx`**

```tsx
export function PropmaatPin({
  size = 22,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const height = Math.round(size * (28 / 20));
  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 20 28"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 1.4C5.4 1.4 1.7 5 1.7 9.7c0 7.1 7.3 16.2 7.9 17a.55.55 0 0 0 .8 0c.6-.8 7.9-9.9 7.9-17 0-4.7-3.7-8.3-8.3-8.3Zm0 5.1a3.3 3.3 0 1 1 0 6.6 3.3 3.3 0 0 1 0-6.6Z"
      />
    </svg>
  );
}
```

- [ ] **Step 2: Create `src/components/brand/propmaat-wordmark.tsx`**

```tsx
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { tryPathKey } from "@/i18n/config";
import { PropmaatPin } from "./propmaat-pin";

export function PropmaatWordmark({
  className = "",
  forceVariant,
}: {
  className?: string;
  forceVariant?: "complete" | "slot";
}) {
  const pathname = usePathname();
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const onHome = tryPathKey(pathname) === "home";
  const variant =
    forceVariant ?? (onHome && !reduceMotion ? "slot" : "complete");

  return (
    <span
      className={`inline-flex items-end text-[22px] leading-none font-extrabold tracking-tight text-ink ${className}`}
      aria-label="Propmaat"
    >
      <span>Pr</span>
      <span
        id="propmaat-pin-slot"
        className="mx-0.5 inline-flex h-[1em] w-[0.95em] items-end justify-center"
      >
        {variant === "complete" ? <PropmaatPin size={20} /> : null}
      </span>
      <span>pmaat</span>
    </span>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/brand/propmaat-pin.tsx src/components/brand/propmaat-wordmark.tsx
git commit -m "Add Propmaat pin and wordmark."
```

---

### Task 5: Chrome, mocks, email, README

**Files:**
- Modify: `src/components/site-header.tsx`
- Modify: `src/components/site-footer.tsx`
- Modify: `src/components/mocks/shell.tsx`
- Modify: `src/components/mocks/product-mocks.tsx`
- Modify: `src/app/[locale]/not-found.tsx`
- Modify: `src/app/api/contact/route.ts`
- Modify: `README.md`

**Interfaces:**
- Consumes: `PropmaatWordmark`
- Produces: no visitor-facing PandFlow; mocks use `surface` / `on-ink`

- [ ] **Step 1: Header wordmark**

In `src/components/site-header.tsx`, replace the text `PandFlow` link children with:

```tsx
        <Link href={localizedPath(locale, "home")} className="text-ink">
          <PropmaatWordmark />
        </Link>
```

Add: `import { PropmaatWordmark } from "./brand/propmaat-wordmark";`

- [ ] **Step 2: Footer wordmark**

In `src/components/site-footer.tsx`, replace the `<p>PandFlow</p>` with:

```tsx
          <PropmaatWordmark forceVariant="complete" />
```

Add the same import. Keep `dict.footer.tagline` and `dict.footer.copyright`.

- [ ] **Step 3: Mocks**

In `src/components/mocks/shell.tsx`, change `PandFlow` to `Propmaat`.

In `src/components/mocks/product-mocks.tsx`, replace every `bg-white` with `bg-surface` and every `text-white` with `text-on-ink` (inbox reply bubble and any other accent chips that use white text). Leave decorative red/amber dots on the mock window chrome.

- [ ] **Step 4: Not-found and contact email**

`src/app/[locale]/not-found.tsx`: change the `h1` text from `PandFlow` to `Propmaat`.

`src/app/api/contact/route.ts`:

```ts
      const from = process.env.CONTACT_FROM ?? "Propmaat <onboarding@resend.dev>";
```

```ts
        subject: `[Propmaat demo] ${oneLine(office)} — ${seats} seats`,
```

- [ ] **Step 5: README**

Replace `README.md` with:

```md
# Propmaat

Marketing site for Propmaat, a CRM for estate agents in Belgium and the Netherlands.

## Stack

Next.js 16, TypeScript, Tailwind CSS v4.

## Develop

```bash
npm install
npm test
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). English lives under `/en`.

## Demo form email

Set these in `.env.local` to forward demo requests:

```
RESEND_API_KEY=
CONTACT_EMAIL=
CONTACT_FROM=Propmaat <onboarding@resend.dev>
```

Without them the form still succeeds and logs the request to the server console.

## Scripts

- `npm run dev` — local server
- `npm test` — unit tests
- `npm run build` — production build
```

- [ ] **Step 6: Commit**

```bash
git add src/components/site-header.tsx src/components/site-footer.tsx src/components/mocks/shell.tsx src/components/mocks/product-mocks.tsx src/app/[locale]/not-found.tsx src/app/api/contact/route.ts README.md
git commit -m "Rebrand chrome, mocks, and demo email to Propmaat."
```

---

### Task 6: Functies and Prijzen

**Files:**
- Modify: `src/app/[locale]/functies/page.tsx`
- Modify: `src/app/[locale]/prijzen/page.tsx`

**Interfaces:**
- Consumes: `dict.brand.name`, `dict.features.custom`, `dict.pricing.customNote`
- Produces: Op maat / Built to fit block; custom sentence on pricing; no hardcoded PandFlow

- [ ] **Step 1: Functies page**

Replace the hardcoded eyebrow and append the custom section after the mapped articles.

`src/app/[locale]/functies/page.tsx` full file:

```tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FeatureMock } from "@/components/mocks/product-mocks";
import { Container, Eyebrow } from "@/components/ui";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/functies">): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: dict.meta.functies.title,
    description: dict.meta.functies.description,
    openGraph: {
      title: dict.meta.functies.title,
      description: dict.meta.functies.description,
    },
  };
}

export default async function FeaturesPage({
  params,
}: PageProps<"/[locale]/functies">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const custom = dict.features.custom;

  return (
    <Container className="py-16 lg:py-20">
      <Eyebrow>{dict.brand.name}</Eyebrow>
      <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
        {dict.features.title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
        {dict.features.intro}
      </p>

      <div className="mt-16 space-y-20">
        {dict.features.sections.map((section, index) => (
          <article
            key={section.id}
            className="grid items-center gap-10 lg:grid-cols-2"
          >
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {section.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {section.body}
              </p>
              <ul className="mt-5 space-y-2 text-sm">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={index % 2 === 1 ? "lg:order-1" : ""}>
              <FeatureMock id={section.id} locale={locale} />
            </div>
          </article>
        ))}

        <article className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {custom.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              {custom.body}
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              {custom.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-line bg-surface p-8">
            <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">
              {dict.brand.name}
            </p>
            <p className="mt-3 text-xl font-semibold tracking-tight">
              {custom.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {custom.body}
            </p>
          </div>
        </article>
      </div>
    </Container>
  );
}
```

- [ ] **Step 2: Prijzen page**

In `src/app/[locale]/prijzen/page.tsx`, replace the hardcoded `PandFlow` with `{dict.brand.name}` and render `{pricing.customNote}` after the included list, before the CTA:

```tsx
        <p className="text-sm font-semibold text-accent">{dict.brand.name}</p>
```

```tsx
        <p className="mt-6 text-sm leading-relaxed text-ink">
          {pricing.customNote}
        </p>
        <Link
          href={localizedPath(locale, "contact")}
          className={primaryButtonClass("mt-8 w-full")}
        >
          {pricing.cta}
        </Link>
        <p className="mt-4 text-xs leading-relaxed text-muted">{pricing.note}</p>
```

- [ ] **Step 3: Commit**

```bash
git add src/app/[locale]/functies/page.tsx src/app/[locale]/prijzen/page.tsx
git commit -m "Add custom-work copy on features and pricing."
```

---

### Task 7: Neighborhood map

**Files:**
- Create: `src/components/pin-journey/neighborhood-map.tsx`

**Interfaces:**
- Consumes: dossier strings from the dictionary (passed as props)
- Produces: house element `id="propmaat-pin-target"`; static pin with class `pin-static`; dossier wrapper `id="propmaat-dossier"`

- [ ] **Step 1: Create the map**

```tsx
import { PropmaatPin } from "@/components/brand/propmaat-pin";

export type DossierCopy = {
  eyebrow: string;
  address: string;
  price: string;
  status: string;
  beds: string;
};

export function NeighborhoodMap({ dossier }: { dossier: DossierCopy }) {
  return (
    <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.8fr)]">
      <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-line bg-surface">
        <svg
          viewBox="0 0 640 400"
          className="h-full w-full"
          role="img"
          aria-label={dossier.address}
        >
          <rect width="640" height="400" fill="#F7F4EE" />
          <path d="M0 250 H640" stroke="#DDD8CE" strokeWidth="36" />
          <path d="M220 0 V400" stroke="#DDD8CE" strokeWidth="28" />
          <path d="M0 250 H640" stroke="#FBF8F2" strokeWidth="2" strokeDasharray="10 12" />
          <path d="M220 0 V400" stroke="#FBF8F2" strokeWidth="2" strokeDasharray="10 12" />

          <g fill="#E8E4DC" stroke="#2D2D2D" strokeWidth="1.4">
            <rect x="48" y="48" width="88" height="70" rx="4" />
            <polygon points="48,48 92,22 136,48" />
            <rect x="360" y="40" width="96" height="78" rx="4" />
            <polygon points="360,40 408,14 456,40" />
            <rect x="500" y="56" width="80" height="64" rx="4" />
            <polygon points="500,56 540,32 580,56" />
            <rect x="56" y="292" width="100" height="72" rx="4" />
            <polygon points="56,292 106,268 156,292" />
            <rect x="400" y="300" width="90" height="68" rx="4" />
            <polygon points="400,300 445,276 490,300" />
          </g>

          <g
            id="propmaat-pin-target"
            transform="translate(292 118)"
            fill="#FBF8F2"
            stroke="#2D2D2D"
            strokeWidth="1.6"
          >
            <rect x="0" y="28" width="110" height="86" rx="5" />
            <polygon points="0,28 55,0 110,28" />
            <rect x="44" y="74" width="22" height="40" fill="#E8E4DC" />
            <rect x="16" y="46" width="22" height="18" fill="#E8E4DC" />
            <rect x="72" y="46" width="22" height="18" fill="#E8E4DC" />
          </g>

          <circle cx="92" cy="200" r="7" fill="#6B6860" />
          <circle cx="92" cy="188" r="16" fill="#2D2D2D" opacity="0.18" />
          <circle cx="540" cy="210" r="7" fill="#6B6860" />
          <circle cx="540" cy="198" r="16" fill="#2D2D2D" opacity="0.18" />
        </svg>
        <div className="pin-static pointer-events-none absolute top-[28%] left-[54%] -translate-x-1/2 -translate-y-full text-ink">
          <PropmaatPin size={28} />
        </div>
      </div>

      <aside
        id="propmaat-dossier"
        className="rounded-3xl border border-line bg-surface p-6"
      >
        <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">
          {dossier.eyebrow}
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight">
          {dossier.address}
        </h3>
        <p className="mt-4 text-3xl font-semibold tracking-tight">
          {dossier.price}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-ink">
            {dossier.status}
          </span>
          <span className="rounded-full border border-line px-3 py-1 text-xs text-muted">
            {dossier.beds}
          </span>
        </div>
      </aside>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/pin-journey/neighborhood-map.tsx
git commit -m "Add illustrated neighborhood landing map."
```

---

### Task 8: Homepage story and pin traveler

**Files:**
- Create: `src/components/pin-journey/pin-journey.tsx`
- Modify: `src/app/[locale]/page.tsx`

**Interfaces:**
- Consumes: `scrollProgress`, `pointAlong`, `Waypoint` from `@/lib/pin-progress`; `PropmaatPin`; `NeighborhoodMap`; `dict.home`
- Produces: traveler `position: fixed; z-index: 50`; sets `html[data-pin-journey=on]`; toggles `#propmaat-dossier.is-landed` at progress `>= 0.92`; waypoints `#propmaat-pin-slot`, `#pin-beat-0`, `#pin-beat-1`, `#pin-beat-2`, `#propmaat-pin-target`

- [ ] **Step 1: Create `src/components/pin-journey/pin-journey.tsx`**

```tsx
"use client";

import { useEffect, useState } from "react";
import { PropmaatPin } from "@/components/brand/propmaat-pin";
import { pointAlong, scrollProgress, type Waypoint } from "@/lib/pin-progress";

const BEAT_IDS = ["pin-beat-0", "pin-beat-1", "pin-beat-2"] as const;
const LAND_AT = 0.92;

function centerOf(id: string): Waypoint | null {
  const el = document.getElementById(id);
  if (!el) return null;
  const rect = el.getBoundingClientRect();
  return {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2,
  };
}

export function PinJourney() {
  const [pose, setPose] = useState<{
    x: number;
    y: number;
    scale: number;
    visible: boolean;
  } | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    document.documentElement.dataset.pinJourney = "on";

    let frame = 0;

    const tick = () => {
      const slot = centerOf("propmaat-pin-slot");
      const house = centerOf("propmaat-pin-target");
      const beats = BEAT_IDS.map((id) => {
        const point = centerOf(id);
        return point ? { ...point, scale: 1.35 } : null;
      });

      if (!slot || !house || beats.some((b) => b === null)) {
        frame = window.requestAnimationFrame(tick);
        return;
      }

      const houseDocY = house.y + window.scrollY;
      const progress = scrollProgress(
        window.scrollY,
        0,
        Math.max(1, houseDocY - window.innerHeight * 0.42),
      );

      const waypoints: Waypoint[] = [
        { x: slot.x, y: slot.y, scale: 1 },
        ...(beats as Waypoint[]),
        { x: house.x, y: house.y - 28, scale: 1.15 },
      ];

      const next = pointAlong(progress, waypoints);
      setPose({ ...next, visible: true });

      const dossier = document.getElementById("propmaat-dossier");
      dossier?.classList.toggle("is-landed", progress >= LAND_AT);

      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
      delete document.documentElement.dataset.pinJourney;
      document.getElementById("propmaat-dossier")?.classList.remove("is-landed");
    };
  }, []);

  if (!pose?.visible) return null;

  return (
    <div
      className="pointer-events-none fixed z-50 text-ink"
      style={{
        left: pose.x,
        top: pose.y,
        transform: `translate(-50%, -100%) scale(${pose.scale})`,
      }}
      aria-hidden
    >
      <PropmaatPin size={22} />
    </div>
  );
}
```

- [ ] **Step 2: Replace `src/app/[locale]/page.tsx`**

```tsx
import Link from "next/link";
import {
  HeroMock,
  InboxMock,
  KanbanMock,
} from "@/components/mocks/product-mocks";
import { NeighborhoodMap } from "@/components/pin-journey/neighborhood-map";
import { PinJourney } from "@/components/pin-journey/pin-journey";
import {
  Container,
  Eyebrow,
  primaryButtonClass,
  secondaryButtonClass,
} from "@/components/ui";
import { isLocale, localizedPath } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: dict.meta.home.title,
    description: dict.meta.home.description,
    openGraph: {
      title: dict.meta.home.title,
      description: dict.meta.home.description,
    },
  };
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const home = dict.home;
  const beatMocks = [
    <HeroMock key="listing" locale={locale} />,
    <KanbanMock key="deal" locale={locale} />,
    <InboxMock key="inbox" locale={locale} />,
  ];

  return (
    <>
      <PinJourney />

      <section className="relative">
        <Container className="py-16 lg:py-24">
          <h1 className="animate-rise max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
            {home.heroTitle}
          </h1>
          <p className="animate-rise delay-1 mt-5 max-w-xl text-lg leading-relaxed text-muted">
            {home.heroSub}
          </p>
          <div className="animate-rise delay-2 mt-8 flex flex-wrap gap-3">
            <Link
              href={localizedPath(locale, "contact")}
              className={primaryButtonClass()}
            >
              {home.ctaDemo}
            </Link>
            <Link
              href={localizedPath(locale, "functies")}
              className={secondaryButtonClass()}
            >
              {home.ctaFeatures}
            </Link>
          </div>
        </Container>
      </section>

      {home.beats.map((beat, index) => (
        <section key={beat.title} className="py-16 lg:py-20">
          <Container className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Eyebrow>{String(index + 1).padStart(2, "0")}</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                {beat.title}
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                {beat.body}
              </p>
            </div>
            <div id={`pin-beat-${index}`}>{beatMocks[index]}</div>
          </Container>
        </section>
      ))}

      <section className="py-16 lg:py-20">
        <Container>
          <NeighborhoodMap
            dossier={{
              eyebrow: home.landingEyebrow,
              address: home.landingAddress,
              price: home.landingPrice,
              status: home.landingStatus,
              beds: home.landingBeds,
            }}
          />
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight">
            {home.customTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {home.customBody}
          </p>
          <Link
            href={localizedPath(locale, "contact")}
            className={primaryButtonClass("mt-8")}
          >
            {home.ctaDemo}
          </Link>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container className="rounded-3xl border border-line bg-ink px-6 py-12 text-on-ink sm:px-12">
          <Eyebrow>
            <span className="text-accent-soft">{home.priceEyebrow}</span>
          </Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {home.priceTitle}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-on-ink/70">
            {home.priceBody}
          </p>
          <Link
            href={localizedPath(locale, "prijzen")}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-on-ink px-5 py-2.5 text-sm font-semibold text-ink hover:bg-accent-soft"
          >
            {home.priceCta}
          </Link>
        </Container>
      </section>

      <section className="pb-20">
        <Container className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            {home.finalTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted">{home.finalBody}</p>
          <Link
            href={localizedPath(locale, "contact")}
            className={primaryButtonClass("mt-6")}
          >
            {home.ctaDemo}
          </Link>
        </Container>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Typecheck, unit tests**

Run: `npx tsc --noEmit`

Expected: PASS

Run: `npm test`

Expected: PASS (existing tests + pin-progress)

- [ ] **Step 4: Commit**

```bash
git add src/components/pin-journey/pin-journey.tsx src/app/[locale]/page.tsx
git commit -m "Build homepage pin journey and landing story."
```

---

### Task 9: Verify

**Files:** none new (fix only if a command fails)

- [ ] **Step 1: Grep for leftover visitor-facing PandFlow**

Run: `npx rg -n "PandFlow|0[Ff]766[Ee]|#ffffff|#FFFFFF" src README.md`

Expected: no matches in visitor-facing files. `package.json` name `pandflow` may remain. If `bg-white` leftovers remain in mocks, replace them with `bg-surface` and commit with the verify fixes.

- [ ] **Step 2: Test and build**

Run: `npm test`

Expected: PASS

Run: `npm run build`

Expected: PASS (read `node_modules/next/dist/docs/` if the build errors on an API)

- [ ] **Step 3: Browser check (do not skip)**

1. `npm run dev` → open `/`
2. At top: header reads Propmaat with pin in place
3. Scroll: pin leaves the nav, passes listing / deal / inbox, docks on the house; dossier becomes visible
4. Scroll back: pin returns; dossier hides
5. Open `/functies`: complete logo (pin present), last section Op maat
6. Open `/prijzen`: Propmaat name + custom sentence + €50
7. Open `/en`: English copy, same motion
8. If you can emulate `prefers-reduced-motion: reduce`: complete header logo, pin already on the house, dossier visible

- [ ] **Step 4: Commit only if Step 1–2 required fixes**

```bash
git add -u
git commit -m "Fix leftover PandFlow or token regressions."
```

Skip this commit if the tree is clean.

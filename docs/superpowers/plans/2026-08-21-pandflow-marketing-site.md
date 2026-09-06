# PandFlow Marketing Site Implementation Plan

> **For agentic workers:** Implement task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a Dutch-first, English-capable Next.js marketing site that showcases PandFlow and converts visitors through a demo form.

**Architecture:** Next.js 16 App Router under `src/app/[locale]`. Middleware prefixes English (`/en`) and rewrites English slugs to Dutch page folders. Copy lives in `src/i18n/nl.ts` and `en.ts`. One API route emails demo requests via Resend when configured.

**Tech Stack:** Next.js 16, React, TypeScript, Tailwind CSS v4, Resend, Vitest for unit tests.

## Global Constraints

- Product name is PandFlow only — never OKO / oko.immo
- Price is exactly €50 per seat per month
- No checkout, auth, analytics, cookie banner, or invented testimonials
- NL default URLs have no `/nl` prefix; EN uses `/en` + English slugs
- User-visible strings come from the i18n dictionaries
- Read `node_modules/next/dist/docs/` before using Next.js APIs

## File map

| File | Responsibility |
|------|----------------|
| `src/i18n/config.ts` | Locales, slug map, `localizedPath`, `swapLocalePath` |
| `src/i18n/nl.ts` / `en.ts` | All copy |
| `src/lib/contact-schema.ts` | Shared payload validation |
| `src/app/api/contact/route.ts` | POST handler, honeypot, rate limit, Resend |
| `src/app/[locale]/layout.tsx` | Chrome, fonts, `html lang` |
| `src/app/[locale]/page.tsx` | Home |
| `src/app/[locale]/functies/page.tsx` | Features |
| `src/app/[locale]/prijzen/page.tsx` | Pricing |
| `src/app/[locale]/contact/page.tsx` | Demo form page |
| `src/app/[locale]/privacy/page.tsx` | Privacy |
| `src/components/site-header.tsx` | Nav + CTA + language toggle |
| `src/components/site-footer.tsx` | Footer |
| `src/components/demo-form.tsx` | Client form |
| `src/components/mocks/*.tsx` | Decorative CRM UI |
| `middleware.ts` | Locale + slug rewrites |
| `src/i18n/config.test.ts` | Path helper tests |
| `src/lib/contact-schema.test.ts` | Validation tests |

---

### Task 1: Scaffold Next.js 16

- [ ] `create-next-app` in repo root with TypeScript, Tailwind, App Router, `src/`
- [ ] Add Vitest
- [ ] Add `AGENTS.md` pointing at `node_modules/next/dist/docs/`

### Task 2: i18n config + tests

- [ ] Implement `localizedPath` and `swapLocalePath`
- [ ] Tests for `/` ↔ `/en`, `/functies` ↔ `/en/features`, `/prijzen` ↔ `/en/pricing`
- [ ] Middleware as specified in the spec

### Task 3: Dictionaries + chrome

- [ ] Full NL/EN dictionaries (home, features, pricing, contact, privacy, chrome, errors)
- [ ] Header, footer, language toggle, teal visual system in `globals.css`

### Task 4: Pages + mockups

- [ ] Home, Functies, Prijzen, Contact, Privacy
- [ ] Hero, kanban, listing, and inbox mockups

### Task 5: Contact API + form

- [ ] Schema tests then schema
- [ ] API route with honeypot, rate limit, Resend-or-log
- [ ] Client form with success/error states

### Task 6: Verify

- [ ] `npm test` pass
- [ ] `npm run build` pass

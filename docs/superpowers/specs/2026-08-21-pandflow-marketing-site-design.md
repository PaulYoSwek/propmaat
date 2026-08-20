# PandFlow marketing site

Marketing website for PandFlow, a CRM for Belgian and Dutch real-estate agents (makelaars). New standalone repository at `D:\Projects\PandFlow`. This site sells the product; it does not host the CRM.

## Goal

A professional, product-first multi-page site that shows what PandFlow does, what you get, and how much it costs (€50 per seat per month). Primary conversion: request a demo via a contact form. Dutch is the default language, with a one-click switch to English.

## Out of scope (v1)

- Stripe or any checkout
- Login, signup, or connection to the CRM app
- Cookie banner or analytics
- Real CRM screenshots (use styled HTML/CSS mockups)
- Blog, case studies, or customer logos (no invented social proof)
- Mobile native apps
- Claiming certifications (GDPR seals, ISO, etc.)

## Stack

- **Next.js 16** App Router, React, TypeScript
- **Tailwind CSS v4**
- **Node.js** (Next.js server + one API route)
- **Resend** for demo-request email when `RESEND_API_KEY` and `CONTACT_EMAIL` are set
- No database
- Deploy-ready for Vercel

Read `node_modules/next/dist/docs/` before writing Next.js APIs. Heed deprecation notices.

## Brand

- **Name:** PandFlow
- **Not** OKO, oko.immo, or any client-office name
- **Audience:** independent and small-office makelaars in Belgium and the Netherlands
- **Voice:** clear, confident, concrete. Dutch copy first; English is a faithful translation, not a rewrite with different claims
- **Tagline NL:** Eén flow voor pand, deal en gesprek
- **Tagline EN:** One flow for listings, deals, and conversations

Do not invent testimonials, customer counts, or “used by X offices”.

## Visual system

Product-first, light, slightly fancy:

| Token | Value |
|-------|--------|
| Page background | `#F6F4EF` (warm off-white) |
| Surface | `#FFFFFF` |
| Text | `#12141A` |
| Muted text | `#5C6170` |
| Accent | `#0F766E` (teal-700) |
| Accent hover | `#0D9488` (teal-600) |
| Accent soft | `#CCFBF1` |
| Border | `#E6E2D8` |
| Radius | 16px cards, 999px pills/buttons |

- **Fonts:** `Geist` for UI/body, `Geist Mono` only inside product mockups. Headlines can use Geist at large weight — no second display family.
- **Motion:** short fade/slide on hero and feature blocks (`200–400ms`). No 3D, no particle backgrounds, no full-page parallax.
- **Product mockups:** React components that look like a dense CRM (kanban columns, listing card, split inbox). Light chrome, teal accents, Dutch sample data in NL locale and English sample data in EN locale. Decorative only — not interactive beyond hover.

## Information architecture

Dutch URLs are canonical. English uses an `/en` prefix and English slugs.

| NL | EN | Purpose |
|----|----|---------|
| `/` | `/en` | Home |
| `/functies` | `/en/features` | Feature deep-dives |
| `/prijzen` | `/en/pricing` | Single plan + inclusions |
| `/contact` | `/en/contact` | Demo form |
| `/privacy` | `/en/privacy` | Privacy notice for the form |

Implementation: page folders use Dutch slugs only (`functies`, `prijzen`, `contact`, `privacy`). Middleware:

- Accepts locales `nl` and `en` only
- Serves `nl` without a prefix (`/` not `/nl`)
- Prefixes English with `/en`
- Rewrites English slugs to the Dutch folders: `/en/features` → `/en/functies`, `/en/pricing` → `/en/prijzen`
- Redirects `/nl` and `/nl/...` to the unprefixed Dutch URL
- Unknown locales → 404

Do not duplicate page files per language.

Language toggle in the header: switch locale, stay on the equivalent page, persist `locale` cookie (`pf_locale`, 1 year, `SameSite=Lax`). First visit without cookie uses `nl` (do not geo-detect).

### Shared chrome

**Header:** wordmark “PandFlow”, links (Functies / Prijzen / Contact), language toggle `NL | EN`, primary button “Vraag een demo” → `/contact`.

**Footer:** short tagline, same nav + Privacy, copyright `© 2026 PandFlow`. No fake address, phone, or Chamber of Commerce number.

## Page content

### Home

1. **Hero** — H1 = tagline. Sub: two sentences: PandFlow is the workspace for listings, pipeline, and every conversation (site, WhatsApp, mail). CTA pair: “Vraag een demo” (primary) + “Bekijk functies” (secondary). Right/below: hero app mockup (listing + pipeline peek).
2. **Four highlights** — Panden, Deals, Inbox (WhatsApp + mail + website leads), Publicatie (eigen site + Immoweb). Each: title, 2-line benefit, link to `/functies`.
3. **For whom** — One short band: for makelaars who want one system instead of WhatsApp + spreadsheets + a separate website inbox.
4. **Pricing teaser** — “€50 per seat per maand”, one line of what a seat is, button to `/prijzen`.
5. **Final CTA** — Repeat demo button.

### Functies

Intro: “Alles in één werkruimte.” Then stacked sections (image/mock left-right alternating):

| Section | What we claim (and no more) |
|---------|-----------------------------|
| Panden | Volledige panddossiers: gegevens, media, checklist voor publicatie |
| Publicatie | Publiceren naar je eigen website en Immoweb |
| Deals | Kanban-pipeline; dossier per deal |
| Prospecten | Apart bord om nieuwe leads te kweken tot klant |
| Klanten | Contacten, zoekprofiel, matching met panden |
| Website-leads | Aanvragen van je site in één werkvoorraad; antwoord via mail of WhatsApp |
| WhatsApp & mail | Twee-weg inbox; sjablonen; AI alleen als hulp bij formuleren, niet als autonome agent |
| Agenda & bezichtigingen | Agenda, kijkmomenten, planningslinks waarop partijen stemmen |
| Beslissingen | Eén overzicht van openstaande acties |
| Ondertekenen | DocuSign vanuit het kantoor |
| Virtuele inrichting | Staging op kamerfoto’s; resultaat bewaren bij het pand |
| Team | Rollen en rechten per medewerker |

Each section: heading, 40–80 words, 3 bullets, one mockup. No “coming soon” items.

### Prijzen

One card, no comparison table.

- **Name:** PandFlow
- **Price:** €50
- **Unit:** per seat / month (`per seat per maand` / `per seat per month`)
- **Seat definition:** one person with a login. Billable per active user.
- **CTA:** “Vraag een demo” → `/contact` (optional query `?seats=` pre-fills the seats field)

**Included (must all appear):**

- Unlimited panden, deals, klanten, and website-leads (no volume cap claimed as a “fair use” asterisk — just unlimited operational records)
- All modules listed on Functies
- WhatsApp- and mail-inbox
- Website + Immoweb publication
- Agenda, bezichtigingen, planning
- DocuSign
- Virtuele inrichting
- Teamrollen
- Dutch and English in the product UI
- Onboarding via demo (human), not a self-serve trial

No free plan, no annual discount, no “most popular” badge. One sentence: Immoweb / WhatsApp / mail / DocuSign need their own provider accounts; PandFlow connects them.

### Contact

- Heading: “Plan een demo”
- Short line: we reply by email; no automated signup
- Form fields:

| Field | Required | Rules |
|-------|----------|--------|
| `name` | yes | 2–80 chars |
| `office` | yes | 2–80 chars |
| `email` | yes | valid email |
| `phone` | no | max 30 chars |
| `seats` | yes | integer 1–99, default 1 |
| `message` | no | max 2000 chars |
| `company` | honeypot | hidden; if filled, return success and drop |

Submit → `POST /api/contact` (JSON). Success: inline confirmation, hide form. Failure: inline error, keep values.

If `RESEND_API_KEY` and `CONTACT_EMAIL` are set: send email to `CONTACT_EMAIL` from Resend, subject `[PandFlow demo] {office} — {seats} seats`, body with all fields + locale. If not set: accept the request, log a one-line JSON summary to the server console, still return success (so local preview and first deploys work). Never persist submissions to disk.

Rate limit: 5 requests per IP per 15 minutes; over limit → 429 with a Dutch/English message matching the page locale (`locale` field in JSON, default `nl`).

### Privacy

Short page: form data is used only to answer the demo request; not sold; retained only as long as the mailbox keeps the email; contact via the same form. No invented legal entity or VAT number.

## API contract

`POST /api/contact`

```ts
type ContactPayload = {
  name: string;
  office: string;
  email: string;
  phone?: string;
  seats: number;
  message?: string;
  company?: string; // honeypot
  locale?: "nl" | "en";
};

type ContactOk = { ok: true };
type ContactErr = { ok: false; error: string };
```

Validate on the server. Do not trust the client. Escape values in the email body as plain text (no HTML interpolation of user input).

## i18n

- Dictionaries: `src/i18n/nl.ts` and `src/i18n/en.ts` with the same key tree
- All user-visible strings go through the dictionary (including form errors and API error messages)
- Language toggle never leaves a mixed-language page

## SEO and meta

- `<html lang>` follows locale
- Unique title + description per page (from dictionary)
- Open Graph title/description same as document meta
- Favicon: simple “P” mark in teal on off-white (SVG)

## Project files (target)

```
src/app/[locale]/layout.tsx
src/app/[locale]/page.tsx
src/app/[locale]/functies/page.tsx
src/app/[locale]/prijzen/page.tsx
src/app/[locale]/contact/page.tsx
src/app/[locale]/privacy/page.tsx
src/app/api/contact/route.ts
src/app/globals.css
src/components/site-header.tsx
src/components/site-footer.tsx
src/components/language-toggle.tsx
src/components/demo-form.tsx
src/components/mocks/*.tsx
src/i18n/nl.ts
src/i18n/en.ts
src/i18n/config.ts
src/lib/contact-schema.ts
middleware.ts
```

English routes render the same page components. Middleware rewrites `/en/features` → `/en/functies` and `/en/pricing` → `/en/prijzen`. Helper `localizedPath(locale, key)` in `src/i18n/config.ts` is the only place that knows those slugs.

## Testing

- Unit tests for contact payload validation (valid, missing fields, honeypot, seats bounds)
- Unit tests for locale path helpers (`/` ↔ `/en`, `/functies` ↔ `/en/features`)
- No E2E required in v1

## Success criteria

- Four marketing pages + privacy, NL and EN, no mixed language
- Price €50 / seat / month is visible on home and pricing
- Feature list matches the table above and does not invent modules
- Demo form validates and hits `/api/contact`
- Site looks like a polished SaaS marketing site: light, teal, product mockups, not a generic template

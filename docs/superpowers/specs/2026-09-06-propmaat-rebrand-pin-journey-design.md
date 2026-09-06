# Propmaat rebrand and pin journey

Rebrand the existing PandFlow marketing site to **Propmaat**, and replace the homepage’s conventional SaaS layout with a scroll story: the map-pin “o” leaves the header wordmark and lands on a house in an illustrated neighborhood. This site still only sells the CRM; it does not host the product.

This spec supersedes brand, visual system, homepage structure, favicon, and demo-email naming in `2026-08-21-pandflow-marketing-site-design.md`. Information architecture, feature claims, price, contact API, and out-of-scope list from that spec stay in force unless this document says otherwise.

## Goal

Visitors meet **Propmaat** (not PandFlow) in cream-and-charcoal, not teal. On the homepage they watch the logo pin travel down the page and pin a property. They also see that custom workflows and features can be added on request. Primary conversion remains the demo form.

## Out of scope

- Renaming the git folder or npm package (`pandflow` may stay internally)
- Real map tiles, Mapbox, Leaflet, MapLibre, or any map SDK
- Pin flight on Functies, Prijzen, Contact, or Privacy
- New routes, checkout, auth, analytics, cookie banner, testimonials, or extra languages
- Changing price, modules, or form fields
- A second display typeface
- Animation libraries (GSAP, Motion, etc.)

## Stack (unchanged)

Next.js 16 App Router, React, TypeScript, Tailwind CSS v4, Resend, Vitest. No database. Read `node_modules/next/dist/docs/` before using Next.js APIs.

## Brand

- **Name:** Propmaat (capital P, remaining letters lowercase)
- **Not** PandFlow, OKO, or oko.immo in any visitor-facing string
- **Audience:** independent and small-office makelaars in Belgium and the Netherlands
- **Voice:** clear, confident, concrete. Dutch first; English is a faithful translation
- **Tagline NL:** Eén flow voor pand, deal en gesprek
- **Tagline EN:** One flow for listings, deals, and conversations

Do not invent testimonials, customer counts, or “used by X offices”.

### Logo

The wordmark is an SVG, not the raster files as the live mark (rasters are reference only).

- Letters: `Pr` + gap + `pmaat` in a heavy, slightly rounded geometric sans (approximate with Geist ExtraBold / black weight; do not license a new font)
- **Pin:** outline map marker (teardrop, point down, circular cutout in the bowl). Stroke weight matches the letters. The point sits on the letter baseline; the bowl matches lowercase x-height
- The pin is a separate SVG group/path so it can hide or leave. The letter gap is a reserved slot with the same width as the pin — letters never reflow when the pin is gone
- Recreate paths by tracing the clear logo (`PropMaatLogoClear`). Do not stretch a PNG in the header

### Color

Not pure `#FFFFFF` / `#000000`. No teal.

| Token | Value | Role |
|-------|--------|------|
| Page background | `#F7F4EE` | Warm cream paper |
| Surface | `#FBF8F2` | Cards; slightly lighter cream, not white |
| Ink | `#2D2D2D` | Text, logo, pin, primary buttons |
| Muted | `#6B6860` | Secondary text |
| Accent | `#2D2D2D` | Same as ink (replaces teal) |
| Accent hover | `#1A1A1A` | Darker charcoal |
| Accent soft | `#E8E4DC` | Selection, soft chips |
| Line | `#DDD8CE` | Borders |
| On-ink | `#F7F4EE` | Text on charcoal buttons / dark bands |

Radius stays 16px cards, 999px pills. Geist + Geist Mono (mono only inside mocks).

## Information architecture (unchanged)

| NL | EN | Purpose |
|----|----|---------|
| `/` | `/en` | Home (pin journey) |
| `/functies` | `/en/features` | Feature deep-dives + custom work |
| `/prijzen` | `/en/pricing` | €50 plan + custom-work sentence |
| `/contact` | `/en/contact` | Demo form |
| `/privacy` | `/en/privacy` | Form privacy |

Header: Propmaat wordmark, Functies / Prijzen / Contact, `NL | EN`, “Vraag een demo”. Footer: wordmark + tagline, same links + Privacy, `© 2026 Propmaat`. No fake address or company number.

## Homepage

Homepage-only client journey. Other pages mount a complete static wordmark and no traveler.

### Scroll order

1. **Hero** — H1 = tagline. Sub: two sentences, name is Propmaat, same product claim (panden, pipeline, website / WhatsApp / mail). CTAs: demo + functies. No hero app mock and no extra texture or teal wash; the header pin is the visual.
2. **Beat — listing** — Compact listing mock as the first waypoint. Pin does not dock.
   - NL title: `Het pand` · body: `Elk object is een dossier: gegevens, media en een checklist vóór je live gaat.`
   - EN title: `The listing` · body: `Every property is a dossier: details, media, and a checklist before you go live.`
3. **Beat — deal** — Compact kanban mock as waypoint.
   - NL title: `De deal` · body: `Een pipeline waarin elke deal een eigen dossier heeft.`
   - EN title: `The deal` · body: `A pipeline where every deal has its own dossier.`
4. **Beat — conversation** — Compact inbox mock as waypoint.
   - NL title: `Het gesprek` · body: `Website-leads, WhatsApp en mail op één plek.`
   - EN title: `The conversation` · body: `Website leads, WhatsApp, and email in one place.`
5. **Landing — neighborhood** — Illustrated SVG street (a few blocks, 3–4 houses, simple trees/roofs). Cream and charcoal only. One house is the target (`id="propmaat-pin-target"`). When the pin docks, a dossier panel slides in (from the side on `md+`, from below on small screens) with decorative sample data from the dictionary:
   - Eyebrow NL: `Voorbeeld in het product` · EN: `Sample from the product`
   - NL: `Keizerstraat 18, 2000 Antwerpen` · `€ 649.000` · `Te koop` · `4 slpk`
   - EN: `Keizerstraat 18, 2000 Antwerp` · `€ 649,000` · `For sale` · `4 bed`
6. **Custom workflows** — CTA to `/contact`.
   - NL title: `Jouw kantoor, jouw flow` · body: `Propmaat dekt het pad van prospect tot ondertekening. Werkt je kantoor anders, dan voegen we workflows of functies toe op aanvraag. Dat spreken we af in een demo — geen catalogus van extra pakketten.`
   - EN title: `Your office, your flow` · body: `Propmaat covers the path from prospect to signature. If your office works differently, we add workflows or features on request. We scope that in a demo — not a catalog of add-on packs.`
7. **Price teaser** — €50 per seat per month, one line on what a seat is, link to `/prijzen`.
8. **Final CTA** — Demo again.

Remove the old four-highlight grid and “for whom” band from home. Those claims live in the beats + Functies.

## Pin motion

### Pieces

- `PropmaatWordmark` — letters + reserved pin slot. Variant `complete` (pin drawn in the slot) or `slot` (empty slot).
- `PropmaatPin` — the outline pin, sized by a `size` prop.
- `PinJourney` — homepage-only client wrapper (rendered from `page.tsx`, not the layout). Renders the fixed traveler and owns scroll state. Measures `#propmaat-pin-slot` in the header and `#propmaat-pin-target` on the map.
- Header stays in the locale layout. A small client wordmark reads `usePathname()`: on `/` and `/en` (home only, not `/functies` or `/en/features`) it renders `slot` and leaves the pin to the traveler; every other path renders `complete`. Never draw two pins. At progress 0 the traveler is aligned to the slot so the mark looks whole.
- Reduced motion: wordmark uses `complete` even on home; `PinJourney` does not render a moving pin (map still shows a static pin on the house).

### Path

Pure functions in `src/lib/pin-progress.ts` (unit-tested):

- `scrollProgress(scrollY, startY, endY) → 0..1` clamped. If `endY <= startY`, return `0`.
- `pointAlong(progress, waypoints[]) → { x, y, scale }` piecewise linear between waypoints. `0` waypoints → `{ x: 0, y: 0, scale: 1 }`. `1` waypoint → that point (scale default `1` if omitted).

Waypoints, in order: header pin-slot center, listing beat focal, deal beat focal, inbox beat focal, house target center. Remeasure on load, resize, and locale/layout change.

- Progress 0: traveler over the header slot (looks like a complete logo)
- Progress 0–1: pin moves along the polyline
- Progress 1: pin sits on the house; dossier is visible (CSS transform/opacity, 300ms)
- Scroll back: reverse; dossier hides below ~0.92 progress
- Scale: ~1.0 in the header, up to ~1.35 mid-flight, ~1.15 on the house

Implementation: scroll listener + `requestAnimationFrame`. Traveler is `position: fixed`, pointer-events none, z-index above page content and at least as high as the sticky header (`z-40` today → traveler `z-50`) so it can leave the nav. No canvas.

### Reduced motion

If `prefers-reduced-motion: reduce`: do not mount a moving traveler. Header uses `complete`. Map renders with a static pin already on the house. Dossier is visible. No scroll-linked transforms.

### Mobile

Same waypoints, stacked layout. Map min-height ~320px. Dossier under the map, not an overlay that hides the house. Path remeasures after orientation change.

## Inner pages

Same cream/charcoal chrome and Propmaat wordmark (`complete`). Existing feature sections stay; only the name and color tokens change.

**Functies — add last section `op-maat` / `custom`:**

- NL title: `Op maat`
- NL body: `Propmaat kan workflows of functies toevoegen die bij jouw kantoor passen. Geen modulewinkel: we spreken scope en timing af in een demo.`
- NL bullets: `Workflows die aansluiten op hoe je kantoor al werkt` · `Extra velden of stappen op aanvraag` · `Afgestemd in de demo, geen extra pakket om te kopen`
- EN title: `Built to fit`
- EN body: `Propmaat can add workflows or features that fit your office. Not a module shop: we agree scope and timing in a demo.`
- EN bullets: `Workflows that match how your office already works` · `Extra fields or steps on request` · `Scoped in the demo, not sold as an add-on pack`

**Prijzen — add one sentence after the included list:**

- NL: `Workflows of functies op maat kunnen we toevoegen op aanvraag.`
- EN: `Custom workflows or features can be added on request.`

Do not add a second price, a “custom plan” card, or “from €X”.

**Contact / Privacy / not-found / mocks / API:** replace the product name only. Form rules unchanged.

**Demo email:** subject `[Propmaat demo] {office} — {seats} seats`. Default from `Propmaat <onboarding@resend.dev>` if `CONTACT_FROM` is unset.

## i18n and chrome

All new homepage, dossier, and custom-work strings live in `src/i18n/nl.ts` and `src/i18n/en.ts` with the same key tree. No hardcoded visitor-facing copy in components.

Favicon / `icon.svg`: the outline pin, ink on cream — not a teal “P”.

Product mocks: swap teal for charcoal; any “PandFlow” chrome label becomes “Propmaat”.

README and in-repo marketing copy: Propmaat. Internal package name may stay `pandflow`.

## Files (delta)

```
src/app/globals.css                          # tokens
src/app/icon.svg                             # pin favicon
src/app/[locale]/page.tsx                    # homepage story
src/app/[locale]/functies/page.tsx           # + custom section
src/app/[locale]/prijzen/page.tsx            # + custom sentence
src/app/[locale]/not-found.tsx               # name
src/app/api/contact/route.ts                 # email name
src/components/site-header.tsx               # SVG wordmark
src/components/site-footer.tsx               # name
src/components/ui.tsx                        # button colors if hardcoded teal
src/components/mocks/*.tsx                   # name + charcoal
src/components/brand/propmaat-wordmark.tsx   # new
src/components/brand/propmaat-pin.tsx        # new
src/components/pin-journey/pin-journey.tsx   # new, client
src/components/pin-journey/neighborhood-map.tsx # new
src/lib/pin-progress.ts                      # new
src/lib/pin-progress.test.ts                 # new
src/i18n/nl.ts
src/i18n/en.ts
README.md
```

Routes, middleware, contact schema, and locale helpers do not change.

## Testing

- Keep contact-schema and locale-path unit tests
- Add pin-progress tests: clamp below 0 / above 1; midpoint of two waypoints; empty/single waypoint safety; scale interpolation
- `npm test` and `npm run build` must pass
- Manual: homepage pin leaves header and docks on the house; scroll back restores the logo; `/functies` shows a complete logo and the Op maat section; `/prijzen` shows the custom sentence; English `/en` uses English copy; reduced-motion shows a static complete logo + landed pin
- Verify in the browser, not by screenshot alone: scroll the homepage end-to-end, then open Functies and confirm the header pin is present

## Success criteria

- No visitor-facing “PandFlow”
- Cream/charcoal only; teal tokens gone
- Homepage pin journey as specified; inner pages static complete wordmark
- Custom work mentioned on home, Functies, and Prijzen
- €50 / seat / month still on home and Prijzen
- Demo form and API still behave as in the 2026-08-21 spec, with Propmaat in the email subject

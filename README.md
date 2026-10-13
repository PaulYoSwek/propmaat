# ImmoCRM

Marketing site for ImmoCRM, a CRM for estate agents in Belgium and the Netherlands.

The product itself lives in a separate repository (`oko-vastgoed-crm`: CRM, public office website, Supabase). All marketing copy is in `src/i18n/nl.ts` (source of truth) and `src/i18n/en.ts` (faithful translation). When the CRM gains a feature, update both dictionaries, add a mock in `src/components/mocks/product-mocks.tsx` for a new `features.sections` entry, and add an icon id in `src/components/brand/catalog-icon.tsx` if the catalog needs one.

## Stack

Next.js 16, TypeScript, Tailwind CSS v4.

## Develop

```bash
npm install
npm test
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). English lives under `/en`.

Live site: [https://propmaat.vercel.app](https://propmaat.vercel.app).

## Demo form email

Set these in `.env.local` to forward demo requests:

```
RESEND_API_KEY=
CONTACT_EMAIL=
CONTACT_FROM=ImmoCRM <onboarding@resend.dev>
```

Without them the form still succeeds and logs the request to the server console.

## Scripts

- `npm run dev` — local server
- `npm test` — unit tests
- `npm run build` — production build

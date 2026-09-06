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

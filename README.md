# Makvion — marketing website

The marketing site for **Makvion Technologies** (makvion.com): client services (websites, web apps/SaaS, mobile apps, redesign & speed, maintenance), industries, concept work, and Makvion's own products (Websites With Punch, Lost Seahorse).

**Stack:** Next.js 16 (App Router, Turbopack) · TypeScript · Tailwind CSS v4 · `next/font` (Sora + Inter) · `next/image`. Light theme only. Almost every page is statically prerendered.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Where things live

| Path | What it is |
|---|---|
| `src/lib/site.ts` | **All content**: services and prices, packages, process, industries, products, concepts, FAQs, contact email. Add an industry, product or concept by appending to its array. |
| `src/components/sections.tsx` | Reusable page sections (services grid, pricing, FAQ, CTA band, etc.) |
| `src/components/ui.tsx` | Buttons, headings, icons, container |
| `src/app/*/page.tsx` | Pages: `/`, `/services`, `/industries`, `/work`, `/products`, `/about`, `/contact`, `/privacy`, `/terms`, plus the 404 page |
| `src/app/api/contact/route.ts` | Contact form endpoint: size limit, per-IP rate limit, sends via Resend |
| `src/lib/contact.ts` | Contact validation, honeypot and email templates (unit tested by `npm run test:contact`) |
| `src/app/sitemap.ts`, `robots.ts`, `opengraph-image.tsx`, `icon.png` | SEO, social card and favicon |
| `public/images/` | Unsplash photos. See `public/images/CREDITS.md` |
| `scripts/screenshots.mjs` | Full-page Playwright screenshots (desktop 1440 / mobile 390) |

## Brand

- Green `#2C7469` (from the Makvion logo) is used as `brand-500`, with darker shades for text and buttons.
- Gold `#C69141` (from the footer logo) is used as `gold-400`.
- Ink `#13201E`, cream `#FAF8F3`, line `#E7E3D9`.
- Fonts: Sora for headings, Inter for UI and body text.

## Contact form (Resend)

Enquiries are emailed through [Resend](https://resend.com). Copy `.env.example` to `.env.local` for local testing.

| Variable | Required | Purpose |
|---|---|---|
| `RESEND_API_KEY` | Yes | Resend API key. Without it the form shows an error and asks visitors to email directly (it never fakes success). |
| `RESEND_FROM_EMAIL` | Recommended | Sender, e.g. `Makvion <noreply@makvion.com>`. The domain must be verified in Resend. |
| `CONTACT_TO_EMAIL` | No | Where enquiries go. Defaults to `contact@makvion.com`. |
| `RESEND_SEND_CONFIRMATION` | No | `true` sends the visitor a short confirmation email. Default off. |

Protection: honeypot field, server-side validation and length limits, 20 KB body limit, and a best-effort in-memory rate limit (5 per 10 minutes per IP, per server instance). Replies go straight to the visitor via `reply_to`.

## Deploy to Vercel

1. Push this repo to GitHub and import it at [vercel.com/new](https://vercel.com/new) (framework: Next.js, defaults are fine).
2. In Resend, add the domain `makvion.com` and add the DNS records it shows (SPF/DKIM) at your DNS provider. Wait until it shows **Verified**.
3. Create a Resend API key (sending access only).
4. In Vercel → Project → Settings → Environment Variables, add `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and optionally `CONTACT_TO_EMAIL` and `RESEND_SEND_CONFIRMATION`, for Production (and Preview if wanted). Redeploy.
5. In Vercel → Domains, add `makvion.com` and `www.makvion.com` and follow the DNS instructions. The canonical URL is `https://makvion.com` (set in `src/lib/site.ts`).
6. After launch: submit a test enquiry on `/contact`, then submit `https://makvion.com/sitemap.xml` in Google Search Console.

## Checks

```bash
npm run lint && npm run build
npm run test:contact                          # contact logic with a mocked Resend
npx next start -p 3457 & node scripts/audit.mjs   # crawl links, assets, mobile menu, form error state
```

## Before launch (founder input)

- [ ] Business address (and optionally phone/WhatsApp, LinkedIn): `site.address`, `site.linkedin` in `src/lib/site.ts`. Also needed for US cold-email compliance.
- [ ] Confirm core hours shown on `/about` (`coreHoursIST`, currently 11am–11pm IST) and the time-zone overlaps.
- [ ] Confirm Care Plus terms (3 edit hours/month, next-business-day replies).
- [ ] Have the Privacy and Terms pages reviewed.
- [ ] Optional: analytics (e.g. Vercel Analytics).

## Screenshots

```bash
npm run build && npx next start -p 3457 &
node scripts/screenshots.mjs ../makvion-shots
```

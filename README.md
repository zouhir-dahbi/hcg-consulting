# HCG Consulting — Website

Website for **Hassan Consulting Group LLC**, a construction expert-witness practice led by
**Dr. Mohamed E. Hassan, Ph.D., P.E.** The practice provides independent expert testimony and
construction-management analysis for defect, cost, and delay disputes, serving attorneys,
contractors, owners, and insurers in **Virginia, Maryland, Washington, D.C., West Virginia, and Delaware**.

Built with **Astro** + **Tailwind CSS**, with light interactivity from **Alpine.js** (CDN) and
**Cloudflare Turnstile** for the contact form. Ships as a static site to GitHub Pages.

## Tech stack

- **Astro** — component-based static site generator (header/footer/sections written once; one
  template powers the jurisdiction pages and the blog).
- **Tailwind CSS** — compiled via Astro's built-in PostCSS support (`postcss.config.mjs`), not the CDN.
- **Alpine.js** — small runtime (CDN) for the mobile menu and the FAQ accordions.
- **Astro Content Collections** — powers the Insights blog (`src/content.config.ts` + `src/content/blog/`).
- **@astrojs/sitemap** — auto-generated `sitemap.xml`.
- **Source Serif 4** (display) + **Inter** (body) — set in `tailwind.config.mjs`.

### Brand

Navy + teal. Primary `#1B2B4B`, accent `#0F6B70` (light `#75D5CF`, dark `#0B5559`),
ink `#121A2C`. Defined in `tailwind.config.mjs`. Use the light accent on dark surfaces
and white labels on solid teal buttons and badges.

## Project structure

```
hcg-consulting/
├── src/
│   ├── layouts/
│   │   ├── BaseLayout.astro           # <head>, header, footer, canonical/OG + JSON-LD
│   │   └── BlogPostLayout.astro       # article shell: byline, breadcrumb + Article/FAQ schema
│   ├── components/                    # Header, Footer, PageHeader, CtaBanner, FaqAccordion,
│   │                                  #   Credentials, ProcessSteps, Independence
│   ├── data/
│   │   ├── site.ts                    # single source of truth: name, legal name, person, contact
│   │   ├── nav.ts                     # header navigation groups (dropdowns)
│   │   ├── credentials.ts             # document-verified credentials + the stat strip
│   │   ├── practiceAreas.ts           # service cards (defect / cost & delay / mediation)
│   │   ├── geoAreas.ts                # jurisdiction pages (VA / DC / MD)
│   │   ├── faqs.ts                    # per-page FAQ content
│   │   ├── siteImages.ts              # slot -> image map (remap photos here)
│   │   ├── blogCategories.ts          # blog category -> money-page link
│   │   └── blogImages.ts              # blog post id -> hero image + alt
│   ├── content/
│   │   └── blog/                      # one .md per post (frontmatter + Markdown)
│   ├── content.config.ts              # blog collection schema (categories, faqs)
│   ├── pages/
│   │   ├── index.astro                # home
│   │   ├── expert-witness.astro       # core service
│   │   ├── construction-defect.astro / cost-and-delay-claims.astro / mediation.astro
│   │   ├── expert-witness/[jurisdiction].astro   # ONE template -> VA / DC / MD from geoAreas.ts
│   │   ├── about.astro / contact.astro / privacy.astro / terms.astro / 404.astro
│   │   ├── blog/index.astro           # Insights index
│   │   ├── blog/[id].astro            # ONE template -> each post
│   │   └── robots.txt.ts
│   └── styles/global.css              # Tailwind layers + component classes
├── public/
│   ├── brand/                         # customer logo: header SVG (dark/white) + PNG master
│   └── cv/                            # customer-supplied 4-page expert CV (PDF)
├── cloudflare/worker/                 # contact-form endpoint (deploy, then wire up)
├── .github/workflows/deploy.yml       # GitHub Pages build + deploy
└── astro.config.mjs                   # site/base, sitemap, base-aware markdown links
```

**Adding or editing a jurisdiction page** = editing `src/data/geoAreas.ts`. No new file needed.
**Adding a blog post** = dropping a new `.md` in `src/content/blog/` (frontmatter: `title`,
`description`, `pubDate`, `category`, optional `faqs`) and adding a hero to `src/data/blogImages.ts`.

## Brand assets

The company logo — a blue/green roof over "HASSAN CONSULTING GROUP" — lives in
`public/brand/`, supplied by the customer and used unmodified:

- `hcg-header-logo.svg` — header (roof `#2B3990`, stripes `#3F9A45`, name `#26306E`).
  Shown 80–120 px tall; the name is ~12% of the logo's height, so keep it at least ~56 px tall.
- `hcg-header-logo-white.svg` — footer and other dark backgrounds (white, stripes `#6CC36F`).
- `hcg-header-logo.png` — 1600 px raster master, used as the organization/publisher logo in
  structured data (search engines handle PNG more reliably than SVG).

The lettering is outlined, so no font is required. The two SVGs share identical geometry and
differ only in fill colors (`viewBox="-16 -16 1032 384"`).

Icons and the link preview are generated from `hcg-header-logo.svg`:

- Icons use the **roof only** (the name is unreadable at icon sizes): `favicon.svg`,
  `favicon.ico` (16/32/48), `favicon-16x16.png`, and `favicon-32x32.png` on a rounded white
  tile so the blue roof stays visible on dark browser tabs; `apple-touch-icon.png` (180) and
  `android-chrome-192x192.png` / `-512x512.png` on an opaque white square.
- `og-image.png` (1200 × 630) — the full logo on white with the practice tagline and service
  area, framed by blue/green bars.

Regenerate them together whenever the logo changes. `BaseLayout.astro` applies the icons and
branded preview sitewide; explicit page/blog images retain their own previews. Asset URLs respect
`BASE_PATH`, and the manifest uses relative URLs to support both GitHub project pages and a
future custom domain.

## Commands

```bash
npm install       # install dependencies
npm run dev       # local dev server at http://localhost:4321/hcg-consulting
npm run build     # production build to ./dist
npm run preview   # preview the built site at http://localhost:4321/hcg-consulting
```

> Local builds default to the project-page base (`/hcg-consulting`) so `npm run dev`/`build`
> match the deploy target. The base is read from `BASE_PATH` (`astro.config.mjs`).

## Environment variables

`PUBLIC_*` values are inlined into the client bundle at build time. For local development, copy
`.env.example` to `.env` (gitignored). Production values are set in `.github/workflows/deploy.yml`.

| Variable | Purpose |
| --- | --- |
| `SITE_URL` | Canonical origin for sitemap + canonical/OG URLs. |
| `BASE_PATH` | `/hcg-consulting` for the project page; `/` once a custom domain is live. |
| `PUBLIC_FORM_ENDPOINT` | The Cloudflare Worker URL the contact form submits to. |
| `PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare Turnstile public site key. |

## Contact form (Cloudflare Turnstile + Worker)

The contact form is protected by **Cloudflare Turnstile** (free, privacy-friendly) and posts to a
small **Cloudflare Worker** that validates the token and emails the inquiry via `cloudflare:email`.
The Worker lives in `cloudflare/worker/`. Until the Worker and a Turnstile widget are deployed, the
form **gracefully degrades** to a "call or email us instead" state (phone + email are always shown).

To activate:
1. Deploy the Worker from `cloudflare/worker/` (Turnstile verify + `EmailMessage` to `info@<domain>`).
2. Add a Turnstile widget in the Cloudflare dashboard and copy the site key.
3. Set `PUBLIC_FORM_ENDPOINT` (Worker URL) and `PUBLIC_TURNSTILE_SITE_KEY` in `deploy.yml` (and `.env` locally).

## Deployment (GitHub Pages)

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds with Astro and publishes
`./dist`. In the repo settings, set **Pages → Source → GitHub Actions**.

- **Project page** (current): `https://zouhir-dahbi.github.io/hcg-consulting` — the workflow sets
  `SITE_URL` and `BASE_PATH=/hcg-consulting`. All internal links and asset paths are `base`-aware.
- **Custom domain** (later): point the domain at Cloudflare, then set `SITE_URL` to the domain and
  `BASE_PATH=/` in the workflow — no code changes. Sitemap and canonical/OG URLs follow automatically.

`astro.config.mjs` includes a small rehype plugin that prefixes internal Markdown links with the
build-time base, so blog cross-links resolve on the project page. It runs on
`@astrojs/markdown-remark` (already in `package.json`).

## Before publishing — content / compliance checklist

The site intentionally ships without certain content until real, verified information exists.
**Do not replace these with fabricated info:**

- [ ] **Domain + email** — a placeholder domain is used throughout. Confirm the real domain, point
      DNS at Cloudflare, add an `info@` Email Routing address, and 301-redirect the old WordPress
      site (`hcgconstructiondisputes.com`).
- [ ] **Contact form** — deploy the Worker + Turnstile and set `PUBLIC_FORM_ENDPOINT` /
      `PUBLIC_TURNSTILE_SITE_KEY` (see above).
- [ ] **CV** — `public/cv/dr-mohamed-hassan-cv.pdf` is the customer-supplied
      "Dr. Mohamed Hassan CV - Expert Witness 2026" (4 pages, Letter). Its content is
      unchanged; only the PDF Title/Author metadata was corrected. Ask the customer to fix
      the visible typos in their source document (e.g. the email `mehassan54@gamil.com`).
- [x] **Company logo** — customer-supplied roof logo integrated in the header, footer,
      structured data, favicons, app icons, and link-preview image.
- [ ] **Photos** — verify each stock image fits its slot; remap in `src/data/siteImages.ts` and
      tighten the alt text in `src/data/blogImages.ts`.
- [ ] **Credentials** — only document-verified claims are used (PE VA/TX, Class A contractor VA/DC,
      admitted in VA + D.C. courts, VA Supreme Court–approved mediator). Do **not** add "Licensed,"
      "Certified," or similar until verified documentation exists.
- [ ] **No fabricated proof** — do **not** add reviews, testimonials, or case outcomes that are not real.
- [ ] **Office address** — the customer requested publication of 4207 Stepney Drive,
      Gainesville, VA 20155. Contact/footer map links and structured data use the shared
      address in `src/data/site.ts`; confirm any later address changes with the customer.
- [ ] **Analytics / Google Business Profile** — add once accounts exist.

## Notes

- The expert CV is supplied by the customer as a PDF (exported from Word); there is no source in
  this repo. To update it, replace `public/cv/dr-mohamed-hassan-cv.pdf` with the new file, keeping
  the same file name so every "View Curriculum Vitae" link continues to work. Set the PDF's
  Title/Author metadata to Dr. Hassan's name, since browsers show the Title as the tab name.
- The blog posts cite published standards (IRC, IBC, ASTM, ACI, AACE) by name only — no standard
  text is reproduced.

## License

Copyright 2026 Hassan Consulting Group LLC. All rights reserved.

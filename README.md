# HCG Consulting — Website

Website for **Hassan Consulting Group LLC**, a construction expert-witness practice led by
**Dr. Mohamed E. Hassan, Ph.D., P.E.** The practice provides independent expert testimony and
construction-management analysis for defect, cost, and delay disputes, serving attorneys,
contractors, owners, and insurers in **Virginia, Washington, D.C., and Maryland**.

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

Navy + gold. Primary `#1B2B4B`, accent `#B08D3E`, ink `#121A2C`. Defined in `tailwind.config.mjs`.

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
│   │   ├── nav.ts                     # header navigation
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
│   ├── brand/                         # 4 logo SVGs (full/compact, dark/white)
│   └── cv/                            # generated 3-page expert CV (PDF)
├── cv/dr-mohamed-hassan-cv.html       # CV source (regenerate the PDF from here)
├── cloudflare/worker/                 # contact-form endpoint (deploy, then wire up)
├── .github/workflows/deploy.yml       # GitHub Pages build + deploy
└── astro.config.mjs                   # site/base, sitemap, base-aware markdown links
```

**Adding or editing a jurisdiction page** = editing `src/data/geoAreas.ts`. No new file needed.
**Adding a blog post** = dropping a new `.md` in `src/content/blog/` (frontmatter: `title`,
`description`, `pubDate`, `category`, optional `faqs`) and adding a hero to `src/data/blogImages.ts`.

## Brand assets

Logo lockups live in `public/brand/`:

- `hcg-logo-lockup.svg` / `hcg-logo-lockup-white.svg` — full lockup (wordmark + tagline), dark/white.
- `hcg-logo-lockup-compact.svg` / `-white.svg` — tagline dropped for the header; `-white` in the footer.

The wordmark is SVG `<text>` with a locked `textLength`, so it stays on-canvas across font
fallbacks (the header loads it as an `<img>`, which can't pull the web font — it renders in a
system serif, intentionally kept legible). `BaseLayout.astro` applies the icons and branded
preview sitewide; explicit page/blog images retain their own previews. Asset URLs respect
`BASE_PATH`, and the manifest uses relative URLs to support GitHub project pages.

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
- [ ] **CV** — review `public/cv/dr-mohamed-hassan-cv.pdf` (3-page, generated from
      `cv/dr-mohamed-hassan-cv.html`) for factual accuracy before launch.
- [ ] **Photos** — verify each stock image fits its slot; remap in `src/data/siteImages.ts` and
      tighten the alt text in `src/data/blogImages.ts`.
- [ ] **Credentials** — only document-verified claims are used (PE VA/TX, Class A contractor VA/DC,
      admitted in VA + D.C. courts, VA Supreme Court–approved mediator). Do **not** add "Licensed,"
      "Certified," or similar until verified documentation exists.
- [ ] **No fabricated proof** — do **not** add reviews, testimonials, or case outcomes that are not real.
- [ ] **No home address** — only the business mailing address (P.O. Box) is shown; do not add the
      personal address.
- [ ] **Analytics / Google Business Profile** — add once accounts exist.

## Notes

- The expert CV is generated from `cv/dr-mohamed-hassan-cv.html` (open in a browser → Print to PDF,
  Letter size) into `public/cv/dr-mohamed-hassan-cv.pdf`. Regenerate after any content change.
- The blog posts cite published standards (IRC, IBC, ASTM, ACI, AACE) by name only — no standard
  text is reproduced.

## License

Copyright 2026 Hassan Consulting Group LLC. All rights reserved.

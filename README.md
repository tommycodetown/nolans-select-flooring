# Nolan Select Flooring Website

A Next.js marketing site for a New York flooring contractor. It is an informational site with phone and email contact only—no contact forms, CMS, database, or booking system.

## Installation

```bash
npm install
cp .env.example .env.local
```

Edit `.env.local` before deploying. The site runs locally when `SITE_URL` is blank.

## Commands

```bash
npm run dev        # Start the development server (http://localhost:3000)
npm run build      # Production build
npm run start      # Run the production build locally
npm run lint       # ESLint
npm run typecheck  # TypeScript check (no emit)
npm run test:visual # Playwright smoke/visual tests
```

## Central site configuration

Edit `src/config/site.ts` for project-level business details:

- Business name, description, email, phone, location
- Optional social image path
- Navigation links
- Primary CTA label and href
- Footer tagline and links

Components read from this config. Avoid hardcoding business details in components.

## Page content

- **Homepage:** `src/app/page.tsx`
- **Services:** `src/content/services.ts` and routes under `src/app/services/`
- **Projects:** `src/content/projects.ts` and routes under `src/app/projects/`
- **About / Contact:** `src/app/about/page.tsx`, `src/app/contact/page.tsx`

Contact is handled through direct `tel:` and `mailto:` links defined in `src/config/site.ts`.

## Environment variables

Copy `.env.example` to `.env.local`:

| Variable | Required | Description |
|----------|----------|-------------|
| `SITE_URL` | Production (required) | Canonical site origin (no trailing slash), e.g. `https://www.example.com`. Used for canonical URLs, sitemap, robots, Open Graph `metadataBase`, and JSON-LD. Falls back to `http://localhost:3000` in development only. |

## SEO

- Root and page metadata in `src/app/layout.tsx` and individual page files
- Canonical URL support via `src/lib/page-metadata.ts`
- Open Graph and Twitter cards (omit image fields when `socialImage` is blank)
- Sitemap: `/sitemap.xml` (`src/app/sitemap.ts`)
- Robots: `/robots.txt` (`src/app/robots.ts`)
- Security headers in `next.config.ts`
- Image optimisation via `next/image`

Site-wide JSON-LD for the business is injected from `src/lib/structured-data.ts` via the root layout.

## Project structure

```
src/
  app/                    # Routes, layout, globals.css
  components/marketing/   # Page sections, header, footer, contact band
  config/                 # Central site configuration
  content/                # Services and projects content
  lib/                    # Metadata, utilities
public/                   # Static assets
```

**Where to edit what:**

- **Site details:** `src/config/site.ts`
- **Services / projects:** `src/content/services.ts`, `src/content/projects.ts`
- **Brand colours and spacing:** `src/app/globals.css`
- **Fonts:** `src/app/layout.tsx`

## Deployment

This is a standard Next.js App Router application. Deploy to any platform that supports Next.js 16 (e.g. Vercel, Netlify, Node hosting).

**Before deploying:**

1. Set `SITE_URL` to your production domain.
2. Run `npm run build` locally to verify the build succeeds.

**Build output:** `npm run build` then `npm run start` for self-hosted Node deployments.

## Final launch checklist

- [ ] `src/config/site.ts` updated with real business details
- [ ] Images added under `public/` and wired into content/components as needed
- [ ] Favicon updated (`src/app/favicon.ico`) if desired
- [ ] `SITE_URL` set to production domain
- [ ] Phone and email links tested on mobile and desktop
- [ ] `/sitemap.xml` and `/robots.txt` verified on production
- [ ] Open Graph previews checked (social sharing)
- [ ] Mobile layout reviewed on real devices
- [ ] `npm run lint`, `npm run typecheck`, and `npm run build` pass

# Project State — naturaobe

Last updated: 2026-05-16

## What this is

Public showcase site for the **NaturaO** brand. Lists producers and their products. No e-commerce, no prices, no login on the public side.

## Stack

- Next.js 14 (App Router), `output: 'export'` → fully static site
- Hosted on GitHub Pages at https://ahripou.github.io/naturaobe
- Data source: Supabase project `vedopibxnomcafbqgnqk` (tables `producers`, `catalog_products`, bucket `product-images`)
- Build pulls all data at build time via `lib/getProducers.ts`; no client-side Supabase calls

## Deploy

- Push to `main` → `.github/workflows/deploy.yml` runs `npm ci && npm run build` and publishes `out/` to GitHub Pages.
- Supabase reads use the anon publishable key hardcoded in `lib/supabase.ts` as fallback; RLS now allows public SELECT on the two read tables.

## Pages

- `/` — Accueil (hero + featured producers + catalogue preview)
- `/producteurs` — Grid of all producers
- `/producteurs/[slug]` — Per-producer page (statically generated for each)
- `/produits` — Full product grid
- `/a-propos` — About

## Current data shape

- 24 producers (`producers` table: `code, name, region, country, website` only — most other fields the UI expects are derived or left blank).
- ~152 active products (`catalog_products` where `deleted_at IS NULL`), joined to producers via `producer_code`.
- Product image URLs are normalized in `lib/getProducers.ts` because some rows store only a filename (`HUB-BKB-001.webp`) rather than the full Supabase storage URL.

## Known gaps

- Producer pages show placeholder copy for `histoire`, `engagement`, `accroche`, `methode`, `logo` — the columns no longer exist in Supabase.
- 14 of 24 producers have no `region` set; the cards display country only.
- Home page still references some hardcoded Unsplash hero images (not tied to producer data).

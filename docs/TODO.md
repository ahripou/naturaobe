# TODO

## Data quality (Supabase, no code changes)

- [ ] Fill `producers.region` for the 13 producers still missing it: 12 Belgian (ASG, BHV, BKB, BLP, CDL, CDA, DBG, DZJ, KEV, LKS, MNT, RIT) + Convivia/CVV (Italy). Set on 2026-05-18: BRF=Alsace, KBR=Bretagne, DML=Lot-et-Garonne.
- [ ] Decide a canonical form for `image_path` (full URL vs filename) and normalize once.
- [ ] Backfill 8 rows where `image_path` is still bare filename: `HUB-ASG-002`, `HUB-ASG-003`, `HUB-BKB-001`, `HUB-CDL-010`, `HUB-KBR-012`, `HUB-KBR-013`, `HUB-KBR-014`, `HUB-RIT-009`.

## Producer pages

- [x] Infrastructure for per-producer copy: Markdown files at `content/producers/<CODE>.md`. See `content/producers/README.md`. Sample: `BPH.md`.
- [ ] Write `content/producers/<CODE>.md` for the remaining 23 producers: ASG, BHV, BKB, BLP, BRF, CDA, CDL, CVV, DBG, DML, DZJ, ECO, FBR, IMP, KBR, KEV, LAX, LKS, MNT, RIT, SAA, TDB, TDF. Each file needs `accroche`, `engagement`, three `methode` items, and a body for `histoire`.
- [ ] Add proper producer photos (`producers.cover_url`, `logo_url`) — currently we reuse the first product image as the hero, which is visually weak.
- [ ] Per-producer `methode` already supported via the Markdown frontmatter — missing files fall back to the three generic strings in `lib/getProducers.ts`.

## Site

- [ ] Replace Unsplash hero/illustration images on `/` and `/a-propos` with brand photography.
- [ ] Add a real `og:image` per page (now using defaults).
- [ ] Verify mobile layout end-to-end; the grids assume desktop widths in several places.
- [ ] Set up a custom domain (current URL is the GH Pages default).

## Build / infra

- [ ] Bump Next.js — current 14.2.29 has a known security advisory.
- [ ] Move the Supabase anon key out of the source file into a `NEXT_PUBLIC_SUPABASE_ANON_KEY` GH Actions secret (the env var is already read, the fallback is the only thing committed).
- [ ] GH Actions: bump to Node 24 ahead of the June 2 forced switch.

# Decisions

Chronological log of non-obvious choices. Newest first.

## 2026-05-16 — Prices removed from public site

The deployed site is a brand showcase, not a shop. The B2B catalog (with prices/stock) lives elsewhere.
- `lib/getProducers.ts` sets `prix = ''` and `offre = ''`.
- The UI already guarded price rendering with `{pr.prix && ...}`, so empty strings hide the block automatically.
- **Reverting** = repopulate `prix`/`offre` from `catalog_products.price_htva * (1 + vat_rate)` or `price_lf`.

## 2026-05-16 — Show all non-deleted products

Per user instruction, no availability filter. Display anything that isn't soft-deleted.
- Trade-off: products that are temporarily out of stock still appear. Acceptable for a showcase.

## 2026-05-16 — Public RLS read policies on producers + catalog_products

Added `public_read` policy (SELECT, role `anon`) to both tables. Data is non-sensitive.
- Alternative considered: use service-role key at build time via GH secret. Rejected — more moving parts, and the data is meant to be public anyway.
- `catalog_products` policy includes `USING (deleted_at IS NULL)` so soft-deleted rows stay hidden.

## 2026-05-16 — Normalize image_path in code, not in DB

8 catalog rows store only a filename in `image_path` instead of a full URL. Fixed in `resolveImage()` rather than UPDATE-ing the DB.
- Cheaper, idempotent, and the DB may be re-synced from external sources that would overwrite a one-off correction.

## 2026-05-16 — Generate producer `slug` from `name`

The trimmed `producers` table no longer has a `slug` column. We derive it from `name` via `slugify()`.
- Risk: if a producer is renamed, its URL changes (and old links 404). Acceptable for now; revisit if SEO matters.

## Inherited from prior work

- **Static export to GitHub Pages.** `output: 'export'`, `images: { unoptimized: true }`, `basePath: '/naturaobe'` on Actions.
- **Single-process build cache** in `getProducers()` (`let cache: Producer[] | null = null`). Safe because Next 14 build forks but each fork only fetches once.

# Claude Context — naturaobe

Quick orientation for a new Claude session. Read this and `PROJECT_STATE.md` before touching code.

## Repo layout

```
naturaobe/
├── app/                       # Next.js App Router pages
│   ├── page.tsx               # / (Accueil)
│   ├── producteurs/
│   │   ├── page.tsx           # /producteurs (server)
│   │   ├── ProducteursClient.tsx
│   │   └── [slug]/page.tsx    # /producteurs/<slug> + generateStaticParams
│   ├── produits/
│   │   ├── page.tsx
│   │   └── ProduitsClient.tsx
│   └── a-propos/page.tsx
├── components/                # Header, Footer, FadeIn
├── lib/
│   ├── supabase.ts            # Anon client (publishable key fallback)
│   └── getProducers.ts        # **Single source of truth** for build-time data
├── data/types.ts              # Producer + Product types
├── public/                    # Static assets (logo)
├── next.config.js             # output: 'export', basePath '/naturaobe' on GH Actions
└── .github/workflows/deploy.yml
```

## How data flows

1. `lib/getProducers.ts` runs **once per build process**, fetches `producers` + `catalog_products` from Supabase.
2. Returns a `Producer[]` shape that matches `data/types.ts`. Every page imports `getProducers()` and renders from that.
3. `/producteurs/[slug]/page.tsx` calls `generateStaticParams()` → one HTML file per producer.
4. Output goes to `out/`, deployed to GH Pages.

## Schema cheat sheet (current, 2026-05)

**`producers`** — `code, name, region, country, website, created_at`

**`catalog_products`** — large table, the columns this site actually uses:
- `sku_naturao` (product SKU)
- `producer_code` (joins to `producers.code`)
- `name_fr`, `short_desc_fr`, `long_desc_fr`
- `category`
- `image_path` — sometimes a full URL, sometimes only a filename → always pass through `resolveImage()`
- `deleted_at` — soft-delete; filter `IS NULL`

The site **does not** use prices or stock — `price_*`, `available_*`, `vat_rate` are all in DB but intentionally ignored on the public site.

## RLS

`producers` and `catalog_products` have a `public_read` policy granting anon SELECT (gated by `deleted_at IS NULL` on products). Without these the build silently returns zero rows.

## Don'ts

- Don't bring prices back to the public site.
- Don't read Supabase from the client. The whole point is static export with no runtime DB calls.
- Don't filter products by `available_lf`/`available_cf` — show everything not soft-deleted.
- Don't trust `image_path` to be a full URL. Use `resolveImage()`.

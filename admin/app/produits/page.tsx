import Link from 'next/link'
import { redirect } from 'next/navigation'
import { requireAdmin } from '@/lib/supabase-server'

export const dynamic = 'force-dynamic'

export default async function ProduitsPage({
  searchParams,
}: {
  searchParams: { producer?: string; q?: string }
}) {
  const auth = await requireAdmin()
  if (!auth.ok) redirect(auth.reason === 'unauthenticated' ? '/login' : '/')

  const { data: producers } = await auth.supabase
    .from('producers')
    .select('id,name,code')
    .order('name')

  let query = auth.supabase
    .from('catalog_products')
    .select('id,sku_hub,name_fr,price_ttc,available,stock,image_url,producer_id,is_active')
    .order('sku_hub')

  if (searchParams.producer) query = query.eq('producer_id', searchParams.producer)
  if (searchParams.q) query = query.ilike('name_fr', `%${searchParams.q}%`)

  const { data: products } = await query

  const producerById = new Map(producers?.map((p) => [p.id, p]) ?? [])

  return (
    <div>
      <div className="flex items-baseline justify-between mb-6">
        <h1 className="text-3xl font-semibold">Produits</h1>
        <span className="text-sm text-ink/50">{products?.length ?? 0} produits</span>
      </div>

      <form className="flex gap-3 mb-4">
        <select
          name="producer"
          defaultValue={searchParams.producer ?? ''}
          className="px-3 py-2 rounded border border-ink/15 bg-white text-sm"
        >
          <option value="">Tous les producteurs</option>
          {producers?.map((p) => (
            <option key={p.id} value={p.id}>{p.name}</option>
          ))}
        </select>
        <input
          name="q"
          defaultValue={searchParams.q ?? ''}
          placeholder="Rechercher…"
          className="px-3 py-2 rounded border border-ink/15 bg-white text-sm flex-1"
        />
        <button className="px-4 py-2 rounded bg-ink text-cream text-sm">Filtrer</button>
      </form>

      <div className="bg-white rounded-lg border border-ink/10 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-cream text-left text-xs uppercase tracking-wide text-ink/60">
            <tr>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">SKU</th>
              <th className="px-4 py-3">Nom</th>
              <th className="px-4 py-3">Producteur</th>
              <th className="px-4 py-3">Prix</th>
              <th className="px-4 py-3">Stock</th>
              <th className="px-4 py-3">Dispo</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {products?.map((p) => (
              <tr key={p.id} className="border-t border-ink/5">
                <td className="px-4 py-2">
                  {p.image_url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.image_url} alt="" className="h-10 w-10 rounded object-cover" />
                  ) : (
                    <div className="h-10 w-10 rounded bg-ink/5" />
                  )}
                </td>
                <td className="px-4 py-2 font-mono text-xs">{p.sku_hub}</td>
                <td className="px-4 py-2 font-medium">{p.name_fr}</td>
                <td className="px-4 py-2 text-ink/70">{producerById.get(p.producer_id)?.name ?? '—'}</td>
                <td className="px-4 py-2">{p.price_ttc != null ? `${p.price_ttc.toFixed(2)} €` : '—'}</td>
                <td className="px-4 py-2">{p.stock ?? '—'}</td>
                <td className="px-4 py-2">
                  {p.available ? <span className="text-sage">●</span> : <span className="text-ink/30">●</span>}
                </td>
                <td className="px-4 py-2 text-right">
                  <Link href={`/produits/${encodeURIComponent(p.sku_hub)}`} className="text-clay hover:underline">
                    Éditer
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

import Link from 'next/link'
import { redirect } from 'next/navigation'
import { requireAdmin } from '@/lib/supabase-server'

export const dynamic = 'force-dynamic'

export default async function ProducteursPage() {
  const auth = await requireAdmin()
  if (!auth.ok) redirect(auth.reason === 'unauthenticated' ? '/login' : '/')

  const { data: producers } = await auth.supabase
    .from('producers')
    .select('id,code,name,region,country,is_active,logo_url')
    .order('name')

  return (
    <div>
      <div className="flex items-baseline justify-between mb-6">
        <h1 className="text-3xl font-semibold">Producteurs</h1>
        <span className="text-sm text-ink/50">{producers?.length ?? 0} producteurs</span>
      </div>
      <div className="bg-white rounded-lg border border-ink/10 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-cream text-left text-xs uppercase tracking-wide text-ink/60">
            <tr>
              <th className="px-4 py-3">Logo</th>
              <th className="px-4 py-3">Code</th>
              <th className="px-4 py-3">Nom</th>
              <th className="px-4 py-3">Région</th>
              <th className="px-4 py-3">Pays</th>
              <th className="px-4 py-3">Actif</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {producers?.map((p) => (
              <tr key={p.id} className="border-t border-ink/5">
                <td className="px-4 py-2">
                  {p.logo_url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.logo_url} alt="" className="h-10 w-10 rounded object-cover" />
                  ) : (
                    <div className="h-10 w-10 rounded bg-ink/5" />
                  )}
                </td>
                <td className="px-4 py-2 font-mono text-xs">{p.code}</td>
                <td className="px-4 py-2 font-medium">{p.name}</td>
                <td className="px-4 py-2 text-ink/70">{p.region ?? '—'}</td>
                <td className="px-4 py-2 text-ink/70">{p.country ?? '—'}</td>
                <td className="px-4 py-2">
                  {p.is_active ? <span className="text-sage">●</span> : <span className="text-ink/30">●</span>}
                </td>
                <td className="px-4 py-2 text-right">
                  <Link href={`/producteurs/${p.id}`} className="text-clay hover:underline">
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

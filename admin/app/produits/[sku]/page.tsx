import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { requireAdmin } from '@/lib/supabase-server'
import ProductForm from './ProductForm'

export const dynamic = 'force-dynamic'

export default async function ProductEditPage({ params }: { params: { sku: string } }) {
  const auth = await requireAdmin()
  if (!auth.ok) redirect(auth.reason === 'unauthenticated' ? '/login' : '/')

  const sku = decodeURIComponent(params.sku)
  const { data: product } = await auth.supabase
    .from('catalog_products')
    .select('*')
    .eq('sku_hub', sku)
    .single()

  if (!product) notFound()

  const { data: producers } = await auth.supabase
    .from('producers')
    .select('id,name,code')
    .order('name')

  return (
    <div>
      <Link href="/produits" className="text-sm text-ink/60 hover:text-clay">← Produits</Link>
      <h1 className="text-3xl font-semibold mt-2 mb-1">{product.name_fr}</h1>
      <p className="text-sm text-ink/50 mb-6 font-mono">{product.sku_hub}</p>
      <ProductForm product={product} producers={producers ?? []} />
    </div>
  )
}

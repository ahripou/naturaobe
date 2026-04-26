import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { requireAdmin } from '@/lib/supabase-server'
import ProducerForm from './ProducerForm'

export const dynamic = 'force-dynamic'

export default async function ProducerEditPage({ params }: { params: { id: string } }) {
  const auth = await requireAdmin()
  if (!auth.ok) redirect(auth.reason === 'unauthenticated' ? '/login' : '/')

  const { data: producer } = await auth.supabase
    .from('producers')
    .select('*')
    .eq('id', params.id)
    .single()

  if (!producer) notFound()

  return (
    <div>
      <Link href="/producteurs" className="text-sm text-ink/60 hover:text-clay">← Producteurs</Link>
      <h1 className="text-3xl font-semibold mt-2 mb-6">{producer.name}</h1>
      <ProducerForm producer={producer} />
    </div>
  )
}

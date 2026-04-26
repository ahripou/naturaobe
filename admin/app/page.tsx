import { redirect } from 'next/navigation'
import { requireAdmin } from '@/lib/supabase-server'

export default async function Home() {
  const auth = await requireAdmin()
  if (!auth.ok) {
    if (auth.reason === 'unauthenticated') redirect('/login')
    return (
      <div className="max-w-md mx-auto mt-16 text-center">
        <h1 className="text-2xl font-semibold mb-2">Accès refusé</h1>
        <p className="text-ink/70">
          Ton compte ({auth.email}) n'a pas le rôle <code>admin</code>. Contacte un admin pour
          obtenir l'accès.
        </p>
      </div>
    )
  }
  redirect('/producteurs')
}

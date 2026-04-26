'use client'
import { createClient } from '@/lib/supabase-browser'
import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()
  return (
    <button
      onClick={async () => {
        const supabase = createClient()
        await supabase.auth.signOut()
        router.push('/login')
        router.refresh()
      }}
      className="text-sm text-ink/60 hover:text-clay"
    >
      Déconnexion
    </button>
  )
}

import './globals.css'
import Link from 'next/link'
import { createClient } from '@/lib/supabase-server'
import LogoutButton from '@/components/LogoutButton'

export const metadata = { title: 'NaturaO Admin', description: 'Espace admin NaturaO' }

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <html lang="fr">
      <body className="min-h-screen">
        {user && (
          <header className="border-b border-ink/10 bg-white">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
              <Link href="/" className="font-semibold text-lg">NaturaO Admin</Link>
              <nav className="flex items-center gap-6 text-sm">
                <Link href="/producteurs" className="hover:text-clay">Producteurs</Link>
                <Link href="/produits" className="hover:text-clay">Produits</Link>
                <span className="text-ink/50 text-xs">{user.email}</span>
                <LogoutButton />
              </nav>
            </div>
          </header>
        )}
        <main className="max-w-6xl mx-auto px-6 py-8">{children}</main>
      </body>
    </html>
  )
}

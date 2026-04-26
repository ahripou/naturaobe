'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase-browser'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setError(null)
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/auth/callback` },
    })
    if (error) {
      setStatus('error')
      setError(error.message)
    } else {
      setStatus('sent')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-24">
      <h1 className="text-3xl font-semibold mb-2">NaturaO Admin</h1>
      <p className="text-ink/60 mb-8">Connexion par lien magique</p>

      {status === 'sent' ? (
        <div className="rounded-lg bg-sage/10 p-6 text-sm">
          ✓ Lien envoyé à <strong>{email}</strong>. Ouvre-le pour te connecter.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="team@mannatura.org"
            className="w-full px-4 py-3 rounded-lg border border-ink/20 bg-white focus:outline-none focus:border-clay"
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full px-4 py-3 rounded-lg bg-ink text-cream font-medium hover:bg-clay disabled:opacity-50"
          >
            {status === 'sending' ? 'Envoi…' : 'Recevoir le lien'}
          </button>
          {error && <p className="text-sm text-red-600">{error}</p>}
        </form>
      )}
    </div>
  )
}

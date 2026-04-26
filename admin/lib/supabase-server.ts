import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'

type CookieToSet = { name: string; value: string; options?: CookieOptions }

export function createClient() {
  const cookieStore = cookies()
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet: CookieToSet[]) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // Server Component context — ignored, middleware refreshes session
          }
        },
      },
    }
  )
}

export async function requireAdmin() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { ok: false as const, reason: 'unauthenticated' as const }
  const { data: profile } = await supabase
    .from('profiles')
    .select('role,email')
    .eq('id', user.id)
    .single()
  if (profile?.role !== 'admin') {
    return { ok: false as const, reason: 'forbidden' as const, email: profile?.email }
  }
  return { ok: true as const, user, profile, supabase }
}

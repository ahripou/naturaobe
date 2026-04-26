import { createClient } from '@supabase/supabase-js'

const url =
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'https://vedopibxnomcafbqgnqk.supabase.co'
const anon =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  'sb_publishable_4ea3m5oQ7a7hcRA2nddGHA_F7o6h1kf'

export const supabase = createClient(url, anon, {
  auth: { persistSession: false, autoRefreshToken: false },
})

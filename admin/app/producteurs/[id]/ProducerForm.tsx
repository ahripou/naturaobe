'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase-browser'
import type { Producer } from '@/lib/types'
import ImageUpload from '@/components/ImageUpload'

export default function ProducerForm({ producer }: { producer: Producer }) {
  const router = useRouter()
  const [form, setForm] = useState<Producer>(producer)
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState<string | null>(null)

  function update<K extends keyof Producer>(key: K, value: Producer[K]) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  async function handleSave() {
    setSaving(true)
    setMsg(null)
    const supabase = createClient()
    const { error } = await supabase
      .from('producers')
      .update({
        name: form.name,
        slug: form.slug,
        description_fr: form.description_fr,
        description_nl: form.description_nl,
        address: form.address,
        phone: form.phone,
        email: form.email,
        website: form.website,
        vat_number: form.vat_number,
        region: form.region,
        country: form.country,
        is_bio: form.is_bio,
        franco_minimum: form.franco_minimum,
        delivery_terms: form.delivery_terms,
        payment_terms: form.payment_terms,
        notes: form.notes,
        is_active: form.is_active,
        logo_url: form.logo_url,
        cover_url: form.cover_url,
      })
      .eq('id', producer.id)
    setSaving(false)
    if (error) setMsg(`Erreur : ${error.message}`)
    else {
      setMsg('Enregistré ✓')
      router.refresh()
    }
  }

  return (
    <div className="space-y-8">
      <section className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-wide text-ink/60 mb-2">Logo</label>
          <ImageUpload
            bucket="producer-images"
            path={`logos/${form.code}.webp`}
            value={form.logo_url}
            onChange={(url) => update('logo_url', url)}
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wide text-ink/60 mb-2">Couverture</label>
          <ImageUpload
            bucket="producer-images"
            path={`covers/${form.code}.webp`}
            value={form.cover_url}
            onChange={(url) => update('cover_url', url)}
          />
        </div>
      </section>

      <section className="bg-white rounded-lg border border-ink/10 p-6 grid grid-cols-2 gap-4">
        <Field label="Nom"><Input value={form.name} onChange={(v) => update('name', v)} /></Field>
        <Field label="Slug"><Input value={form.slug} onChange={(v) => update('slug', v)} /></Field>
        <Field label="Région"><Input value={form.region ?? ''} onChange={(v) => update('region', v || null)} /></Field>
        <Field label="Pays"><Input value={form.country ?? ''} onChange={(v) => update('country', v || null)} /></Field>
        <Field label="Adresse" wide><Input value={form.address ?? ''} onChange={(v) => update('address', v || null)} /></Field>
        <Field label="Téléphone"><Input value={form.phone ?? ''} onChange={(v) => update('phone', v || null)} /></Field>
        <Field label="Email"><Input value={form.email ?? ''} onChange={(v) => update('email', v || null)} /></Field>
        <Field label="Site web"><Input value={form.website ?? ''} onChange={(v) => update('website', v || null)} /></Field>
        <Field label="N° TVA"><Input value={form.vat_number ?? ''} onChange={(v) => update('vat_number', v || null)} /></Field>
      </section>

      <section className="bg-white rounded-lg border border-ink/10 p-6 space-y-4">
        <Field label="Description FR" wide>
          <Textarea value={form.description_fr ?? ''} onChange={(v) => update('description_fr', v || null)} />
        </Field>
        <Field label="Description NL" wide>
          <Textarea value={form.description_nl ?? ''} onChange={(v) => update('description_nl', v || null)} />
        </Field>
      </section>

      <section className="bg-white rounded-lg border border-ink/10 p-6 grid grid-cols-2 gap-4">
        <Field label="Franco minimum"><Input value={form.franco_minimum ?? ''} onChange={(v) => update('franco_minimum', v || null)} /></Field>
        <Field label="Conditions livraison"><Input value={form.delivery_terms ?? ''} onChange={(v) => update('delivery_terms', v || null)} /></Field>
        <Field label="Conditions paiement"><Input value={form.payment_terms ?? ''} onChange={(v) => update('payment_terms', v || null)} /></Field>
        <Field label="Notes" wide><Textarea value={form.notes ?? ''} onChange={(v) => update('notes', v || null)} /></Field>
      </section>

      <section className="flex items-center gap-6">
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={!!form.is_bio} onChange={(e) => update('is_bio', e.target.checked)} />
          Producteur bio
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={!!form.is_active} onChange={(e) => update('is_active', e.target.checked)} />
          Actif
        </label>
      </section>

      <div className="flex items-center gap-4 sticky bottom-4 bg-cream/95 backdrop-blur p-4 -mx-6 px-6 border-t border-ink/10">
        <button
          onClick={handleSave}
          disabled={saving}
          className="px-6 py-2.5 rounded-lg bg-ink text-cream font-medium hover:bg-clay disabled:opacity-50"
        >
          {saving ? 'Enregistrement…' : 'Enregistrer'}
        </button>
        {msg && <span className="text-sm text-ink/70">{msg}</span>}
      </div>
    </div>
  )
}

function Field({ label, children, wide }: { label: string; children: React.ReactNode; wide?: boolean }) {
  return (
    <div className={wide ? 'col-span-2' : ''}>
      <label className="block text-xs uppercase tracking-wide text-ink/60 mb-1">{label}</label>
      {children}
    </div>
  )
}
function Input({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-3 py-2 rounded border border-ink/15 bg-white focus:outline-none focus:border-clay text-sm"
    />
  )
}
function Textarea({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={4}
      className="w-full px-3 py-2 rounded border border-ink/15 bg-white focus:outline-none focus:border-clay text-sm"
    />
  )
}

'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase-browser'
import type { CatalogProduct } from '@/lib/types'
import ImageUpload from '@/components/ImageUpload'

type Producer = { id: string; name: string; code: string }

export default function ProductForm({
  product,
  producers,
}: {
  product: CatalogProduct
  producers: Producer[]
}) {
  const router = useRouter()
  const [form, setForm] = useState<CatalogProduct>(product)
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState<string | null>(null)

  function update<K extends keyof CatalogProduct>(key: K, value: CatalogProduct[K]) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  async function handleSave() {
    setSaving(true)
    setMsg(null)
    const supabase = createClient()
    const { error } = await supabase
      .from('catalog_products')
      .update({
        producer_id: form.producer_id,
        name_fr: form.name_fr,
        name_nl: form.name_nl,
        name_bilingual: form.name_bilingual,
        description_fr: form.description_fr,
        description_nl: form.description_nl,
        offer: form.offer,
        unit: form.unit,
        weight_grams: form.weight_grams,
        price_ttc: form.price_ttc,
        price_supplier: form.price_supplier,
        vat_rate: form.vat_rate,
        logistics_mode: form.logistics_mode,
        colisage: form.colisage,
        available: form.available,
        stock: form.stock,
        image_url: form.image_url,
        category: form.category,
        is_active: form.is_active,
      })
      .eq('id', product.id)
    setSaving(false)
    if (error) setMsg(`Erreur : ${error.message}`)
    else {
      setMsg('Enregistré ✓')
      router.refresh()
    }
  }

  return (
    <div className="space-y-8">
      <section className="grid grid-cols-[200px_1fr] gap-6">
        <div>
          <label className="block text-xs uppercase tracking-wide text-ink/60 mb-2">Image produit</label>
          <ImageUpload
            bucket="product-images"
            path={`${form.sku_hub}.webp`}
            value={form.image_url}
            onChange={(url) => update('image_url', url)}
          />
        </div>
        <div className="bg-white rounded-lg border border-ink/10 p-6 grid grid-cols-2 gap-4">
          <Field label="Producteur" wide>
            <select
              value={form.producer_id}
              onChange={(e) => update('producer_id', e.target.value)}
              className="w-full px-3 py-2 rounded border border-ink/15 bg-white text-sm"
            >
              {producers.map((p) => (
                <option key={p.id} value={p.id}>{p.name} ({p.code})</option>
              ))}
            </select>
          </Field>
          <Field label="Nom FR"><Input value={form.name_fr ?? ''} onChange={(v) => update('name_fr', v || null)} /></Field>
          <Field label="Nom NL"><Input value={form.name_nl ?? ''} onChange={(v) => update('name_nl', v || null)} /></Field>
          <Field label="Nom bilingue" wide><Input value={form.name_bilingual ?? ''} onChange={(v) => update('name_bilingual', v || null)} /></Field>
          <Field label="Catégorie"><Input value={form.category ?? ''} onChange={(v) => update('category', v || null)} /></Field>
          <Field label="Offre / format"><Input value={form.offer ?? ''} onChange={(v) => update('offer', v || null)} /></Field>
        </div>
      </section>

      <section className="bg-white rounded-lg border border-ink/10 p-6 space-y-4">
        <Field label="Description FR" wide>
          <Textarea value={form.description_fr ?? ''} onChange={(v) => update('description_fr', v || null)} />
        </Field>
        <Field label="Description NL" wide>
          <Textarea value={form.description_nl ?? ''} onChange={(v) => update('description_nl', v || null)} />
        </Field>
      </section>

      <section className="bg-white rounded-lg border border-ink/10 p-6 grid grid-cols-3 gap-4">
        <Field label="Prix TTC (€)">
          <Input
            value={form.price_ttc?.toString() ?? ''}
            onChange={(v) => update('price_ttc', v ? Number(v) : null)}
          />
        </Field>
        <Field label="Prix fournisseur (€)">
          <Input
            value={form.price_supplier?.toString() ?? ''}
            onChange={(v) => update('price_supplier', v ? Number(v) : null)}
          />
        </Field>
        <Field label="TVA (%)">
          <Input
            value={form.vat_rate?.toString() ?? ''}
            onChange={(v) => update('vat_rate', v ? Number(v) : null)}
          />
        </Field>
        <Field label="Logistique"><Input value={form.logistics_mode ?? ''} onChange={(v) => update('logistics_mode', v || null)} /></Field>
        <Field label="Stock">
          <Input
            value={form.stock?.toString() ?? ''}
            onChange={(v) => update('stock', v ? Number(v) : null)}
          />
        </Field>
        <Field label="Colisage">
          <Input
            value={form.colisage?.toString() ?? ''}
            onChange={(v) => update('colisage', v ? Number(v) : null)}
          />
        </Field>
        <Field label="Unité"><Input value={form.unit ?? ''} onChange={(v) => update('unit', v || null)} /></Field>
        <Field label="Poids (g)">
          <Input
            value={form.weight_grams?.toString() ?? ''}
            onChange={(v) => update('weight_grams', v ? Number(v) : null)}
          />
        </Field>
      </section>

      <section className="flex items-center gap-6">
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={!!form.available} onChange={(e) => update('available', e.target.checked)} />
          Disponible
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

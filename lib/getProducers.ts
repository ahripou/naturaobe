import { supabase } from './supabase'
import type { Producer, Product } from '@/data/types'

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function formatPrice(n: number | null) {
  if (n == null) return ''
  return n.toFixed(2).replace('.', ',')
}

const PLACEHOLDER =
  'https://vedopibxnomcafbqgnqk.supabase.co/storage/v1/object/public/producer-images/placeholder.webp'

let cache: Producer[] | null = null

export async function getProducers(): Promise<Producer[]> {
  if (cache) return cache

  const [{ data: producers, error: e1 }, { data: products, error: e2 }] = await Promise.all([
    supabase
      .from('producers')
      .select(
        'id,code,name,slug,description_fr,address,phone,email,website,vat_number,logo_url,cover_url,region,country,is_bio,certifications,franco_minimum,delivery_terms,payment_terms,notes'
      )
      .eq('is_active', true)
      .order('name'),
    supabase
      .from('catalog_products')
      .select(
        'id,sku_hub,producer_id,name_fr,description_fr,offer,price_ttc,vat_rate,available,image_url,category'
      )
      .eq('is_active', true)
      .order('sku_hub'),
  ])

  if (e1 || e2) {
    console.error('Supabase fetch error:', e1, e2)
    return []
  }

  const productsByProducer = new Map<string, Product[]>()
  for (const p of products ?? []) {
    const arr = productsByProducer.get(p.producer_id) ?? []
    arr.push({
      sku: p.sku_hub,
      slug: slugify(p.name_fr ?? p.sku_hub),
      nom: p.name_fr ?? '',
      categorie: p.category ?? '',
      description: p.description_fr ?? '',
      offre: p.offer ?? '',
      prix: formatPrice(p.price_ttc),
      tva: p.vat_rate != null ? `${p.vat_rate}%` : '',
      enStock: !!p.available,
      image: p.image_url ?? PLACEHOLDER,
      saison: false,
    })
    productsByProducer.set(p.producer_id, arr)
  }

  const result: Producer[] = (producers ?? []).map((pr, idx) => {
    const prods = productsByProducer.get(pr.id) ?? []
    const cats = Array.from(new Set(prods.map((p) => p.categorie).filter(Boolean)))
    const galerie = prods
      .filter((p) => p.image)
      .slice(0, 4)
      .map((p) => p.image)
    while (galerie.length < 4) galerie.push(pr.cover_url ?? pr.logo_url ?? PLACEHOLDER)

    const histoire = pr.description_fr ?? ''
    const accroche = histoire.split(/(?<=[.!?])\s+/)[0] ?? ''
    const methode = (pr.certifications ?? []).slice(0, 3) as string[]
    while (methode.length < 3) methode.push('Savoir-faire artisanal')

    return {
      id: idx + 1,
      slug: pr.slug,
      code: pr.code,
      nom: pr.name,
      pays: pr.country ?? '',
      region: pr.region ?? '',
      specialite: cats[0] ?? '',
      accroche,
      image: pr.cover_url ?? pr.logo_url ?? PLACEHOLDER,
      logo: pr.logo_url ?? PLACEHOLDER,
      site: pr.website ?? '',
      histoire,
      engagement: pr.franco_minimum ?? '',
      methode: [methode[0], methode[1], methode[2]] as [string, string, string],
      galerie: [galerie[0], galerie[1], galerie[2], galerie[3]] as [string, string, string, string],
      produitsAssocies: prods,
    }
  })

  cache = result
  return result
}

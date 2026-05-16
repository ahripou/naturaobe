import { supabase } from './supabase'
import type { Producer, Product } from '@/data/types'

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

const PRODUCT_IMG_BASE =
  'https://vedopibxnomcafbqgnqk.supabase.co/storage/v1/object/public/product-images/'

const PLACEHOLDER =
  'https://vedopibxnomcafbqgnqk.supabase.co/storage/v1/object/public/producer-images/placeholder.webp'

function resolveImage(path: string | null | undefined): string {
  if (!path) return PLACEHOLDER
  if (/^https?:\/\//i.test(path)) return path
  return PRODUCT_IMG_BASE + path.replace(/^\/+/, '')
}

let cache: Producer[] | null = null

export async function getProducers(): Promise<Producer[]> {
  if (cache) return cache

  const [{ data: producers, error: e1 }, { data: products, error: e2 }] = await Promise.all([
    supabase
      .from('producers')
      .select('code,name,region,country,website')
      .order('name'),
    supabase
      .from('catalog_products')
      .select(
        'sku_naturao,producer_code,name_fr,short_desc_fr,long_desc_fr,category,image_path'
      )
      .is('deleted_at', null)
      .order('sku_naturao'),
  ])

  if (e1 || e2) {
    console.error('Supabase fetch error:', e1, e2)
    return []
  }

  const productsByProducer = new Map<string, Product[]>()
  for (const p of products ?? []) {
    const arr = productsByProducer.get(p.producer_code) ?? []
    arr.push({
      sku: p.sku_naturao,
      slug: slugify(p.name_fr ?? p.sku_naturao),
      nom: p.name_fr ?? '',
      categorie: p.category ?? '',
      description: p.long_desc_fr ?? p.short_desc_fr ?? '',
      offre: '',
      prix: '',
      tva: '',
      enStock: true,
      image: resolveImage(p.image_path),
      saison: false,
    })
    productsByProducer.set(p.producer_code, arr)
  }

  const result: Producer[] = (producers ?? []).map((pr, idx) => {
    const prods = productsByProducer.get(pr.code) ?? []
    const cats = Array.from(new Set(prods.map((p) => p.categorie).filter(Boolean)))
    const galerie = prods
      .map((p) => p.image)
      .filter(Boolean)
      .slice(0, 4)
    while (galerie.length < 4) galerie.push(PLACEHOLDER)

    const hero = prods.find((p) => p.image && p.image !== PLACEHOLDER)?.image ?? PLACEHOLDER

    return {
      id: idx + 1,
      slug: slugify(pr.name),
      code: pr.code,
      nom: pr.name,
      pays: pr.country ?? '',
      region: pr.region ?? '',
      specialite: cats[0] ?? '',
      accroche: '',
      image: hero,
      logo: PLACEHOLDER,
      site: pr.website ?? '',
      histoire: '',
      engagement: '',
      methode: ['Savoir-faire artisanal', 'Production locale', 'Sélection rigoureuse'] as [string, string, string],
      galerie: [galerie[0], galerie[1], galerie[2], galerie[3]] as [string, string, string, string],
      produitsAssocies: prods,
    }
  })

  cache = result
  return result
}

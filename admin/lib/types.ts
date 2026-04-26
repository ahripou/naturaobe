export type Producer = {
  id: string
  code: string
  name: string
  slug: string
  description_fr: string | null
  description_nl: string | null
  address: string | null
  phone: string | null
  email: string | null
  website: string | null
  vat_number: string | null
  logo_url: string | null
  cover_url: string | null
  region: string | null
  country: string | null
  is_bio: boolean | null
  certifications: string[] | null
  franco_minimum: string | null
  delivery_terms: string | null
  payment_terms: string | null
  notes: string | null
  is_active: boolean
}

export type CatalogProduct = {
  id: string
  sku_hub: string
  sku_cf: string | null
  producer_id: string
  name_fr: string | null
  name_nl: string | null
  name_bilingual: string | null
  description_fr: string | null
  description_nl: string | null
  offer: string | null
  unit: string | null
  weight_grams: number | null
  price_ttc: number | null
  price_supplier: number | null
  vat_rate: number | null
  logistics_mode: string | null
  colisage: number | null
  available: boolean
  stock: number | null
  image_url: string | null
  images: string[] | null
  category: string | null
  tags: string[] | null
  is_active: boolean
}

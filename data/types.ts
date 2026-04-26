export type Product = {
  sku: string
  slug: string
  nom: string
  categorie: string
  description: string
  offre: string
  prix: string
  tva: string
  enStock: boolean
  image: string
  saison: boolean
}

export type Producer = {
  id: number
  slug: string
  code: string
  nom: string
  pays: string
  region: string
  specialite: string
  accroche: string
  image: string
  logo: string
  site: string
  histoire: string
  engagement: string
  methode: [string, string, string]
  galerie: [string, string, string, string]
  produitsAssocies: Product[]
}

export const TAGLINES = [
  "Des producteurs engagés, des produits justes",
  "La qualité avant tout",
  "Le goût du vrai, sans compromis",
  "Sélectionné pour ce que c'est, pas pour ce que ça vend",
  "Des produits sincères, au prix juste",
  "Moins de volume, plus de sens",
]

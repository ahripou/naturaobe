'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FadeIn from '@/components/FadeIn'
import PRODUCERS from '@/data/producers'

const ALL_PRODUCTS = PRODUCERS.flatMap((p) =>
  p.produitsAssocies.map((pr) => ({ ...pr, producteur: p.nom, slug: p.slug }))
)

const CATEGORIES = ['Tous', 'Légumes', 'Fruits', 'Vins', 'Fromages', 'Crémerie', 'Épicerie', 'Boulangerie', 'Viennoiserie', 'Charcuterie', 'Conserves', 'Bières', 'Chocolat', 'Épices', 'Boissons', 'Aromates', 'Bien-être']

export default function Produits() {
  const [cat, setCat] = useState('Tous')
  const [saison, setSaison] = useState(false)

  const filtered = ALL_PRODUCTS.filter((p) =>
    (cat === 'Tous' || p.categorie === cat) &&
    (!saison || p.saison)
  )

  return (
    <>
      <Header />

      {/* ── Page header ──────────────────────────────────────── */}
      <section style={{ padding: '80px 0 56px' }}>
        <div className="container">
          <FadeIn>
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              {ALL_PRODUCTS.length} produits · {PRODUCERS.length} maisons
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'flex-end' }}>
              <h1 className="display-xxl">
                Le <em className="terre">catalogue.</em>
              </h1>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--muted)', paddingBottom: 20 }}>
                Une sélection qui évolue au fil des saisons. Chaque produit porte l'histoire d'un producteur et d'un terroir.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Filters ──────────────────────────────────────────── */}
      <div className="filter-bar">
        <div className="filter-bar-inner" style={{ flexDirection: 'column', gap: 12 }}>
          <div className="filter-group" style={{ flexWrap: 'wrap' }}>
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`filter-btn${cat === c ? ' active-primary' : ''}`}
              >
                {c}
              </button>
            ))}
          </div>
          <div>
            <button
              onClick={() => setSaison(!saison)}
              className={`filter-btn${saison ? ' active-sage' : ''}`}
            >
              🌱 De saison uniquement
            </button>
          </div>
        </div>
      </div>

      {/* ── Grid ─────────────────────────────────────────────── */}
      <section style={{ padding: '56px 0 140px' }}>
        <div className="container">
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--muted)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontStyle: 'italic' }}>
                Aucun produit pour cette sélection.
              </p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
              {filtered.map((pr, i) => (
                <FadeIn key={i} delay={(i % 8) * 40}>
                  <Link href={`/producteurs/${pr.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
                    <article className="product-card">
                      <div className="product-card-img-wrap">
                        <Image
                          src={pr.image}
                          alt={pr.nom}
                          fill
                          style={{ objectFit: 'cover' }}
                          sizes="25vw"
                        />
                        {pr.saison && <span className="product-card-badge">De saison</span>}
                      </div>
                      <div className="product-card-body">
                        <div className="product-card-cat">{pr.categorie}</div>
                        <h2 className="product-card-name">{pr.nom}</h2>
                        <div className="product-card-prod">par {pr.producteur}</div>
                      </div>
                    </article>
                  </Link>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}

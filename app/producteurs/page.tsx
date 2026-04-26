'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FadeIn from '@/components/FadeIn'
import PRODUCERS from '@/data/producers'

const SPECIALTIES = ['Tous', 'Vin', 'Bière', 'Boisson', 'Miel', 'Chocolat', 'Fromage', 'Pâtes', 'Légumineuse', 'Conserve', 'Biscuit', 'Chips', 'Bonbon', 'Sirop', 'Saumon', 'Micropousse']
const COUNTRIES = ['Tous', 'Belgique', 'France', 'Italie']

export default function Producteurs() {
  const [specialty, setSpecialty] = useState('Tous')
  const [country, setCountry] = useState('Tous')

  const filtered = PRODUCERS.filter((p) =>
    (specialty === 'Tous' || p.specialite.toLowerCase().includes(specialty.toLowerCase())) &&
    (country === 'Tous' || p.pays === country)
  )

  return (
    <>
      <Header />

      {/* ── Page header ──────────────────────────────────────── */}
      <section style={{ padding: '80px 0 56px' }}>
        <div className="container">
          <FadeIn>
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              {PRODUCERS.length} maisons · Belgique, France, Italie
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'flex-end' }}>
              <h1 className="display-xxl">
                Nos <em className="sage">producteurs.</em>
              </h1>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--muted)', paddingBottom: 20 }}>
                Nous travaillons avec des producteurs sélectionnés pour leur exigence, leur savoir-faire et leur vision du produit. Chaque collaboration est construite dans la durée.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Filter bar ───────────────────────────────────────── */}
      <div className="filter-bar">
        <div className="filter-bar-inner">
          <div className="filter-group">
            {SPECIALTIES.map((s) => (
              <button
                key={s}
                onClick={() => setSpecialty(s)}
                className={`filter-btn${specialty === s ? ' active-primary' : ''}`}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="filter-group">
            {COUNTRIES.map((c) => (
              <button
                key={c}
                onClick={() => setCountry(c)}
                className={`filter-btn${country === c ? ' active-sage' : ''}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Grid ─────────────────────────────────────────────── */}
      <section style={{ padding: '56px 0 120px' }}>
        <div className="container">
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--muted)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontStyle: 'italic' }}>
                Aucun producteur pour cette sélection.
              </p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
              {filtered.map((p, i) => (
                <FadeIn key={p.id} delay={(i % 6) * 60}>
                  <Link
                    href={`/producteurs/${p.slug}`}
                    className="producer-card"
                    style={{ display: 'block', textDecoration: 'none' }}
                  >
                    <div className="producer-card-img">
                      <Image
                        src={p.image}
                        alt={p.nom}
                        width={600}
                        height={450}
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                      />
                    </div>
                    <div className="producer-card-body">
                      <div className="producer-card-meta">
                        <span className="producer-card-country">{p.pays}</span>
                        <span className="producer-card-id">N° {String(p.id).padStart(3, '0')}</span>
                      </div>
                      <h2 className="display-md">{p.nom}</h2>
                      <div className="producer-card-specialty">{p.specialite}</div>
                      <p className="producer-card-accroche">{p.accroche}</p>
                      <div className="producer-card-footer">
                        <span className="producer-card-region">{p.region}</span>
                        <span className="producer-card-cta">Découvrir →</span>
                      </div>
                    </div>
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

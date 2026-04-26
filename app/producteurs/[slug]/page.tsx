import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FadeIn from '@/components/FadeIn'
import { getProducers } from '@/lib/getProducers'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  const PRODUCERS = await getProducers()
  return PRODUCERS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const PRODUCERS = await getProducers()
  const p = PRODUCERS.find((p) => p.slug === params.slug)
  if (!p) return {}
  return {
    title: `${p.nom} — Naturao`,
    description: p.accroche,
  }
}

export default async function FicheProducteur({ params }: Props) {
  const PRODUCERS = await getProducers()
  const p = PRODUCERS.find((p) => p.slug === params.slug)
  if (!p) notFound()

  return (
    <>
      <Header />

      {/* ── Back ─────────────────────────────────────────────── */}
      <div style={{ padding: '28px 0 0' }}>
        <div className="container">
          <Link href="/producteurs" className="back-link">
            ← Retour aux producteurs
          </Link>
        </div>
      </div>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section style={{ padding: '32px 0 80px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 40, alignItems: 'flex-end' }}>
            <FadeIn>
              <div style={{ aspectRatio: '4/3', overflow: 'hidden', position: 'relative' }}>
                <Image
                  src={p.image}
                  alt={p.nom}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 60vw"
                  priority
                />
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="fiche-info-card">
                <div className="eyebrow" style={{ marginBottom: 16 }}>
                  N° {String(p.id).padStart(3, '0')} · {p.region}, {p.pays}
                </div>
                <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1, letterSpacing: '-0.02em' }}>
                  {p.nom}
                </h1>
                <p style={{ marginTop: 20, fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 20, color: 'var(--sage)' }}>
                  Un producteur engagé, une approche sincère.
                </p>
                <div className="fiche-info-grid">
                  <div>
                    <div className="fiche-info-item-label">Spécialité</div>
                    <div className="fiche-info-item-value">{p.specialite}</div>
                  </div>
                  <div>
                    <div className="fiche-info-item-label">Région</div>
                    <div className="fiche-info-item-value">{p.region}</div>
                  </div>
                  <div>
                    <div className="fiche-info-item-label">Pays</div>
                    <div className="fiche-info-item-value">{p.pays}</div>
                  </div>
                  <div>
                    <div className="fiche-info-item-label">Collaboration</div>
                    <div className="fiche-info-item-value">Depuis 2024</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Histoire ─────────────────────────────────────────── */}
      <section style={{ padding: '80px 0 100px', borderTop: '1px solid var(--line)' }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '0.4fr 1fr', gap: 56 }}>
            <FadeIn>
              <div className="eyebrow">L'histoire</div>
            </FadeIn>
            <FadeIn delay={100}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(18px, 2vw, 26px)', lineHeight: 1.5 }}>
                {p.histoire}
              </p>
              <p style={{ marginTop: 28, fontSize: 16, lineHeight: 1.7, color: 'var(--muted)' }}>
                {p.engagement}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Méthode ──────────────────────────────────────────── */}
      <section className="methode-section">
        <div className="container" style={{ maxWidth: 1100 }}>
          <FadeIn>
            <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.7, marginBottom: 8 }}>
              La méthode
            </div>
          </FadeIn>
          <div className="methode-grid">
            {p.methode.map((m, i) => (
              <FadeIn key={m} delay={i * 100}>
                <div>
                  <div className="methode-number">0{i + 1}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 400, fontStyle: 'italic', lineHeight: 1.15 }}>
                    {m}
                  </h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Galerie ───────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <div className="eyebrow" style={{ marginBottom: 32 }}>Galerie</div>
          </FadeIn>
          <div className="galerie-grid">
            <FadeIn>
              <div style={{ aspectRatio: '4/5', overflow: 'hidden', position: 'relative' }}>
                <Image src={p.galerie[0]} alt="" fill style={{ objectFit: 'cover' }} sizes="45vw" />
              </div>
            </FadeIn>
            <div className="galerie-right">
              <div className="galerie-right-top">
                <FadeIn delay={80}>
                  <div style={{ aspectRatio: '1/1', overflow: 'hidden', position: 'relative' }}>
                    <Image src={p.galerie[1]} alt="" fill style={{ objectFit: 'cover' }} sizes="25vw" />
                  </div>
                </FadeIn>
                <FadeIn delay={160}>
                  <div style={{ aspectRatio: '1/1', overflow: 'hidden', position: 'relative' }}>
                    <Image src={p.galerie[2]} alt="" fill style={{ objectFit: 'cover' }} sizes="25vw" />
                  </div>
                </FadeIn>
              </div>
              <FadeIn delay={240}>
                <div style={{ aspectRatio: '16/7', overflow: 'hidden', position: 'relative' }}>
                  <Image src={p.galerie[3]} alt="" fill style={{ objectFit: 'cover' }} sizes="50vw" />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Produits associés ────────────────────────────────── */}
      {p.produitsAssocies.length > 0 && (
      <section className="section section-alt">
        <div className="container">
          <FadeIn>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
              <h2 className="display-lg">
                Produits <em>associés</em>
              </h2>
              <Link
                href="/produits"
                style={{ fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terre)', borderBottom: '1px solid var(--terre)', paddingBottom: 3 }}
              >
                Tout voir →
              </Link>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {p.produitsAssocies.map((pr, i) => (
              <FadeIn key={i} delay={i * 70}>
                <article className="product-card">
                  <div className="product-card-img-wrap">
                    <Image src={pr.image} alt={pr.nom} fill style={{ objectFit: 'cover' }} sizes="25vw" />
                    {pr.saison && <span className="product-card-badge">De saison</span>}
                  </div>
                  <div className="product-card-body">
                    <div className="product-card-cat">{pr.categorie}</div>
                    <h3 className="product-card-name">{pr.nom}</h3>
                    {pr.prix && (
                      <div style={{ marginTop: 8, fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--terre)' }}>
                        {pr.prix} € <span style={{ fontSize: 12, color: 'var(--muted)' }}>/ {pr.offre}</span>
                      </div>
                    )}
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      )}

      <Footer />
    </>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Marquee from '@/components/Marquee'
import FadeIn from '@/components/FadeIn'
import { getProducers } from '@/lib/getProducers'

const INSTAGRAM = [
  'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&q=80',
  'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=400&q=80',
  'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&q=80',
  'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80',
  'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&q=80',
  'https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&q=80',
]

export default async function Accueil() {
  const PRODUCERS = await getProducers()
  const featured = PRODUCERS.slice(0, 3)
  const CATALOGUE_ITEMS = PRODUCERS.flatMap((p) =>
    p.produitsAssocies.slice(0, 1).map((pr) => ({
      image: pr.image,
      nom: pr.nom,
      cat: pr.categorie,
      prod: p.nom,
      saison: false,
    }))
  ).slice(0, 8)

  return (
    <>
      <Header />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section style={{ padding: '80px 0 120px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <FadeIn>
              <div className="badge-pill" style={{ marginBottom: 40 }}>
                <span className="badge-dot" />
                Maison de producteurs
              </div>
              <h1 className="display-xl">
                Des producteurs{' '}
                <em className="sage">engagés</em>, sélectionnés pour leur{' '}
                <span className="terre">qualité</span>.
              </h1>
              <p style={{ marginTop: 36, fontSize: 17, lineHeight: 1.65, color: 'var(--muted)', maxWidth: 480 }}>
                Chez Naturao, nous travaillons avec des producteurs indépendants qui partagent une même exigence : proposer des produits justes, authentiques et respectueux du vivant.
              </p>
              <div style={{ marginTop: 44, display: 'flex', gap: 16 }}>
                <Link href="/producteurs" className="btn-primary">
                  Découvrir les producteurs →
                </Link>
                <Link href="/produits" className="btn-outline">
                  Explorer le catalogue
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div style={{ position: 'relative' }}>
                <div style={{ aspectRatio: '4/5', overflow: 'hidden', borderRadius: 4, boxShadow: '0 30px 80px -30px rgba(80,60,20,0.35)' }}>
                  <Image
                    src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1400&q=85"
                    alt="Producteur en champ"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="hero-float-card">
                  <div className="hero-float-card-label">Sélection de la semaine</div>
                  <div className="hero-float-card-title">Ferme du Peuplier — maraîchage régénératif</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Marquee ────────────────────────────────────────────── */}
      <FadeIn>
        <Marquee />
      </FadeIn>

      {/* ── Notre démarche ─────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 72, alignItems: 'flex-start', marginBottom: 80 }}>
            <FadeIn>
              <div className="eyebrow" style={{ marginBottom: 20 }}>Notre démarche</div>
              <h2 className="display-lg">
                Bien plus que des produits,{' '}
                <em className="sage">des producteurs.</em>
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.85, marginBottom: 20 }}>
                Derrière chaque produit, il y a une personne, une vision et un engagement. Nous sélectionnons des producteurs à taille humaine, en Belgique et ailleurs, pour la qualité de leur travail et la cohérence de leur démarche.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--muted)' }}>
                Chacun est choisi pour ce qu'il défend : un produit sincère, un savoir-faire réel, et un prix juste pour chacun.
              </p>
            </FadeIn>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {featured.map((p, i) => (
              <FadeIn key={p.id} delay={i * 80}>
                <Link href={`/producteurs/${p.slug}`} className="producer-card" style={{ display: 'block', textDecoration: 'none' }}>
                  <div className="producer-card-img">
                    <Image src={p.image} alt={p.nom} width={600} height={450} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                  </div>
                  <div className="producer-card-body">
                    <div className="producer-card-meta">
                      <span className="producer-card-country">{p.pays}</span>
                      <span className="producer-card-id">{p.region}</span>
                    </div>
                    <h3 className="display-md">{p.nom}</h3>
                    <div className="producer-card-specialty">{p.specialite}</div>
                    <div style={{ marginTop: 20, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                      Découvrir →
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Catalogue ──────────────────────────────────────────── */}
      <section className="section section-alt" style={{ padding: '100px 0' }}>
        <div className="container">
          <FadeIn>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56 }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: 16 }}>La sélection</div>
                <h2 className="display-lg">
                  Un catalogue guidé <em>par l'exigence.</em>
                </h2>
              </div>
              <p style={{ maxWidth: 400, fontSize: 15, lineHeight: 1.6, color: 'var(--muted)' }}>
                Notre sélection évolue au fil des saisons. Fruits, légumes, vins, produits transformés — chaque produit porte une histoire.
              </p>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {CATALOGUE_ITEMS.map((item, i) => (
              <FadeIn key={i} delay={i * 40}>
                <article className="product-card">
                  <div className="product-card-img-wrap">
                    <Image src={item.image} alt={item.nom} fill style={{ objectFit: 'cover' }} sizes="25vw" />
                    {item.saison && <span className="product-card-badge">De saison</span>}
                  </div>
                  <div className="product-card-body">
                    <div className="product-card-cat">{item.cat}</div>
                    <h4 className="product-card-name">{item.nom}</h4>
                    <div className="product-card-prod">par {item.prod}</div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision ─────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
            <FadeIn>
              <div className="eyebrow" style={{ marginBottom: 32 }}>Notre vision</div>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 1.35 }}>
                Créer du lien entre producteurs et consommateurs. Valoriser des productions à taille humaine.{' '}
                <em className="sage">Soutenir une agriculture et un artisanat où la qualité et le respect priment sur le volume.</em>
              </p>
            </FadeIn>
            <FadeIn delay={150}>
              <div style={{ marginTop: 80, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
                {[
                  { k: 'Sélection', v: 'Chaque producteur est rencontré, visité, compris.' },
                  { k: 'Durée', v: 'Des collaborations pensées dans le temps long.' },
                  { k: 'Transparence', v: 'Origine, méthode, prix juste — tout est dit.' },
                ].map((x) => (
                  <div key={x.k} className="value-card">
                    <div className="value-card-title">{x.k}</div>
                    <p className="value-card-text">{x.v}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Instagram ──────────────────────────────────────────── */}
      <section className="section-alt" style={{ padding: '80px 0 140px' }}>
        <div className="container">
          <FadeIn>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40 }}>
              <h2 className="display-lg">
                Au plus proche <em>des producteurs.</em>
              </h2>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 13, letterSpacing: '0.1em', color: 'var(--terre)', borderBottom: '1px solid var(--terre)', paddingBottom: 3 }}
              >
                @naturao →
              </a>
            </div>
          </FadeIn>

          <div className="instagram-grid">
            {INSTAGRAM.map((src, i) => (
              <FadeIn key={i} delay={i * 40}>
                <div className="instagram-item">
                  <Image src={src} alt="" width={300} height={300} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

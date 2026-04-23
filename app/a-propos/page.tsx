import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FadeIn from '@/components/FadeIn'

const VALEURS = [
  {
    titre: "Sélection",
    texte: "Chaque producteur est rencontré, visité, compris. Nous ne référençons jamais un produit sans avoir rencontré la personne qui le fait.",
  },
  {
    titre: "Durée",
    texte: "Nos collaborations sont pensées dans le temps long. Pas de contrats à court terme, pas de logique de volume. On travaille ensemble parce qu'on partage une vision.",
  },
  {
    titre: "Transparence",
    texte: "Origine, méthode, prix juste — tout est dit. Nous croyons que le consommateur a le droit de savoir ce qu'il achète et d'où ça vient.",
  },
  {
    titre: "Échelle humaine",
    texte: "Nous travaillons exclusivement avec des producteurs indépendants, à taille humaine. Pas de coopératives industrielles, pas de labels de façade.",
  },
]

const EQUIPE = [
  {
    nom: "Sophie Marchand",
    role: "Fondatrice & sélectionneuse",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
    bio: "Ancienne cheffe de cuisine reconvertie en exploratrice de terroirs. Sophie sillonne les campagnes belges, françaises et italiennes depuis 2018 à la recherche de producteurs d'exception.",
  },
  {
    nom: "Jonas Pirard",
    role: "Relations producteurs",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    bio: "Fils d'agriculteur, Jonas comprend les réalités du terrain. Il accompagne nos producteurs dans la durée et s'assure que chaque collaboration est équitable pour les deux parties.",
  },
  {
    nom: "Léa Dubois",
    role: "Communication & contenu",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",
    bio: "Journaliste de formation, Léa donne de la voix aux histoires de nos producteurs. Elle croit que bien raconter est un acte militant.",
  },
]

export default function APropos() {
  return (
    <>
      <Header />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section style={{ padding: '80px 0 120px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <FadeIn>
              <div className="eyebrow" style={{ marginBottom: 32 }}>Notre histoire</div>
              <h1 className="display-xl">
                Une maison bâtie sur <em className="sage">la confiance.</em>
              </h1>
              <p style={{ marginTop: 36, fontSize: 17, lineHeight: 1.7, color: 'var(--muted)', maxWidth: 500 }}>
                Naturao est née d'un constat simple : les meilleurs produits ne sont pas dans les grandes surfaces. Ils sont chez des producteurs passionnés, souvent invisibles, qui font un travail remarquable sans les moyens de se faire connaître.
              </p>
              <p style={{ marginTop: 20, fontSize: 16, lineHeight: 1.7, color: 'var(--muted)', maxWidth: 500 }}>
                Depuis 2022, nous faisons le lien entre ces artisans du vivant et des consommateurs qui cherchent du sens dans ce qu'ils mangent.
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <div style={{ aspectRatio: '4/5', overflow: 'hidden', borderRadius: 4, boxShadow: '0 30px 80px -30px rgba(80,60,20,0.3)', position: 'relative' }}>
                <Image
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&q=85"
                  alt="Producteur au travail"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="50vw"
                  priority
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Citation ─────────────────────────────────────────── */}
      <section style={{ background: 'var(--sage)', color: 'var(--bg)', padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <FadeIn>
            <blockquote style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 40px)', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.4, margin: 0, textAlign: 'center' }}>
              « Sélectionné pour ce que c'est, pas pour ce que ça vend. »
            </blockquote>
            <p style={{ textAlign: 'center', marginTop: 28, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.6 }}>
              Notre engagement depuis le premier jour
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Valeurs ──────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <div style={{ marginBottom: 64 }}>
              <div className="eyebrow" style={{ marginBottom: 20 }}>Ce en quoi nous croyons</div>
              <h2 className="display-lg" style={{ maxWidth: 600 }}>
                Quatre principes qui guident <em className="sage">chaque décision.</em>
              </h2>
            </div>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
            {VALEURS.map((v, i) => (
              <FadeIn key={v.titre} delay={i * 80}>
                <div className="value-card" style={{ padding: '36px 40px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '56px', fontStyle: 'italic', color: 'var(--line)', marginBottom: 16, lineHeight: 1 }}>
                    0{i + 1}
                  </div>
                  <div className="value-card-title">{v.titre}</div>
                  <p className="value-card-text" style={{ fontSize: 15 }}>{v.texte}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Équipe ───────────────────────────────────────────── */}
      <section className="section section-alt">
        <div className="container">
          <FadeIn>
            <div style={{ marginBottom: 64 }}>
              <div className="eyebrow" style={{ marginBottom: 20 }}>Les personnes derrière Naturao</div>
              <h2 className="display-lg">
                Une petite équipe, <em className="sage">un grand engagement.</em>
              </h2>
            </div>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {EQUIPE.map((m, i) => (
              <FadeIn key={m.nom} delay={i * 80}>
                <div>
                  <div style={{ aspectRatio: '3/4', overflow: 'hidden', marginBottom: 24, position: 'relative' }}>
                    <Image src={m.image} alt={m.nom} fill style={{ objectFit: 'cover' }} sizes="33vw" />
                  </div>
                  <div className="eyebrow" style={{ marginBottom: 8 }}>{m.role}</div>
                  <h3 className="display-md" style={{ marginBottom: 14 }}>{m.nom}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--muted)' }}>{m.bio}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section style={{ padding: '120px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 700 }}>
          <FadeIn>
            <div className="eyebrow" style={{ marginBottom: 24 }}>Travailler avec nous</div>
            <h2 className="display-lg" style={{ marginBottom: 24 }}>
              Vous êtes producteur ?<br /><em className="sage">Parlons-nous.</em>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--muted)', marginBottom: 44 }}>
              Si vous partagez nos valeurs et souhaitez rejoindre la maison Naturao, nous serions ravis de faire votre connaissance.
            </p>
            <a href="mailto:hello@naturao.be" className="btn-primary" style={{ display: 'inline-flex' }}>
              Nous contacter →
            </a>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  )
}

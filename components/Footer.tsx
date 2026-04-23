'use client'

import Link from 'next/link'
import { useState } from 'react'

const COLS = [
  { title: 'Navigation', links: [{ label: 'Accueil', href: '/' }, { label: 'Producteurs', href: '/producteurs' }, { label: 'Produits', href: '/produits' }, { label: 'À propos', href: '/a-propos' }] },
  { title: 'Contact', links: [{ label: 'hello@naturao.be', href: 'mailto:hello@naturao.be' }, { label: 'Bruxelles, Belgique', href: '#' }, { label: 'Mentions légales', href: '/mentions-legales' }] },
  { title: 'Suivre', links: [{ label: 'Instagram', href: 'https://instagram.com' }, { label: 'Newsletter', href: '#newsletter' }] },
]

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <Link href="/" className="footer-wordmark">Naturao</Link>
            <p className="footer-tagline">Des producteurs engagés, sélectionnés pour leur qualité.</p>
            <div className="footer-newsletter" id="newsletter">
              <div className="footer-newsletter-label">Newsletter</div>
              <form
                className="footer-newsletter-form"
                onSubmit={(e) => { e.preventDefault(); setEmail('') }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre adresse"
                  className="footer-newsletter-input"
                />
                <button type="submit" className="footer-newsletter-btn">S'inscrire →</button>
              </form>
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <div className="footer-col-title">{col.title}</div>
              <ul className="footer-links">
                {col.links.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="footer-link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>© 2026 Naturao. Moins de volume, plus de sens.</span>
          <button
            className="lang-btn"
            style={{ opacity: 0.5, fontSize: 12 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ↑ Retour en haut
          </button>
        </div>
      </div>
    </footer>
  )
}

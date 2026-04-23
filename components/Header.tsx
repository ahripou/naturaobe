'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const NAV = [
  { href: '/', label: 'Accueil' },
  { href: '/producteurs', label: 'Producteurs' },
  { href: '/produits', label: 'Produits' },
  { href: '/a-propos', label: 'À propos' },
]

export default function Header() {
  const pathname = usePathname()
  const [lang, setLang] = useState<'FR' | 'NL'>('FR')

  return (
    <header className="header">
      <div className="header-inner">
        <div>
          <Link href="/" className="wordmark">Naturao</Link>
        </div>

        <nav className="header-nav">
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link${pathname === href || (href !== '/' && pathname.startsWith(href)) ? ' active' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="lang-switcher">
          <button
            className={`lang-btn${lang === 'FR' ? ' active' : ''}`}
            onClick={() => setLang('FR')}
          >
            FR
          </button>
          <span className="lang-sep">·</span>
          <button
            className={`lang-btn${lang === 'NL' ? ' active' : ''}`}
            onClick={() => setLang('NL')}
          >
            NL
          </button>
        </div>
      </div>
    </header>
  )
}

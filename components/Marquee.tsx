import { TAGLINES } from '@/data/producers'

export default function Marquee() {
  return (
    <section className="marquee-section" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((g) => (
          <div key={g} className="marquee-group">
            {TAGLINES.map((t, i) => (
              <span key={i} className="marquee-item">
                {t}
                <span className="marquee-sep">✶</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

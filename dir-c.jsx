// Direction C — Terroir chaleureux
// Crème + beige + vert olive + brun bois · organique, chaleureux

const PALETTE_C = {
  bg: "#efe8d6", // crème chaude
  bgTop: "#efe8d6",
  bgAlt: "#e3d8bd",
  ink: "#2c2a1e", // brun très foncé
  muted: "#7a7258",
  sage: "#6b7340", // vert olive
  terre: "#8a5a2b", // brun bois / terre cuite
  line: "#d6c9a7",
};

function DirC_Accueil(props = {}) {
  const [_lang, _setLang] = React.useState("FR");
  const lang = props.lang ?? _lang;
  const setLang = props.setLang ?? _setLang;
  const nav = props.nav || (() => {});
  const featured = window.NATURAO_PRODUCERS.slice(0, 3);

  return (
    <div style={{ background: PALETTE_C.bg, color: PALETTE_C.ink, fontFamily: "Inter, sans-serif" }}>
      <SiteHeader palette={PALETTE_C} currentPage="accueil" onNavigate={nav} lang={lang} onLang={setLang} />

      {/* HERO — split with warm overlay */}
      <section style={{ padding: "80px 56px 120px" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <FadeIn>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 12,
              padding: "8px 16px",
              background: PALETTE_C.bgAlt,
              border: `1px solid ${PALETTE_C.line}`,
              borderRadius: 999,
              fontSize: 11,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: PALETTE_C.terre,
              marginBottom: 40,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: PALETTE_C.sage }}></span>
              Maison de producteurs
            </div>
            <h1 style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 400,
              fontSize: 82,
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              margin: 0,
              color: PALETTE_C.ink,
            }}>
              Des producteurs <span style={{ fontStyle: "italic", color: PALETTE_C.sage }}>engagés</span>, sélectionnés pour leur <span style={{ color: PALETTE_C.terre }}>qualité</span>.
            </h1>
            <p style={{ marginTop: 36, fontSize: 17, lineHeight: 1.65, color: PALETTE_C.muted, maxWidth: 480 }}>
              Chez Naturao, nous travaillons avec des producteurs indépendants qui partagent une même exigence : proposer des produits justes, authentiques et respectueux du vivant.
            </p>
            <div style={{ marginTop: 44, display: "flex", gap: 16 }}>
              <button onClick={() => nav("producteurs")} style={{
                background: PALETTE_C.ink,
                color: PALETTE_C.bg,
                border: "none",
                padding: "16px 28px",
                borderRadius: 999,
                fontSize: 13,
                letterSpacing: "0.08em",
                cursor: "pointer",
              }}>
                Découvrir les producteurs →
              </button>
              <button onClick={() => nav("producteurs")} style={{
                background: "transparent",
                color: PALETTE_C.ink,
                border: `1px solid ${PALETTE_C.ink}`,
                padding: "16px 28px",
                borderRadius: 999,
                fontSize: 13,
                letterSpacing: "0.08em",
                cursor: "pointer",
              }}>
                Explorer le catalogue
              </button>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div style={{ position: "relative" }}>
              <div style={{ aspectRatio: "4/5", overflow: "hidden", borderRadius: 4, boxShadow: "0 30px 80px -30px rgba(80,60,20,0.35)" }}>
                <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1400&q=85" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt=""/>
              </div>
              <div style={{
                position: "absolute",
                bottom: 24,
                right: -28,
                background: PALETTE_C.bg,
                padding: "20px 24px",
                border: `1px solid ${PALETTE_C.line}`,
                maxWidth: 260,
              }}>
                <div style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: PALETTE_C.terre, marginBottom: 6 }}>
                  Sélection de la semaine
                </div>
                <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 22, lineHeight: 1.2 }}>
                  Ferme du Peuplier — maraîchage régénératif
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Marquee tagline */}
      <FadeIn>
        <section style={{ background: PALETTE_C.sage, color: PALETTE_C.bg, padding: "28px 0", overflow: "hidden" }}>
          <div style={{
            display: "flex",
            gap: 64,
            fontFamily: '"Cormorant Garamond", serif',
            fontStyle: "italic",
            fontSize: 28,
            whiteSpace: "nowrap",
          }}>
            {[...Array(3)].map((_, j) => (
              <React.Fragment key={j}>
                {window.NATURAO_TAGLINES.map((t, i) => (
                  <React.Fragment key={`${j}-${i}`}>
                    <span>{t}</span>
                    <span style={{ color: PALETTE_C.bgAlt, opacity: 0.5 }}>✶</span>
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Section 2 */}
      <section style={{ padding: "120px 56px" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 72, alignItems: "flex-start", marginBottom: 80 }}>
            <FadeIn>
              <div style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: PALETTE_C.terre, marginBottom: 20 }}>
                Notre démarche
              </div>
              <h2 style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 400,
                fontSize: 56,
                lineHeight: 1.05,
                margin: 0,
                letterSpacing: "-0.015em",
              }}>
                Bien plus que des produits, <span style={{ fontStyle: "italic", color: PALETTE_C.sage }}>des producteurs.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: PALETTE_C.ink, margin: 0, opacity: 0.85 }}>
                Derrière chaque produit, il y a une personne, une vision et un engagement. Nous sélectionnons des producteurs à taille humaine, en Belgique et ailleurs, pour la qualité de leur travail et la cohérence de leur démarche.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: PALETTE_C.muted, marginTop: 20 }}>
                Chacun est choisi pour ce qu'il défend : un produit sincère, un savoir-faire réel, et un prix juste pour chacun.
              </p>
            </FadeIn>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {featured.map((p, i) => (
              <FadeIn key={p.id} delay={i * 100}>
                <article onClick={() => nav("fiche", p)} style={{
                  background: PALETTE_C.bgAlt,
                  padding: 20,
                  cursor: "pointer",
                  transition: "transform 400ms",
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-4px)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                >
                  <div style={{ aspectRatio: "4/3", overflow: "hidden", marginBottom: 20 }}>
                    <img src={p.image} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt={p.nom}/>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <span style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: PALETTE_C.terre }}>
                      {p.pays}
                    </span>
                    <span style={{ fontSize: 11, color: PALETTE_C.muted }}>{p.region}</span>
                  </div>
                  <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 28, fontWeight: 400, margin: 0, lineHeight: 1.1 }}>{p.nom}</h3>
                  <div style={{ marginTop: 8, fontSize: 14, fontStyle: "italic", color: PALETTE_C.sage, fontFamily: '"Cormorant Garamond", serif' }}>
                    {p.specialite}
                  </div>
                  <div style={{ marginTop: 20, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: PALETTE_C.ink }}>
                    Découvrir →
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Catalogue */}
      <section style={{ padding: "100px 56px", background: PALETTE_C.bgAlt }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56 }}>
              <div>
                <div style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: PALETTE_C.terre, marginBottom: 16 }}>La sélection</div>
                <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 400, fontSize: 52, margin: 0, letterSpacing: "-0.015em" }}>
                  Un catalogue guidé <span style={{ fontStyle: "italic" }}>par l'exigence.</span>
                </h2>
              </div>
              <p style={{ maxWidth: 400, fontSize: 15, lineHeight: 1.6, color: PALETTE_C.muted, margin: 0 }}>
                Notre sélection évolue au fil des saisons. Fruits, légumes, vins, produits transformés — chaque produit porte une histoire.
              </p>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {[
              { nom: "Tomates anciennes", prod: "Ferme du Peuplier", cat: "Légumes", saison: true, tone: "sage" },
              { nom: "Chablis 2022", prod: "Domaine de la Vallée", cat: "Vins", saison: false, tone: "warm" },
              { nom: "Tomme fermière", prod: "Van den Berg", cat: "Crémerie", saison: false, tone: "ivory" },
              { nom: "Huile d'olive", prod: "Huilerie Toscana", cat: "Épicerie", saison: false, tone: "earth" },
              { nom: "Miel de forêt", prod: "Apiculture des Hêtres", cat: "Épicerie", saison: true, tone: "warm" },
              { nom: "Pain au levain", prod: "Vieux Moulin", cat: "Boulangerie", saison: false, tone: "earth" },
              { nom: "Courges d'hiver", prod: "Ferme du Peuplier", cat: "Légumes", saison: true, tone: "sage" },
              { nom: "Safran", prod: "Safran Hesbaye", cat: "Épicerie", saison: false, tone: "warm" },
            ].map((p, i) => (
              <FadeIn key={i} delay={i * 50}>
                <article style={{ background: PALETTE_C.bg, padding: 16 }}>
                  <div style={{ position: "relative" }}>
                    <ImagePlaceholder label={p.nom} tone={p.tone} ratio="1/1" />
                    {p.saison && (
                      <span style={{
                        position: "absolute", top: 10, right: 10,
                        background: PALETTE_C.sage, color: PALETTE_C.bg,
                        padding: "4px 10px",
                        fontSize: 9,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        borderRadius: 999,
                      }}>De saison</span>
                    )}
                  </div>
                  <div style={{ paddingTop: 16 }}>
                    <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: PALETTE_C.terre, marginBottom: 6 }}>{p.cat}</div>
                    <h4 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 20, fontWeight: 400, margin: 0, lineHeight: 1.1 }}>{p.nom}</h4>
                    <div style={{ fontSize: 13, color: PALETTE_C.muted, marginTop: 6, fontFamily: '"Cormorant Garamond", serif', fontStyle: "italic" }}>
                      par {p.prod}
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section style={{ padding: "140px 56px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: PALETTE_C.terre, marginBottom: 32, textAlign: "center" }}>
              Notre vision
            </div>
            <h2 style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: 44,
              lineHeight: 1.35,
              textAlign: "center",
              margin: 0,
              color: PALETTE_C.ink,
            }}>
              Créer du lien entre producteurs et consommateurs. Valoriser des productions à taille humaine. <span style={{ fontStyle: "italic", color: PALETTE_C.sage }}>Soutenir une agriculture et un artisanat où la qualité et le respect priment sur le volume.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <div style={{ marginTop: 80, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
              {[
                { k: "Sélection", v: "Chaque producteur est rencontré, visité, compris." },
                { k: "Durée", v: "Des collaborations pensées dans le temps long." },
                { k: "Transparence", v: "Origine, méthode, prix juste — tout est dit." },
              ].map((x) => (
                <div key={x.k} style={{
                  padding: 28,
                  background: PALETTE_C.bgAlt,
                  borderTop: `2px solid ${PALETTE_C.sage}`,
                }}>
                  <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 24, fontStyle: "italic", color: PALETTE_C.ink, marginBottom: 12 }}>
                    {x.k}
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: PALETTE_C.muted, margin: 0 }}>{x.v}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Instagram */}
      <section style={{ padding: "80px 56px 140px", background: PALETTE_C.bgAlt }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40 }}>
              <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 400, fontSize: 44, margin: 0 }}>
                Au plus proche <span style={{ fontStyle: "italic" }}>des producteurs.</span>
              </h2>
              <a style={{
                fontSize: 13, letterSpacing: "0.1em",
                color: PALETTE_C.terre,
                borderBottom: `1px solid ${PALETTE_C.terre}`,
                paddingBottom: 3, cursor: "pointer",
              }}>@naturao →</a>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 12 }}>
            {["sage","warm","earth","ivory","sage","warm"].map((t, i) => (
              <FadeIn key={i} delay={i * 40}>
                <ImagePlaceholder label={`#${i+1}`} tone={t} ratio="1/1" />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter palette={PALETTE_C} />
    </div>
  );
}

function DirC_Producteurs(props = {}) {
  const [filter, setFilter] = React.useState("Tous");
  const [country, setCountry] = React.useState("Tous");
  const nav = props.nav || (() => {});
  const producers = window.NATURAO_PRODUCERS;
  const filtered = producers.filter(p =>
    (filter === "Tous" || p.specialite.toLowerCase().includes(filter.toLowerCase())) &&
    (country === "Tous" || p.pays === country)
  );

  return (
    <div style={{ background: PALETTE_C.bg, color: PALETTE_C.ink, fontFamily: "Inter, sans-serif" }}>
      <SiteHeader palette={PALETTE_C} currentPage="producteurs" onNavigate={nav} lang={props.lang} onLang={props.setLang} />

      <section style={{ padding: "80px 56px 56px" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: PALETTE_C.terre, marginBottom: 24 }}>
              {producers.length} maisons · Belgique, France, Italie, Portugal
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, alignItems: "flex-end" }}>
              <h1 style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 400,
                fontSize: 96,
                lineHeight: 0.98,
                margin: 0,
                letterSpacing: "-0.025em",
              }}>
                Nos <span style={{ fontStyle: "italic", color: PALETTE_C.sage }}>producteurs.</span>
              </h1>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: PALETTE_C.muted, margin: 0, paddingBottom: 20 }}>
                Nous travaillons avec des producteurs sélectionnés pour leur exigence, leur savoir-faire et leur vision du produit. Chaque collaboration est construite dans la durée.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <section style={{ padding: "24px 56px", borderTop: `1px solid ${PALETTE_C.line}`, borderBottom: `1px solid ${PALETTE_C.line}`, background: PALETTE_C.bg }}>
          <div style={{ maxWidth: 1320, margin: "0 auto", display: "flex", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {["Tous", "Maraîchage", "Vins", "Fromages", "Huile", "Miel", "Pain", "Charcuterie"].map((c) => (
                <button key={c} onClick={() => setFilter(c)} style={{
                  background: filter === c ? PALETTE_C.ink : "transparent",
                  color: filter === c ? PALETTE_C.bg : PALETTE_C.ink,
                  border: `1px solid ${filter === c ? PALETTE_C.ink : PALETTE_C.line}`,
                  padding: "8px 16px",
                  borderRadius: 999,
                  fontSize: 12,
                  letterSpacing: "0.06em",
                  cursor: "pointer",
                }}>{c}</button>
              ))}
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              {["Tous", "Belgique", "France", "Italie"].map((c) => (
                <button key={c} onClick={() => setCountry(c)} style={{
                  background: country === c ? PALETTE_C.sage : "transparent",
                  color: country === c ? PALETTE_C.bg : PALETTE_C.muted,
                  border: `1px solid ${country === c ? PALETTE_C.sage : PALETTE_C.line}`,
                  padding: "8px 16px",
                  borderRadius: 999,
                  fontSize: 12,
                  letterSpacing: "0.06em",
                  cursor: "pointer",
                }}>{c}</button>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <section style={{ padding: "56px 56px 120px" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
          {filtered.map((p, i) => (
            <FadeIn key={p.id} delay={(i % 6) * 60}>
              <article onClick={() => nav("fiche", p)} style={{
                background: PALETTE_C.bgAlt,
                cursor: "pointer",
                transition: "transform 400ms, box-shadow 400ms",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 20px 40px -20px rgba(80,60,20,0.25)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                  <img src={p.image} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt={p.nom}/>
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                    <span style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: PALETTE_C.terre, padding: "3px 10px", background: PALETTE_C.bg, borderRadius: 999 }}>
                      {p.pays}
                    </span>
                    <span style={{ fontSize: 11, color: PALETTE_C.muted }}>N° {String(p.id).padStart(3, "0")}</span>
                  </div>
                  <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 26, fontWeight: 400, margin: 0, lineHeight: 1.1 }}>{p.nom}</h3>
                  <div style={{ marginTop: 6, fontFamily: '"Cormorant Garamond", serif', fontStyle: "italic", fontSize: 15, color: PALETTE_C.sage }}>
                    {p.specialite}
                  </div>
                  <p style={{ marginTop: 14, fontSize: 14, lineHeight: 1.55, color: PALETTE_C.muted, margin: "14px 0 0" }}>
                    {p.accroche}
                  </p>
                  <div style={{ marginTop: 20, paddingTop: 16, borderTop: `1px solid ${PALETTE_C.line}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 12, color: PALETTE_C.muted }}>{p.region}</span>
                    <span style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: PALETTE_C.ink }}>Découvrir →</span>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <SiteFooter palette={PALETTE_C} />
    </div>
  );
}

function DirC_Fiche(props = {}) {
  const p = props.producer || window.NATURAO_FEATURED_PRODUCER;
  const nav = props.nav || (() => {});
  return (
    <div style={{ background: PALETTE_C.bg, color: PALETTE_C.ink, fontFamily: "Inter, sans-serif" }}>
      <SiteHeader palette={PALETTE_C} currentPage="producteurs" onNavigate={nav} lang={props.lang} onLang={props.setLang} />

      <div style={{ padding: "28px 56px 0", maxWidth: 1320, margin: "0 auto" }}>
        <a onClick={() => nav("producteurs")} style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: PALETTE_C.muted, cursor: "pointer" }}>
          ← Retour aux producteurs
        </a>
      </div>

      {/* Hero with image + info card */}
      <section style={{ padding: "32px 56px 80px" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 40, alignItems: "flex-end" }}>
          <FadeIn>
            <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
              <img src={p.image} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt={p.nom}/>
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <div style={{ background: PALETTE_C.bgAlt, padding: 36, borderTop: `3px solid ${PALETTE_C.sage}` }}>
              <div style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: PALETTE_C.terre, marginBottom: 16 }}>
                N° 001 · {p.region}, {p.pays}
              </div>
              <h1 style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 400,
                fontSize: 56,
                lineHeight: 1,
                margin: 0,
                letterSpacing: "-0.02em",
              }}>
                {p.nom}
              </h1>
              <p style={{
                marginTop: 20,
                fontFamily: '"Cormorant Garamond", serif',
                fontStyle: "italic",
                fontSize: 20,
                color: PALETTE_C.sage,
                margin: "20px 0 0",
              }}>
                Un producteur engagé, une approche sincère.
              </p>
              <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <div>
                  <div style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: PALETTE_C.muted, marginBottom: 6 }}>Spécialité</div>
                  <div style={{ fontSize: 14, color: PALETTE_C.ink }}>{p.specialite}</div>
                </div>
                <div>
                  <div style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: PALETTE_C.muted, marginBottom: 6 }}>Variétés</div>
                  <div style={{ fontSize: 14, color: PALETTE_C.ink }}>+ de 90</div>
                </div>
                <div>
                  <div style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: PALETTE_C.muted, marginBottom: 6 }}>Approche</div>
                  <div style={{ fontSize: 14, color: PALETTE_C.ink }}>Régénérative</div>
                </div>
                <div>
                  <div style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: PALETTE_C.muted, marginBottom: 6 }}>Collaboration</div>
                  <div style={{ fontSize: 14, color: PALETTE_C.ink }}>Depuis 2024</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Histoire */}
      <section style={{ padding: "40px 56px 100px", borderTop: `1px solid ${PALETTE_C.line}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", paddingTop: 64, display: "grid", gridTemplateColumns: "0.4fr 1fr", gap: 56 }}>
          <FadeIn>
            <div style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: PALETTE_C.terre }}>
              L'histoire
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <p style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 26,
              lineHeight: 1.5,
              margin: 0,
              color: PALETTE_C.ink,
            }}>
              {p.histoire}
            </p>
            <p style={{ marginTop: 28, fontSize: 16, lineHeight: 1.7, color: PALETTE_C.muted }}>
              {p.engagement}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Méthode */}
      <section style={{ background: PALETTE_C.sage, color: PALETTE_C.bg, padding: "100px 56px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: PALETTE_C.bgAlt, marginBottom: 32, opacity: 0.8 }}>
              La méthode
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }}>
            {p.methode.map((m, i) => (
              <FadeIn key={m} delay={i * 100}>
                <div>
                  <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 56, fontStyle: "italic", opacity: 0.45, marginBottom: 16 }}>
                    0{i + 1}
                  </div>
                  <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 32, fontWeight: 400, lineHeight: 1.15, margin: 0, fontStyle: "italic" }}>
                    {m}
                  </h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section style={{ padding: "100px 56px" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: PALETTE_C.terre, marginBottom: 32 }}>
              Galerie
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 12 }}>
            <FadeIn>
              <div style={{ aspectRatio: "4/5", overflow: "hidden" }}>
                <img src={p.galerie[0]} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="" />
              </div>
            </FadeIn>
            <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: 12, gridColumn: "2 / 4" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <FadeIn delay={80}>
                  <div style={{ aspectRatio: "1/1", overflow: "hidden" }}>
                    <img src={p.galerie[1]} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="" />
                  </div>
                </FadeIn>
                <FadeIn delay={160}>
                  <div style={{ aspectRatio: "1/1", overflow: "hidden" }}>
                    <img src={p.galerie[2]} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="" />
                  </div>
                </FadeIn>
              </div>
              <FadeIn delay={240}>
                <div style={{ aspectRatio: "16/7", overflow: "hidden" }}>
                  <img src={p.galerie[3]} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="" />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Produits associés */}
      <section style={{ padding: "60px 56px 140px", background: PALETTE_C.bgAlt }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
              <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 400, fontSize: 44, margin: 0 }}>
                Produits <span style={{ fontStyle: "italic" }}>associés</span>
              </h2>
              <a style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: PALETTE_C.terre, borderBottom: `1px solid ${PALETTE_C.terre}`, paddingBottom: 3 }}>
                Tout voir →
              </a>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {p.produitsAssocies.map((pr, i) => (
              <FadeIn key={i} delay={i * 70}>
                <article style={{ background: PALETTE_C.bg, padding: 16 }}>
                  <div style={{ position: "relative" }}>
                    <ImagePlaceholder label={pr.nom} tone={["sage","ivory","warm","earth"][i]} ratio="1/1" />
                    {pr.saison && (
                      <span style={{
                        position: "absolute", top: 10, right: 10,
                        background: PALETTE_C.sage, color: PALETTE_C.bg,
                        padding: "4px 10px",
                        fontSize: 9,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        borderRadius: 999,
                      }}>De saison</span>
                    )}
                  </div>
                  <div style={{ paddingTop: 14 }}>
                    <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: PALETTE_C.terre, marginBottom: 6 }}>{pr.categorie}</div>
                    <h4 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 20, fontWeight: 400, margin: 0 }}>{pr.nom}</h4>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter palette={PALETTE_C} />
    </div>
  );
}

Object.assign(window, { DirC_Accueil, DirC_Producteurs, DirC_Fiche, PALETTE_C });

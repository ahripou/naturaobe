// Shared primitives used across all three NaturaO directions

// Scroll-triggered fade in — disabled pass-through (animation was causing re-render loop)
function useScrollFadeIn() {
  const ref = React.useRef(null);
  return [ref, true];
}

function FadeIn({ children, delay = 0, y = 24, as: Tag = "div", className, style, ...rest }) {
  return (
    <Tag className={className} style={style} {...rest}>
      {children}
    </Tag>
  );
}

// Wordmark "NaturaO" — typographic placeholder (user will swap real logo)
function NaturaoWordmark({ color = "currentColor", size = 22, letterSpacing = "0.14em" }) {
  return (
    <span
      style={{
        fontFamily: '"Cormorant Garamond", serif',
        fontWeight: 500,
        fontSize: size,
        letterSpacing,
        color,
        display: "inline-flex",
        alignItems: "baseline",
        gap: 1,
      }}
    >
      <span>Naturao</span>
      <span style={{ fontStyle: "italic", fontWeight: 400 }}>{"\n"}</span>
    </span>
  );
}

// Striped placeholder block (monospace label)
function ImagePlaceholder({ label = "producteur", ratio = "4 / 5", tone = "sage", rounded = false, style, ...rest }) {
  const palettes = {
    sage: { bg: "#e7e4db", stripe: "#d9d4c5", ink: "#6d6a5f" },
    ivory: { bg: "#ece7dc", stripe: "#dfd8c8", ink: "#7a7362" },
    warm: { bg: "#e8dfcf", stripe: "#d9cdb5", ink: "#7c6e54" },
    earth: { bg: "#dccdb3", stripe: "#cdba9a", ink: "#6b5838" },
    dark: { bg: "#2a2a24", stripe: "#33332b", ink: "#a39b86" },
  };
  const p = palettes[tone] || palettes.sage;
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: ratio,
        position: "relative",
        overflow: "hidden",
        borderRadius: rounded ? 2 : 0,
        background: `repeating-linear-gradient(135deg, ${p.bg} 0 14px, ${p.stripe} 14px 28px)`,
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: p.ink,
          fontFamily: "'JetBrains Mono', ui-monospace, monospace",
          fontSize: 11,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          mixBlendMode: "multiply",
        }}
      >
        {label}
      </div>
    </div>
  );
}

// Header for the prototype — fixed inside artboard scroll region
function SiteHeader({ palette, tone = "light", currentPage = "accueil", onNavigate, lang = "FR", onLang }) {
  const isLight = tone === "light";
  const textColor = isLight ? palette.ink : palette.bgTop;
  const borderColor = isLight ? palette.line : "rgba(255,255,255,0.14)";
  const bg = isLight ? palette.bg : palette.ink;

  const items = [
    { id: "accueil", label: "Accueil" },
    { id: "producteurs", label: "Producteurs" },
    { id: "produits", label: "Produits" },
    { id: "apropos", label: "À propos" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: `${bg}e6`,
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: `1px solid ${borderColor}`,
      }}
    >
      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "18px 48px",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          color: textColor,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <NaturaoWordmark color={textColor} size={22} />
        </div>
        <nav style={{ display: "flex", gap: 36 }}>
          {items.map((it) => (
            <button
              key={it.id}
              onClick={() => onNavigate && onNavigate(it.id)}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
                fontSize: 13,
                letterSpacing: "0.04em",
                color: textColor,
                opacity: currentPage === it.id ? 1 : 0.7,
                borderBottom:
                  currentPage === it.id
                    ? `1px solid ${textColor}`
                    : "1px solid transparent",
                paddingBottom: 2,
                transition: "opacity .2s",
              }}
            >
              {it.label}
            </button>
          ))}
        </nav>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 14,
            fontFamily: "Inter, sans-serif",
            fontSize: 12,
            letterSpacing: "0.08em",
          }}
        >
          <button
            onClick={() => onLang && onLang("FR")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: textColor,
              opacity: lang === "FR" ? 1 : 0.45,
              padding: 0,
              fontFamily: "inherit",
              fontSize: "inherit",
              letterSpacing: "inherit",
            }}
          >
            FR
          </button>
          <span style={{ opacity: 0.3 }}>·</span>
          <button
            onClick={() => onLang && onLang("NL")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: textColor,
              opacity: lang === "NL" ? 1 : 0.45,
              padding: 0,
              fontFamily: "inherit",
              fontSize: "inherit",
              letterSpacing: "inherit",
            }}
          >
            NL
          </button>
        </div>
      </div>
    </header>
  );
}

// Footer used across directions
function SiteFooter({ palette }) {
  const cols = [
    {
      title: "Navigation",
      links: ["Accueil", "Producteurs", "Produits", "À propos"],
    },
    {
      title: "Contact",
      links: ["hello@naturao.be", "Bruxelles, Belgique", "Mentions légales"],
    },
    {
      title: "Suivre",
      links: ["Instagram", "LinkedIn", "Newsletter"],
    },
  ];
  return (
    <footer
      style={{
        background: palette.ink,
        color: palette.bgTop,
        padding: "80px 48px 40px",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
            gap: 64,
            paddingBottom: 60,
            borderBottom: `1px solid rgba(255,255,255,0.14)`,
          }}
        >
          <div>
            <NaturaoWordmark color={palette.bgTop} size={24} />
            <p
              style={{
                marginTop: 24,
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: 22,
                lineHeight: 1.35,
                fontStyle: "italic",
                color: palette.bgTop,
                opacity: 0.82,
                maxWidth: 340,
              }}
            >
              Des producteurs engagés, sélectionnés pour leur qualité.
            </p>
            <div style={{ marginTop: 32 }}>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  opacity: 0.5,
                  marginBottom: 12,
                }}
              >
                Newsletter
              </div>
              <div
                style={{
                  display: "flex",
                  borderBottom: `1px solid rgba(255,255,255,0.3)`,
                  paddingBottom: 8,
                  maxWidth: 320,
                }}
              >
                <input
                  placeholder="votre adresse"
                  style={{
                    flex: 1,
                    background: "none",
                    border: "none",
                    outline: "none",
                    color: palette.bgTop,
                    fontFamily: "Inter, sans-serif",
                    fontSize: 14,
                  }}
                />
                <button
                  style={{
                    background: "none",
                    border: "none",
                    color: palette.bgTop,
                    fontFamily: "Inter, sans-serif",
                    fontSize: 13,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    opacity: 0.85,
                  }}
                >
                  S'inscrire →
                </button>
              </div>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  opacity: 0.5,
                  marginBottom: 24,
                }}
              >
                {c.title}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {c.links.map((l) => (
                  <li
                    key={l}
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: 18,
                      color: palette.bgTop,
                      opacity: 0.88,
                    }}
                  >
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          style={{
            paddingTop: 28,
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "Inter, sans-serif",
            fontSize: 12,
            letterSpacing: "0.04em",
            opacity: 0.55,
          }}
        >
          <span>© 2026 Naturao. Moins de volume, plus de sens.</span>
          <span>↑ Retour en haut</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  useScrollFadeIn,
  FadeIn,
  NaturaoWordmark,
  ImagePlaceholder,
  SiteHeader,
  SiteFooter,
});

# Handoff — Naturao

## Overview

Naturao est une maison de producteurs basée en Belgique qui sélectionne des producteurs indépendants et engagés (Belgique, France, Italie, Portugal) pour proposer des produits authentiques et respectueux du vivant. Le site web comprend trois pages principales :

1. **Accueil** — présentation de la marque, des producteurs mis en avant, du catalogue et de la vision
2. **Producteurs** — page index listant tous les producteurs, avec filtres par spécialité et origine
3. **Fiche producteur** — page détail d'un producteur (histoire, méthode, galerie, produits associés)

Le ton est **sobre, premium, éditorial, chaleureux et "terroir"**. L'aesthétique retenue est la **Direction C — Terroir chaleureux** : palette crème / vert olive / brun bois, typographie éditoriale (serif display + sans-serif body).

## About the Design Files

Les fichiers dans ce bundle sont des **références design créées en HTML/React** — des prototypes qui montrent l'intention visuelle et le comportement attendu, **pas du code de production à copier tel quel**.

La tâche est de **recréer ces designs dans l'environnement cible** (Next.js, Astro, Nuxt, Remix, etc.) en utilisant les patterns et librairies de ce codebase. Si aucun environnement n'existe encore, recommande un framework moderne adapté à un site éditorial premium (Next.js + Tailwind ou Astro + CSS modules sont de bons candidats).

Le prototype utilise React 18 via CDN + Babel in-browser. Il n'est **pas conçu pour la production** — pas de build, pas de SSR, pas d'i18n réelle. Il sert uniquement de référence visuelle et interactive.

## Fidelity

**High-fidelity.** Les couleurs, typographies, espacements, interactions, copy, et compositions sont finaux. Le développeur doit viser une restitution **pixel-perfect** de la direction C.

Points à ne **pas** prendre littéralement :
- Les images Unsplash sont des placeholders — à remplacer par de la vraie photographie (shootings de producteurs, de produits, de paysages).
- Le wordmark "Naturao" est typographique (Cormorant Garamond) — il peut être remplacé par un vrai logo quand il sera livré.
- Le contenu texte (noms de producteurs, histoires, méthodes) est fictif — à remplacer par les vrais contenus éditoriaux.
- Le switcher de langue FR/NL est visuel seulement — la vraie i18n reste à implémenter.

## Design Tokens

### Palette (direction C — Terroir chaleureux, valeurs par défaut)

| Token | Valeur | Usage |
|---|---|---|
| `bg` | `#efe8d6` | Fond principal (crème chaude) |
| `bgAlt` | `#e3d8bd` | Fond alternatif (sections, cartes) |
| `ink` | `#2c2a1e` | Texte principal (brun très foncé) |
| `muted` | `#7a7258` | Texte secondaire |
| `sage` | `#6b7340` | Vert olive — accent principal (italiques, highlights, CTA verts) |
| `terre` | `#8a5a2b` | Brun bois / terre cuite — accent secondaire (eyebrow labels, taglines) |
| `line` | `#d6c9a7` | Séparateurs, bordures |

Palettes alternatives exposées dans le prototype via Tweaks (voir `NaturaO.html`, composant `TweaksPanel`) :

- **Crème · Olive · Bois** : `#efe8d6` / `#6b7340` / `#8a5a2b` *(défaut)*
- **Ivoire · Sauge · Terre** : `#f3ede0` / `#58634c` / `#a05a3a`
- **Lin · Mousse · Cuivre** : `#ece4ce` / `#4f5e3a` / `#9a5c2d`
- **Sable · Vert foncé · Brique** : `#e9e0c8` / `#3e4a30` / `#a04a2d`

Confirmer avec le client la palette retenue avant build. Le dernier état sauvegardé via Tweaks dans le prototype est **Sable · Vert foncé · Brique** en densité **Dense** avec la font **Fraunces**.

### Typographie

Deux familles, chargées via Google Fonts :

- **Display** — `"Cormorant Garamond"` (poids 300, 400, 500, italiques inclus)
  - Alternative exposée dans Tweaks : `"Fraunces"`
- **Body** — `"Inter"` (poids 300, 400, 500, 600)

Echelle typographique :

| Niveau | Police | Taille | Weight | Usage |
|---|---|---|---|---|
| Hero H1 | Cormorant Garamond | 82–96px | 400 | Titres de page (accueil, producteurs, fiche) |
| Hero H1 (fiche) | Cormorant Garamond | 56px | 400 | Titre dans la carte info fiche |
| H2 | Cormorant Garamond | 44–56px | 400 | Titres de section |
| H3 | Cormorant Garamond | 26–32px | 400 | Noms de producteurs, sous-titres |
| H4 | Cormorant Garamond | 20px | 400 | Noms de produits |
| Eyebrow | Inter | 11px | 400 | Labels en caps, `letter-spacing: 0.2em`, `text-transform: uppercase`, couleur `terre` ou `sage` |
| Body | Inter | 16–17px | 400 | Paragraphes, `line-height: 1.65–1.7` |
| Small | Inter | 11–14px | 400 | Métadonnées, labels secondaires |
| Italic pull-quote | Cormorant Garamond italic | 20–28px | 400 | Taglines, accroches, "souffle" |

Principe typographique : **serif display en très grande taille + italiques en accent** (notamment sur des mots-clés comme "engagés", "exigence", "des producteurs"), **sans-serif petit et très "letter-spacé" pour les eyebrows/labels**. Les transitions serif/italique/caps donnent le rythme éditorial.

### Espacement

Pas d'échelle stricte — grands espacements, generous whitespace. Les valeurs récurrentes dans le prototype :

- Padding horizontal de page : `56px` (viewport 1440)
- Max-width conteneur : `1320px` (full) / `1100px` (texte) / `720px` (single column)
- Padding vertical de section : `100–160px`
- Gap grille cartes : `20–28px`
- Gap grille éditoriale : `48–96px`

### Border radius

Très discret, esprit éditorial :

- `0` — images, la plupart des blocs
- `4px` — cartes de produits (subtil)
- `999px` — pills (CTA, filtres, tags)

### Shadows

Très subtiles, tirant sur le brun (pour rester dans la gamme chaude) :

- Hero image shadow : `0 30px 80px -30px rgba(80,60,20,0.35)`
- Card hover : `0 20px 40px -20px rgba(80,60,20,0.25)`

### Transitions

- Hover cartes : `transform 400ms, box-shadow 400ms` (translateY -4px)
- Boutons : pas de transition particulière, hover peut être un léger darken

## Screens / Views

### 1. Accueil (`DirC_Accueil`)

**Purpose** — landing page : poser la marque, montrer la sélection, introduire la démarche.

**Layout** (top → bottom) :

1. **Header fixe** (64px) — voir section Header.
2. **Hero split 50/50** (`padding: 80px 56px 120px`)
   - Gauche : badge pill "Maison de producteurs" + dot sage → H1 serif 82px (avec "engagés" en italique sage, "qualité" en terre) → paragraphe body → 2 CTA (pill noir plein + pill noir outline)
   - Droite : image ratio 4/5 (shadow) + carte flottante décalée `right: -28px bottom: 24px` contenant "SÉLECTION DE LA SEMAINE" + nom du producteur du moment en serif
3. **Marquee sage** (fond `sage`, texte `bg`, padding 28px 0) — slogans défilants en serif italique 28px : "Moins de volume, plus de sens.", "Des producteurs, pas des marques.", "Le juste prix, pour chacun.", "Chaque produit a une histoire." — séparés par `✶`. 3 répétitions côte à côte, `white-space: nowrap`. À animer en CSS `@keyframes` (translateX infini) en production.
4. **Section "Notre démarche"** (`padding: 120px 56px`)
   - Grille `1fr 1.2fr gap: 72px` alignée top : eyebrow "NOTRE DÉMARCHE" + H2 56px "Bien plus que des produits, *des producteurs.*" à gauche ; deux paragraphes à droite.
   - En dessous, 3 cartes producteurs (grille 3 colonnes gap 24) : fond `bgAlt`, padding 20px, image 4/3, eyebrow pays + région, nom serif 28px, spécialité italique sage 14px, "Découvrir →" caps 12px. Hover : translateY(-4px).
5. **Section Catalogue** (fond `bgAlt`, `padding: 100px 56px`)
   - Header : eyebrow "LA SÉLECTION" + H2 52px "Un catalogue guidé *par l'exigence.*" à gauche, paragraphe 400px à droite.
   - Grille 4 colonnes gap 20 : cartes fond `bg`, padding 16px, image 1/1 (placeholder coloré par tone : sage/ivory/warm/earth), badge "DE SAISON" pill sage en top-right si saisonnier, catégorie caps terre, nom serif 20px, "par {Producteur}" italique serif 13px muted.
6. **Vision** (`padding: 140px 56px`)
   - Eyebrow centré "NOTRE VISION" + H2 serif 44px centré (light 300), avec une partie en italique sage.
   - 3 cartes `bgAlt` `border-top: 2px solid sage` padding 28px : titre serif italique 24px (Sélection / Durée / Transparence) + paragraphe muted 14px.
7. **Instagram** (fond `bgAlt`, `padding: 80px 56px 140px`)
   - H2 44px + lien "@naturao →" avec border-bottom terre, aligné en flex space-between.
   - Grille 6 colonnes gap 12, carrés placeholders.
8. **Footer** (voir section Footer).

### 2. Producteurs (`DirC_Producteurs`)

**Purpose** — index complet des producteurs, filtrable.

**Layout** :

1. Header.
2. **Titre page** (`padding: 80px 56px 56px`)
   - Eyebrow "{N} MAISONS · BELGIQUE, FRANCE, ITALIE, PORTUGAL"
   - Grille `1.2fr 1fr gap: 64` : H1 serif 96px "Nos *producteurs.*" + paragraphe intro à droite aligné bottom.
3. **Barre de filtres** — sticky on scroll (optionnel), `border-top/bottom: 1px solid line`, padding 24px 56px
   - Gauche : pills filtre spécialité — Tous / Maraîchage / Vins / Fromages / Huile / Miel / Pain / Charcuterie. État actif : fond `ink` texte `bg`.
   - Droite : pills origine — Tous / Belgique / France / Italie. État actif : fond `sage` texte `bg`.
   - Pills : `border: 1px solid line` ou `ink` selon état, `border-radius: 999px`, padding 8px 16px, font-size 12px.
4. **Grille producteurs** (`padding: 56px 56px 120px`)
   - 3 colonnes gap 28, cartes `bgAlt` : image 4/3, padding 24, ligne top (pays pill terre + "N° 001" muted), nom serif 26px, spécialité italique sage 15px, accroche 14px muted, ligne bottom (border-top line) avec région muted + "Découvrir →" caps.
   - Hover : translateY(-4px) + shadow `0 20px 40px -20px rgba(80,60,20,0.25)`.
5. Footer.

### 3. Fiche producteur (`DirC_Fiche`)

**Purpose** — page éditoriale long-form pour un producteur.

**Layout** :

1. Header.
2. **Breadcrumb** "← Retour aux producteurs" (eyebrow caps muted, clique → retour à `/producteurs`), padding 28px 56px 0.
3. **Hero** (`padding: 32px 56px 80px`) — grille `1.4fr 1fr gap: 40` aligned bottom :
   - Gauche : image 4/3 (photo du producteur)
   - Droite : carte info `bgAlt` `border-top: 3px solid sage` padding 36
     - Eyebrow "N° 001 · {région}, {pays}" terre
     - H1 serif 56px (nom du producteur)
     - Pull-quote italique sage 20px "Un producteur engagé, une approche sincère."
     - Grille 2×2 de métadonnées : Spécialité / Variétés / Approche / Collaboration (eyebrow caps muted + valeur body 14px ink)
4. **Histoire** (`padding: 40px 56px 100px`, `border-top: 1px solid line`, padding-top 64)
   - Grille `0.4fr 1fr gap: 56` : eyebrow "L'HISTOIRE" terre à gauche + paragraphe serif 26px + paragraphe body muted à droite (max-width 1100).
5. **Méthode** (fond `sage`, couleur `bg`, `padding: 100px 56px`)
   - Eyebrow "LA MÉTHODE" opacity 0.8
   - Grille 3 colonnes gap 40 : chacune a un gros numéro "01/02/03" en serif italique 56px opacity 0.45, puis H3 serif italique 32px.
6. **Galerie** (`padding: 100px 56px`)
   - Grille asymétrique (voir code) : une grande image 4/5 à gauche + 2 petites carrées + une large 16/7 à droite.
7. **Produits associés** (fond `bgAlt`, `padding: 60px 56px 140px`)
   - Header : H2 44px "Produits *associés*" + "Tout voir →" terre.
   - Grille 4 colonnes cartes produits (même pattern que catalogue).
8. Footer.

### Composants partagés

#### Header (`SiteHeader` dans `shared.jsx`)

Fixed top, transparent sur le fond de page (pas de background distinct). Padding 20px 56px. Structure flex space-between :
- Gauche : `NaturaoWordmark` 22px
- Milieu : nav links caps 12px letter-spacing 0.14em, avec état actif (bordure basse sage ou color ink). Liens : Accueil, Producteurs, Catalogue, Notre démarche, Journal.
- Droite : switcher FR/NL (toggle pill) + icône panier/recherche si besoin.

À rendre sticky avec background blurred (`backdrop-filter: blur(12px)` + `background: rgba(239,232,214,0.85)`) au scroll.

#### Footer (`SiteFooter` dans `shared.jsx`)

Fond `ink` (brun très foncé), couleur `bg` (crème), padding généreux (`140px 56px 48px`). Structure :
- Haut : colonne large (wordmark 24px + baseline éditoriale en serif 28px italique + formulaire newsletter)
- Milieu : 4 colonnes de liens (Explorer / Maison / Contact / Suivre)
- Bas : ligne de copyright + "↑ Retour en haut"

#### Wordmark (`NaturaoWordmark`)

Simple `<span>Naturao</span>` en Cormorant Garamond 500, letter-spacing 0.14em. Remplacer par un vrai logo SVG quand disponible. La prop `color` et `size` sont paramétrables.

#### ImagePlaceholder

Bloc coloré avec une teinte `sage | warm | ivory | earth` et un label centré. Sert uniquement dans le prototype — **à remplacer par de vraies photos de produits** en production.

## Interactions & Behavior

- **Navigation interne** : click sur "Découvrir les producteurs" (hero), click sur une carte producteur, click sur "Découvrir →" → navigue vers la fiche. Breadcrumb "← Retour" → revient à l'index.
- **Scroll top on navigate** : à chaque changement de route, scroll `window` au top (smooth).
- **Hover cartes** : translateY(-4px) + shadow doux.
- **Filtres (page Producteurs)** : filtrage client-side sur `specialite` (contains) et `pays` (equals). Pills actives avec fond plein.
- **Persistance** (prototype seulement) : `localStorage` pour la page et la langue — à remplacer par du routing propre en prod (Next.js App Router, file-based routing Astro, etc.).
- **Switcher FR/NL** : visuel seulement — à brancher sur une vraie i18n (next-intl, react-intl, Astro i18n).

## State Management

Minimal. En prod, la plupart de l'état de navigation doit être géré par le router (URL). Les états locaux :
- `filter` + `country` sur la page Producteurs (query string recommandé : `/producteurs?specialite=vins&pays=france`).
- Langue (cookie + middleware).

Pas de back-end requis pour ce scope. Les producteurs/produits peuvent vivre en JSON local ou dans un CMS headless (Sanity, Contentful, Storyblok).

## Assets

- **Photos** : placeholders Unsplash dans le prototype (`images.unsplash.com/...`) — à remplacer intégralement par de la photographie brand, réalisée ou licenciée.
- **Icônes** : aucune pour le moment (volonté éditoriale "pas d'iconographie"). Si nécessaire à l'implémentation (panier, recherche, menu mobile), utiliser un set fin et éditorial (Phosphor Thin, Lucide stroke 1, ou SVG custom).
- **Fonts** : Google Fonts (Cormorant Garamond, Inter, Fraunces en option) — à self-host en prod pour la perf et le RGPD.

## Données fictives

Voir `data.jsx` — contient `NATURAO_PRODUCERS` (9 producteurs fictifs avec id, nom, région, pays, spécialité, accroche, image, histoire, engagement, méthode, galerie, produits associés) et `NATURAO_TAGLINES` (4 taglines pour le marquee). Structure à répliquer dans le CMS.

## Responsive

Le prototype est conçu pour viewport desktop 1440. À décliner pour tablette et mobile :
- Hero split → stack vertical (image en premier sur mobile)
- Grilles 3-4 colonnes → 1-2 colonnes
- Padding horizontal 56px → 24px sur mobile
- H1 96px → 56px sur mobile
- Header : menu burger sous 768px

## Files

Inclus dans ce bundle :

- `NaturaO.html` — prototype cliquable principal (monte la direction C avec panel Tweaks)
- `shared.jsx` — composants partagés : `SiteHeader`, `SiteFooter`, `NaturaoWordmark`, `ImagePlaceholder`, `FadeIn`
- `dir-c.jsx` — les 3 pages : `DirC_Accueil`, `DirC_Producteurs`, `DirC_Fiche` (palette `PALETTE_C`)
- `data.jsx` — données fictives `NATURAO_PRODUCERS`, `NATURAO_FEATURED_PRODUCER`, `NATURAO_TAGLINES`
- `README.md` — ce document
- `screenshots/` — captures des 3 pages (1440px) : `01-accueil.png`, `02-producteurs.png`, `03-fiche.png`

## Notes pour l'implémentation

1. **Framework suggéré** : Next.js 14 App Router + Tailwind + next-intl. Alternative : Astro (plus léger, meilleur pour un site éditorial principalement statique).
2. **CMS suggéré** : Sanity ou Storyblok — permet à l'équipe Naturao d'ajouter des producteurs et de gérer les fiches sans dev.
3. **Performance** : next/image (ou équivalent) obligatoire — les images sont centrales dans ce design. Viser LCP < 2s.
4. **Accessibilité** : contrast ratio à re-vérifier avec la palette finale (notamment `muted #7a7258` sur `bg #efe8d6` = AA mais limite sur petit texte). Ajouter focus states visibles sur tous les éléments interactifs (pas fait dans le prototype).
5. **SEO** : slugs FR/NL par page (`/producteurs/ferme-du-peuplier` / `/nl/producenten/...`), Open Graph par fiche producteur.

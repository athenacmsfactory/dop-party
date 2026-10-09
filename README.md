# Dop-party

Herbruikbare statische design-template gebouwd met **Vite** + vanilla **HTML/CSS/JS**.

Geïnspireerd op de visuele taal van [dop-ovl.be](https://www.dop-ovl.be) — alle code hier is een eigen implementatie. Tweede template in de familie na [blockparty](https://github.com/athenacmsfactory/blockparty) (geïnspireerd op digitalconstructionday.be).

## Componenten

| Component | Beschrijving |
|---|---|
| **Utility Bar** | Smalle bovenbalk: telefoon/e-mail links, openingsuren rechts |
| **Site Header** | Sticky header met logo, nav, underline-hover, groene burger (mobiel) + donker dropdown-menu |
| **Hero** | Full-bleed beeld met groen overlay-paneel, grote statement en dubbele CTA |
| **Split Intro** | Twee kolommen: tekst met groene steekwoorden \| donker videopaneel met play-knop |
| **Action Cards** | Tegels met icoon, titel, tekst en outline-CTA (hover-lift) |
| **Vision** | Twee kolommen: kop + alinea's \| lijst met groene markers |
| **News** | Nieuwsgrid met beeld, categori-tags (event/vacature/artikel), `LEES VERDER →` en datum |
| **CTA Pills** | Rij afgeronde knoppen: primaire vraag-knop + outline-pills |
| **Site Footer** | Licht contactblok (adres, route-knop, socials) + donkere sitemap-band |

## Quickstart

```bash
git clone https://github.com/athenacmsfactory/dop-party.git
cd dop-party
pnpm install
pnpm dev        # → http://localhost:5174
```

## Design Tokens

Alle waarden leven in `src/styles/tokens.css`:

| Token | Voorbeeld |
|---|---|
| `--c-green` | `#2b7b44` (primair groen) |
| `--c-slate` | `#343a40` (standaardtekst) |
| `--c-ink` | `#09181b` (donkere panelen) |
| `--c-off` | `#fafaf9` (off-white achtergrond) |
| `--r-pill` | `999px` |
| `--ease` | `cubic-bezier(0.22, 0.61, 0.36, 1)` |

Kleurpalet en radii overgenomen uit de analyse van dop-ovl.be (groen `#2B7B44`, tekst `#343A40`, donker `#09181B`).

## Font

Zelfgehost variabel woff2: **Inter** (OFL), gewicht 400–800, latin + latin-ext.

## JS

- `site-header.js` — sticky-schaduw bij scrollen, burger-menu (met Escape en menu-sluiting bij klikken)
- `reveal.js` — scroll-reveal via IntersectionObserver (respecteert `prefers-reduced-motion`)

## Build & Deploy

```bash
pnpm build      # → dist/
pnpm preview    # → http://localhost:4173
```

GitHub Pages deployment via `.github/workflows/deploy.yml` (automatisch bij push naar `main`).

## Licentie

MIT — zie [LICENSE](./LICENSE).

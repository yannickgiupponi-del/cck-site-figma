# Cache Cache Killer — Site Public Frontend

Code source frontend du site vitrine **Cache Cache Killer**, un jeu de survie grandeur nature dans un cirque abandonné.

## Stack technique

- **Framework** : Next.js 15 (App Router) + React 18
- **Styles** : Tailwind CSS v4 avec design tokens custom
- **Fonts** : Bodoni Moda (display), Oswald (heading), DM Sans (body), Share Tech Mono (mono), Crimson Text (serif)

## Palette V3 "Cirque Delave"

| Token | Hex | Usage |
|-------|-----|-------|
| Fond principal | `#0d0d12` | Background global |
| Rouge sang | `#c43030` | Titres, CTA danger, logo "KILLER" |
| Bleu acier | `#3a6080` | Liens, elements secondaires froids |
| Laiton | `#b89040` | Accents, prix, coins, prestige |
| Violet | `#6a3a7a` | XP, progression, gamification |
| Creme | `#d8ccb4` | Texte principal sur fond sombre (ratio 10.6:1) |
| Gris | `#6a6a70` | Texte decoratif/large uniquement (ratio 3.5:1) |

### Sous-palette Accueil (chaud)
| Token | Hex |
|-------|-----|
| Fond chaud | `#1a1610` |
| Laiton | `#b89040` |
| Bordeaux | `#7a2830` |
| Creme chaud | `#e8dcc0` |

## Pages du site

| Route | Fichier | Description |
|-------|---------|-------------|
| `/` | `src/app/page.tsx` | Accueil — hero, concept, tarifs, FAQ, CTA reservation |
| `/concept` | `src/app/concept/page.tsx` | L'experience — regles, ambiance, scenarios |
| `/tarifs` | `src/app/tarifs/page.tsx` | Grille tarifaire |
| `/reserver` | `src/app/reserver/page.tsx` | Formulaire de reservation (waitlist pre-ouverture) |
| `/classement` | `src/app/classement/page.tsx` | Leaderboard public |
| `/a-propos` | `src/app/a-propos/page.tsx` | Equipe, histoire, valeurs |
| `/faq` | `src/app/faq/page.tsx` | Questions frequentes |
| `/contact` | `src/app/contact/page.tsx` | Formulaire de contact |
| `/privatisation` | `src/app/privatisation/page.tsx` | Offre B2B / evenements prives |
| `/cgv` | `src/app/cgv/page.tsx` | Conditions generales de vente |
| `/mentions-legales` | `src/app/mentions-legales/page.tsx` | Mentions legales + RGPD |

## Composants partages

| Composant | Fichier | Role |
|-----------|---------|------|
| `SiteHeader` | `src/components/header.tsx` | Header sticky + nav desktop/mobile |
| `SiteFooter` | `src/components/footer.tsx` | Footer multi-colonnes + social |
| `FadeInSection` | `src/components/fade-in-section.tsx` | Animation scroll fade-in |

## Regles UX appliquees

1. Touch targets 48x48px minimum
2. Contraste WCAG 4.5:1 (3:1 pour texte large)
3. 1 seul CTA primaire visible par section
4. Hick's Law : max 5-7 choix visibles
5. prefers-reduced-motion obligatoire
6. Mobile-first
7. Validation inline (blur + server action)
8. Labels visibles (jamais placeholder seul)
9. Couleur jamais seul indicateur (icone + texte)
10. Skeleton > Spinner

## Univers narratif

Cache Cache Killer se deroule dans **Le Cirque Delave** — un cirque ambulant que le temps a oublie. L'atmosphere est sombre, theatrale, avec des references au cabaret noir, au vaudeville macabre et au steampunk delave. Le ton est immersif, mysterieux, jamais gore. L'experience dure 20 minutes par session, 2-10 joueurs, des 12 ans.

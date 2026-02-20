# FIGMA PROMPT V4 — Business Plan Cache Cache Killer

> Prompt complet pour recreer le Business Plan CCK V3 dans Figma avec fidelite absolue au texte Word et aux chiffres Excel.

---

## 1. DESIGN SYSTEM — Palette V3 "Cirque Delave"

### Couleurs principales
| Token | Hex | Usage |
|-------|-----|-------|
| fond | #0d0d12 | Background principal |
| accueil-fond | #1a1610 | Cover page background (chaud) |
| card-bg | #1a1a28 | Cards, KPI cards |
| border | #38384e | Borders, separators |
| chart-bg | #16161e | Chart containers |
| chart-line | #2a2a35 | Grid lines dans charts |
| laiton | #b89040 | Accent primaire, titres section-num |
| rouge | #c43030 | Accent danger, badges, Killers |
| bleu-acier | #3a6080 | Accent info, badges, dette |
| violet | #6a3a7a | Accent special, XP, gamification |
| bordeaux | #7a2830 | Donut grants, accents sombres |
| creme | #d8ccb4 | Texte corps principal (contraste 10.6:1) |
| creme-chaud | #e8dcc0 | Titres h1, texte emphase |
| gris | #6a6a80 | Sous-titres, labels (>=18px uniquement) |
| muted | #55556c | Texte tertiaire, meta |
| card-text | #b8a894 | Paragraphes dans cards |
| scratch-red | #dc2626 | Scratch text engine "KILLER" |
| scratch-shadow | #7f1d1d | Shadow layer scratch text |
| scratch-highlight | #f87171 | Highlight layer scratch text |
| vert | #4a9870 | Chiffres positifs dans tableaux |
| blanc | #ffffff | Texte sur badges colores |

### Typographie
| Role | Font | Weight | Size | Tracking |
|------|------|--------|------|----------|
| Display | Bodoni Moda | 900 | clamp(48px,8vw,80px) | 4px |
| H1 | Bodoni Moda | 700 | 2.25rem | -0.01em |
| H2 section | Oswald | 600 | clamp(28px,4vw,42px) | 0.05em, uppercase |
| H3 | Oswald | 500 | 1.5rem | 0.03em, uppercase |
| H4 / Subheading | Oswald | 500 | 20px | 0.06em, uppercase, laiton |
| Section-num | Share Tech Mono | 400 | 13px | 0.2em, uppercase, laiton |
| Body | DM Sans | 400 | 16px | normal |
| Quote | Crimson Text | 400i | 17px | normal |
| Data / KPI value | Share Tech Mono | 700 | clamp(28px,3.5vw,40px) | normal |
| KPI label | Oswald | 400 | 11px | 0.1em, uppercase |
| Table header | Oswald | 400 | 11px | 0.1em, uppercase, laiton |
| Table cell | DM Sans | 400 | 13px | normal |
| Badge | — | 700 | 10px | 0.08em, uppercase |

### Layout
- Page container: max-width 900px, padding 0 40px, centered
- Section padding: 80px 0
- Section divider: 1px gradient (transparent → #38384e → transparent), margin 80px 0
- Grid: 8px base unit, gaps 20-32px
- Card border-radius: 14px
- KPI card padding: 28px 20px

---

## 2. COMPOSANTS

### SectionHeader
```
.section-num (Share Tech Mono 13px, laiton, uppercase, 0.2em)
h2 (Oswald clamp 28-42px, creme, uppercase, 0.05em)
.section-subtitle (DM Sans 17px, gris, max-width 720px)
```

### KpiCard
- Background: card-bg, border 1px border, border-radius 14px
- Gold top line: linear-gradient(90deg, transparent, laiton, transparent), height 1px, width 60%, centered
- .kpi-value: Share Tech Mono, clamp(28-40px), laiton (ou accent-violet/rouge/bleu)
- .kpi-label: Oswald 11px, gris, uppercase
- .kpi-sub: 11px, muted

### DataTable
- th: Oswald 11px, uppercase, laiton, border-bottom 2px laiton
- td: DM Sans 13px, creme, border-bottom 1px border
- td.accent: laiton, bold
- td.mono: Share Tech Mono
- td.bold: 700, creme-chaud
- td.rouge: rouge | td.vert: vert
- Hover row: rgba(184,144,64,0.04)

### Card / Card Prestige
- Card: card-bg, border 1px border, border-radius 14px, padding 28px 24px
- Card Prestige: card-bg, border 2px laiton, box-shadow 0 0 30px rgba(184,144,64,0.12)
- Prestige pill: absolute top -12px right 20px, laiton bg, fond text
- Card accent variants: border-left 3px (violet/laiton/bleu/rouge)

### QuoteBlock
- Border-left 3px laiton, padding 20px 28px, bg rgba(184,144,64,0.04)
- Guillemet decoratif: Bodoni Moda 48px, laiton, opacity 0.15
- Texte: Crimson Text italic 17px, creme-chaud

### Badge
- Padding 3px 10px, border-radius 4px, 10px bold uppercase
- Variants: laiton (laiton bg, fond text), rouge, bleu, violet, outline (border border, gris text)

### Timeline
- Ligne verticale: 2px, gradient laiton → border
- Point: 14px circle, laiton bg, 3px fond border, glow 12px
- Date: Share Tech Mono 12px, laiton
- Title: Oswald 15px, uppercase, creme
- Desc: DM Sans 13px, gris

### Chart Container
- Background chart-bg, border-radius 14px, border 1px chart-line, padding 24px 16px 12px
- Title: Oswald 14px, uppercase, laiton

---

## 3. STRUCTURE DU DOCUMENT — 22 Sections

### COVER (fond: #1a1610)
- "CACHE CACHE" en Bodoni Moda 900, clamp(48-80px), creme-chaud
- "KILLER" en Scratch Cursive SVG Engine (dc2626, filtre displacement, 4 layers)
- Tagline: "Survival Grandeur Nature — Le Cirque que le Temps a Oublie" (Oswald 16px, gris)
- Quote: "Bienvenue au plus grand spectacle de votre vie... et peut-etre le dernier." (Crimson Text 20px, laiton)
- Meta: Business Plan V3 | Fevrier 2026 | Confidentiel (Share Tech Mono 12px, muted)
- Footer: SAS Cache Cache Killer | Capital 31 000 EUR | Essonne (91)

### SOMMAIRE
21 entrees numerotees (01-21) avec liens ancres et numeros de page.

---

### Section 01 — Executive Summary

**KPI Row (4 cards):**
| Valeur | Label | Sub |
|--------|-------|-----|
| 741K EUR | CA 2029 HT | Scenario reference |
| 220K EUR | Resultat net 2029 | Marge nette ~30% |
| 532K EUR | Tresorerie fin 2029 | Cash cumule |
| 227K EUR | Financement total | Equity + dette + grants |

**Quote:** "Cache Cache Killer est un concept de loisirs immersifs hybride, combinant escape game et laser game dans un univers theatralise unique. Ce dossier presente les projections financieres actualisees (V3) sur la periode septembre 2026 - decembre 2029, articulees autour de trois scenarios (Prudent, Reference, Optimiste)."

**Deux cards:**
- Le probleme: segment 18-35 sous-exploite, escape stagnent (900 salles), laser n'innove plus, 60% veulent hybride
- La solution: 20 min asymetrique theatral, rejouabilite infinie via gamification

**Chiffres cles (tableau):**
| Metrique | Valeur |
|----------|--------|
| Panier moyen TTC | 30,60 EUR |
| CA 2029 HT | 740 657 EUR |
| Resultat net 2029 | 219 926 EUR |
| Tresorerie fin 2029 | 532 469 EUR |
| Valorisation ponderee | 1 566 201 EUR |

**Financement:** 227 000 EUR = investisseurs 100K + emprunt 60K + capital 31K + soutien 30K + crowdfunding 6K

**3 Scenarios:**
| Scenario | Occupation | CA 2029 | RN 2029 |
|----------|-----------|---------|---------|
| Prudent | 40% | 491 108 EUR | 54 882 EUR |
| Reference | 60% | 740 657 EUR | 219 926 EUR |
| Optimiste | 80% | 987 164 EUR | 391 795 EUR |

---

### Section 02 — Introduction (NOUVEAU)

**Presentation du projet** (4 paragraphes Word verbatim):
1. CCK = complexe de loisirs immersifs, escape + laser + theatre immersif, Ile-de-France, sessions uniques
2. Infrastructure technologique (capteurs, eclairages dynamiques, effets speciaux), scenographie theatrale, game masters, sessions 20-45 min
3. Equipe passionnee: game design + gestion projet + marche loisirs. Transcender frontieres escape/laser
4. Ouverture septembre 2026, montee 40 mois. 3 piliers: billetterie, bar immersif, privatisations

**Objectifs strategiques** (card avec 5 bullets):
- Capturer part significative marche loisirs immersifs IdF
- Taux remplissage 60% en croisiere
- CA > 700 000 EUR HT des 2029
- RN positif des 2e exercice complet
- Positionner CCK comme reference secteur immersif France

**Structure juridique:** SAS, capital 31 000 EUR, IS 25%, deficits reportables

**Methodologie:** Modele 40 mois (sept 2026 - dec 2029), 3 scenarios (Prudent 40%, Reference 60%, Optimiste 80%), panier moyen TTC 30,60 EUR

---

### Section 03 — Le Concept (Le Cirque Delave)

**Quote Word:** "CCK reinvente les loisirs immersifs en fusionnant: escape game, laser game, theatre immersif."

**Game Design:**
- Sessions 20 min, nouvelle session toutes les 10 min, 60 joueurs/heure max
- Survivants (badge bleu) 2-8 joueurs vs Killers (badge rouge) 1-2 joueurs
- Arc emotionnel: Phase 1 Preparation (14-20 min, tension) → Phase 2 Extraction (PANIQUE TOTALE)
- Equilibrage dynamique: 2-3 → Duel, 4-5 → 1 vs Many, 6-7 → Standard, 8-10 → Dual Killer
- Briefing 3 couches: pre-briefing passif (video 90s) → briefing actif (90s theatrale) → tuto integre (90s in-game)

---

### Section 04 — Analyse de Marche

**Marche francais (Word):** 770 M EUR total, croissance 10%/an. Escape 220 M EUR (900 enseignes). Laser 550 M EUR. Croissance 7-12% depuis 2022.

**3 Market Cards:**
| Segment | Taille | Detail |
|---------|--------|--------|
| Escape Games | 220 M EUR | 900 salles, 70% survie 2 ans |
| Laser Game | 550 M EUR | 65-70% occupation, pas d'innovation |
| Survival IRL | Vierge | Croisement jeu video + theatre + physique |

**Tableau concurrentiel:** Escape vs Laser vs CCK (duree, joueurs, rejouabilite, immersion, asymetrie, gamification, prix)

**KPIs:** 60% preferent hybrides | 18-35 coeur de cible | 10-12% croissance/an | 8.5/10 intention retour

---

### Section 05 — Modele Economique & Tarification

**Tarification sessions:** Plein tarif 18 EUR TTC (10% TVA) | Creux 12 EUR TTC

**Panier moyen:** 25,50 EUR HT → 30,60 EUR TTC

**Mix revenus:** Billetterie ~70%, Bar ~20%, Privatisations ~10%. Formule 2 parties = 63% ventes.

**Regime TVA:** Sessions jeu 10% (Art.279 b nonies), Bar 20%, Merch 20%, CCK Coins = non soumis (PCA)

---

### Section 06 — Economie CCK Coins

**Double monnaie:** XP (progression pure, jamais achetable) + Coins (prepaye + recompenses)

**4 Packs:**
| Pack | Coins | Prix | EUR/coin |
|------|-------|------|----------|
| Encore (Flash) | 110 | 15 EUR | 0,136 |
| Le Billet | 265 | 35 EUR | 0,132 |
| Le Spectacle (POPULAIRE) | 560 | 70 EUR | 0,125 |
| Le Ringmaster | 1 100 | 130 EUR | 0,118 |

**Depense coins:** Boisson 15c, Snack 15c, Combo 25c, Partie 100c, Goodies 25-350c

**4 Profils joueurs:** Curieux (33 EUR/mois) → Regulier (35-53) → Fidele (70-88) → Hardcore (130-148)

---

### Section 07 — Offres B2B

3 cards: Team Building (400 EUR+, 10-30 pers, 2h), Anniversaire/EVJF (250 EUR+, 8-20 pers, 1h30), Sur-Mesure (devis)

---

### Section 08 — Equipe Fondatrice

3 cards fondateurs:
- Olivier Giupponi (rouge) — President & Directeur Creatif — ENJMIN + Gobelins, Blind Bend Studio
- Mathieu Sardin (bleu) — Directeur General — ERP, logistique indoor
- Yannick Giupponi (laiton) — Directeur Financier & Strategique — Fundraising, modelisation

**Structure:** SAS, Capital 31 000 EUR, 3 100 actions, 33,33% chacun

---

### Section 09 — Implantation & Capacite

**Espaces:** Jeu ~500 m2, Lobby/Bar ~100 m2, Technique ~50 m2 = Total ~650 m2
**Loyer:** 10 000 EUR/mois HT
**Capacite:** 42h ouverture/semaine, 168 sessions, 672/mois, 6 720 joueurs max/mois
**Horaires:** Lundi-Mardi 4h (creux), Mercredi 8h, Jeudi 4h, Vendredi 8h, Samedi-Dimanche 14h

---

### Section 10 — Plan d'Investissement & Financement

**Sources:** Fondateurs 31K (equity) + Investisseurs 100K (equity) + Pret 60K (dette) + Crowdfunding 6K + Aides 30K = 227K

**Donut chart:** Equity 131K (57.7%) | Dette 60K (26.4%) | Grants 30K (13.2%) | Crowd 6K (2.6%)

**Emploi des fonds (150K TTC):** Renovation 70K/10ans, Scenographie 25K/5ans, Tech 10K/5ans, Jeu 3K/3ans, Mobilier 25K/5ans, Securite 10K/5ans, Divers 7K/5ans

**Emprunt:** 60 000 EUR a 3,0% sur 60 mois, capital constant 1 000 EUR/mois, interets ~2 925 EUR

**Chronologie deploiement (timeline):**
- Jan 2026: Levee de fonds + constitution SAS
- Fev-Avr 2026: Bail commercial
- Mai-Juin 2026: Travaux amenagement
- Jul-Aout 2026: Tests, recrutement
- Sep 2026: Ouverture

---

### Section 11 — Modelisation Financiere (NOUVEAU)

**Hypotheses:** Modele 40 mois, cascade parametres → feuilles aval

**Charges:** Loyer 10 000 EUR/mois HT (200 m2+ zone commerciale IdF)

**Masse salariale:** Cout employeur 2 168,59 EUR (brut 1 820 EUR + charges, CCNELAC IDCC 1790). ~30% charges totales en croisiere.

**Amortissements (tableau):**
| Poste | Montant TTC | Duree | Amort annuel |
|-------|-------------|-------|-------------|
| Amenagement locaux | 70 000 EUR | 10 ans | 7 000 EUR |
| Scenographie/decors | 25 000 EUR | 5 ans | 5 000 EUR |
| Equipements tech | 10 000 EUR | 5 ans | 2 000 EUR |
| Materiel de jeu | 3 000 EUR | 3 ans | 1 000 EUR |
| Mobilier/accueil | 25 000 EUR | 5 ans | 5 000 EUR |
| Securite/normes | 10 000 EUR | 5 ans | 2 000 EUR |
| Frais annexes | 7 000 EUR | 5 ans | 1 400 EUR |
| **Total** | **150 000 EUR** | | **23 400 EUR** |

Reinvestissement: 139 EUR HT/mois

**Seuil rentabilite:** 32,1% occupation, ~2 500 joueurs/mois, point mort mois 12-14

---

### Section 12 — Analyse Financiere (NOUVEAU)

**SIG 2029 (tableau):**
| SIG | Montant | % CA |
|-----|---------|------|
| CA | 740 657 EUR | 100% |
| Valeur ajoutee | 531 922 EUR | 71,8% |
| EBE (EBITDA) | 317 400 EUR | 42,9% |
| Resultat net | 219 926 EUR | 29,7% |

**Ratios:** Marge nette ~30%, DSCR >2x, EBITDA/CA 43%, EBITDA 317K EUR

**4 Risques (cards):**
1. Remplissage: Prudent viable Y4, seuil 32-35%
2. Locatif: Loyer 10K/mois = 1er poste fixe, bail 3/6/9 recommande
3. Concurrentiel: Barriere 150K, concept non replicable
4. Saisonnier: Charges constantes, periodes hautes compensent

**Sensibilite (tableau):**
| Taux | RN | Tresorerie | EBE |
|------|----|-----------|-----|
| 30% | -24K | 338K | 1K |
| 40% | 91K | 429K | 145K |
| 50% | 199K | 516K | 290K |
| 60% | 308K | 603K | 435K |
| 70% | 417K | 690K | 580K |
| 80% | 525K | 777K | 724K |

+1% remplissage = +12K EUR CA. Seuil mensuel ~2 500 joueurs (37% capacite max).

---

### Section 13 — Securisation & Valorisation (NOUVEAU)

**Valorisation (tableau):**
| Methode | Valeur | Poids |
|---------|--------|-------|
| DCF (15,0%) | 1 552 335 EUR | 60% |
| VE/EBITDA (5x) | 1 586 999 EUR | 40% |
| **Ponderee** | **1 566 201 EUR** | **100%** |

**Solidite:** Tresorerie positive Y1, RN+ des 2027, DSCR >2x, Prudent viable 2029

**Leviers:** Extension B2B, Diversification merch/pass, Franchise, Technologie AR

---

### Section 14 — Plan Financier Previsionnel

**Projection 4 ans (tableau CORRIGE):**
| Indicateur | 2026 (4m) | 2027 | 2028 | 2029 |
|-----------|-----------|------|------|------|
| CA | 85K | 416K | 535K | **741K** |
| RN | -28K | +51K | +100K | **+220K** |
| Marge nette | N/A | 12% | 19% | **30%** |
| EBITDA | -29K | 93K | 158K | **317K (43%)** |
| Tresorerie | 57K | 88K | 195K | **532K** |

**SVG Bar Chart:** 4 barres (85K, 416K, 535K, 741K), axe Y max 800K, gradient gold

**3 Scenarios 2029 (tableau):**
| Scenario | Occupation | CA | RN | Tresorerie |
|----------|-----------|----|----|-----------|
| Prudent | 40% | 491K | 55K | 130K |
| **Reference** | **60%** | **741K** | **220K** | **532K** |
| Optimiste | 80% | 987K | 392K | 1 003K |

**Break-even:** 32% occupation, marge brute ~96%

---

### Section 15 — Strategie Marketing

**Pre-lancement (20K):** Trailer 3K, Site web 4.5K, Pub digitale 3K, Local 2.5K, Soiree 2K, Post-lancement 3K, Goodies 2K

**Mensuel post-lancement (4.1K):** Social 1K, SEO 1.2K, UGC 800, Local 600, Digital 500

---

### Section 16 — Roadmap (Timeline)

6 phases: Preparation (Fev-Mar 2026) → Construction (Mar-Sep) → Pre-Lancement (Ete) → Grand Opening (Oct 2026) → Croissance (2027-28) → Expansion (2029+)

---

### Section 17 — Stack Technique

11 couches: Frontend (Next.js 15), Styles (Tailwind v4), Backend (Supabase), Auth (JWT+RLS), Paiement (Stripe), IoT (MQTT), Deploy (Vercel CDG1), Mobile (PWA→Capacitor), Email (Brevo FR), Analytics (Plausible), Monitoring (Sentry)

Couts digitaux: 3 774 - 5 464 EUR/an

---

### Section 18 — Conformite Legale

**PCA Coins:** Achat → 411000 (Clients) / 487100 (PCA). Depense → 487100 (PCA) / 706000 (Prestations)
**RGPD:** Plausible + Brevo + Vercel CDG1 + Supabase eu-west-3
**ERP:** Categorie 5, commission securite, RC pro
**FEC:** A47 A-1, 18 colonnes, tab-separated, UTF-8

---

### Section 19 — Indicateurs Cles

**Lancement:** CA 2027 = 416K, RN 2027 = +51K, Intention retour 8.5/10, Seuil 32%
**Maturite:** CA 2029 = 741K, Marge nette ~30%, EBITDA/CA 43%, Tresorerie 532K
**Vision:** Site #2 en 2029, Franchise 2031, Reseau 5-10 sites 2035

---

### Section 20 — Conclusion (NOUVEAU)

**Quote:** "CCK represente une opportunite d'investissement unique dans le marche en croissance des loisirs immersifs."

**KPIs conclusifs:** 740 657 EUR CA | 219 926 EUR RN | 532 469 EUR Tresorerie | 1 566 201 EUR Valorisation

**5 points investisseurs:**
1. Marche porteur croissance deux chiffres
2. Concept differenciant + barriere technologique
3. Rentabilite des 2e exercice
4. Potentiel franchise moyen terme
5. Equipe passionnee et structuree

**Closing quote:** "Une nouvelle ere pour les loisirs immersifs."

---

### Section 21 — Bibliographie (NOUVEAU)

10 sources: AFJV, Federation Escape Games, Xerfi, INSEE, France Travail, CCNELAC IDCC 1790, CGI Art.279, Banque de France, Mordor Intelligence, Statista

---

### CLOSING PAGE (fond: #0d0d12)
- "CACHE CACHE" Bodoni Moda 900, clamp(36-60px)
- "KILLER" Scratch Cursive Engine (taille 60px)
- Quote: "Le plus grand spectacle de votre vie."
- Contact: contact@cachecachekiller.fr | cachecachekiller.fr
- SAS capital 31 000 EUR | Essonne (91) | Confidentiel Fevrier 2026

---

## 4. SCRATCH CURSIVE ENGINE

Le texte "KILLER" est rendu en SVG via un moteur custom:
- PRNG deterministe (Park-Miller LCG, seed 42)
- 8 glyphes: K, I, L, E, R, C, A, H (+ espace)
- 4 layers par trait: Shadow (#7f1d1d, filtre vshadow), Main (#dc2626, filtre v2), Echo (#dc2626, opacity faible), Highlight (#f87171)
- Ink flicks (1-3 par endpoint) + ink drops (0-2 par endpoint)
- Skew global: -4 deg
- Filtre glow: #dc2626, blur 2px, opacity 0.3
- ViewBox par glyphe: -4 -4 58 78

**Filtres SVG requis:** v1, v2, v3 (displacement), vshadow (gaussian blur), vglow (merge blur + source)

---

## 5. CHIFFRES GOLDEN — Source Excel V3

```
CA: 2026=84 888 | 2027=415 850 | 2028=535 356 | 2029=740 657
RN: 2026=-28 089 | 2027=50 833 | 2028=100 378 | 2029=219 926
EBE: 2026=-29 076 | 2027=92 662 | 2028=158 363 | 2029=317 400
Tresorerie: 2026=57 000 | 2027=87 636 | 2028=195 371 | 2029=532 469
Valorisation: DCF=1 552 335 | VE/EBITDA=1 586 999 | Ponderee=1 566 201
Panier moyen: HT=25,50 | TTC=30,60
Cout employeur: 2 168,59
Investissement TTC: 150 000 | Amort annuel: 23 400
Financement: 227 000 (investisseurs 100K + emprunt 60K + capital 31K + soutien 30K + crowd 6K)
Scenarios 2029: Prudent CA=491K RN=55K | Reference CA=741K RN=220K | Optimiste CA=987K RN=392K
Seuil rentabilite: 32,1% occupation
```

---

## 6. REGLES DE PRODUCTION

1. **Hierarchie sources:** Excel (chiffres) > Word (texte) > bp-sections (enrichissements) > Figma (design)
2. **Aucun chiffre invente** — tout provient du golden_numbers.json
3. **Palette stricte** — aucune couleur hors liste ci-dessus
4. **Contraste WCAG** — gris (#6a6a80) uniquement pour texte >=18px ou decoratif
5. **Grain overlay** — opacity 0.035, mix-blend-mode overlay, fixed position
6. **Print** — fond #0d0d12 preserve, grain masque, page-break par section
7. **Reduced motion** — toutes animations desactivables via prefers-reduced-motion

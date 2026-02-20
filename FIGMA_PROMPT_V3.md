# PROMPT FIGMA — Business Plan V3 Cache Cache Killer

## MISSION

Tu as deja cree un excellent design system (composants React, charts Recharts, palette V3, grain overlays). Maintenant, **applique ce design system au contenu EXACT du business plan** pour produire un document final pret a presenter a des investisseurs.

---

## REGLE ABSOLUE — A LIRE AVANT TOUT

**INTERDICTION TOTALE de modifier, reformuler, resumer, raccourcir ou reecrire le moindre texte.**

Le contenu textuel ci-dessous est FINAL et VALIDE juridiquement/comptablement. Chaque mot, chaque chiffre, chaque symbole € doit apparaitre a l'identique dans le rendu final.

Tu es un **designer graphique**, pas un redacteur. Ton role :
- Appliquer tes composants visuels (SectionHeader, KpiCard, DataTable, Badge, Timeline, QuoteBlock, GrainOverlay, charts)
- Mettre en page avec ta palette V3 (theme.css)
- Creer les graphiques (Recharts) avec les donnees exactes fournies
- Produire un rendu premium digne d'un dossier investisseur

Tu ne changes **RIEN** au texte. Pas un mot. Pas un chiffre. Pas une virgule.

---

## FORMAT DE SORTIE

Genere **un seul fichier HTML** autonome (CSS inline ou `<style>` embarque) pret a etre converti en PDF. Pas de React, pas de framework — du HTML/CSS pur avec des SVG inline pour les graphiques si necessaire.

Dimensions : A4 portrait (210mm x 297mm), marges 20mm, fond #0d0d12.

---

## DESIGN SYSTEM A APPLIQUER

Utilise les elements que tu as deja concu dans ton design system :

### Palette V3 "Cirque Delave"
| Token | Hex | Usage |
|-------|-----|-------|
| fond | #0d0d12 | Background global |
| fond-chaud | #1a1610 | Cover, sections narratives |
| rouge | #c43030 | Titres, CTA, "KILLER" |
| bleu-acier | #3a6080 | Elements secondaires froids |
| laiton | #b89040 | Accents, prix, coins, prestige |
| violet | #6a3a7a | XP, progression, gamification |
| creme | #d8ccb4 | Texte principal (ratio 10.6:1) |
| creme-chaud | #e8dcc0 | Texte cover |
| bordeaux | #7a2830 | Accents sombres |
| gris | #6a6a70 | Texte decoratif/large uniquement |
| surface | #16161e | Cards background |
| surface-raised | #1e1e28 | Cards elevees |
| border | #2a2a35 | Bordures |

### Typographie
- Display : Bodoni Moda, weight 900 (logo, cover)
- Headings : Oswald, uppercase, letter-spacing 0.05em
- Body : DM Sans, 16px base, line-height 1.6
- Mono : Share Tech Mono (chiffres, KPI)
- Quote : Crimson Text, italic

### Composants visuels a utiliser
- **SectionHeader** : numero + titre + sous-titre avec ligne decorative
- **KpiCard** : valeur en Share Tech Mono 40px laiton + label + sous-label
- **DataTable** : headers laiton uppercase, lignes alternees
- **Badge** : laiton/rouge/bleu/violet selon contexte
- **Timeline** : ligne verticale + points laiton + dates
- **QuoteBlock** : Crimson Text italic, bordure gauche laiton
- **Card** : surface background, border subtle, padding 24px
- **Card Prestige** : border laiton + glow subtil + badge "POPULAIRE"
- **GrainOverlay** : texture grain subtile sur la cover
- **Bar Chart** : barres verticales laiton sur fond surface
- **Donut Chart** : pour la repartition du financement
- **Progress Bar** : gradient laiton → creme-chaud pour le break-even

---

## CONTENU EXACT — SECTION PAR SECTION

Reproduis chaque section ci-dessous **mot pour mot, chiffre pour chiffre**.

---

### PAGE DE COUVERTURE

**Logo :** CACHE CACHE (Bodoni Moda 900, creme-chaud)
**Sous-logo :** KILLER (rouge #c43030, style scratch/cursif)
**Tagline :** Survival Grandeur Nature — Le Cirque que le Temps a Oublie
**Citation :** « Bienvenue au plus grand spectacle de votre vie… et peut-etre le dernier. »
**Meta :** Business Plan V3 • Fevrier 2026 • Confidentiel
**Pied de page :** SAS Cache Cache Killer • Capital 21 000 € • Essonne (91)

**Design :** Fond chaud #1a1610, grain overlay, atmosphere theatrale sombre.

---

### SOMMAIRE

| # | Titre | Page |
|---|-------|------|
| 01 | Executive Summary | 03 |
| 02 | Le Concept — Le Cirque Delave | 05 |
| 03 | Analyse de Marche | 08 |
| 04 | Modele Economique & Tarification | 11 |
| 05 | Economie CCK Coins — Gamification | 15 |
| 06 | Offres B2B — Privatisations | 19 |
| 07 | Equipe Fondatrice | 21 |
| 08 | Implantation & Capacite | 23 |
| 09 | Plan Financier Previsionnel | 25 |
| 10 | Plan de Financement | 30 |
| 11 | Strategie Marketing & Lancement | 33 |
| 12 | Roadmap & Calendrier | 36 |
| 13 | Stack Technique & Innovation | 38 |
| 14 | Conformite Legale & Fiscale | 40 |
| 15 | Indicateurs Cles & Objectifs | 42 |
| 16 | Annexes | 44 |

---

### SECTION 01 — Executive Summary

**Numero :** 01
**Titre :** Executive Summary
**Sous-titre :** Le premier jeu de survie grandeur nature en France, a la croisee du jeu video, du theatre immersif et du divertissement physique.

**KPI Row (4 cards) :**

| Valeur | Label | Sous-label |
|--------|-------|------------|
| 770M€ | Marche cible FR | Divertissement immersif |
| 464K€ | CA Annee 2 | Scenario reference |
| 30% | Marge nette | Annee 3 (maturite) |
| 227K€ | Financement total | Equity + dette + grants |

**Citation (QuoteBlock) :**
> Cache Cache Killer transforme le cache-cache en spectacle immersif. 2 a 10 joueurs s'affrontent dans un cirque abandonne pendant 20 minutes. Survivants contre Killers. Pas de regles complexes, pas de condition physique requise — juste l'instinct de survie.

**Card — "Le probleme" :**
Le segment 18-35 ans est sous-exploite en divertissement physique hors sport. Les escape games stagnent (900 salles, faible differenciation). Le laser game n'a pas innove depuis 20 ans. **60% des joueurs** recherchent des concepts hybrides.

**Card — "La solution" :**
Un format inedit : **20 min, asymetrique, theatral**. Le Killer est un Maitre de Ceremonie, pas un monstre. L'experience combine la tension du jeu video (Dead by Daylight), l'immersion du theatre et l'adrenaline du jeu physique. **Rejouabilite infinie** grace a la gamification (XP + Coins + Badges).

---

### SECTION 02 — Le Concept — Le Cirque Delave

**Numero :** 02
**Titre :** Le Concept — Le Cirque Delave
**Sous-titre :** Un cirque ambulant que le temps a oublie. Les lumieres vacillent, les rires se melent aux cris, et le spectacle ne s'arrete jamais.

**Texte Game Design :**
Sessions de **20 minutes**, nouvelle session toutes les 10 minutes. Jusqu'a **60 joueurs/heure**.

**Roles :**
- Badge BLEU — **Survivants** : 2-8 joueurs — Activent des generateurs pour ouvrir la sortie
- Badge ROUGE — **Killers** : 1-2 joueurs — Chassent avec lampe infrarouge

**Tableau — Arc Emotionnel :**

| Phase | Duree | Emotion |
|-------|-------|---------|
| Phase 1 — Preparation | 14-20 min | Exploration, tension croissante |
| Phase 2 — Extraction | Temps restant | PANIQUE TOTALE |

**Tableau — Equilibrage Dynamique :**

| Joueurs | Killers | Survivants | Mode |
|---------|---------|------------|------|
| 2-3 | 1 | 1-2 | Duel |
| 4-5 | 1 | 3-4 | 1 vs Many |
| 6-7 | 1 | 5-6 | Standard |
| 8-9 | 1-2 | 6-8 | Dual Killer |
| 10 | 2 | 8 | Dual Killer |

**Card — Briefing 3 Couches :**
- Badge 1 : **Pre-briefing passif** — Video 90s en attente, 4 regles fondamentales
- Badge 2 : **Briefing actif** — 90s theatrale, demo IR, mystere preserve
- Badge 3 : **Tuto integre** — 90s premiers pas in-game, apprentissage par l'action

---

### SECTION 03 — Analyse de Marche

**Numero :** 03
**Titre :** Analyse de Marche
**Sous-titre :** Un marche de 770M€ en croissance de 10-12%/an, avec une niche vierge a l'intersection de trois industries.

**3 Cards Marche :**

| Valeur | Titre | Description |
|--------|-------|-------------|
| 220M€ | Escape Games | 900 salles en France. 70% de taux de survie a 2 ans. Marche en cours de consolidation. |
| 550M€ | Laser Game | 65-70% de taux d'occupation. Format inchange depuis 20 ans. Innovation quasi nulle. |
| Vierge | Survival IRL | Aucun acteur positionne sur le croisement jeu video asymetrique + theatre immersif + jeu physique. |

**Tableau — Positionnement Concurrentiel :**

| Critere | Escape Game | Laser Game | Cache Cache Killer |
|---------|-------------|------------|--------------------|
| Duree session | 60 min | 15-20 min | 20 min |
| Joueurs/session | 2-6 | 10-40 | 2-10 |
| Rejouabilite | Faible (1x/scenario) | Moyenne | Elevee (XP + progression) |
| Immersion narrative | Forte | Quasi nulle | Tres forte (univers theatral) |
| Asymetrie | Non | Non | Oui (Killers vs Survivants) |
| Gamification digitale | Non | Basique | Complete (XP, Coins, Badges, Classement) |
| Prix moyen | 25-35€ | 10-15€ | 18€ (12€ off-peak) |
| Panier moyen | 25-35€ | 10-15€ | 30,60€ TTC |

**KPI Row (4 cards) :**

| Valeur | Label | Sous-label |
|--------|-------|------------|
| 60% | Joueurs FR | Preferent concepts hybrides |
| 18-35 | Coeur de cible | Segment sous-exploite |
| 10-12% | Croissance/an | Marche immersif FR |
| 8.5/10 | Intention retour | Playtests beta |

---

### SECTION 04 — Modele Economique & Tarification

**Numero :** 04
**Titre :** Modele Economique & Tarification
**Sous-titre :** Un modele a double flux : billetterie par session + prepaid CCK Coins pour les habitues.

**Tableau — Tarification Sessions :**

| Creneau | Prix TTC | Prix HT | TVA | Jours |
|---------|----------|---------|-----|-------|
| Plein tarif | 18,00 € | 16,36 € | 10% | Mercredi → Dimanche |
| Tarif creux | 12,00 € | 10,91 € | 10% | Lundi & Mardi |

**Tableau — Decomposition du Panier Moyen :**

| Composante | % clients | Prix HT | Contribution |
|-----------|-----------|---------|--------------|
| 1 partie (WE) | 29% | 15,00 € | 4,35 € |
| 2 parties (WE) | 63% | 29,17 € | 18,38 € |
| 1 partie (creux) | 3% | 12,50 € | 0,38 € |
| 2 parties (creux) | 5% | 20,83 € | 1,04 € |
| Boissons | 35% | 2,50 € | 0,88 € |
| **Panier moyen HT** | | | **25,50 €** |

**KPI Card — Panier Moyen TTC :**
- Valeur : **30,60€**
- Label : Panier moyen TTC
- Sous-label : +15,3% vs V2 (22,11€ → 25,50€ HT)
- Detail : Marge brute : ~96%

**Tableau — Regime TVA :**

| Activite | Taux TVA | Base legale | Compte PCG |
|---------|----------|-------------|------------|
| Billetterie (sessions jeu) | 10% | Art. 279 b nonies CGI | 706000 |
| Bar & consommations | 20% | Taux normal | 707100 |
| Merchandising | 20% | Taux normal | 707200 |
| Achat CCK Coins | Non soumis | PCA — pas de CA a l'achat | 487100 |

---

### SECTION 05 — Economie CCK Coins

**Numero :** 05
**Titre :** Economie CCK Coins
**Sous-titre :** Double monnaie : XP (progression pure, jamais achetable) et CCK Coins (monnaie prepayee + recompenses).

**Card violet — XP — Experience :**
Gagnee uniquement en jouant. Niveaux 1→10. Debloque titres, badges, sons custom. **Jamais achetable.**
50-150 XP par partie selon la performance.

**Card laiton — COINS — Monnaie CCK :**
Achetable en packs OU gagnee via progression. Depensee pour parties, consommations, goodies. **Comptabilite PCA.**
~248 coins gratuits sur le parcours L1→L10 (~40 parties).

**Grille 4 colonnes — Packs d'achat CCK Coins :**

**Pack 1 — Encore** (Badge Flash)
- 110 Coins — 15,00 €
- Post-game uniquement. Fenetre 30 min, 1x/visite. Impulse buy.
- 0,136 €/coin

**Pack 2 — Le Billet**
- 265 Coins — 35,00 €
- 2 parties + 2 cannettes + 1 snack
- 0,132 €/coin

**Pack 3 — Le Spectacle** (Card Prestige + Badge POPULAIRE)
- 560 Coins — 70,00 €
- 5 parties + 3 cannettes + 1 snack
- 0,125 €/coin

**Pack 4 — Le Ringmaster**
- 1 100 Coins — 130,00 €
- 10 parties + 3 combos + 1 goodie exclusif
- 0,118 €/coin

**Tableau — Depense des Coins :**

| Article | Coins | Equiv. EUR (Billet) | Equiv. EUR (Ringmaster) |
|---------|-------|---------------------|-------------------------|
| Boisson / jus / eau | 15 | 2,04 € | 1,77 € |
| Snack | 15 | 2,04 € | 1,77 € |
| Combo (boisson + snack) | 25 | 3,40 € | 2,95 € |
| Partie supplementaire | 100 | 13,60 € | 11,80 € |
| Goodie petit (sticker) | 25 | 3,40 € | 2,95 € |
| Goodie moyen (t-shirt) | 180 | 24,48 € | 21,24 € |
| Goodie premium (masque) | 350 | 47,60 € | 41,30 € |

**Tableau — Parcours Joueur Type :**

| Profil | Parties/mois | Coins gratuits | Pack achete | Depense/mois |
|--------|-------------|----------------|-------------|-------------|
| Curieux | 1 | ~20 | Encore (15€) | 33 € |
| Regulier | 3-4 | ~60-70 | Billet (35€) | 35-53 € |
| Fidele | 5-8 | ~100-120 | Spectacle (70€) | 70-88 € |
| Hardcore | 8+ | ~140+ | Ringmaster (130€) | 130-148 € |

---

### SECTION 06 — Offres B2B — Privatisations

**Numero :** 06
**Titre :** Offres B2B — Privatisations
**Sous-titre :** 10-20% du CA cible. Team building, EVJF, anniversaires, evenements corporate.

**Card 1 — Team Building** (Badge Corporate)
A partir de : **400€+**
- 10-30 personnes
- 2 heures privatisees
- Configuration equipes sur-mesure
- Scoreboard inter-equipes live
- Recap PDF pour les RH

**Card 2 — Anniversaire / EVJF / EVG** (Badge Evenement)
A partir de : **250€+**
- 8-20 personnes
- 1h30 privatisee
- Option "VIP Killer" (+30-50€)
- Decoration possible
- Package photo/video

**Card 3 — Evenement Sur-Mesure** (Badge Premium)
Prix : **Devis — Sur demande**
- Taille groupe libre
- Maitre de Ceremonie dedie
- Scenarisation custom
- Options premium illimitees
- Facturation B2B avec TVA

---

### SECTION 07 — Equipe Fondatrice

**Numero :** 07
**Titre :** Equipe Fondatrice
**Sous-titre :** Trois cofondateurs complementaires : creation, operations, strategie.

**Card — Olivier Giupponi** (Badge Creation)
Role : President & Directeur Creatif
Bio : Game designer (ENJMIN + Gobelins). A dirige Blind Bend Studio : 30+ dispositifs electroniques interactifs pour Aventure Fantastique.
Skills : Game design • Electronique embarquee • MQTT • Unity • C++

**Card — Mathieu Sardin** (Badge Operations)
Role : Directeur General
Bio : Manager artisan specialise ERP. Chef de projet structures ludiques. Experience terrain en coordination de chantier et logistique indoor.
Skills : Coordination site • Reglementation ERP • Logistique indoor

**Card — Yannick Giupponi** (Badge Strategie)
Role : Directeur Financier & Strategique
Bio : Consultant en strategie d'entreprise. Specialiste levee de fonds startup et pilotage financier. Modelisation, fundraising, droit des societes.
Skills : Modelisation financiere • Fundraising • Droit des societes

**Card — Structure Juridique**
Forme : SAS — Societe par Actions Simplifiee
Capital : 21 000 €
Details : 2 100 actions • 33,33% chacun

---

### SECTION 08 — Implantation & Capacite

**Numero :** 08
**Titre :** Implantation & Capacite
**Sous-titre :** Essonne (91), Ile-de-France. Un site de 650 m² calibre pour 60 joueurs/heure.

**Tableau — Repartition des Espaces :**

| Zone | Surface | Fonction |
|------|---------|----------|
| Zone de jeu | ~500 m² | Labyrinthe semi-industriel, scenographie |
| Lobby / Bar | ~100 m² | Accueil, billetterie, rafraichissements |
| Technique / Admin | ~50 m² | Serveurs MQTT, equipements, bureau |
| **Total** | **~650 m²** | Hauteur sous plafond : 4m |

**Criteres de Selection :**
- Zone commerciale forte + acces transports
- Conformite ERP (Etablissement Recevant du Public)
- Parking + visibilite facade
- Budget loyer : 10 000 €/mois HT (V3)

**KPI Row — Capacite Operationnelle (4 cards) :**

| Valeur | Label |
|--------|-------|
| 42h | Ouverture/semaine |
| 168 | Sessions/semaine |
| 672 | Sessions/mois |
| 6 720 | Joueurs max/mois |

**Tableau — Horaires d'Ouverture :**

| Jour | Heures | Creneaux |
|------|--------|----------|
| Lundi | 4h | Creux |
| Mardi | 4h | Creux |
| Mercredi | 8h | Plein tarif |
| Jeudi | 4h | Creux |
| Vendredi | 8h | Plein tarif |
| Samedi | **14h** | **Prime time** |
| Dimanche | **14h** | **Prime time** |

---

### SECTION 09 — Plan Financier Previsionnel

**Numero :** 09
**Titre :** Plan Financier Previsionnel
**Sous-titre :** Seuil de rentabilite a 315K€/an (60% d'occupation). Marge nette de 30% a maturite.

**Tableau — Projection 4 Ans — Scenario Reference :**

| Indicateur | 2026 (4 mois) | 2027 | 2028 | 2029 |
|------------|---------------|------|------|------|
| Chiffre d'affaires | ~90K € | 464K € | **642K €** | **642K €** |
| Resultat net | -21K € | +92K € | **+191K €** | **+191K €** |
| Marge nette | N/A | 20% | **30%** | **30%** |
| EBITDA | — | — | — | 279K € (43%) |
| Occupation | 30-40% | 50-60% | 60% | 60% |
| Effectif | 3-4 | 6-7 | 8-9 | 9-10 |

**GRAPHIQUE — Bar Chart "Evolution du Chiffre d'Affaires" :**
Barres verticales laiton (#b89040) sur fond surface (#16161e).
- Barre 1 : 2026 (4 mois) = 90K €
- Barre 2 : 2027 = 464K €
- Barre 3 : 2028 = 642K €
- Barre 4 : 2029 = 642K €
Axe Y : 0 → 700K €. Labels au-dessus de chaque barre.

**Tableau — 3 Scenarios :**

| Scenario | Occupation Y3 | CA Y3 | Resultat Y3 | ROE |
|---------|---------------|-------|------------|-----|
| Prudent | 40% | ~428K € | ~75K € | 25% |
| Reference | 60% | 642K € | 191K € | **35%** |
| Optimiste | 80% | ~856K € | ~310K € | **42%** |

**Card — Seuil de Rentabilite :**
- Break-even annuel : **315K €**
- Detail : ~60% d'occupation sur 12 mois
- Marge brute : **~96%**
- Detail : Cout marginal quasi nul

**GRAPHIQUE — Progress Bar Break-Even :**
Barre horizontale avec gradient laiton → creme-chaud.
Marqueurs : 0 € → 315K € (seuil) → 464K € (CA reel).
Label : Progression vers le seuil (Annee 2).

---

### SECTION 10 — Plan de Financement

**Numero :** 10
**Titre :** Plan de Financement
**Sous-titre :** 227K€ repartis entre equity, dette et aides. Investissement initial de 150K€ TTC.

**Tableau — Sources de Financement :**

| Source | Montant | Type |
|--------|---------|------|
| Apport fondateurs | 31K € | Equity |
| Investisseurs externes | 100K € | Equity |
| Pret bancaire | 60K € | Dette |
| Crowdfunding (Ulule) | 6K € | Crowd |
| Aides a l'entrepreneuriat | 30K € | Grant |
| **Total** | **227K €** | |

**GRAPHIQUE — Donut Chart "Repartition du Financement" :**
Segments colores :
- Equity (fondateurs + investisseurs) : 131K € = 57,7% → laiton #b89040
- Dette (pret bancaire) : 60K € = 26,4% → bleu-acier #3a6080
- Crowd (Ulule) : 6K € = 2,6% → violet #6a3a7a
- Grants (aides) : 30K € = 13,2% → bordeaux #7a2830
Centre du donut : "227K €"

**Tableau — Emploi des Fonds (150K€ TTC) :**

| Poste | TTC | Amort. |
|-------|-----|--------|
| Renovation du site | 70K € | 10 ans |
| Scenographie & decors | 25K € | 5 ans |
| Equipement technique | 10K € | 5 ans |
| Equipement de jeu | 3K € | 3 ans |
| Mobilier & lobby | 25K € | 5 ans |
| Securite & conformite | 10K € | 5 ans |
| Divers & imprevus | 7K € | 5 ans |
| **Total investissement** | **150K €** | |

**Tableau — Charges Fixes Mensuelles :**

| Poste | Mensuel HT | Annuel HT |
|-------|------------|-----------|
| Loyer | 10 000 € | 120 000 € |
| Salaires (par employe) | 2 169 € | x effectif |
| Marketing & Google Ads | 3 417 € | 41 000 € |
| Electricite | 1 250 € | 15 000 € |
| Assurance | 417 € | 5 000 € |
| Securite + Nettoyage | 834 € | 10 000 € |
| Admin + Banque + Telecom | 609 € | 7 300 € |
| Infra digitale | ~400 € | ~5 000 € |

---

### SECTION 11 — Strategie Marketing & Lancement

**Numero :** 11
**Titre :** Strategie Marketing & Lancement
**Sous-titre :** Pre-lancement communautaire + lancement evenementiel + croissance UGC.

**Tableau — Budget Pre-Lancement :**

| Poste | Budget |
|-------|--------|
| Trailer studio | 3 000 € |
| Site web | 4 500 € |
| Publicite digitale (3 mois) | 3 000 € |
| Visibilite locale | 2 500 € |
| Soiree de lancement | 2 000 € |
| Post-lancement | 3 000 € |
| Reserve goodies | 2 000 € |
| **Total pre-lancement** | **20 000 €** |

**Tableau — Budget Mensuel Post-Lancement :**

| Poste | Mensuel |
|-------|---------|
| Social media management | 1 000 € |
| SEO & contenu | 1 200 € |
| UGC & publicites | 800 € |
| Visibilite locale | 600 € |
| Support digital | 500 € |
| **Total mensuel** | **4 100 €** |

**KPI Row — KPIs Pre-Lancement (3 cards) :**

| Valeur | Label | Sous-label |
|--------|-------|------------|
| 10K | Followers sociaux | Instagram + TikTok + Facebook |
| 5K | Partages contenu | Viralite organique |
| 2K | Commentaires engages | Communaute active |

---

### SECTION 12 — Roadmap & Calendrier

**Numero :** 12
**Titre :** Roadmap & Calendrier
**Sous-titre :** Du business plan a l'ouverture : 8 mois. Du site 1 au reseau : 3-5 ans.

**Timeline (6 phases) — composant Timeline vertical avec points laiton :**

**Phase 1 — Preparation** (Fevrier → Mars 2026)
Finalisation BP, creation SAS, montage financier, campagne Ulule #1, playtests VIP + capture video.

**Phase 2 — Construction** (Mars → Septembre 2026)
Renovation du site (gros oeuvre, electricite, ventilation), fabrication des dispositifs electroniques, installation & calibration, recrutement staff.

**Phase 3 — Pre-Lancement** (Ete 2026)
Beta Test #1 (grandeur nature + influenceurs), campagne marketing, capture contenu (trailer, photos presse, teasers), Beta Test #2 (1 mois avant, rotation complete).

**Phase 4 — Grand Opening** (Octobre 2026)
Ouverture publique. Evenement inaugural. Objectif : etre pret AVANT Halloween (pic commercial). Activations influenceurs escape game (The Escapers, EscapeGame.fr).

**Phase 5 — Croissance** (2027 → 2028)
Montee en charge 50% → 60% occupation. Enrichissement des scenarios. Lancement des privatisations B2B. Optimisation du modele Coins.

**Phase 6 — Expansion** (2029+)
Ouverture site #2 (Lyon, Lille ou Marseille). Pilote franchise. Objectif long terme : reseau de 5-10 sites a horizon 2035.

---

### SECTION 13 — Stack Technique & Innovation

**Numero :** 13
**Titre :** Stack Technique & Innovation
**Sous-titre :** Architecture digitale complete : site vitrine, PWA joueur, CRM interne, IoT temps reel.

**Tableau — Stack Technique :**

| Couche | Technologie | Role |
|--------|------------|------|
| Frontend | Next.js 15 + React + TypeScript | 3 apps : Site, Player PWA, CRM |
| Styles | Tailwind CSS v4 + Design Tokens | Palette V3 Cirque Delave |
| Backend / DB | Supabase (PostgreSQL) | RLS, Edge Functions, Realtime |
| Auth | Supabase Auth | JWT + RLS par role (6 roles) |
| Paiement | Stripe | Checkout, webhooks idempotents, PCA |
| IoT / Jeu | MQTT + Edge Functions | 30+ dispositifs interactifs temps reel |
| Deploiement | Vercel (CDG1 Paris) | EU-first, ISR, Edge Middleware |
| Mobile | PWA (Phase 1) → Capacitor (Phase 2) | Profil joueur, coins, badges, stats |
| Email | Brevo (FR) | Transactionnel EU-only, RGPD natif |
| Analytics | Plausible | Cookie-free, CNIL-exempt |
| Monitoring | Sentry | Error tracking, Web Vitals |

**Card — Couts Digitaux Annuels :**
Description : Supabase Pro + Vercel + Stripe + App Stores + Domaines + Monitoring
Valeur : **3 774 — 5 464 €/an**
Sous-label : 314 — 455 €/mois

---

### SECTION 14 — Conformite Legale & Fiscale

**Numero :** 14
**Titre :** Conformite Legale & Fiscale
**Sous-titre :** SAS, TVA differenciee, comptabilite PCA, RGPD, FEC A47 A-1.

**Card — Comptabilite CCK Coins (PCA) :**
Les CCK Coins ne sont **pas du chiffre d'affaires a l'achat**. Ils sont enregistres en **Produits Constates d'Avance** (passif).

**Tableau — Double-Entry Accounting :**

| Evenement | Debit | Credit |
|-----------|-------|--------|
| Achat Coins | 411000 (Clients) | 487100 (PCA) |
| Depense Coins | 487100 (PCA) | 706000 (Prestations) |

**Note :** Double-entry systematique : sum(debit) = sum(credit). Trigger SQL bloquant. FEC conforme A47 A-1 (18 colonnes, tab-separated, UTF-8).

**Liste — Conformite RGPD :**
- **Analytics** : Plausible (cookie-free, CNIL-exempt)
- **Email** : Brevo (serveurs FR, DPA signe)
- **Hebergement** : Vercel CDG1 + Supabase eu-west-3 Paris
- **Export donnees** : endpoint Art. 20 (1 clic)
- **Suppression** : anonymisation + conservation comptable legale
- **Sous-traitants** : DPA obligatoire avant utilisation

**Liste — Obligations ERP :**
- Etablissement Recevant du Public (categorie 5)
- Commission de securite avant ouverture
- Assurance RC pro + dommages ouvrage
- Registre de securite tenu a jour

---

### SECTION 15 — Indicateurs Cles & Objectifs

**Numero :** 15
**Titre :** Indicateurs Cles & Objectifs
**Sous-titre :** Objectifs mesurables par phase de developpement.

**KPI Row — Annee 1 — Objectifs de Lancement (4 cards) :**

| Valeur | Label | Sous-label |
|--------|-------|------------|
| 315K€ | CA break-even | 60% occupation |
| 4.8/5 | Note fun | Playtests beta |
| 8.5/10 | Intention retour | Enquete joueurs |
| 16-17€ | Prix acceptable | Etude marche |

**KPI Row — Annee 3 — Objectifs de Maturite (4 cards) :**

| Valeur | Label |
|--------|-------|
| 642K€ | CA annuel |
| 30% | Marge nette |
| 43% | EBITDA / CA |
| 35% | ROE |

**Card — Vision Long Terme (3 colonnes) :**

| Annee | Jalon |
|-------|-------|
| 2029 | Site #2 ouverture |
| 2031 | Pilote franchise |
| 2035 | Reseau 5-10 sites |

---

### PAGE DE CLOTURE

**Logo (display) :** CACHE CACHE KILLER
**Citation (serif-quote) :** « Le plus grand spectacle de votre vie. »
**Contact :**
- contact@cachecachekiller.fr • cachecachekiller.fr
- SAS au capital de 21 000 € • Essonne (91)
- Document confidentiel — Fevrier 2026

---

## RAPPEL FINAL

1. **ZERO modification de texte** — Chaque mot ci-dessus est sacre
2. **Graphiques avec les donnees exactes** — Bar chart CA, Donut financement, Progress break-even
3. **Composants visuels premium** — KpiCard, DataTable, Badge, Timeline, QuoteBlock, Card Prestige
4. **Palette V3 stricte** — Aucune couleur hors palette
5. **Format A4 HTML autonome** — Pret pour export PDF
6. **Atmosphere theatrale** — Le document doit respirer l'univers du Cirque Delave

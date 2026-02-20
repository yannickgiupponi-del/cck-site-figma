import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AtmosphericSection,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@cck/ui'

/** ISR: revalidate every hour (pricing can change moderately often) */
export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Tarifs',
  description:
    'Tarifs Cache Cache Killer : 18\u20ac par personne (mercredi-dimanche), 12\u20ac en heures creuses (lundi-mardi). Privatisations d\u00e8s 250\u20ac.',
  alternates: { canonical: 'https://cachecachekiller.fr/tarifs' },
}

/* ============================================
   INLINE SVG ICONS
   ============================================ */

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-feedback-success-text"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function InfoIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 shrink-0 text-feedback-info-text"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function QuestionIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-gold-500)]"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v.5a.75.75 0 01-1.5 0v-.5A.75.75 0 0110 5zm0 10a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75z"
        clipRule="evenodd"
      />
    </svg>
  )
}

/* ============================================
   PRIVATISATION DATA
   ============================================ */

const PRIVATISATIONS = [
  {
    id: 'team-building',
    title: 'Team Building',
    capacity: '10\u201330 personnes',
    duration: '2h',
    price: '\u00c0 partir de 400\u20ac',
    description: 'Renforcez la coh\u00e9sion de vos \u00e9quipes dans l\u2019ar\u00e8ne.',
  },
  {
    id: 'anniversaire',
    title: 'Anniversaire / EVG / EVJF',
    capacity: '8\u201320 personnes',
    duration: '1h30',
    price: '\u00c0 partir de 250\u20ac',
    description: 'Une f\u00eate dont ils se souviendront.',
  },
  {
    id: 'sur-mesure',
    title: 'Sur Mesure',
    capacity: 'Variable',
    duration: 'Variable',
    price: 'Sur devis',
    description: 'Votre \u00e9v\u00e9nement, nos r\u00e8gles. Contactez-nous.',
  },
] as const

/* ============================================
   FAQ DATA
   ============================================ */

const FAQ_ITEMS = [
  {
    question: 'Des frais cach\u00e9s ?',
    answer: 'Non. Le prix affich\u00e9 est le prix final.',
  },
  {
    question: 'On peut venir en groupe ?',
    answer: 'Oui ! Un chef de groupe r\u00e9serve et partage le lien. Chaque joueur paye sa place.',
  },
  {
    question: 'On choisit son camp quand ?',
    answer: 'Le choix du camp (Survivant ou Tueur) se fait sur place, premier arriv\u00e9, premier servi.',
  },
] as const

/* ============================================
   PAGE COMPONENT
   ============================================ */

export default function TarifsPage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="flex flex-col items-center gap-4 px-4 py-16 text-center sm:py-20">
        <h1 className="font-display text-4xl font-black uppercase tracking-wider text-text-primary sm:text-5xl md:text-6xl">
          Tarifs
        </h1>
        <p className="max-w-xl font-serif text-lg italic text-text-secondary">
          Simple, transparent, sans surprise.
        </p>
      </section>

      {/* ============================================
          MAIN PRICING
          ============================================ */}
      <AtmosphericSection subtitle="NOS FORMULES" separator stripes id="formules">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {/* Session Standard */}
            <Card variant="prestige" className="flex flex-col">
              <CardHeader>
                <span className="text-xs font-heading uppercase tracking-wider text-[var(--color-gold-500)]">
                  Mercredi au dimanche
                </span>
                <CardTitle>Session Standard</CardTitle>
              </CardHeader>
              <CardContent className="mt-4 flex flex-1 flex-col gap-4">
                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-5xl font-black text-[var(--color-gold-500)]">
                    18&euro;
                  </span>
                  <span className="text-sm text-text-secondary">/ personne</span>
                </div>

                {/* Features — Rule 9: icon + text */}
                <ul className="flex flex-col gap-2" role="list">
                  <li className="flex items-center gap-2 text-sm text-text-primary">
                    <CheckIcon />
                    20 minutes de jeu intense
                  </li>
                  <li className="flex items-center gap-2 text-sm text-text-primary">
                    <CheckIcon />
                    2 &agrave; 10 joueurs par session
                  </li>
                  <li className="flex items-center gap-2 text-sm text-text-primary">
                    <CheckIcon />
                    Briefing + d&eacute;briefing inclus
                  </li>
                  <li className="flex items-center gap-2 text-sm text-text-primary">
                    <CheckIcon />
                    &Eacute;quipement fourni
                  </li>
                </ul>

                {/* CTA — Rule 3: 1 primary CTA */}
                <div className="mt-auto pt-4">
                  <Link href="/reserver" className="block">
                    <Button variant="primary" size="lg" className="w-full">
                      R&Eacute;SERVER
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Heures Creuses */}
            <Card variant="default" className="flex flex-col">
              <CardHeader>
                <span className="text-xs font-heading uppercase tracking-wider text-text-secondary">
                  Lundi et mardi (hors vacances scolaires)
                </span>
                <CardTitle>Heures Creuses</CardTitle>
              </CardHeader>
              <CardContent className="mt-4 flex flex-1 flex-col gap-4">
                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-5xl font-black text-text-primary">
                    12&euro;
                  </span>
                  <span className="text-sm text-text-secondary">/ personne</span>
                </div>

                {/* Features — Rule 9: icon + text */}
                <ul className="flex flex-col gap-2" role="list">
                  <li className="flex items-center gap-2 text-sm text-text-primary">
                    <CheckIcon />
                    M&ecirc;me exp&eacute;rience, prix r&eacute;duit
                  </li>
                  <li className="flex items-center gap-2 text-sm text-text-primary">
                    <CheckIcon />
                    20 minutes de jeu intense
                  </li>
                  <li className="flex items-center gap-2 text-sm text-text-primary">
                    <CheckIcon />
                    2 &agrave; 10 joueurs par session
                  </li>
                  <li className="flex items-center gap-2 text-sm text-text-primary">
                    <CheckIcon />
                    &Eacute;quipement fourni
                  </li>
                </ul>

                {/* CTA — secondary (outlined) */}
                <div className="mt-auto pt-4">
                  <Link href="/reserver" className="block">
                    <Button variant="secondary" size="lg" className="w-full">
                      R&Eacute;SERVER
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Note */}
          <div className="mt-8 flex items-start gap-3 rounded-lg border border-border-subtle bg-surface-raised p-4">
            <InfoIcon />
            <p className="text-sm text-text-primary">
              <strong>Camp choisi sur place</strong> &mdash; premier arriv&eacute;, premier servi.
              Aucune s&eacute;lection de camp lors de la r&eacute;servation.
            </p>
          </div>
        </div>
      </AtmosphericSection>

      {/* ============================================
          PRIVATISATIONS
          ============================================ */}
      <AtmosphericSection
        subtitle="&Eacute;V&Eacute;NEMENTS PRIV&Eacute;S"
        separator
        stripes
        id="privatisations"
        className="bg-[var(--color-surface-recessed)]"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            Privatisations
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRIVATISATIONS.map((item) => (
              <Card key={item.id} variant="default" className="flex flex-col">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="mt-2 flex flex-1 flex-col gap-3">
                  <dl className="flex flex-col gap-1 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-text-secondary">Capacit&eacute;</dt>
                      <dd className="font-medium text-text-primary">{item.capacity}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-text-secondary">Dur&eacute;e</dt>
                      <dd className="font-medium text-text-primary">{item.duration}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-text-secondary">Tarif</dt>
                      <dd className="font-medium text-[var(--color-gold-500)]">{item.price}</dd>
                    </div>
                  </dl>
                  <p className="text-sm text-text-secondary">{item.description}</p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Link href="/contact" className="block w-full">
                    <Button variant="secondary" size="lg" className="w-full">
                      NOUS CONTACTER
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </AtmosphericSection>

      {/* ============================================
          FAQ
          ============================================ */}
      <AtmosphericSection subtitle="QUESTIONS FR&Eacute;QUENTES" separator id="faq">
        <div className="mx-auto max-w-2xl space-y-6">
          {FAQ_ITEMS.map((item) => (
            <div
              key={item.question}
              className="flex items-start gap-3 rounded-lg border border-border-subtle bg-surface-raised p-4"
            >
              <QuestionIcon />
              <div>
                <p className="font-heading font-medium text-text-primary">
                  {item.question}
                </p>
                <p className="mt-1 text-sm text-text-secondary">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </AtmosphericSection>

      {/* ============================================
          CTA — Rule 3: 1 seul CTA primaire visible
          ============================================ */}
      <AtmosphericSection separator className="bg-[var(--color-surface-recessed)]">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            L&apos;ar&egrave;ne vous attend
          </h2>
          <Link href="/reserver">
            <Button variant="primary" size="lg">
              R&Eacute;SERVER UNE SESSION
            </Button>
          </Link>
        </div>
      </AtmosphericSection>
    </main>
  )
}

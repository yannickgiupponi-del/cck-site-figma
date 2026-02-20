import type { Metadata } from 'next'
import { AtmosphericSection, Card, CardContent } from '@cck/ui'
import { EmailSignupForm } from './EmailSignupForm'

export const metadata: Metadata = {
  title: 'R\u00e9server',
  description:
    'R\u00e9servez votre session Cache Cache Killer. Cr\u00e9neaux de 20 minutes, 2 \u00e0 10 joueurs, \u00e0 partir de 12\u20ac.',
  alternates: { canonical: 'https://cachecachekiller.fr/reserver' },
}

/* ============================================
   INLINE SVG ICONS
   ============================================ */

function CalendarIcon() {
  return (
    <svg className="h-8 w-8 text-[var(--color-gold-500)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 2v4M16 2v4" />
      <rect x="7" y="14" width="3" height="3" rx="0.5" className="fill-[var(--color-gold-500)]/20" />
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg className="h-8 w-8 text-[var(--color-gold-500)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <circle cx="9" cy="7" r="4" />
      <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
      <circle cx="17" cy="7" r="3" className="stroke-[var(--color-gold-500)]/60" />
      <path d="M21 21v-2a3 3 0 00-3-3h-1" className="stroke-[var(--color-gold-500)]/60" />
    </svg>
  )
}

function CreditCardIcon() {
  return (
    <svg className="h-8 w-8 text-[var(--color-gold-500)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
      <path d="M6 15h4" className="stroke-[var(--color-gold-500)]/60" />
    </svg>
  )
}

function QrCodeIcon() {
  return (
    <svg className="h-8 w-8 text-[var(--color-gold-500)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="3" height="3" rx="0.5" className="fill-[var(--color-gold-500)]/20" />
      <path d="M21 14h-3v3h3M18 21h3v-3" className="stroke-[var(--color-gold-500)]/60" />
    </svg>
  )
}

function InfoIcon() {
  return (
    <svg className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-blue-500)]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
        clipRule="evenodd"
      />
    </svg>
  )
}

/* ============================================
   BOOKING STEPS DATA
   ============================================ */

const BOOKING_STEPS = [
  {
    number: 1,
    label: 'Choisir un cr\u00e9neau',
    description: 'S\u00e9lectionnez un cr\u00e9neau de 20 minutes parmi les disponibilit\u00e9s.',
    icon: <CalendarIcon />,
  },
  {
    number: 2,
    label: 'Nombre de joueurs',
    description: 'De 2 \u00e0 10 joueurs par session. Un chef de groupe r\u00e9serve pour tous.',
    icon: <UsersIcon />,
  },
  {
    number: 3,
    label: 'Paiement s\u00e9curis\u00e9',
    description: 'Paiement par carte via Stripe. Transaction 100% s\u00e9curis\u00e9e.',
    icon: <CreditCardIcon />,
  },
  {
    number: 4,
    label: 'Confirmation',
    description: 'Recevez votre QR code de confirmation par email.',
    icon: <QrCodeIcon />,
  },
] as const

/* ============================================
   INFO ITEMS
   ============================================ */

const INFO_ITEMS = [
  'Arrivez 10 minutes avant votre session',
  'Portez des v\u00eatements confortables et des chaussures ferm\u00e9es',
  'Le choix du camp se fait sur place \u2014 premier arriv\u00e9, premier servi',
  'Walk-ins accept\u00e9s s\u2019il reste des places',
] as const

/* ============================================
   PAGE COMPONENT
   ============================================ */

export default function ReserverPage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="flex flex-col items-center gap-4 px-4 py-16 text-center sm:py-20">
        <h1 className="font-display text-4xl font-black uppercase tracking-wider text-text-primary sm:text-5xl md:text-6xl">
          R&eacute;server
        </h1>
        <p className="max-w-xl font-serif text-lg italic text-text-secondary">
          Choisissez votre cr&eacute;neau et entrez dans l&apos;ar&egrave;ne.
        </p>
      </section>

      {/* ============================================
          BOOKING STEPS VISUAL STEPPER
          ============================================ */}
      <AtmosphericSection subtitle="R&Eacute;SERVATION" separator stripes id="reservation">
        <div className="mx-auto max-w-4xl">
          {/* Visual stepper: 4 steps */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BOOKING_STEPS.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center gap-3 rounded-lg border border-border-subtle bg-surface-raised p-6 text-center"
              >
                {/* Step number badge — Rule 9: number + icon, never color alone */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-gold-500)]/10 font-heading text-sm font-bold text-[var(--color-gold-500)]">
                  {step.number}
                </div>
                {step.icon}
                <h3 className="font-heading text-sm font-bold text-text-primary">
                  {step.label}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Coming soon state */}
          <Card variant="prestige" className="mt-10">
            <CardContent className="flex flex-col items-center gap-6 p-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[var(--color-gold-500)] bg-[var(--color-gold-500)]/10">
                <CalendarIcon />
              </div>
              <div className="space-y-2">
                <h2 className="font-heading text-xl font-bold text-text-primary sm:text-2xl">
                  Les r&eacute;servations ouvriront prochainement
                </h2>
                <p className="text-text-secondary">
                  Ouverture pr&eacute;vue : <strong className="text-[var(--color-gold-500)]">octobre 2026</strong>
                </p>
              </div>

              {/* Email signup */}
              <div className="w-full space-y-3">
                <p className="font-heading text-sm font-medium text-text-primary">
                  Soyez les premiers inform&eacute;s
                </p>
                <EmailSignupForm />
              </div>
            </CardContent>
          </Card>
        </div>
      </AtmosphericSection>

      {/* ============================================
          INFO BOXES
          ============================================ */}
      <AtmosphericSection subtitle="INFORMATIONS PRATIQUES" separator id="infos" className="bg-[var(--color-surface-recessed)]">
        <div className="mx-auto max-w-2xl space-y-4">
          {INFO_ITEMS.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-lg border border-border-subtle bg-surface-raised p-4"
            >
              <InfoIcon />
              <p className="text-sm text-text-primary">{item}</p>
            </div>
          ))}
        </div>
      </AtmosphericSection>

      {/* ============================================
          PRICING REMINDER
          ============================================ */}
      <AtmosphericSection separator>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-lg font-medium text-text-primary">
            <span className="text-[var(--color-gold-500)]">18&euro;</span> / personne (mer-dim)
            {' '}&middot;{' '}
            <span className="text-text-primary">12&euro;</span> en heures creuses (lun-mar)
          </p>
          <p className="mt-2 text-sm text-text-secondary">
            Pas de frais cach&eacute;s. Le camp se choisit sur place.
          </p>
        </div>
      </AtmosphericSection>
    </main>
  )
}

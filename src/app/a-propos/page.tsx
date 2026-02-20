import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AtmosphericSection,
  SmokeBackground,
  DistressedFrame,
  Button,
} from '@cck/ui'

/** ISR: revalidate every 24 hours (about page rarely changes) */
export const revalidate = 86400

export const metadata: Metadata = {
  title: '\u00c0 Propos',
  description:
    'D\u00e9couvrez l\u2019\u00e9quipe derri\u00e8re Cache Cache Killer : Olivier Giupponi, Mathieu Sardin et Yannick Giupponi.',
  alternates: { canonical: 'https://cachecachekiller.fr/a-propos' },
}

/* ============================================
   FOUNDERS DATA
   ============================================ */

interface Founder {
  initials: string
  name: string
  title: string
  description: string
}

const FOUNDERS: Founder[] = [
  {
    initials: 'OG',
    name: 'Olivier Giupponi',
    title: 'Pr\u00e9sident & Directeur Cr\u00e9atif',
    description:
      'Game designer dipl\u00f4m\u00e9 de l\u2019ENJMIN et des Gobelins, Olivier con\u00e7oit les m\u00e9caniques de jeu et l\u2019univers visuel de Cache Cache Killer.',
  },
  {
    initials: 'MS',
    name: 'Mathieu Sardin',
    title: 'Directeur G\u00e9n\u00e9ral',
    description:
      'Artisan et b\u00e2tisseur, Mathieu supervise l\u2019am\u00e9nagement de l\u2019ar\u00e8ne et l\u2019exploitation quotidienne.',
  },
  {
    initials: 'YG',
    name: 'Yannick Giupponi',
    title: 'Directeur Financier & Strat\u00e9gique',
    description:
      'Consultant en strat\u00e9gie, Yannick pilote la vision financi\u00e8re et le d\u00e9veloppement de CCK.',
  },
]

/* ============================================
   PAGE COMPONENT
   ============================================ */

export default function AProposPage() {
  return (
    <>
      {/* ============================================
          HERO
          ============================================ */}
      <section className="relative flex flex-col items-center gap-4 overflow-hidden px-4 py-16 text-center sm:py-20">
        <SmokeBackground variant="accueil" />
        <p className="font-heading text-sm uppercase tracking-widest text-text-accent">
          Le Cirque de Minuit &mdash; Notre histoire
        </p>
        <h1 className="font-display text-4xl font-black text-text-primary sm:text-5xl md:text-6xl">
          &Agrave; PROPOS
        </h1>
      </section>

      {/* ============================================
          NOTRE HISTOIRE
          ============================================ */}
      <AtmosphericSection subtitle="L'ORIGINE" separator stripes>
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col gap-6 font-serif text-lg italic leading-relaxed text-text-primary">
            <p>
              Cache Cache Killer est n&eacute; d&apos;une passion commune pour
              le game design, l&apos;artisanat et la strat&eacute;gie.
            </p>
            <p>
              Trois associ&eacute;s, trois visions compl&eacute;mentaires, un
              m&ecirc;me objectif : cr&eacute;er une exp&eacute;rience de jeu
              grandeur nature qui n&apos;existe nulle part ailleurs.
            </p>
            <p>
              Inspir&eacute; des m&eacute;caniques de{' '}
              <span className="font-semibold not-italic text-text-accent">
                Dead by Daylight
              </span>{' '}
              et de l&apos;&eacute;nergie du spectacle vivant, CCK transforme un
              espace de 500m&sup2; en ar&egrave;ne o&ugrave; tout est physique,
              tangible, immersif.
            </p>
          </div>
        </div>
      </AtmosphericSection>

      {/* ============================================
          L'EQUIPE
          ============================================ */}
      <AtmosphericSection subtitle="LES FONDATEURS" separator>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FOUNDERS.map((founder) => (
            <DistressedFrame
              key={founder.initials}
              caption={`${founder.name} \u2014 ${founder.title}`}
              className="w-full"
            >
              <div className="flex flex-col items-center gap-4 p-6">
                {/* Placeholder image — gray with initials */}
                <div
                  className="flex h-24 w-24 items-center justify-center rounded-full bg-night-300 text-2xl font-display font-bold text-text-primary"
                  aria-label={`Photo de ${founder.name}`}
                >
                  {founder.initials}
                </div>
                <div className="text-center">
                  <h3 className="font-heading text-lg font-bold text-text-primary">
                    {founder.name}
                  </h3>
                  <p className="mt-1 font-heading text-xs uppercase tracking-wider text-text-accent">
                    {founder.title}
                  </p>
                </div>
                <p className="text-center text-sm leading-relaxed text-text-secondary">
                  {founder.description}
                </p>
              </div>
            </DistressedFrame>
          ))}
        </div>
      </AtmosphericSection>

      {/* ============================================
          NOTRE VISION
          ============================================ */}
      <AtmosphericSection subtitle="NOTRE VISION" separator stripes>
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex flex-col gap-6 font-serif text-lg italic leading-relaxed text-text-primary">
            <p>
              Nous croyons que le jeu physique cr&eacute;e des &eacute;motions
              que le num&eacute;rique ne peut pas reproduire.
            </p>
            <p className="font-semibold text-text-accent">
              CCK, c&apos;est le retour du frisson &mdash; sans &eacute;cran,
              sans filtre.
            </p>
          </div>
        </div>
      </AtmosphericSection>

      {/* ============================================
          CTA — Rule 3: 1 single primary CTA
          ============================================ */}
      <AtmosphericSection separator className="text-center">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6">
          <h2 className="font-display text-2xl font-bold italic text-text-primary sm:text-3xl">
            D&eacute;couvrir l&apos;exp&eacute;rience
          </h2>
          <p className="text-text-secondary">
            Plongez dans l&apos;univers du Cirque D&eacute;lav&eacute; et
            d&eacute;couvrez ce qui vous attend dans l&apos;ar&egrave;ne.
          </p>
          <Link href="/concept">
            <Button variant="primary" size="lg">
              D&Eacute;COUVRIR LE CONCEPT
            </Button>
          </Link>
        </div>
      </AtmosphericSection>
    </>
  )
}

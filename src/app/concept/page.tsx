import type { Metadata } from 'next'
import Link from 'next/link'
import { AtmosphericSection, SmokeBackground, Button, Card, CardContent } from '@cck/ui'

export const metadata: Metadata = {
  title: "L'Exp\u00e9rience",
  description:
    "D\u00e9couvrez Cache Cache Killer : un jeu de survie grandeur nature avec Survivants vs Tueurs dans une ar\u00e8ne de 500m\u00b2. Phase de Pr\u00e9paration + Phase d'Extraction.",
  alternates: { canonical: 'https://cachecachekiller.fr/concept' },
}

/* ============================================
   INLINE SVG ICONS
   ============================================ */

function GeneratorIcon() {
  return (
    <svg
      className="h-6 w-6 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <rect x="3" y="6" width="18" height="12" rx="2" className="stroke-[var(--color-blue-500)]" />
      <path d="M12 6v12" className="stroke-[var(--color-blue-500)]" />
      <circle cx="8" cy="12" r="2" className="stroke-[var(--color-blue-500)]" />
      <path d="M15 9l2 3-2 3" className="stroke-[var(--color-blue-500)]" />
    </svg>
  )
}

function SkullIcon() {
  return (
    <svg
      className="h-6 w-6 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <circle cx="12" cy="10" r="7" className="stroke-[var(--color-red-500)]" />
      <circle cx="9" cy="9" r="1.5" className="fill-[var(--color-red-500)]/20 stroke-[var(--color-red-500)]" />
      <circle cx="15" cy="9" r="1.5" className="fill-[var(--color-red-500)]/20 stroke-[var(--color-red-500)]" />
      <path d="M10 14h4" className="stroke-[var(--color-red-500)]" />
      <path d="M12 17v3M10 20h4" className="stroke-[var(--color-red-500)]" />
    </svg>
  )
}

function CheckIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-[var(--color-gold-500)]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

/* ============================================
   KEY STATS
   ============================================ */

const KEY_STATS = [
  { value: '2\u201310', label: 'joueurs' },
  { value: '20', label: 'minutes' },
  { value: '12+', label: 'ans minimum' },
  { value: '500m\u00b2', label: "d'ar\u00e8ne" },
] as const

/* ============================================
   PHASE 1 FEATURES
   ============================================ */

const PHASE_1_FEATURES = [
  'Les Survivants doivent activer les g\u00e9n\u00e9rateurs diss\u00e9min\u00e9s dans l\u2019ar\u00e8ne.',
  'Le Tueur les traque \u00e0 l\u2019aide de sa lampe infrarouge.',
  'Touch\u00e9 ? Vous \u00eates bless\u00e9. Rejoignez une borne de soin pour vous soigner \u2014 mais attention, les g\u00e9n\u00e9rateurs proches disjonctent.',
  'Le Tueur dispose de munitions limit\u00e9es et d\u2019un effet snowball.',
] as const

const PHASE_2_FEATURES = [
  'Les Survivants doivent maintenir les boutons d\u2019extraction dans le bon ordre.',
  'Le Tueur devient mortel : un toucher signifie l\u2019\u00e9limination d\u00e9finitive.',
  'Les \u00e9limin\u00e9s quittent l\u2019ar\u00e8ne. Les survivants restants tentent l\u2019extraction finale.',
] as const

const ARENA_FEATURES = [
  '500m\u00b2 d\u2019espaces modulables',
  '\u00c9clairage dynamique, ambiance sonore immersive',
  'G\u00e9n\u00e9rateurs physiques interactifs, bornes de soin, gilets infrarouges',
  'Z\u00e9ro \u00e9cran \u2014 tout est tangible',
] as const

/* ============================================
   PAGE COMPONENT
   ============================================ */

export default function ConceptPage() {
  return (
    <main className="flex flex-col">
      {/* Hero section */}
      <section className="relative flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 py-20 text-center sm:py-28">
        <SmokeBackground variant="duality" />
        <h1 className="font-display text-4xl font-black uppercase tracking-wider text-text-primary sm:text-5xl md:text-6xl">
          L&apos;Exp&eacute;rience
        </h1>
        <p className="max-w-2xl font-serif text-lg italic text-[var(--color-cream-500)] sm:text-xl">
          Un jeu de survie grandeur nature dans un cirque que le temps a oubli&eacute;.
        </p>
      </section>

      {/* Section: Le Concept */}
      <AtmosphericSection subtitle="LE JEU" separator stripes id="concept">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            Le Concept
          </h2>
          <div className="space-y-4 text-text-primary leading-relaxed">
            <p>
              Cache Cache Killer est un <strong className="text-[var(--color-gold-500)]">survival grandeur nature</strong> inspir&eacute;
              de Dead by Daylight, Friday the 13th et Among Us.
            </p>
            <p>
              Dans une ar&egrave;ne de 500m&sup2;, deux camps s&apos;affrontent : les <strong className="text-[var(--color-blue-500)]">Survivants</strong> et
              le <strong className="text-[var(--color-red-500)]">Tueur</strong>.
            </p>
            <p>
              Pas d&apos;&eacute;cran, pas de r&eacute;alit&eacute; virtuelle &mdash; tout est physique, tangible, visc&eacute;ral.
            </p>
          </div>

          {/* Key stats */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {KEY_STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1 rounded-lg border border-[var(--color-gold-300)] bg-[var(--color-surface-recessed)] p-4"
              >
                <span className="font-display text-2xl font-black text-[var(--color-gold-500)]">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-wider text-text-secondary">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </AtmosphericSection>

      {/* Section: Les Deux Phases */}
      <AtmosphericSection subtitle="LE D&Eacute;ROULEMENT" separator id="phases" className="bg-[var(--color-surface-recessed)]">
        <div className="mx-auto max-w-4xl space-y-10">
          <h2 className="text-center font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            Les Deux Phases
          </h2>

          {/* Phase 1 — Pr&eacute;paration */}
          <Card variant="survivor" className="overflow-hidden">
            <CardContent className="flex flex-col gap-4 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <GeneratorIcon />
                <div>
                  <span className="text-xs font-heading uppercase tracking-wider text-[var(--color-blue-500)]">
                    Phase 1
                  </span>
                  <h3 className="font-heading text-xl font-bold text-[var(--color-blue-500)] sm:text-2xl">
                    Pr&eacute;paration
                  </h3>
                </div>
              </div>

              {/* Rule 9: icon + text, never color alone */}
              <ul className="flex flex-col gap-3" role="list">
                {PHASE_1_FEATURES.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-text-primary">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-blue-500)]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-2 flex items-center gap-2 rounded-md bg-[var(--color-blue-500)]/10 px-4 py-2">
                <svg className="h-5 w-5 shrink-0 text-[var(--color-blue-500)]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-[var(--color-blue-500)]">
                  Dur&eacute;e : 15 minutes
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Phase 2 — Extraction */}
          <Card variant="killer" className="overflow-hidden">
            <CardContent className="flex flex-col gap-4 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <SkullIcon />
                <div>
                  <span className="text-xs font-heading uppercase tracking-wider text-[var(--color-red-500)]">
                    Phase 2
                  </span>
                  <h3 className="font-heading text-xl font-bold text-[var(--color-red-500)] sm:text-2xl">
                    Extraction
                  </h3>
                </div>
              </div>

              {/* Rule 9: icon + text, never color alone */}
              <ul className="flex flex-col gap-3" role="list">
                {PHASE_2_FEATURES.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-text-primary">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-red-500)]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-2 flex items-center gap-2 rounded-md bg-[var(--color-red-500)]/10 px-4 py-2">
                <svg className="h-5 w-5 shrink-0 text-[var(--color-red-500)]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-[var(--color-red-500)]">
                  Dur&eacute;e : temps restant + bonus
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </AtmosphericSection>

      {/* Section: L'Ar&egrave;ne */}
      <AtmosphericSection subtitle="LE LIEU" separator stripes id="arene">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            L&apos;Ar&egrave;ne
          </h2>
          <ul className="mx-auto flex max-w-xl flex-col gap-4 text-left" role="list">
            {ARENA_FEATURES.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-text-primary">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-gold-500)]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </AtmosphericSection>

      {/* Section: Playtests */}
      <AtmosphericSection subtitle="CE QU&apos;ILS EN DISENT" separator id="playtests" className="bg-[var(--color-surface-recessed)]">
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            Retours Playtests
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Stat: Recommendation */}
            <div className="flex flex-col items-center gap-2 rounded-lg border border-[var(--color-gold-300)] bg-[var(--color-surface-raised)] p-6">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <span className="font-display text-3xl font-black text-[var(--color-gold-500)]">
                100%
              </span>
              <span className="text-sm text-text-secondary">de recommandation</span>
            </div>

            {/* Stat: Fun score */}
            <div className="flex flex-col items-center gap-2 rounded-lg border border-[var(--color-gold-300)] bg-[var(--color-surface-raised)] p-6">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <span className="font-display text-3xl font-black text-[var(--color-gold-500)]">
                4.8/5
              </span>
              <span className="text-sm text-text-secondary">score amusement</span>
            </div>
          </div>

          <p className="text-text-secondary">
            Test&eacute; et approuv&eacute; par plus de 200 joueurs en conditions r&eacute;elles.
          </p>
        </div>
      </AtmosphericSection>

      {/* CTA section — Rule 3: 1 seul CTA primaire visible */}
      <AtmosphericSection separator>
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            Pr&ecirc;t &agrave; entrer dans l&apos;ar&egrave;ne ?
          </h2>
          <p className="max-w-lg text-text-secondary">
            R&eacute;servez votre session et d&eacute;couvrez le Cirque D&eacute;lav&eacute;.
            Serez-vous Survivant ou Tueur ? Le camp se choisit sur place.
          </p>
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

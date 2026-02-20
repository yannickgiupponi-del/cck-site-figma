import type { Metadata } from 'next'
import Link from 'next/link'
import { AtmosphericSection, SmokeBackground, Button } from '@cck/ui'

/** ISR: revalidate every 24 hours (FAQ content rarely changes) */
export const revalidate = 86400

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Questions fr\u00e9quentes sur Cache Cache Killer : r\u00e8gles du jeu, \u00e2ge minimum, dur\u00e9e, fonctionnement des parties.',
  alternates: { canonical: 'https://cachecachekiller.fr/faq' },
}

/* ============================================
   FAQ DATA
   CCK = Survival grandeur nature
   NOT escape game, NOT laser game
   ============================================ */

interface FaqItem {
  question: string
  answer: string
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'C\u2019est quoi Cache Cache Killer ?',
    answer:
      'Cache Cache Killer est un jeu de survie grandeur nature. Pas un escape game, pas un laser game. Deux camps s\u2019affrontent dans une ar\u00e8ne de 500m\u00b2 : les Survivants doivent activer des g\u00e9n\u00e9rateurs et s\u2019extraire, tandis que le Tueur les traque avec une lampe infrarouge.',
  },
  {
    question: '\u00c0 partir de quel \u00e2ge ?',
    answer:
      'D\u00e8s 12 ans. Les mineurs doivent \u00eatre accompagn\u00e9s d\u2019un adulte responsable.',
  },
  {
    question: 'Combien de joueurs ?',
    answer:
      'De 2 \u00e0 10 joueurs par session. Id\u00e9al entre amis, en famille ou entre coll\u00e8gues.',
  },
  {
    question: 'Combien de temps dure une partie ?',
    answer:
      '20 minutes par session. Pr\u00e9voyez d\u2019arriver 10 minutes avant pour le briefing.',
  },
  {
    question: 'On court pendant la partie ?',
    answer:
      'Non. La course est interdite pour des raisons de s\u00e9curit\u00e9. Le jeu repose sur la strat\u00e9gie, la discr\u00e9tion et la coordination.',
  },
  {
    question: 'On choisit son camp \u00e0 l\u2019avance ?',
    answer:
      'Non. Le choix du camp (Survivant ou Tueur) se fait sur place, 10 minutes avant la session. Premier arriv\u00e9, premier servi.',
  },
  {
    question: 'Comment se d\u00e9roule une partie ?',
    answer:
      'Phase 1 \u2014 Pr\u00e9paration (15 min) : les Survivants activent les g\u00e9n\u00e9rateurs, le Tueur les traque. Phase 2 \u2014 Extraction (temps restant) : les Survivants maintiennent les boutons d\u2019extraction dans le bon ordre. Le Tueur devient mortel.',
  },
  {
    question: 'C\u2019est quoi les g\u00e9n\u00e9rateurs ?',
    answer:
      'Ce sont des dispositifs physiques r\u00e9partis dans l\u2019ar\u00e8ne. Les Survivants doivent les activer pour progresser. Le Tueur peut les faire disjoncter en blessant un Survivant \u00e0 proximit\u00e9.',
  },
  {
    question: 'Il y a des \u00e9crans pendant le jeu ?',
    answer:
      'Aucun. Tout est physique et tangible. L\u2019immersion est totale.',
  },
  {
    question: 'O\u00f9 \u00eates-vous situ\u00e9s ?',
    answer:
      'En Essonne (\u00cele-de-France). L\u2019adresse exacte sera communiqu\u00e9e \u00e0 l\u2019ouverture, pr\u00e9vue en octobre 2026.',
  },
]

/* ============================================
   ACCORDION ITEM COMPONENT
   Semantic HTML details/summary — no JS needed.
   Accessible: native aria-expanded via browser.
   Touch target: min-h-[48px] — Rule 1.
   ============================================ */

function FaqAccordionItem({ question, answer }: FaqItem) {
  return (
    <details className="group border-b border-border-subtle">
      <summary className="flex min-h-[48px] cursor-pointer items-center justify-between py-4 font-heading text-base font-medium text-text-primary list-none [&::-webkit-details-marker]:hidden hover:bg-surface-raised-hover transition-colors duration-150 rounded-md px-4 focus-visible:focus-ring">
        <span>{question}</span>
        {/* Chevron — rotates when open — Rule 5: reduced-motion */}
        <svg
          className="h-5 w-5 shrink-0 text-text-secondary transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </summary>
      <div className="pb-4 px-4 text-sm text-text-secondary leading-relaxed">
        {answer}
      </div>
    </details>
  )
}

/* ============================================
   PAGE COMPONENT
   ============================================ */

export default function FaqPage() {
  return (
    <>
      {/* ============================================
          HERO
          ============================================ */}
      <section className="relative flex flex-col items-center gap-4 overflow-hidden px-4 py-16 text-center sm:py-20">
        <SmokeBackground variant="accueil" />
        <p className="font-heading text-sm uppercase tracking-widest text-text-accent">
          Vos questions, nos r&eacute;ponses
        </p>
        <h1 className="font-display text-4xl font-black text-text-primary sm:text-5xl md:text-6xl">
          FAQ
        </h1>
      </section>

      {/* ============================================
          FAQ ACCORDION
          ============================================ */}
      <AtmosphericSection separator stripes>
        <div className="mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-lg border border-border-subtle">
            {FAQ_ITEMS.map((item) => (
              <FaqAccordionItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </AtmosphericSection>

      {/* ============================================
          CONTACT CTA — Rule 3: 1 single primary CTA
          ============================================ */}
      <AtmosphericSection separator className="text-center">
        <div className="mx-auto flex max-w-lg flex-col items-center gap-6">
          <h2 className="font-heading text-xl font-bold text-text-primary sm:text-2xl">
            Vous avez une autre question ?
          </h2>
          <p className="text-text-secondary">
            Notre &eacute;quipe est disponible pour r&eacute;pondre &agrave;
            toutes vos interrogations.
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Nous contacter
            </Button>
          </Link>
        </div>
      </AtmosphericSection>
    </>
  )
}

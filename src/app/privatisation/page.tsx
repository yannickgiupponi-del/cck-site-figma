import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AtmosphericSection,
  SmokeBackground,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  Badge,
  Button,
} from '@cck/ui'

export const metadata: Metadata = {
  title: 'Privatisations',
  description:
    '\u00c9v\u00e9nements priv\u00e9s Cache Cache Killer : team building, anniversaires, EVG/EVJF, sur mesure. R\u00e9servez l\u2019ar\u00e8ne pour votre groupe.',
  alternates: { canonical: 'https://cachecachekiller.fr/privatisation' },
}

/* ============================================
   PRIVATISATION FORMATS DATA
   ============================================ */

interface PrivatisationFormat {
  id: string
  title: string
  badge: string
  participants: string
  duration: string
  price: string
  description: string
  idealFor: string[]
  icon: React.ReactNode
}

const FORMATS: PrivatisationFormat[] = [
  {
    id: 'team-building',
    title: 'Team Building',
    badge: 'Entreprises',
    participants: '10-30 personnes',
    duration: '2h',
    price: '\u00c0 partir de 400\u20ac',
    description:
      'Renforcez l\u2019esprit d\u2019\u00e9quipe avec une exp\u00e9rience immersive. Vos collaborateurs devront coop\u00e9rer, communiquer et strat\u00e9giser pour survivre \u00e0 l\u2019ar\u00e8ne.',
    idealFor: ['Entreprises', 'Associations', 'Clubs sportifs'],
    icon: (
      <svg
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
  },
  {
    id: 'anniversaire',
    title: 'Anniversaire / EVG / EVJF',
    badge: 'F\u00eates',
    participants: '8-20 personnes',
    duration: '1h30',
    price: '\u00c0 partir de 250\u20ac',
    description:
      'Une f\u00eate inoubliable dans l\u2019ar\u00e8ne. C\u00e9l\u00e9brez un moment sp\u00e9cial avec une exp\u00e9rience que personne n\u2019oubliera.',
    idealFor: [
      'Anniversaires (12+)',
      'Enterrements de vie de gar\u00e7on',
      'Enterrements de vie de jeune fille',
    ],
    icon: (
      <svg
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.126-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12 8.25a2.25 2.25 0 01-2.248-2.148A23.61 23.61 0 0112 6c.77 0 1.53.024 2.248.072A2.25 2.25 0 0112 8.25z"
        />
      </svg>
    ),
  },
  {
    id: 'sur-mesure',
    title: 'Sur Mesure',
    badge: 'Premium',
    participants: 'Sur devis',
    duration: 'Sur devis',
    price: 'Sur devis',
    description:
      'Votre \u00e9v\u00e9nement, nos r\u00e8gles. Nous concevons une exp\u00e9rience enti\u00e8rement personnalis\u00e9e selon vos besoins sp\u00e9cifiques.',
    idealFor: [
      '\u00c9v\u00e9nements corporate',
      'Lancements de produit',
      'Tournages / Presse',
    ],
    icon: (
      <svg
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
        />
      </svg>
    ),
  },
]

/* ============================================
   PAGE COMPONENT
   ============================================ */

export default function PrivatisationPage() {
  return (
    <>
      {/* ============================================
          HERO
          ============================================ */}
      <section className="relative flex flex-col items-center gap-4 overflow-hidden px-4 py-16 text-center sm:py-20">
        <SmokeBackground variant="accueil" />
        <p className="font-heading text-sm uppercase tracking-widest text-text-accent">
          &Eacute;v&eacute;nement priv&eacute;
        </p>
        <h1 className="font-display text-4xl font-black text-text-primary sm:text-5xl md:text-6xl">
          PRIVATISATION
        </h1>
        <p className="max-w-xl text-lg text-text-secondary">
          R&eacute;servez l&apos;ar&egrave;ne pour votre groupe. Team building,
          anniversaire, EVG/EVJF ou &eacute;v&eacute;nement sur mesure.
        </p>
      </section>

      {/* ============================================
          FORMATS
          ============================================ */}
      <AtmosphericSection subtitle="NOS FORMULES" separator stripes>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
          {FORMATS.map((format) => (
            <Card key={format.id} className="flex flex-col">
              <CardHeader>
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-recessed text-text-accent">
                    {format.icon}
                  </div>
                  <Badge variant="prestige" size="sm">
                    {format.badge}
                  </Badge>
                </div>
                <CardTitle>{format.title}</CardTitle>
              </CardHeader>

              <CardContent className="mt-3 flex flex-1 flex-col gap-4">
                <p className="text-sm leading-relaxed text-text-secondary">
                  {format.description}
                </p>

                {/* Details */}
                <dl className="flex flex-col gap-2 text-sm">
                  <div className="flex items-center justify-between">
                    <dt className="text-text-secondary">Participants</dt>
                    <dd className="font-heading font-medium text-text-primary">
                      {format.participants}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-text-secondary">Dur&eacute;e</dt>
                    <dd className="font-heading font-medium text-text-primary">
                      {format.duration}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-text-secondary">Tarif</dt>
                    <dd className="font-heading font-bold text-text-accent">
                      {format.price}
                    </dd>
                  </div>
                </dl>

                {/* Ideal for — Rule 9: icon + text */}
                <div>
                  <p className="mb-2 text-xs font-heading uppercase tracking-wider text-text-secondary">
                    Id&eacute;al pour
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {format.idealFor.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-text-primary"
                      >
                        <svg
                          className="h-3.5 w-3.5 shrink-0 text-text-accent"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm3.22 5.97l-3.5 3.5a.75.75 0 01-1.06 0l-1.5-1.5a.75.75 0 111.06-1.06l.97.97 2.97-2.97a.75.75 0 111.06 1.06z" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter className="mt-4">
                <Link href="/contact" className="w-full">
                  <Button variant="primary" size="lg" className="w-full">
                    DEMANDER UN DEVIS
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </AtmosphericSection>

      {/* ============================================
          HOW IT WORKS
          ============================================ */}
      <AtmosphericSection subtitle="COMMENT CA MARCHE" separator>
        <div className="mx-auto max-w-3xl">
          <ol className="flex flex-col gap-6">
            {[
              {
                step: '1',
                title: 'Contactez-nous',
                desc: 'D\u00e9crivez votre \u00e9v\u00e9nement, le nombre de participants et la date souhait\u00e9e.',
              },
              {
                step: '2',
                title: 'Devis personnalis\u00e9',
                desc: 'Nous vous envoyons une proposition adapt\u00e9e \u00e0 vos besoins sous 48 heures.',
              },
              {
                step: '3',
                title: 'Confirmation',
                desc: 'Validez le devis et r\u00e9servez votre cr\u00e9neau. L\u2019ar\u00e8ne est \u00e0 vous.',
              },
            ].map((item) => (
              <li
                key={item.step}
                className="flex items-start gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-accent bg-surface-raised font-display text-lg font-bold text-text-accent">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </AtmosphericSection>

      {/* ============================================
          CTA — Rule 3: 1 single primary CTA
          ============================================ */}
      <AtmosphericSection separator className="text-center">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6">
          <h2 className="font-display text-2xl font-bold italic text-text-primary sm:text-3xl">
            Votre &eacute;v&eacute;nement dans l&apos;ar&egrave;ne
          </h2>
          <p className="text-text-secondary">
            Contactez-nous pour organiser une exp&eacute;rience unique et
            m&eacute;morable pour votre groupe.
          </p>
          <Link href="/contact">
            <Button variant="danger" size="lg">
              NOUS CONTACTER
            </Button>
          </Link>
        </div>
      </AtmosphericSection>
    </>
  )
}

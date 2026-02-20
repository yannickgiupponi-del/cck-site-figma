import Link from 'next/link'
import {
  CckLogo,
  SmokeBackground,
  AtmosphericSection,
  VersusSection,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@cck/ui'
import { FadeInSection } from '../components/fade-in-section'
import { getTopPlayers } from '@/lib/dal/leaderboard'

/* ============================================
   HOME PAGE — Async Server Component
   Moodboard Section 8 "Digital" blueprint
   ============================================ */

export default async function HomePage() {
  // Fetch top 3 for podium preview — returns [] on error (pre-launch / DB unavailable)
  const topPlayers = await getTopPlayers(3)
  return (
    <>
      {/* ============================================
          1. HERO — Full viewport
          ============================================ */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20 text-center">
        {/* Atmospheric smoke behind everything */}
        <SmokeBackground variant="accueil" />

        <FadeInSection>
          {/* Tagline */}
          <p className="mb-6 font-mono text-xs uppercase tracking-[5px] text-[var(--color-gold-500)]">
            <span aria-hidden="true">&#9670; </span>
            LE CIRQUE OUVRE SES PORTES
            <span aria-hidden="true"> &#9670;</span>
          </p>

          {/* Logo */}
          <CckLogo variant="full" size="xl" />

          {/* Subtitle */}
          <p className="mt-8 max-w-lg font-serif text-lg italic text-text-primary sm:text-xl">
            Un jeu de survie grandeur nature dans un cirque que le temps a
            oubli&eacute;.
          </p>

          {/* Info line */}
          <p className="mt-4 font-mono text-sm text-text-secondary">
            2 &agrave; 10 joueurs &middot; 20 min / partie &middot; D&egrave;s 12
            ans &middot; Essonne
          </p>

          {/* CTAs — Rule 3: 1 primary visible, 1 secondary */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Link href="/reserver" prefetch={true}>
              <Button variant="danger" size="lg">
                R&Eacute;SERVER UNE SESSION
              </Button>
            </Link>

            <Link href="/concept" prefetch={true}>
              <Button variant="secondary" size="lg">
                D&Eacute;COUVRIR L&rsquo;AR&Egrave;NE
              </Button>
            </Link>
          </div>
        </FadeInSection>

        {/* Gradient laiton separator at bottom */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold-500)] to-transparent"
        />
      </section>

      {/* ============================================
          2. THREE CARDS SECTION
          ============================================ */}
      <AtmosphericSection
        subtitle="L'ARENE VOUS ATTEND"
        separator
        stripes
      >
        <FadeInSection delay={100}>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 — L'experience (blue-acier accent) */}
            <Card
              className="border-l-4 border-l-[var(--color-blue-500)] hover:shadow-[var(--shadow-card-hover)] transition-shadow"
              hoverable
            >
              <CardHeader eyebrow="L'experience">
                <CardTitle>Survivez &agrave; l&rsquo;ar&egrave;ne</CardTitle>
              </CardHeader>
              <CardContent className="mt-3">
                <p className="text-text-secondary">
                  Courez, cachez-vous, activez les
                  g&eacute;n&eacute;rateurs. Survivez &agrave;
                  l&rsquo;ar&egrave;ne.
                </p>
              </CardContent>
            </Card>

            {/* Card 2 — Deux camps (red accent) */}
            <Card
              className="border-l-4 border-l-[var(--color-red-500)] hover:shadow-[var(--shadow-card-hover)] transition-shadow"
              hoverable
            >
              <CardHeader eyebrow="Deux camps">
                <CardTitle>Survivants ou Tueur</CardTitle>
              </CardHeader>
              <CardContent className="mt-3">
                <p className="text-text-secondary">
                  Survivants ou Tueur — chaque camp vit l&rsquo;ar&egrave;ne
                  diff&eacute;remment.
                </p>
              </CardContent>
            </Card>

            {/* Card 3 — Le cirque (gold accent) */}
            <Card
              className="border-l-4 border-l-[var(--color-gold-500)] hover:shadow-[var(--shadow-card-hover)] transition-shadow sm:col-span-2 lg:col-span-1"
              hoverable
            >
              <CardHeader eyebrow="Le cirque">
                <CardTitle>Un lieu hors du temps</CardTitle>
              </CardHeader>
              <CardContent className="mt-3">
                <p className="text-text-secondary">
                  Un lieu hors du temps, entre spectacle et terreur.
                </p>
              </CardContent>
            </Card>
          </div>
        </FadeInSection>
      </AtmosphericSection>

      {/* ============================================
          3. VERSUS SECTION
          ============================================ */}
      <AtmosphericSection subtitle="CHOISISSEZ VOTRE CAMP" separator>
        <FadeInSection delay={200}>
          <VersusSection />
        </FadeInSection>
      </AtmosphericSection>

      {/* ============================================
          4. CLASSEMENT PREVIEW
          ============================================ */}
      <AtmosphericSection subtitle="LE CLASSEMENT" separator stripes>
        <FadeInSection delay={100}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl font-bold text-text-primary sm:text-3xl">
            Les meilleurs joueurs du mois
          </h2>

          {/* Podium preview — real data when available, dash placeholder otherwise */}
          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:items-end sm:gap-8">
            {/* 2nd place — Silver */}
            <div className="order-2 flex flex-col items-center gap-3 sm:order-1">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#a0a0a0] bg-surface-raised text-xl font-display font-bold text-text-primary"
                aria-label="Deuxieme place"
              >
                2
              </div>
              <div className="h-20 w-24 rounded-t-lg bg-gradient-to-t from-[#a0a0a0]/20 to-[#a0a0a0]/5 sm:h-24" />
              <span className="font-heading text-sm font-medium text-text-secondary">
                {topPlayers[1]?.pseudo ?? <span aria-label="Non attribue">&mdash;</span>}
              </span>
            </div>

            {/* 1st place — Gold */}
            <div className="order-1 flex flex-col items-center gap-3 sm:order-2">
              <div
                className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[var(--color-gold-500)] bg-surface-raised text-2xl font-display font-bold text-[var(--color-gold-500)]"
                style={{
                  boxShadow: '0 0 20px rgba(184, 144, 64, 0.3)',
                }}
                aria-label="Premiere place"
              >
                1
              </div>
              <div className="h-28 w-28 rounded-t-lg bg-gradient-to-t from-[var(--color-gold-500)]/20 to-[var(--color-gold-500)]/5 sm:h-32" />
              <span className="font-heading text-sm font-medium text-[var(--color-gold-500)]">
                {topPlayers[0]?.pseudo ?? <span aria-label="Non attribue">&mdash;</span>}
              </span>
            </div>

            {/* 3rd place — Bronze */}
            <div className="order-3 flex flex-col items-center gap-3">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#cd7f32] bg-surface-raised text-xl font-display font-bold text-text-primary"
                aria-label="Troisieme place"
              >
                3
              </div>
              <div className="h-16 w-24 rounded-t-lg bg-gradient-to-t from-[#cd7f32]/20 to-[#cd7f32]/5 sm:h-20" />
              <span className="font-heading text-sm font-medium text-text-secondary">
                {topPlayers[2]?.pseudo ?? <span aria-label="Non attribue">&mdash;</span>}
              </span>
            </div>
          </div>

          <Link
            href="/classement"
            prefetch={true}
            className="mt-10 inline-flex min-h-[48px] items-center font-heading text-sm font-medium text-text-accent underline underline-offset-4 transition-colors duration-150 hover:text-[var(--color-gold-400)] focus-visible:focus-ring rounded-sm"
          >
            Voir le classement complet &rarr;
          </Link>
        </div>
        </FadeInSection>
      </AtmosphericSection>

      {/* ============================================
          5. BOTTOM CTA
          ============================================ */}
      <AtmosphericSection separator className="text-center">
        <FadeInSection delay={200}>
          <div className="mx-auto flex max-w-xl flex-col items-center gap-8">
            <h2 className="font-display text-3xl font-bold italic text-text-primary sm:text-4xl">
              L&rsquo;ar&egrave;ne vous attend.
            </h2>

            <Link href="/reserver" prefetch={true}>
              <Button variant="danger" size="lg">
                R&Eacute;SERVER UNE SESSION
              </Button>
            </Link>
          </div>
        </FadeInSection>
      </AtmosphericSection>
    </>
  )
}

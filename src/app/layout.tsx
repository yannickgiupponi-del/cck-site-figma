import type { Metadata } from 'next'
import Script from 'next/script'
import {
  Bodoni_Moda,
  Oswald,
  DM_Sans,
  Share_Tech_Mono,
  Crimson_Text,
} from 'next/font/google'
import { SiteHeader } from '@/components/header'
import { SiteFooter } from '@/components/footer'
import { SkipNav, SvgFilters } from '@cck/ui'
import './globals.css'

/* ============================================
   FONTS — next/font/google (self-hosted, no CLS)
   ============================================ */

const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-body',
  display: 'swap',
})

const shareTechMono = Share_Tech_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-mono',
  display: 'swap',
})

const crimsonText = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

/* ============================================
   METADATA
   ============================================ */

export const metadata: Metadata = {
  metadataBase: new URL('https://cachecachekiller.fr'),
  title: {
    template: '%s | Cache Cache Killer',
    default: 'Cache Cache Killer — Survival Grandeur Nature',
  },
  description:
    'Cache Cache Killer : un jeu de survie grandeur nature dans un cirque que le temps a oublié. 2 à 10 joueurs, 20 min par session, dès 12 ans. Ouverture octobre 2026 en Essonne.',
  keywords: [
    'survival grandeur nature',
    'jeu de survie',
    'cache cache killer',
    'team building essonne',
    'activité groupe paris',
    'dead by daylight réel',
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Cache Cache Killer',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://cachecachekiller.fr' },
}

/* ============================================
   JSON-LD STRUCTURED DATA — EntertainmentBusiness schema
   ============================================ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EntertainmentBusiness',
  name: 'Cache Cache Killer',
  description:
    'Jeu de survie grandeur nature inspiré de Dead by Daylight — Survivants vs Tueurs dans une arène de 500m²',
  url: 'https://cachecachekiller.fr',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Essonne',
    addressRegion: 'Île-de-France',
    addressCountry: 'FR',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Wednesday', 'Thursday', 'Friday'],
      opens: '14:00',
      closes: '22:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '23:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '10:00',
      closes: '20:00',
    },
  ],
  priceRange: 'EUR 12-18',
}

/* ============================================
   ROOT LAYOUT
   ============================================ */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={[
        bodoniModa.variable,
        oswald.variable,
        dmSans.variable,
        shareTechMono.variable,
        crimsonText.variable,
      ].join(' ')}
    >
      <body
        data-palette="accueil"
        className="min-h-screen bg-surface-base font-body text-text-primary antialiased"
      >
        <SkipNav />
        <SvgFilters />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        <main id="main-content" className="flex min-h-[calc(100vh-4rem)] flex-col">
          {children}
        </main>
        <SiteFooter />
        <Script
          defer
          data-domain="cachecachekiller.fr"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}

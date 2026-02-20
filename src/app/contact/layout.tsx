import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contactez l\u2019\u00e9quipe Cache Cache Killer : questions, privatisations, presse. Essonne, \u00cele-de-France.',
  alternates: { canonical: 'https://cachecachekiller.fr/contact' },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

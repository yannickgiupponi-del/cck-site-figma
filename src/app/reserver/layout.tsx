import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reserver',
  description:
    'Reservez votre session Cache Cache Killer — survival grandeur nature. Creneaux de 20 minutes, 2 a 10 joueurs, a partir de 12\u20ac.',
  alternates: { canonical: 'https://cachecachekiller.fr/reserver' },
}

export default function ReserverLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

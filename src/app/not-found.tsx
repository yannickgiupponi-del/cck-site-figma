import Link from 'next/link'
import { Button } from '@cck/ui'

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <p className="font-heading text-lg uppercase tracking-wider text-text-accent">
        Erreur 404
      </p>

      <h1 className="font-display text-5xl font-black text-text-primary sm:text-6xl">
        Page introuvable
      </h1>

      <p className="max-w-md font-body text-text-secondary">
        Cette page n&apos;existe pas ou a ete deplacee.
        Explorez nos autres pages pour continuer votre aventure.
      </p>

      {/* Rule 3: 1 seul CTA primaire visible — primary + ghost max */}
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <Link href="/">
          <Button variant="primary" size="lg">
            Retour a l&apos;accueil
          </Button>
        </Link>

        <Link href="/tarifs">
          <Button variant="ghost" size="lg">
            Voir les tarifs
          </Button>
        </Link>
      </div>
    </main>
  )
}

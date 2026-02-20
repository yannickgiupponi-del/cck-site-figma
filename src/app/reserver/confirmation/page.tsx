import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reservation confirmee | Cache Cache Killer',
  description: 'Votre reservation a ete confirmee avec succes.',
}

/**
 * Confirmation page — shown after successful Stripe Checkout.
 *
 * Stripe redirects here with the booking_id (transaction ID) as a search param.
 * The actual booking confirmation is handled by the Stripe webhook
 * (checkout.session.completed) which updates the stripe_transaction status.
 *
 * Rule 1: Touch targets 48px minimum.
 * Rule 9: Color never sole indicator — checkmark icon + text.
 */
export default async function ConfirmationPage({
  searchParams,
}: {
  searchParams: Promise<{ booking_id?: string }>
}) {
  const { booking_id } = await searchParams

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="mx-auto max-w-md">
        {/* Success icon — Rule 9: icon + color + text combined */}
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-feedback-success-bg border border-feedback-success-border mx-auto">
          <svg
            className="h-8 w-8 text-feedback-success-text"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="font-display text-2xl font-bold text-text-primary mb-4">
          Reservation confirmee !
        </h1>

        <p className="text-text-secondary mb-2">
          Votre paiement a ete accepte et votre reservation est confirmee.
        </p>

        {booking_id && (
          <p className="text-text-muted text-sm mb-6">
            Reference : <code className="text-text-accent font-mono">{booking_id}</code>
          </p>
        )}

        <p className="text-text-secondary mb-8">
          Un email de confirmation a ete envoye a l&apos;adresse indiquee.
          Pensez a arriver 15 minutes avant votre session.
        </p>

        {/* Rule 1: 48px touch target */}
        <Link
          href="/"
          prefetch={true}
          className="inline-flex min-h-[48px] items-center rounded-md bg-interactive-primary px-6 py-3 font-heading font-medium text-interactive-primary-fg transition-colors duration-150 hover:bg-interactive-primary-hover focus-visible:focus-ring"
        >
          Retour a l&apos;accueil
        </Link>
      </div>
    </main>
  )
}

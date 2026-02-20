'use client'

import { useEffect } from 'react'
import * as Sentry from '@sentry/nextjs'
import Link from 'next/link'
import { Button } from '@cck/ui'

export default function SiteError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('[site] Unhandled error:', error)
    Sentry.captureException(error)
  }, [error])

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
      {/* Error icon — Rule 9: icon + text, never color alone */}
      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-feedback-danger-border bg-feedback-danger-bg">
        <svg
          className="h-8 w-8 text-feedback-danger-text"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.168 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <h1 className="font-display text-4xl font-black text-text-primary sm:text-5xl">
        Une erreur est survenue
      </h1>

      {error.message && (
        <p className="max-w-md text-sm text-text-muted">
          {error.message}
        </p>
      )}

      <p className="max-w-md text-text-secondary">
        Nous nous excusons pour la gene occasionnee. Vous pouvez
        reessayer ou retourner a l&apos;accueil.
      </p>

      {/* Actions — Rule 1: 48px touch targets, Rule 3: 1 primary CTA */}
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <Button
          variant="primary"
          size="lg"
          onClick={reset}
        >
          Reessayer
        </Button>

        <Link href="/">
          <Button variant="ghost" size="lg">
            Retour a l&apos;accueil
          </Button>
        </Link>
      </div>
    </main>
  )
}

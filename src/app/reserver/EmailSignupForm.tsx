'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { joinWaitlist, type WaitlistState } from '@/lib/actions/waitlist-actions'
import { Button } from '@cck/ui'

/* ============================================
   INLINE SVG ICONS
   ============================================ */

function MailIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.704 5.296a1 1 0 010 1.414l-7.5 7.5a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 111.414-1.414L8.5 12.086l6.79-6.79a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function AlertIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z"
        clipRule="evenodd"
      />
    </svg>
  )
}

/* ============================================
   SUBMIT BUTTON — reads pending state from useFormStatus
   ============================================ */

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <div className="flex items-end">
      <Button variant="primary" size="lg" type="submit" disabled={pending} aria-disabled={pending}>
        <MailIcon />
        {pending ? 'Envoi...' : 'ME PR\u00c9VENIR'}
      </Button>
    </div>
  )
}

/* ============================================
   EMAIL SIGNUP FORM
   ============================================ */

export function EmailSignupForm() {
  const [state, formAction] = useActionState<WaitlistState, FormData>(joinWaitlist, null)

  // Once successfully subscribed, show a confirmation message instead of the form
  if (state?.success === true) {
    return (
      <div
        className="mx-auto flex w-full max-w-md items-start gap-3 rounded-md border border-[var(--color-feedback-success-border,theme(colors.green.700))] bg-[var(--color-feedback-success-bg,theme(colors.green.950))] px-4 py-3"
        role="status"
        aria-live="polite"
      >
        <CheckIcon />
        <p className="text-sm font-medium text-[var(--color-feedback-success-fg,theme(colors.green.300))]">
          Inscription confirm&eacute;e ! Nous vous pr&eacute;viendrons d&egrave;s l&apos;ouverture.
        </p>
      </div>
    )
  }

  return (
    <div className="flex w-full flex-col gap-3">
      <form
        className="mx-auto flex w-full max-w-md flex-col gap-3 sm:flex-row"
        action={formAction}
      >
        {/* Rule 8: Visible label above input */}
        <div className="flex flex-1 flex-col gap-1">
          <label
            htmlFor="notify-email"
            className="text-xs font-heading font-medium text-text-secondary"
          >
            Adresse email
          </label>
          <input
            id="notify-email"
            name="notify-email"
            type="email"
            placeholder="votre@email.fr"
            autoComplete="email"
            required
            aria-describedby={state?.success === false ? 'waitlist-error' : undefined}
            aria-invalid={state?.success === false ? true : undefined}
            className="h-12 w-full rounded-md border border-border-subtle bg-surface-raised px-4 text-sm text-text-primary placeholder:text-text-muted focus:border-[var(--color-gold-500)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)]/40"
          />
        </div>
        <SubmitButton />
      </form>

      {/* Rule 7: Inline validation — error state */}
      {/* Rule 9: Icon + text, never color alone */}
      {state?.success === false && (
        <div
          id="waitlist-error"
          className="mx-auto flex w-full max-w-md items-start gap-2"
          role="alert"
          aria-live="assertive"
        >
          <AlertIcon />
          <p className="text-sm text-[var(--color-feedback-danger-fg,theme(colors.red.400))]">
            {state.error}
          </p>
        </div>
      )}
    </div>
  )
}

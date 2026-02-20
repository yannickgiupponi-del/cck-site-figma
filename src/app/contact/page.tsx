'use client'

import { useState, useCallback, useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import Link from 'next/link'
import {
  AtmosphericSection,
  Button,
  Input,
  IconMail,
  IconMapPin,
  IconInstagram,
  IconTikTok,
  IconFacebook,
} from '@cck/ui'
import {
  submitContact,
  type ContactState,
} from '@/lib/actions/contact-actions'

/* ============================================
   METADATA (exported from a separate file for
   client components — see layout or head.tsx)
   Note: Next.js requires metadata in server
   components. For 'use client' pages, set
   metadata in a parent layout or use generateMetadata.
   ============================================ */

/* ============================================
   FORM VALIDATION — Rule 7: inline at blur
   ============================================ */

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

interface FormTouched {
  name: boolean
  email: boolean
  subject: boolean
  message: boolean
}

function validateField(
  field: keyof ContactFormData,
  value: string,
): string | undefined {
  switch (field) {
    case 'name':
      if (!value.trim()) return 'Le nom est requis'
      if (value.trim().length < 2)
        return 'Le nom doit contenir au moins 2 caract\u00e8res'
      return undefined
    case 'email':
      if (!value.trim()) return "L'email est requis"
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        return "L'email n'est pas valide"
      return undefined
    case 'subject':
      if (!value) return 'Veuillez s\u00e9lectionner un sujet'
      return undefined
    case 'message':
      if (!value.trim()) return 'Le message est requis'
      if (value.trim().length < 10)
        return 'Le message doit contenir au moins 10 caract\u00e8res'
      return undefined
    default:
      return undefined
  }
}

const SUBJECT_OPTIONS = [
  { value: '', label: 'Choisir un sujet...' },
  { value: 'question', label: 'Question' },
  { value: 'privatisation', label: 'Privatisation' },
  { value: 'presse', label: 'Presse' },
  { value: 'autre', label: 'Autre' },
] as const

/* ============================================
   SOCIAL LINKS
   ============================================ */

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/cachecachekiller',
    icon: <IconInstagram className="h-5 w-5" />,
  },
  {
    name: 'TikTok',
    href: 'https://tiktok.com/@cachecachekiller',
    icon: <IconTikTok className="h-5 w-5" />,
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/cachecachekiller',
    icon: <IconFacebook className="h-5 w-5" />,
  },
]

/* ============================================
   SUBMIT BUTTON — reads pending state from useFormStatus
   ============================================ */

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <div className="pt-2">
      <Button
        variant="primary"
        size="lg"
        type="submit"
        disabled={pending}
        aria-disabled={pending}
        className="w-full sm:w-auto"
      >
        {pending ? 'Envoi en cours...' : 'Envoyer le message'}
      </Button>
    </div>
  )
}

/* ============================================
   PAGE COMPONENT
   ============================================ */

export default function ContactPage() {
  const [state, formAction] = useActionState<ContactState, FormData>(
    submitContact,
    null,
  )

  // Client-side controlled state for blur validation (Rule 7)
  const [formValues, setFormValues] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<FormTouched>({
    name: false,
    email: false,
    subject: false,
    message: false,
  })

  const handleChange = useCallback(
    (field: keyof ContactFormData, value: string) => {
      setFormValues((prev) => ({ ...prev, [field]: value }))
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    },
    [],
  )

  const handleBlur = useCallback(
    (field: keyof ContactFormData) => {
      setTouched((prev) => ({ ...prev, [field]: true }))
      const error = validateField(field, formValues[field])
      setErrors((prev) => ({ ...prev, [field]: error }))
    },
    [formValues],
  )

  const isFieldValid = (field: keyof ContactFormData) =>
    touched[field] && !errors[field] && formValues[field].trim().length > 0

  /* ---- Success state ---- */
  if (state?.success === true) {
    return (
      <section className="flex flex-1 flex-col items-center justify-center gap-6 px-4 py-20 text-center">
        {/* Success icon — Rule 9: icon + text */}
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-feedback-success-border bg-feedback-success-bg">
          <svg
            className="h-8 w-8 text-feedback-success-text"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h1 className="font-display text-3xl font-black text-text-primary sm:text-4xl">
          Message envoy&eacute;
        </h1>
        <p className="max-w-md text-text-secondary">
          Merci pour votre message ! Notre &eacute;quipe reviendra vers vous
          dans les plus brefs d&eacute;lais (g&eacute;n&eacute;ralement sous 24
          heures).
        </p>
        <Link
          href="/"
          className="inline-flex min-h-[48px] items-center rounded-md bg-interactive-primary px-6 py-3 font-heading font-medium text-interactive-primary-fg transition-colors duration-150 motion-reduce:transition-none hover:bg-interactive-primary-hover focus-visible:focus-ring"
        >
          Retour &agrave; l&apos;accueil
        </Link>
      </section>
    )
  }

  return (
    <>
      {/* ============================================
          HERO
          ============================================ */}
      <section className="flex flex-col items-center gap-4 px-4 py-16 text-center sm:py-20">
        <p className="font-heading text-sm uppercase tracking-widest text-text-accent">
          &Eacute;changeons
        </p>
        <h1 className="font-display text-4xl font-black text-text-primary sm:text-5xl md:text-6xl">
          CONTACT
        </h1>
      </section>

      {/* ============================================
          CONTENT — Form + Sidebar
          ============================================ */}
      <AtmosphericSection separator>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Contact form — 3 columns */}
          <div className="lg:col-span-3">
            <form
              action={formAction}
              noValidate
              className="flex flex-col gap-5"
            >
              {/* Name — Rule 8: visible label */}
              <Input
                label="Nom complet"
                name="name"
                type="text"
                value={formValues.name}
                onChange={(e) => handleChange('name', e.target.value)}
                onBlur={() => handleBlur('name')}
                error={touched.name ? errors.name : undefined}
                success={isFieldValid('name')}
                placeholder="Jean Dupont"
                required
                autoComplete="name"
                size="lg"
              />

              {/* Email */}
              <Input
                label="Adresse email"
                name="email"
                type="email"
                value={formValues.email}
                onChange={(e) => handleChange('email', e.target.value)}
                onBlur={() => handleBlur('email')}
                error={touched.email ? errors.email : undefined}
                success={isFieldValid('email')}
                placeholder="jean@exemple.fr"
                required
                autoComplete="email"
                size="lg"
              />

              {/* Subject — Rule 8: visible label above select */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="contact-subject"
                  className="text-sm font-medium text-text-primary font-body"
                >
                  Sujet{' '}
                  <span
                    className="text-feedback-danger-text"
                    aria-hidden="true"
                  >
                    *
                  </span>
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  value={formValues.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  onBlur={() => handleBlur('subject')}
                  aria-invalid={
                    touched.subject && errors.subject ? 'true' : undefined
                  }
                  aria-describedby={
                    touched.subject && errors.subject
                      ? 'subject-error'
                      : undefined
                  }
                  className={[
                    'h-12 w-full rounded-md bg-night-100 px-3 font-body text-text-primary',
                    'border outline-none transition-colors duration-150 motion-reduce:transition-none',
                    'focus-visible:focus-ring',
                    touched.subject && errors.subject
                      ? 'border-feedback-danger focus:border-feedback-danger-text'
                      : isFieldValid('subject')
                        ? 'border-feedback-success focus:border-feedback-success-text'
                        : 'border-night-200 focus:border-border-accent',
                  ].join(' ')}
                >
                  {SUBJECT_OPTIONS.map((opt) => (
                    <option
                      key={opt.value}
                      value={opt.value}
                      className="bg-surface-raised text-text-primary"
                    >
                      {opt.label}
                    </option>
                  ))}
                </select>
                {/* Error — Rule 9: icon + text */}
                {touched.subject && errors.subject && (
                  <p
                    id="subject-error"
                    className="flex items-center gap-1 text-xs font-medium text-feedback-danger-text"
                    role="alert"
                  >
                    <svg
                      className="h-3.5 w-3.5 shrink-0"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm-.75 3.75a.75.75 0 011.5 0v3.5a.75.75 0 01-1.5 0v-3.5zM8 11a1 1 0 100 2 1 1 0 000-2z" />
                    </svg>
                    {errors.subject}
                  </p>
                )}
                {/* Success — Rule 9 */}
                {isFieldValid('subject') && (
                  <p className="flex items-center gap-1 text-xs font-medium text-feedback-success-text">
                    <svg
                      className="h-3.5 w-3.5 shrink-0"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm3.22 5.97l-3.5 3.5a.75.75 0 01-1.06 0l-1.5-1.5a.75.75 0 111.06-1.06l.97.97 2.97-2.97a.75.75 0 111.06 1.06z" />
                    </svg>
                    Valide
                  </p>
                )}
              </div>

              {/* Message — Rule 8: visible label */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium text-text-primary font-body"
                >
                  Message{' '}
                  <span
                    className="text-feedback-danger-text"
                    aria-hidden="true"
                  >
                    *
                  </span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formValues.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  onBlur={() => handleBlur('message')}
                  rows={5}
                  placeholder="D&eacute;crivez votre demande..."
                  aria-invalid={
                    touched.message && errors.message ? 'true' : undefined
                  }
                  aria-describedby={
                    touched.message && errors.message
                      ? 'message-error'
                      : undefined
                  }
                  className={[
                    'w-full rounded-md bg-night-100 px-3 py-3 font-body text-text-primary',
                    'border outline-none transition-colors duration-150 motion-reduce:transition-none',
                    'placeholder:text-text-muted resize-y',
                    'focus-visible:focus-ring',
                    touched.message && errors.message
                      ? 'border-feedback-danger focus:border-feedback-danger-text'
                      : isFieldValid('message')
                        ? 'border-feedback-success focus:border-feedback-success-text'
                        : 'border-night-200 focus:border-border-accent',
                  ].join(' ')}
                />
                {/* Error */}
                {touched.message && errors.message && (
                  <p
                    id="message-error"
                    className="flex items-center gap-1 text-xs font-medium text-feedback-danger-text"
                    role="alert"
                  >
                    <svg
                      className="h-3.5 w-3.5 shrink-0"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm-.75 3.75a.75.75 0 011.5 0v3.5a.75.75 0 01-1.5 0v-3.5zM8 11a1 1 0 100 2 1 1 0 000-2z" />
                    </svg>
                    {errors.message}
                  </p>
                )}
                {/* Success */}
                {isFieldValid('message') && (
                  <p className="flex items-center gap-1 text-xs font-medium text-feedback-success-text">
                    <svg
                      className="h-3.5 w-3.5 shrink-0"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm3.22 5.97l-3.5 3.5a.75.75 0 01-1.06 0l-1.5-1.5a.75.75 0 111.06-1.06l.97.97 2.97-2.97a.75.75 0 111.06 1.06z" />
                    </svg>
                    Valide
                  </p>
                )}
              </div>

              {/* Server-side error — Rule 9: icon + text */}
              {state?.success === false && (
                <div
                  className="flex items-start gap-2 rounded-md border border-feedback-danger bg-feedback-danger-bg px-4 py-3"
                  role="alert"
                  aria-live="assertive"
                >
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-feedback-danger-text"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm-.75 3.75a.75.75 0 011.5 0v3.5a.75.75 0 01-1.5 0v-3.5zM8 11a1 1 0 100 2 1 1 0 000-2z" />
                  </svg>
                  <p className="text-sm font-medium text-feedback-danger-text">
                    {state.error}
                  </p>
                </div>
              )}

              {/* Submit — Rule 3: 1 primary CTA, Rule 1: 48px touch target */}
              <SubmitButton />
            </form>
          </div>

          {/* Sidebar info — 2 columns */}
          <div className="flex flex-col gap-8 lg:col-span-2">
            {/* Email */}
            <div>
              <h2 className="mb-3 font-heading text-lg font-bold text-text-primary">
                Email
              </h2>
              <a
                href="mailto:contact@cachecachekiller.fr"
                className="inline-flex min-h-[48px] items-center gap-2 text-sm text-text-primary transition-colors duration-150 motion-reduce:transition-none hover:text-text-accent"
              >
                <IconMail className="h-4 w-4 shrink-0 text-text-accent" />
                contact@cachecachekiller.fr
              </a>
            </div>

            {/* Social */}
            <div>
              <h2 className="mb-3 font-heading text-lg font-bold text-text-primary">
                R&eacute;seaux sociaux
              </h2>
              <ul className="flex flex-col gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[48px] items-center gap-2 text-sm text-text-primary transition-colors duration-150 motion-reduce:transition-none hover:text-text-accent"
                    >
                      <span className="shrink-0 text-text-accent">
                        {social.icon}
                      </span>
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location */}
            <div>
              <h2 className="mb-3 font-heading text-lg font-bold text-text-primary">
                Localisation
              </h2>
              <div className="flex items-start gap-2 text-sm text-text-primary">
                <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-text-accent" />
                <address className="not-italic leading-relaxed">
                  <strong>Cache Cache Killer</strong>
                  <br />
                  Essonne, &Icirc;le-de-France
                  <br />
                  <span className="text-text-secondary">
                    Adresse exacte communiqu&eacute;e &agrave; l&apos;ouverture
                    (octobre 2026)
                  </span>
                </address>
              </div>
            </div>
          </div>
        </div>
      </AtmosphericSection>
    </>
  )
}

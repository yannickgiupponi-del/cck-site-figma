import Link from 'next/link'
import { CckLogo } from '@cck/ui'

const NAV_LINKS = [
  { href: '/concept', label: "L'experience" },
  { href: '/reserver', label: 'Reserver' },
  { href: '/classement', label: 'Classement' },
  { href: '/a-propos', label: 'A propos' },
] as const

const LEGAL_LINKS = [
  { href: '/mentions-legales', label: 'Mentions legales' },
  { href: '/cgv', label: 'CGV' },
  { href: '/mentions-legales#rgpd', label: 'Politique de confidentialite' },
  { href: '/mentions-legales#cookies', label: 'Gestion des cookies' },
] as const

/**
 * SiteFooter — Footer with CckLogo, nav columns, social links, copyright.
 * Server component — no interactivity needed.
 * Rule 25: EU-first — "Fait avec coeur en France".
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-border-subtle bg-[var(--color-night-50)]" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Logo & tagline */}
          <div className="flex flex-col gap-3 lg:col-span-2">
            <Link
              href="/"
              className="inline-flex self-start focus-visible:focus-ring rounded-sm"
              aria-label="Cache Cache Killer - Accueil"
            >
              <CckLogo variant="compact" size="sm" />
            </Link>
            <p className="text-sm text-text-secondary">
              Le Cirque D&eacute;lav&eacute; — Survival grandeur nature. Une
              exp&eacute;rience immersive unique.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider text-text-accent">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-[44px] items-center text-sm text-text-primary hover:text-text-accent transition-colors duration-150 focus-visible:focus-ring rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informations legales */}
          <div>
            <h3 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider text-text-accent">
              Informations legales
            </h3>
            <ul className="flex flex-col gap-2">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-[44px] items-center text-sm text-text-primary hover:text-text-accent transition-colors duration-150 focus-visible:focus-ring rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nous soutenir, Nous suivre & Contact */}
          <div className="flex flex-col gap-6">
            {/* Nous soutenir */}
            <div>
              <h3 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider text-text-accent">
                Nous soutenir
              </h3>
              <a
                href="https://fr.ulule.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center text-sm text-text-primary hover:text-text-accent transition-colors duration-150 focus-visible:focus-ring rounded-sm"
              >
                Campagne Ulule &rarr;
              </a>
            </div>

            {/* Nous suivre */}
            <div>
              <h3 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider text-text-accent">
                Nous suivre
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/cachecachekiller"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-md text-text-secondary hover:text-text-accent hover:bg-surface-raised-hover transition-colors duration-150 focus-visible:focus-ring"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://tiktok.com/@cachecachekiller"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-md text-text-secondary hover:text-text-accent hover:bg-surface-raised-hover transition-colors duration-150 focus-visible:focus-ring"
                  aria-label="TikTok"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.51a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.47v-7.15a8.16 8.16 0 005.58 2.18v-3.44a4.85 4.85 0 01-3-.57v.01h3V6.69z" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com/cachecachekiller"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-md text-text-secondary hover:text-text-accent hover:bg-surface-raised-hover transition-colors duration-150 focus-visible:focus-ring"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-text-primary">
              <svg className="h-4 w-4 shrink-0 text-text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Essonne, &Icirc;le-de-France</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center gap-2 border-t border-border-subtle pt-6 text-xs text-text-secondary sm:flex-row sm:justify-between">
          <p>&copy; 2026 Cache Cache Killer. Tous droits reserves.</p>
          <p>Fait avec <span aria-label="amour">&#10084;&#65039;</span> en France</p>
        </div>
      </div>
    </footer>
  )
}

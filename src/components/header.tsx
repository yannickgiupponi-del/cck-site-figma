'use client'

import { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button, CckLogo } from '@cck/ui'

const NAV_LINKS = [
  { href: '/concept', label: "L'experience" },
  { href: '/reserver', label: 'Reserver' },
  { href: '/classement', label: 'Classement' },
  { href: '/a-propos', label: 'A propos' },
] as const

/**
 * SiteHeader — Sticky header with CckLogo, desktop nav and mobile hamburger menu.
 * Rule 1: Hamburger 48x48px touch target.
 * Rule 5: prefers-reduced-motion for transitions.
 */
export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  const closeMobile = useCallback(() => setMobileOpen(false), [])

  // Close mobile menu on route change
  // Deferred to avoid synchronous setState in effect body (react-hooks/set-state-in-effect)
  useEffect(() => {
    const timer = setTimeout(() => setMobileOpen(false), 0)
    return () => clearTimeout(timer)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header className="sticky top-0 z-sticky border-b border-border-subtle bg-[var(--color-surface-warm)]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center focus-visible:focus-ring rounded-sm"
          aria-label="Cache Cache Killer - Accueil"
        >
          <CckLogo variant="compact" size="sm" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Navigation principale">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                className={[
                  'rounded-md px-3 py-2 text-sm font-heading font-medium transition-colors duration-150',
                  'min-h-[48px] flex items-center', // Rule 1: 48px touch target
                  'focus-visible:focus-ring',
                  isActive
                    ? 'text-text-accent bg-surface-raised'
                    : 'text-text-primary hover:text-text-accent hover:bg-surface-raised-hover',
                ].join(' ')}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </Link>
            )
          })}

          <Link href="/connexion" className="ml-2">
            <Button variant="secondary" size="lg">
              Connexion
            </Button>
          </Link>
        </nav>

        {/* Mobile hamburger — Rule 1: 48x48px min */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="flex h-12 w-12 items-center justify-center rounded-md text-text-primary hover:bg-surface-raised-hover focus-visible:focus-ring md:hidden"
          aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? (
            /* Close icon */
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Hamburger icon */
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile full-screen overlay nav */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="fixed inset-0 top-16 z-overlay bg-surface-base/95 backdrop-blur-lg md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
        >
          <nav className="flex flex-col gap-2 px-4 py-6" aria-label="Navigation principale mobile">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={true}
                  onClick={closeMobile}
                  className={[
                    'flex min-h-[48px] items-center rounded-lg px-4 py-3 font-heading text-lg font-medium transition-colors duration-150',
                    'focus-visible:focus-ring',
                    isActive
                      ? 'text-text-accent bg-surface-raised'
                      : 'text-text-primary hover:text-text-accent hover:bg-surface-raised-hover',
                  ].join(' ')}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              )
            })}

            <div className="mt-4 border-t border-border-subtle pt-4">
              <Link href="/connexion" onClick={closeMobile}>
                <Button variant="primary" size="lg" className="w-full">
                  Connexion
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

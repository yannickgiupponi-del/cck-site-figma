/**
 * Next.js Middleware — @cck/site (public website)
 * Rule 13: CSP nonce — scripts inline via nonce, never unsafe-inline.
 * Phase 2: Supabase session refresh for logged-in visitors (site is mostly public).
 */
import type { NextRequest, NextResponse } from 'next/server'
import { withCspNonce } from '@cck/config/middleware/csp'
import { createMiddlewareClient } from '@cck/config/supabase/middleware'

export async function middleware(request: NextRequest): Promise<NextResponse> {
  // Step 1: Apply CSP nonce (Rule 13)
  const cspResponse = withCspNonce(request, {
    extraScriptSrc: ['https://plausible.io'],
    extraConnectSrc: ['https://plausible.io'],
  })

  // Step 2: Refresh Supabase auth session if user is logged in
  // Site is public — no redirect, just keep the session alive
  const { supabase } = createMiddlewareClient(request, cspResponse)
  await supabase.auth.getUser()

  return cspResponse
}

/**
 * Matcher config inlined for static analysis by Next.js.
 * Source: @cck/config/middleware/csp — cspMatcherConfig
 */
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$|api/).*)',
  ],
}

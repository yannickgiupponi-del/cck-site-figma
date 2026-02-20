'use client'

import { useFadeIn } from '@cck/hooks'

/**
 * Client wrapper for scroll-triggered fade-in.
 * Use in server components that can't call hooks directly.
 * Rule 5: respects prefers-reduced-motion via useFadeIn.
 */
export function FadeInSection({
  children,
  delay,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const { ref, style } = useFadeIn({ delay })

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  )
}

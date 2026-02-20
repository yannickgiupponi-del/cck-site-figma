import { Skeleton, SkeletonText, SkeletonCard } from '@cck/ui'

/**
 * Site loading skeleton — Rule 10: Skeleton > Spinner.
 * Matches typical site page layout: hero + content cards.
 * Rule 5: animate-pulse respects prefers-reduced-motion via Tailwind defaults.
 */
export default function SiteLoading() {
  return (
    <main className="flex flex-col" aria-busy="true" aria-label="Chargement de la page">
      {/* Hero skeleton */}
      <section className="flex flex-col items-center gap-4 px-4 py-16 sm:py-20">
        {/* Eyebrow */}
        <Skeleton className="h-4 w-24" />
        {/* Title */}
        <Skeleton className="h-12 w-72 sm:h-14 sm:w-96" />
        {/* Subtitle */}
        <Skeleton className="h-5 w-64 sm:w-80" />
      </section>

      {/* Content skeletons */}
      <section className="px-4 pb-16">
        <div className="mx-auto max-w-4xl">
          {/* Text block */}
          <div className="mb-10">
            <SkeletonText lines={4} />
          </div>

          {/* Card grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <SkeletonCard />
            <SkeletonCard />
          </div>
        </div>
      </section>
    </main>
  )
}

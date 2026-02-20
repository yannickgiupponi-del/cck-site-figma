import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AtmosphericSection,
  SmokeBackground,
  Badge,
  Button,
} from '@cck/ui'
import { getTopPlayers } from '@/lib/dal/leaderboard'

/** ISR: revalidate every 5 minutes (leaderboard changes frequently during sessions) */
export const revalidate = 300

export const metadata: Metadata = {
  title: 'Classement',
  description:
    'Classement mensuel des joueurs Cache Cache Killer. D\u00e9couvrez les champions de l\u2019ar\u00e8ne.',
  alternates: { canonical: 'https://cachecachekiller.fr/classement' },
}

/* ============================================
   TYPES — Structured for future real data
   ============================================ */

interface LeaderboardPlayer {
  rank: number
  pseudo: string
  level: number
  camp: 'survivor' | 'killer' | null
  totalXp: number
}

/* ============================================
   PODIUM COMPONENT
   Semantic tokens: --color-rank-1, --color-rank-2, --color-rank-3
   ============================================ */

function Podium({ players }: { players: LeaderboardPlayer[] }) {
  if (players.length === 0) {
    return (
      <div className="mx-auto max-w-md py-12 text-center">
        {/* Empty state icon — Rule 9: icon + text */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-border-subtle bg-surface-raised">
          <svg
            className="h-10 w-10 text-text-muted"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-2.77.672c-.992 0-1.929-.24-2.77-.672"
            />
          </svg>
        </div>
        <p className="font-serif text-lg italic text-text-primary">
          L&apos;ar&egrave;ne est silencieuse... pour l&apos;instant.
        </p>
        <p className="mt-3 text-sm text-text-secondary">
          Le classement s&apos;activera &agrave; l&apos;ouverture en octobre
          2026.
        </p>
      </div>
    )
  }

  const top3 = players.slice(0, 3)
  // Display order: 2nd, 1st, 3rd for podium visual
  const podiumOrder = [top3[1], top3[0], top3[2]].filter((p): p is LeaderboardPlayer => p !== undefined)

  return (
    <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:items-end sm:gap-8">
      {podiumOrder.map((player) => {
        const isFirst = player.rank === 1
        const isSecond = player.rank === 2
        const circleSize = isFirst ? 'h-20 w-20' : 'h-16 w-16'
        const barHeight = isFirst
          ? 'h-28 sm:h-32'
          : isSecond
            ? 'h-20 sm:h-24'
            : 'h-16 sm:h-20'
        const borderColor = isFirst
          ? 'border-[var(--color-rank-1,#b89040)]'
          : isSecond
            ? 'border-[var(--color-rank-2,#a0a0a0)]'
            : 'border-[var(--color-rank-3,#cd7f32)]'
        const textColor = isFirst
          ? 'text-[var(--color-rank-1,#b89040)]'
          : isSecond
            ? 'text-[var(--color-rank-2,#a0a0a0)]'
            : 'text-[var(--color-rank-3,#cd7f32)]'
        const barBg = isFirst
          ? 'from-[var(--color-rank-1,#b89040)]/20 to-[var(--color-rank-1,#b89040)]/5'
          : isSecond
            ? 'from-[var(--color-rank-2,#a0a0a0)]/20 to-[var(--color-rank-2,#a0a0a0)]/5'
            : 'from-[var(--color-rank-3,#cd7f32)]/20 to-[var(--color-rank-3,#cd7f32)]/5'
        const orderClass =
          player.rank === 1
            ? 'order-1 sm:order-2'
            : player.rank === 2
              ? 'order-2 sm:order-1'
              : 'order-3'

        return (
          <div
            key={player.rank}
            className={`flex flex-col items-center gap-3 ${orderClass}`}
          >
            {/* Crown for 1st */}
            {isFirst && (
              <svg
                className="h-6 w-6 text-[var(--color-rank-1,#b89040)]"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-label="Couronne du premier"
              >
                <path d="M2 12l2-7 4 4 4-4 2 7H2zM4 13h8v1H4v-1z" />
              </svg>
            )}
            <div
              className={`flex ${circleSize} items-center justify-center rounded-full border-2 ${borderColor} bg-surface-raised font-display font-bold ${textColor} ${isFirst ? 'text-2xl' : 'text-xl'}`}
              style={
                isFirst
                  ? { boxShadow: '0 0 20px rgba(184, 144, 64, 0.3)' }
                  : undefined
              }
              aria-label={`${player.rank === 1 ? 'Premi\u00e8re' : player.rank === 2 ? 'Deuxi\u00e8me' : 'Troisi\u00e8me'} place`}
            >
              {player.rank}
            </div>
            <div
              className={`w-24 ${isFirst ? 'w-28' : ''} rounded-t-lg bg-gradient-to-t ${barBg} ${barHeight}`}
            />
            <span className="font-heading text-sm font-medium text-text-primary">
              {player.pseudo}
            </span>
            {player.camp !== null && (
              <Badge
                variant={player.camp === 'survivor' ? 'survivor' : 'killer'}
                size="sm"
              >
                {player.camp === 'survivor' ? 'Survivant' : 'Tueur'}
              </Badge>
            )}
            <span className="font-mono text-xs text-text-secondary">
              {player.totalXp.toLocaleString('fr-FR')} XP
            </span>
          </div>
        )
      })}
    </div>
  )
}

/* ============================================
   PLAYER TABLE COMPONENT
   ============================================ */

function PlayerTable({ players }: { players: LeaderboardPlayer[] }) {
  if (players.length === 0) return null

  return (
    <div className="mt-10 overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border-subtle text-left">
            <th className="px-3 py-3 font-heading font-medium text-text-secondary">
              #
            </th>
            <th className="px-3 py-3 font-heading font-medium text-text-secondary">
              Pseudo
            </th>
            <th className="px-3 py-3 font-heading font-medium text-text-secondary">
              Niveau
            </th>
            <th className="px-3 py-3 font-heading font-medium text-text-secondary">
              Camp
            </th>
            <th className="px-3 py-3 text-right font-heading font-medium text-text-secondary">
              XP Total
            </th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr
              key={player.rank}
              className="border-b border-border-subtle transition-colors duration-150 hover:bg-surface-raised-hover"
            >
              <td className="px-3 py-3 font-heading font-bold text-text-accent">
                {player.rank}
              </td>
              <td className="px-3 py-3 font-heading font-medium text-text-primary">
                {player.pseudo}
              </td>
              <td className="px-3 py-3 text-text-primary">
                Nv. {player.level}
              </td>
              <td className="px-3 py-3">
                {player.camp !== null ? (
                  <Badge
                    variant={player.camp === 'survivor' ? 'survivor' : 'killer'}
                    size="sm"
                  >
                    {player.camp === 'survivor' ? 'Survivant' : 'Tueur'}
                  </Badge>
                ) : (
                  <span className="text-xs text-text-muted">—</span>
                )}
              </td>
              <td className="px-3 py-3 text-right font-mono text-text-primary">
                {player.totalXp.toLocaleString('fr-FR')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ============================================
   HOW IT WORKS DATA
   ============================================ */

const HOW_IT_WORKS = [
  {
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 16 16"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm-.25 3a.75.75 0 011.5 0v4.25l2.5 1.5a.75.75 0 01-.75 1.3L8.25 9.2V4z" />
      </svg>
    ),
    text: 'Gagnez de l\u2019XP \u00e0 chaque partie',
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 16 16"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M2 3a1 1 0 011-1h10a1 1 0 011 1v1H2V3zm0 2h12v7a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm5 2a.75.75 0 000 1.5h2a.75.75 0 000-1.5H7z" />
      </svg>
    ),
    text: 'Le classement se r\u00e9initialise chaque mois',
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 16 16"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M8 1l2 4 4.5.65-3.25 3.17.77 4.48L8 11.27 3.98 13.3l.77-4.48L1.5 5.65 6 5z" />
      </svg>
    ),
    text: 'Les meilleurs joueurs sont mis en avant ici',
  },
]

/* ============================================
   PAGE COMPONENT
   ============================================ */

export default async function ClassementPage() {
  const currentMonth = new Date().toLocaleDateString('fr-FR', {
    month: 'long',
    year: 'numeric',
  })

  // Fetch top 20 players — returns [] on error (pre-launch, missing env, DB down)
  const rawPlayers = await getTopPlayers(20)

  // Map SiteLeaderboardPlayer to the local LeaderboardPlayer type used by Podium/PlayerTable
  const monthlyPlayers: LeaderboardPlayer[] = rawPlayers.map((p) => ({
    rank: p.rank,
    pseudo: p.pseudo,
    level: p.level,
    camp: p.camp,
    totalXp: p.totalXp,
  }))

  return (
    <>
      {/* ============================================
          HERO
          ============================================ */}
      <section className="relative flex flex-col items-center gap-4 overflow-hidden px-4 py-16 text-center sm:py-20">
        <SmokeBackground variant="arene" />
        <p className="font-heading text-sm uppercase tracking-widest text-text-accent">
          Les champions de l&apos;ar&egrave;ne
        </p>
        <h1 className="font-display text-4xl font-black text-text-primary sm:text-5xl md:text-6xl">
          CLASSEMENT
        </h1>
      </section>

      {/* ============================================
          MONTHLY LEADERBOARD
          ============================================ */}
      <AtmosphericSection
        subtitle="CLASSEMENT DU MOIS"
        separator
        stripes
        id="classement-mensuel"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-display text-2xl font-bold text-text-primary sm:text-3xl">
            Classement de{' '}
            <span className="capitalize text-text-accent">{currentMonth}</span>
          </h2>

          <Podium players={monthlyPlayers} />
          <PlayerTable players={monthlyPlayers} />
        </div>
      </AtmosphericSection>

      {/* ============================================
          HOW IT WORKS
          ============================================ */}
      <AtmosphericSection subtitle="COMMENT CA MARCHE" separator>
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
          {HOW_IT_WORKS.map((item) => (
            <div
              key={item.text}
              className="flex flex-col items-center gap-3 rounded-lg border border-border-subtle bg-surface-raised p-6 text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-recessed text-text-accent">
                {item.icon}
              </div>
              <p className="font-heading text-sm font-medium text-text-primary">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </AtmosphericSection>

      {/* ============================================
          CTA — Rule 3: 1 single primary CTA
          ============================================ */}
      <AtmosphericSection separator className="text-center">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6">
          <h2 className="font-display text-2xl font-bold italic text-text-primary sm:text-3xl">
            Rejoignez l&apos;ar&egrave;ne
          </h2>
          <p className="text-text-secondary">
            R&eacute;servez votre session et commencez &agrave; grimper dans le
            classement.
          </p>
          <Link href="/reserver">
            <Button variant="danger" size="lg">
              R&Eacute;SERVER UNE SESSION
            </Button>
          </Link>
        </div>
      </AtmosphericSection>
    </>
  )
}

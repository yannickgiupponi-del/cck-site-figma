import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Reservez votre session — Cache Cache Killer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

async function loadBodoniModa(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      'https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@900',
      { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; NextJS/15)' } },
    ).then((res) => res.text())

    const match = css.match(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+\.woff2)\)/)
    if (!match?.[1]) return null

    return await fetch(match[1]).then((res) => res.arrayBuffer())
  } catch {
    return null
  }
}

export default async function Image() {
  const fontData = await loadBodoniModa()

  const fonts: NonNullable<ConstructorParameters<typeof ImageResponse>[1]>['fonts'] = fontData
    ? [{ name: 'Bodoni Moda', data: fontData, weight: 900, style: 'normal' }]
    : []

  const brandFont = fontData ? '"Bodoni Moda", serif' : 'system-ui, sans-serif'

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: '#0d0d12',
          color: '#d8ccb4',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Main heading */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            fontFamily: brandFont,
            color: '#b89040',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          RESERVEZ VOTRE SESSION
        </div>
        {/* Subtitle */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '24px',
            gap: '4px',
          }}
        >
          <div
            style={{
              fontSize: 36,
              fontWeight: 900,
              fontFamily: brandFont,
              fontStyle: 'italic',
              color: '#c43030',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Cache Cache Killer
          </div>
          <div
            style={{
              fontSize: 24,
              color: '#d8ccb4',
              opacity: 0.8,
              marginTop: '8px',
            }}
          >
            Survival Grandeur Nature
          </div>
        </div>
        {/* Bottom info */}
        <div
          style={{
            display: 'flex',
            gap: '32px',
            marginTop: '48px',
            fontSize: 22,
            color: '#b89040',
          }}
        >
          <span>20 min/session</span>
          <span style={{ display: 'flex' }}>•</span>
          <span>2-10 joueurs</span>
          <span style={{ display: 'flex' }}>•</span>
          <span>Des 12€</span>
        </div>
      </div>
    ),
    { ...size, fonts },
  )
}

import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'DualScript — Vertical Software for Professionals'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#080d14',
          position: 'relative',
        }}
      >
        {/* Grid texture — solid overlay; pixel gradients unsupported in @vercel/og */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: '#3ecfff0a',
            opacity: 0.15,
          }}
        />

        {/* Orb left */}
        <div
          style={{
            position: 'absolute',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #0055cc, transparent)',
            opacity: 0.25,
            top: '-100px',
            left: '-100px',
            display: 'flex',
          }}
        />

        {/* Orb right */}
        <div
          style={{
            position: 'absolute',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #002a55, transparent)',
            opacity: 0.2,
            bottom: '-80px',
            right: '-60px',
            display: 'flex',
          }}
        />

        {/* Logo text fallback — clean wordmark */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            position: 'relative',
          }}
        >
          <div
            style={{
              fontSize: '96px',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: '#f0f0ee',
              display: 'flex',
              fontFamily: 'sans-serif',
            }}
          >
            Dual
            <span style={{ color: '#3ecfff' }}>Script</span>
          </div>
          <div
            style={{
              fontSize: '22px',
              fontWeight: 400,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#68778a',
              fontFamily: 'sans-serif',
            }}
          >
            Vertical Software for Professionals
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}

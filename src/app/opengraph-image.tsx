import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Augustine Okechukwu Chima — Software Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#04100c',
        color: '#F5F0E8',
        fontFamily: 'system-ui, sans-serif',
        padding: 60,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 80,
          height: 80,
          borderRadius: 20,
          background: '#66F2C2',
          color: '#04100c',
          fontSize: 36,
          fontWeight: 900,
          marginBottom: 24,
        }}
      >
        AC
      </div>
      <h1
        style={{
          fontSize: 64,
          fontWeight: 900,
          letterSpacing: '-0.02em',
          textAlign: 'center',
          lineHeight: 1.1,
          margin: 0,
          marginBottom: 16,
          textTransform: 'uppercase',
        }}
      >
        Augustine Okechukwu
        <br />
        Chima
      </h1>
      <p
        style={{
          fontSize: 28,
          color: '#66F2C2',
          fontWeight: 700,
          textAlign: 'center',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          margin: 0,
        }}
      >
        Software Developer &middot; Frontend &middot; Full-Stack
      </p>
    </div>,
    {
      ...size,
    },
  )
}

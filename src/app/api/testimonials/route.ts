import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, message, vibe } = body

    if (!name || !message) {
      return NextResponse.json({ error: 'name and message are required' }, { status: 400 })
    }

    if (!resend) {
      console.log('Testimonial submission (no Resend key):', { name, message, vibe })
      return NextResponse.json({ success: true })
    }

    await resend.emails.send({
      from: 'Portfolio Vibe Check <onboarding@resend.dev>',
      to: 'augustinechima17@gmail.com',
      subject: `✨ New testimonial vibe from ${name}`,
      text: `Name: ${name}\nVibe: ${vibe || 'N/A'}\n\nMessage:\n${message}`,
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }
}

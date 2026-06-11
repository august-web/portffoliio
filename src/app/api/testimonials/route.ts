import { NextResponse } from 'next/server'

const BLOB_ID = process.env.JSONBLOB_TESTIMONIALS_ID
const BLOB_URL = `https://jsonblob.com/api/jsonBlob/${BLOB_ID}`

interface StoredTestimonial {
  name: string
  message: string
  vibe: string
  createdAt: string
}

async function readAll(): Promise<StoredTestimonial[]> {
  if (!BLOB_ID) return []
  try {
    const res = await fetch(BLOB_URL)
    if (!res.ok) return []
    return await res.json()
  } catch {
    return []
  }
}

async function writeAll(data: StoredTestimonial[]): Promise<boolean> {
  if (!BLOB_ID) return false
  try {
    const res = await fetch(BLOB_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    return res.ok
  } catch {
    return false
  }
}

export async function GET() {
  const testimonials = await readAll()
  return NextResponse.json(testimonials)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, message, vibe } = body

    if (!name || !message) {
      return NextResponse.json({ error: 'name and message are required' }, { status: 400 })
    }

    const entry: StoredTestimonial = {
      name: name.trim(),
      message: message.trim(),
      vibe: vibe || '',
      createdAt: new Date().toISOString(),
    }

    const all = await readAll()
    all.unshift(entry)
    const saved = await writeAll(all)

    if (!saved) {
      return NextResponse.json({ error: 'Failed to save.' }, { status: 500 })
    }

    return NextResponse.json({ success: true, testimonial: entry })
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }
}

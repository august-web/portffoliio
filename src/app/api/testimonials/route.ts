import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const DATA_DIR = process.env.NODE_ENV === 'production' ? '/tmp' : path.join(process.cwd(), 'data')

const DATA_FILE = path.join(DATA_DIR, 'testimonials.json')

interface StoredTestimonial {
  name: string
  message: string
  vibe: string
  createdAt: string
}

function readAll(): StoredTestimonial[] {
  try {
    if (!fs.existsSync(DATA_FILE)) return []
    const raw = fs.readFileSync(DATA_FILE, 'utf-8')
    return JSON.parse(raw)
  } catch {
    return []
  }
}

function appendOne(t: StoredTestimonial): void {
  const all = readAll()
  all.unshift(t)
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
  }
  fs.writeFileSync(DATA_FILE, JSON.stringify(all, null, 2))
}

export async function GET() {
  const testimonials = readAll()
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

    appendOne(entry)

    return NextResponse.json({ success: true, testimonial: entry })
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }
}

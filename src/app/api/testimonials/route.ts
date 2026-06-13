import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const BLOB_ID = process.env.JSONBLOB_TESTIMONIALS_ID
const BLOB_URL = `https://jsonblob.com/api/jsonBlob/${BLOB_ID}`
const DATA_FILE = path.join(process.cwd(), 'src', 'data', 'testimonials.json')

interface StoredTestimonial {
  name: string
  message: string
  vibe: string
  createdAt: string
}

async function readLocal(): Promise<StoredTestimonial[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, 'utf-8')
    return JSON.parse(raw)
  } catch {
    return []
  }
}

async function writeLocal(data: StoredTestimonial[]): Promise<boolean> {
  try {
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8')
    return true
  } catch {
    return false
  }
}

async function readRemote(): Promise<StoredTestimonial[] | null> {
  if (!BLOB_ID) return null
  try {
    const res = await fetch(BLOB_URL, { signal: AbortSignal.timeout(3000) })
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}

async function writeRemote(data: StoredTestimonial[]): Promise<boolean> {
  if (!BLOB_ID) return false
  try {
    const res = await fetch(BLOB_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      signal: AbortSignal.timeout(3000),
    })
    return res.ok
  } catch {
    return false
  }
}

export async function GET() {
  const remote = await readRemote()
  if (remote) {
    return NextResponse.json(remote)
  }
  const local = await readLocal()
  return NextResponse.json(local)
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

    const all = await readLocal()
    all.unshift(entry)

    const remoteSaved = await writeRemote(all)
    const localSaved = await writeLocal(all)

    if (!remoteSaved && !localSaved) {
      return NextResponse.json({ error: 'Failed to save.' }, { status: 500 })
    }

    return NextResponse.json({ success: true, testimonial: entry })
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }
}

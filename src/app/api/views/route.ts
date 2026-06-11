import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const DATA_DIR = process.env.NODE_ENV === 'production' ? '/tmp' : path.join(process.cwd(), 'data')

const DATA_FILE = path.join(DATA_DIR, 'views.json')

function readViews(): number {
  try {
    if (!fs.existsSync(DATA_FILE)) return 0
    const raw = fs.readFileSync(DATA_FILE, 'utf-8')
    return JSON.parse(raw).count
  } catch {
    return 0
  }
}

function writeViews(count: number): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
  }
  fs.writeFileSync(DATA_FILE, JSON.stringify({ count }))
}

export async function GET() {
  const count = readViews()
  return NextResponse.json({ count })
}

export async function POST() {
  const count = readViews() + 1
  writeViews(count)
  return NextResponse.json({ count })
}

import { NextResponse } from 'next/server'

const BLOB_ID = process.env.JSONBLOB_VIEWS_ID
const BLOB_URL = `https://jsonblob.com/api/jsonBlob/${BLOB_ID}`

interface ViewsData {
  count: number
}

async function readViews(): Promise<ViewsData> {
  if (!BLOB_ID) return { count: 0 }
  try {
    const res = await fetch(BLOB_URL)
    if (!res.ok) return { count: 0 }
    return await res.json()
  } catch {
    return { count: 0 }
  }
}

async function writeViews(data: ViewsData): Promise<boolean> {
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
  const { count } = await readViews()
  return NextResponse.json({ count })
}

export async function POST() {
  const { count } = await readViews()
  const newCount = count + 1
  await writeViews({ count: newCount })
  return NextResponse.json({ count: newCount })
}

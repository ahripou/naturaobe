import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'

export type ProducerContent = {
  accroche?: string
  engagement?: string
  methode?: string[]
  histoire?: string
}

const DIR = join(process.cwd(), 'content', 'producers')

let cache: Map<string, ProducerContent> | null = null

function parseFile(raw: string): ProducerContent {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!m) return { histoire: raw.trim() }
  const [, fm, body] = m

  const out: ProducerContent = {}
  const methode: string[] = []
  let inMethode = false

  for (const line of fm.split(/\r?\n/)) {
    if (!line.trim()) continue
    const listMatch = line.match(/^\s*-\s+(.+?)\s*$/)
    if (inMethode && listMatch) {
      methode.push(listMatch[1])
      continue
    }
    const kv = line.match(/^([a-zA-Z_]+)\s*:\s*(.*)$/)
    if (!kv) continue
    const key = kv[1]
    const value = kv[2].trim()
    if (key === 'methode') {
      inMethode = true
      if (value) methode.push(value)
      continue
    }
    inMethode = false
    if (key === 'accroche') out.accroche = value
    else if (key === 'engagement') out.engagement = value
  }
  if (methode.length) out.methode = methode

  const histoire = body.trim()
  if (histoire) out.histoire = histoire
  return out
}

export function getAllProducerContent(): Map<string, ProducerContent> {
  if (cache) return cache
  const map = new Map<string, ProducerContent>()
  let files: string[] = []
  try {
    files = readdirSync(DIR)
  } catch {
    cache = map
    return map
  }
  for (const f of files) {
    if (!f.endsWith('.md') || f === 'README.md') continue
    const code = f.replace(/\.md$/, '').toUpperCase()
    const raw = readFileSync(join(DIR, f), 'utf8')
    map.set(code, parseFile(raw))
  }
  cache = map
  return map
}

'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase-browser'

type Props = {
  bucket: string
  path: string
  value: string | null
  onChange: (url: string | null) => void
}

export default function ImageUpload({ bucket, path, value, onChange }: Props) {
  const [uploading, setUploading] = useState(false)
  const [err, setErr] = useState<string | null>(null)

  async function handleFile(file: File) {
    setUploading(true)
    setErr(null)
    const supabase = createClient()
    const { error } = await supabase.storage
      .from(bucket)
      .upload(path, file, { upsert: true, contentType: file.type, cacheControl: '3600' })
    setUploading(false)
    if (error) {
      setErr(error.message)
      return
    }
    const { data } = supabase.storage.from(bucket).getPublicUrl(path)
    // cache-bust so the new image is shown immediately
    onChange(`${data.publicUrl}?v=${Date.now()}`)
  }

  return (
    <div className="space-y-2">
      <div className="aspect-square w-full max-w-[200px] rounded-lg border border-ink/15 bg-cream overflow-hidden flex items-center justify-center">
        {value ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={value} alt="" className="w-full h-full object-cover" />
        ) : (
          <span className="text-xs text-ink/40">Pas d'image</span>
        )}
      </div>
      <label className="inline-block text-xs px-3 py-1.5 rounded border border-ink/20 bg-white cursor-pointer hover:border-clay">
        {uploading ? 'Upload…' : value ? 'Remplacer' : 'Charger une image'}
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0]
            if (f) handleFile(f)
          }}
        />
      </label>
      {value && (
        <button
          type="button"
          onClick={() => onChange(null)}
          className="ml-2 text-xs text-ink/50 hover:text-red-600"
        >
          Retirer
        </button>
      )}
      {err && <p className="text-xs text-red-600">{err}</p>}
    </div>
  )
}

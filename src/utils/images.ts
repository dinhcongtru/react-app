
type ImageMap = Record<string, string>

function buildImageMap(): ImageMap {
  const files = import.meta.glob('/src/assets/images/**/*.{png,jpg,jpeg,svg,gif,webp}', {
    eager: true,
    query: '?url',
    import: 'default',
  }) as Record<string, string>

  const out: ImageMap = {}
  for (const [path, url] of Object.entries(files)) {
    const name = path.split('/').pop()!
    out[name] = url
  }
  return out
}

export const images = buildImageMap()

import { urlForSeoImage } from 'lib/sanity.image'
import type { Image } from 'sanity'

const BASE_TITLE = 'Creativity Rules 2023'
export function SiteMeta({
  description,
  image,
  title,
}: {
  description?: string
  image?: Image
  title?: string
}) {
  const _title = title ? `${title} | ` : ''
  const metaTitle = `${_title}${BASE_TITLE}`

  const imageUrl = image && urlForSeoImage(image)

  return (
    <>
      <title>{metaTitle}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      {description && (
        <meta key="description" name="description" content={description} />
      )}
      {imageUrl && <meta property="og:image" content={imageUrl} />}
    </>
  )
}

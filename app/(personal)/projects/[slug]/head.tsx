import { toPlainText } from '@portabletext/react'
import { SiteMeta } from 'components/global/SiteMeta'
import { getPageSeo, getProjectBySlug } from 'lib/sanity.client'
import { previewData } from 'next/headers'

export default async function ProjectPageHead({
  params,
}: {
  params: { slug: string }
}) {
  const token = previewData().token
  const { seo } = await getProjectBySlug({ slug: params.slug, token })
  const { title, description, ogImage } = seo

  return (
    <SiteMeta
      description={description ? toPlainText(description) : ''}
      image={ogImage}
      title={title}
    />
  )
}

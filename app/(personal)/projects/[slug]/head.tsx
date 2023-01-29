import { toPlainText } from '@portabletext/react'
import { SiteMeta } from 'components/global/SiteMeta'
import { getPageSeo, getProjectBySlug } from 'lib/sanity.client'
import { previewData } from 'next/headers'

export default async function ProjectPageHead({
  params,
}: {
  params: { slug: string }
}) {
  const token = previewData()?.token || null
  const data = await getPageSeo({
    token,
    page: 'project',
    slug: params.slug,
  })

  return <SiteMeta {...data} />
}

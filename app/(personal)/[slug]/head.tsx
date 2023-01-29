import { SiteMeta } from 'components/global/SiteMeta'
import { getPageSeo } from 'lib/sanity.client'
import { previewData } from 'next/headers'

export default async function PageHead({
  params,
}: {
  params: { slug: string }
}) {
  const token = previewData()?.token || null
  const data = await getPageSeo({
    token,
    page: 'page',
    slug: params.slug,
  })

  return <SiteMeta {...data} />
}

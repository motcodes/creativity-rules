import { previewData } from 'next/headers'
import { SiteMeta } from 'components/global/SiteMeta'
import { getPageSeo } from 'lib/sanity.client'

export default async function PageHead({
  params,
}: {
  params: { slug: string }
}) {
  const token = previewData().token
  const data = await getPageSeo({
    token,
    page: 'page',
    slug: params.slug,
  })

  return <SiteMeta {...data} />
}

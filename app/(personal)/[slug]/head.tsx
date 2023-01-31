import { SiteMeta } from 'components/global/SiteMeta'
import { getPageSeo } from 'lib/sanity.client'

export default async function PageHead({
  params,
}: {
  params: { slug: string }
}) {
  const data = await getPageSeo({
    page: 'page',
    slug: params.slug,
  })

  return <SiteMeta {...data} />
}

import { SiteMeta } from 'components/global/SiteMeta'
import { getPageSeo } from 'lib/sanity.client'

export default async function ProjectPageHead({
  params,
}: {
  params: { slug: string }
}) {
  const data = await getPageSeo({
    page: 'project',
    slug: params.slug,
  })

  return <SiteMeta {...data} />
}

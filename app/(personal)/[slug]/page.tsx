import { Page } from 'components/pages/page/Page'
import { getPageBySlug } from 'lib/sanity.client'
import { notFound } from 'next/navigation'

export default async function PageSlugRoute({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const data = await getPageBySlug({ slug })

  if (!data) {
    notFound()
  }

  return <Page {...data} />
}

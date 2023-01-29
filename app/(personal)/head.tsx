import { SiteMeta } from 'components/global/SiteMeta'
import { getPageSeo } from 'lib/sanity.client'
import { previewData } from 'next/headers'

export default async function HomePageHead() {
  const token = previewData().token
  const data = await getPageSeo({
    token,
    page: 'home',
  })

  return <SiteMeta {...data} />
}

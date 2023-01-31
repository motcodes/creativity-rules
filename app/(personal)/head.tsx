import { SiteMeta } from 'components/global/SiteMeta'
import { getPageSeo } from 'lib/sanity.client'

export default async function HomePageHead() {
  const data = await getPageSeo({
    page: 'home',
  })

  return <SiteMeta {...data} />
}

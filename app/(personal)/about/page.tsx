import { AboutPage } from 'components/pages/about/AboutPage'
import { HomePage } from 'components/pages/home/HomePage'
import { getAboutPage } from 'lib/sanity.client'
import { notFound } from 'next/navigation'

export default async function AboutRoute() {
  const data = await getAboutPage()

  if (!data) {
    notFound()
  }

  return <AboutPage {...data} />
}

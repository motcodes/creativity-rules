import { HomePage } from 'components/pages/home/HomePage'
import { getHomePage } from 'lib/sanity.client'
import { notFound } from 'next/navigation'

export default async function IndexRoute() {
  const data = await getHomePage()

  if (!data) {
    notFound()
  }

  return <HomePage {...data} />
}

import { StagePage } from 'components/pages/stage/StagePage'
import { getStagePage } from 'lib/sanity.client'
import { notFound } from 'next/navigation'

export default async function StageRoute() {
  const data = await getStagePage()

  if (!data) {
    notFound()
  }

  return <StagePage {...data} />
}

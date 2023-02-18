import Head from 'next/head'

import { SiteMeta, SiteMetaProps } from 'components/global/SiteMeta'
import { StagePage } from 'components/pages/stage/StagePage'
import { getPageSeo, getSettings, getStagePage } from 'lib/sanity.client'
import { StagePayload } from 'types'

export interface StagePageProps {
  data: StagePayload
  head: SiteMetaProps
}

export default function StageRoute({ data, head }: StagePageProps) {
  return (
    <>
      <Head>
        <SiteMeta {...head} />
      </Head>
      <div className="flex min-h-screen flex-col bg-white text-black">
        <StagePage {...data} />
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const [data, head, settings] = await Promise.all([
    getStagePage(),
    getPageSeo({
      page: 'stage',
    }),
    getSettings(),
  ])

  return {
    props: {
      data,
      head,
      settings,
    },
    revalidate: 15,
  }
}

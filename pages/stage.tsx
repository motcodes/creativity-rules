import { SiteMeta } from 'components/global/SiteMeta'
import { StagePage } from 'components/pages/stage/StagePage'
import { getPageSeo, getSettings, getStagePage } from 'lib/sanity.client'
import Head from 'next/head'

export default function StageRoute({ data, head }) {
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

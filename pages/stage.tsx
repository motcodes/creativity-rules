import { SiteMeta } from 'components/global/SiteMeta'
import { StagePage } from 'components/pages/stage/StagePage'
import { getPageSeo, getStagePage } from 'lib/sanity.client'
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
  const data = await getStagePage()
  const head = await getPageSeo({
    page: 'stage',
  })

  return {
    props: {
      data,
      head,
    },
    revalidate: 15,
  }
}

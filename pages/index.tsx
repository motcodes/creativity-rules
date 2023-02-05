import { SiteMeta, SiteMetaProps } from 'components/global/SiteMeta'
import { HomePage } from 'components/pages/home/HomePage'
import { getHomePage, getPageSeo, getSettings } from 'lib/sanity.client'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { HomePayload } from 'types'

export interface IndexPageProps {
  data: HomePayload
  head: SiteMetaProps
}

export default function IndexRoute({ data, head }: IndexPageProps) {
  return (
    <>
      <Head>
        <SiteMeta {...head} />
      </Head>
      <div className="flex min-h-screen flex-col bg-white text-black">
        <HomePage {...data} />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const [data, head, settings] = await Promise.all([
    getHomePage(),
    getPageSeo({
      page: 'home',
    }),
    getSettings(),
  ])

  return {
    props: {
      data,
      head,
    },
    revalidate: 15,
  }
}

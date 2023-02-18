import { GetStaticProps } from 'next'
import Head from 'next/head'

import { SiteMeta, SiteMetaProps } from 'components/global/SiteMeta'
import { AboutPage } from 'components/pages/about/AboutPage'
import { getAboutPage, getPageSeo, getSettings } from 'lib/sanity.client'
import { AboutPayload } from 'types'

export interface AboutPageProps {
  data: AboutPayload
  head: SiteMetaProps
}

export default function AboutRoute({ data, head }: AboutPageProps) {
  return (
    <>
      <Head>
        <SiteMeta {...head} />
      </Head>
      <div className="flex min-h-screen flex-col bg-white text-black">
        <AboutPage {...data} />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const [data, head, settings] = await Promise.all([
    getAboutPage(),
    getPageSeo({
      page: 'about',
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

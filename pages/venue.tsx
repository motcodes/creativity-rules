import { SiteMeta, SiteMetaProps } from 'components/global/SiteMeta'
import { Header } from 'components/shared/Header'
import { getPageSeo, getSettings, getVenuePage } from 'lib/sanity.client'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { VenuePayload } from 'types'

export interface VenuePageProps {
  data: VenuePayload
  head: SiteMetaProps
}

export default function VenueRoute({ data, head }: VenuePageProps) {
  return (
    <>
      <Head>
        <SiteMeta {...head} />
      </Head>
      <div className="flex min-h-screen flex-col bg-white text-black">
        <Header title={data.title} description={data.description} />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const [data, head, settings] = await Promise.all([
    getVenuePage(),
    getPageSeo({
      page: 'venue',
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

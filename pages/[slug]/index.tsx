import { SiteMeta, SiteMetaProps } from 'components/global/SiteMeta'
import { Page } from 'components/pages/page/Page'
import {
  getPageBySlug,
  getPageSeo,
  getPathsByType,
  getSettings,
} from 'lib/sanity.client'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { PagePayload } from 'types'

export interface PageProps {
  data: PagePayload
  head: SiteMetaProps
}

export default function SlugRoute({ data, head }: PageProps) {
  return (
    <>
      <Head>
        <SiteMeta {...head} />
      </Head>
      <div className="flex min-h-screen flex-col bg-white text-black">
        <Page {...data} />
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getPathsByType('page')

  return {
    paths: data.map((item) => ({ params: { slug: item.slug } })),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const [data, head, settings] = await Promise.all([
    getPageBySlug({
      slug: params?.slug as string,
    }),
    getPageSeo({
      page: 'page',
      slug: params.slug as string,
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

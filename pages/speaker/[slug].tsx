import { SiteMeta, SiteMetaProps } from 'components/global/SiteMeta'
import { Header } from 'components/shared/Header'
import {
  getPageSeo,
  getPathsByType,
  getSettings,
  getTalkBySlug,
} from 'lib/sanity.client'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { TalkSpeakerPayload } from 'types'

export interface SpeakerProps {
  data: TalkSpeakerPayload
  head: SiteMetaProps
}

export default function SpeakerSlugRoute({ data, head }: SpeakerProps) {
  return (
    <>
      <Head>
        <SiteMeta {...head} />
      </Head>
      <div className="flex min-h-screen flex-col bg-white text-black">
        <h1 className="text-3xl">Speaker</h1>
        <Header
          title={data.name}
          description={data.aboutPerson}
          logo={data.speakerImage}
        />
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getPathsByType('speaker')

  return {
    paths: data.map((item) => ({ params: { slug: item.speakerSlug } })),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const [data, head, settings] = await Promise.all([
    getTalkBySlug({ slug: params?.slug as string }),
    getPageSeo({
      page: 'speaker',
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

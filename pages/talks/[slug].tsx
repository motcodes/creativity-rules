import { SiteMeta } from 'components/global/SiteMeta'
import { getPageSeo, getPathsByType, getTalkBySlug } from 'lib/sanity.client'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

export default function TalkSlugRoute({ data, head }) {
  return (
    <>
      <Head>
        <SiteMeta {...head} />
      </Head>
      <div className="flex min-h-screen flex-col bg-white text-black">
        <h1>{data.title}</h1>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getPathsByType('speaker')

  return {
    paths: data.map((item) => ({ params: { slug: item.slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getTalkBySlug({ slug: params?.slug as string })
  const head = await getPageSeo({
    page: 'speaker',
    slug: params.slug as string,
  })

  return {
    props: {
      data,
      head,
    },
    revalidate: 15,
  }
}

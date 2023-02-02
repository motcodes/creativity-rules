import { SiteMeta } from 'components/global/SiteMeta'
import { Page } from 'components/pages/page/Page'
import { getPageBySlug, getPageSeo, getPathsByType } from 'lib/sanity.client'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

export default function SlugRoute({ data, head }) {
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
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getPageBySlug({ slug: params?.slug as string })
  const head = await getPageSeo({
    page: 'page',
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

import { SiteMeta } from 'components/global/SiteMeta'
import { HomePage } from 'components/pages/home/HomePage'
import { getHomePage, getPageSeo } from 'lib/sanity.client'
import { GetStaticProps } from 'next'
import Head from 'next/head'

export default function IndexRoute({ data, head }) {
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
  const [data, head] = await Promise.all([
    getHomePage(),
    getPageSeo({
      page: 'home',
    }),
  ])

  return {
    props: {
      data,
      head,
    },
    revalidate: 15,
  }
}

import { SiteMeta } from 'components/global/SiteMeta'
import { AboutPage } from 'components/pages/about/AboutPage'
import { getAboutPage, getPageSeo } from 'lib/sanity.client'
import { GetStaticProps } from 'next'
import Head from 'next/head'

export default function AboutRoute({ data, head }) {
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
  const data = await getAboutPage()
  const head = await getPageSeo({
    page: 'about',
  })

  return {
    props: {
      data,
      head,
    },
    revalidate: 15,
  }
}

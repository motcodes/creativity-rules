import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

import { SiteMeta, SiteMetaProps } from 'components/global/SiteMeta'
import { ProjectPage } from 'components/pages/project/ProjectPage'
import { getPageSeo, getPathsByType, getProjectBySlug } from 'lib/sanity.client'
import { ProjectPayload } from 'types'

export interface ProjectPageProps {
  data: ProjectPayload
  head: SiteMetaProps
}

export default function ProjectSlugRoute({ data, head }: ProjectPageProps) {
  return (
    <>
      <Head>
        <SiteMeta {...head} />
      </Head>
      <div className="flex min-h-screen flex-col bg-white text-black">
        <ProjectPage {...data} />
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getPathsByType('project')

  return {
    paths: data.map(item => ({ params: { slug: item.slug } })),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getProjectBySlug({ slug: params?.slug as string })
  const head = await getPageSeo({
    page: 'project',
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

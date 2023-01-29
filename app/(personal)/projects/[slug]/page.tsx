import { ProjectPage } from 'components/pages/project/ProjectPage'
import { getProjectBySlug } from 'lib/sanity.client'
import { notFound } from 'next/navigation'

export default async function ProjectSlugRoute({
  params,
}: {
  params: { slug: string }
}) {
  const data = await getProjectBySlug({ slug: params.slug })

  if (!data) {
    notFound()
  }

  return <ProjectPage {...data} />
}

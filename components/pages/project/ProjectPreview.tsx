'use client'

import { usePreview } from 'lib/sanity.preview'
import { projectBySlugQuery } from 'lib/sanity.queries'

import { ProjectPage, ProjectPayload } from './ProjectPage'

export function ProjectPreview({
  token,
  slug,
}: {
  token: null | string
  slug: string
}) {
  const project: ProjectPayload = usePreview(token, projectBySlugQuery, {
    slug: slug,
  })

  return <ProjectPage {...project} />
}

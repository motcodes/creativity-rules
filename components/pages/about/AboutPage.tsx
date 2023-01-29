import { Header } from 'components/shared/Header'
import ProjectList from 'components/shared/ProjectList'
import ScrollUp from 'components/shared/ScrollUp'
import type { AboutPagePayload } from 'types'

export function AboutPage({
  overview,
  showcaseProjects,
  title,
}: AboutPagePayload) {
  return (
    <div className="space-y-20">
      {title && <Header centered title={title} description={overview} />}
      <ProjectList projects={showcaseProjects} />
      <ScrollUp />
    </div>
  )
}

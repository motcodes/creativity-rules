import { Header } from 'components/shared/Header'
import ProjectList from 'components/shared/ProjectList'
import type { AboutPayload } from 'types'

export function AboutPage({ overview, showcaseProjects, title }: AboutPayload) {
  return (
    <div className="space-y-20">
      {title && <Header centered title={title} description={overview} />}
      <ProjectList projects={showcaseProjects} />
    </div>
  )
}

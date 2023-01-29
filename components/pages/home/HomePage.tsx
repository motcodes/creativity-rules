import { Header } from 'components/shared/Header'
import ProjectList from 'components/shared/ProjectList'
import ScrollUp from 'components/shared/ScrollUp'
import type { HomePagePayload } from 'types'

export function HomePage({
  overview,
  showcaseProjects,
  title,
}: HomePagePayload) {
  return (
    <div className="space-y-20">
      {title && <Header centered title={title} description={overview} />}
      <ProjectList projects={showcaseProjects} />
      <ScrollUp />
    </div>
  )
}

import { Header } from 'components/shared/Header'
import ProjectList from 'components/shared/ProjectList'
import ScrollUp from 'components/shared/ScrollUp'
import type { AboutPagePayload } from 'types'

export function AboutPage({ data }: { data: AboutPagePayload }) {
  const { overview, showcaseProjects, title } = data

  return (
    <div className="space-y-20">
      {title && <Header centered title={title} description={overview} />}
      <ProjectList projects={showcaseProjects} />
      <ScrollUp />
    </div>
  )
}

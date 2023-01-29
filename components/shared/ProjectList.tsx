import Link from 'next/link'
import React from 'react'

import { ProjectListItem } from './ProjectListItem'

function ProjectList({ projects }) {
  return (
    !!projects?.length && (
      <div className="mx-auto max-w-[100rem] rounded-md border">
        {projects.map((project, key) => (
          <Link key={key} href={`${project.slug}`}>
            <ProjectListItem project={project} odd={key % 2} />
          </Link>
        ))}
      </div>
    )
  )
}

export default ProjectList

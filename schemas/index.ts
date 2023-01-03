import page from './documents/page'
import project from './documents/project'
import objects from './objects'
import about from './singletons/about'
import home from './singletons/home'
import settings from './singletons/settings'

import projectsCard from './shared/projectsCard'
import courseOfStudies from './documents/courseOfStudies'
import deparment from './documents/deparment'

export default {
  // If you want more content types, you can add them to this array
  types: [
    // Singletons
    home,
    about,
    settings,
    // Documents
    page,
    project,
    courseOfStudies,
    deparment,
    //shared
    projectsCard,
    // Objects
    ...objects,
  ],
}

export const pageStructurePages = [home, about, settings]
export const sharedComponentsStructurePages = [projectsCard]

export const singeltonPages: Array<string> = [
  home.name,
  about.name,
  settings.name,
]

export const sharedComponents: Array<string> = [projectsCard.name]

export const previewableDocumentTypes: Array<string> = [
  home.name,
  about.name,
  page.name,
  project.name,
]

import page from './documents/page'
import project from './documents/project'
import objects from './objects'
import about from './singletons/about'
import home from './singletons/home'
import settings from './singletons/settings'

import projectsCard from './shared/projectsCard'
import courseOfStudies from './documents/courseOfStudies'
import deparment from './documents/deparment'
import speaker from './documents/speaker'
import venue from './singletons/venue'

export default {
  // If you want more content types, you can add them to this array
  types: [
    // Singletons
    home,
    about,
    venue,
    settings,
    // Documents
    page,
    project,
    speaker,
    courseOfStudies,
    deparment,
    //shared
    projectsCard,
    // Objects
    ...objects,
  ],
}

export const pageStructurePages = [home, about, venue, settings]
export const sharedComponentsStructurePages = [projectsCard]

export const singeltonPages: Array<string> = [
  home.name,
  about.name,
  venue.name,
  settings.name,
]

export const sharedComponents: Array<string> = [projectsCard.name]

export const previewableDocumentTypes: Array<string> = [
  home.name,
  about.name,
  venue.name,
  page.name,
  project.name,
  speaker.name,
]

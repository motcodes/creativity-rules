import courseOfStudies from './documents/courseOfStudies'
import deparment from './documents/deparment'
import page from './documents/page'
import project from './documents/project'
import schedule from './documents/schedule'
import speaker from './documents/speaker'
import objects from './objects'
import projectsCard from './shared/projectsCard'
import about from './singletons/about'
import home from './singletons/home'
import settings from './singletons/settings'
import stage from './singletons/stage'
import venue from './singletons/venue'

export default {
  // If you want more content types, you can add them to this array
  types: [
    // Singletons
    home,
    about,
    venue,
    settings,
    stage,
    // Documents
    page,
    project,
    speaker,
    schedule,
    courseOfStudies,
    deparment,
    //shared
    projectsCard,
    // Objects
    ...objects,
  ],
}

export const pageStructurePages = [home, about, venue, stage, settings]
export const sharedComponentsStructurePages = [projectsCard]

export const singeltonPages: Array<string> = [
  home.name,
  about.name,
  venue.name,
  stage.name,
  settings.name,
]

export const sharedComponents: Array<string> = [projectsCard.name]

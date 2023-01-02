import page from './documents/page'
import project from './documents/project'
import objects from './objects'
import about from './singletons/about'
import home from './singletons/home'
import settings from './singletons/settings'

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
    // Objects
    ...objects,
  ],
}

export const pageStructurePages = [home, about, settings]

export const singeltonPages: Array<string> = [
  home.name,
  about.name,
  settings.name,
]

export const previewableDocumentTypes: Array<string> = [
  home.name,
  about.name,
  page.name,
  project.name,
]

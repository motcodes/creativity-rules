import type { Block, Image } from 'sanity'

export interface MenuItem {
  _type: string
  slug?: string
  title?: string
}

export interface MilestoneItem {
  description?: string
  duration?: {
    start?: string
    end?: string
  }
  image?: Image
  tags?: string[]
  title?: string
}

export interface ShowcaseProject {
  _type: string
  coverImage?: Image
  overview?: Block[]
  slug?: string
  tags?: string[]
  title?: string
}

// Page payloads

export interface HomePagePayload {
  footer?: Block[]
  overview?: Block[]
  showcaseProjects?: ShowcaseProject[]
  title?: string
}

export interface AboutPagePayload {
  footer?: Block[]
  overview?: Block[]
  showcaseProjects?: ShowcaseProject[]
  title?: string
}

export interface PagePayload {
  body?: Block[]
  name?: string
  overview?: Block[]
  title?: string
}
export interface StagePayload {
  seo?: SEOProps
  title?: string
  stream?: string
  schedule?: Array<unknown>
}

export interface SettingsPayload {
  footer?: Block[]
  menuItems?: MenuItem[]
  ogImage?: Image
}

export interface SEOProps {
  title: string
  description: Block[]
  ogImage: Image
}

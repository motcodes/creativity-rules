import type { Block, Image } from 'sanity'

export interface LinkItem {
  slug: string
  label: string
  network?: string
  type: 'internal' | 'external' | 'social'
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
  footerLinks?: Array<LinkItem>
  navigation?: Array<LinkItem>
  logo?: Image
  socialLinks: Array<LinkItem>
}

export interface SEOProps {
  title: string
  description: Block[]
  ogImage: Image
}

import type { Image, PortableTextBlock } from 'sanity'

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
  overview?: PortableTextBlock[]
  slug?: string
  tags?: string[]
  title?: string
}

// Page payloads

export interface HomePagePayload {
  footer?: PortableTextBlock[]
  overview: PortableTextBlock[]
  title: string
  date: string
  links: LinkItem[]
  socialLinks: LinkItem[]
}

export interface AboutPagePayload {
  footer?: PortableTextBlock[]
  overview?: PortableTextBlock[]
  showcaseProjects?: ShowcaseProject[]
  title?: string
}

export interface PagePayload {
  body?: PortableTextBlock[]
  name?: string
  overview?: PortableTextBlock[]
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
  description: PortableTextBlock[]
  ogImage: Image
}

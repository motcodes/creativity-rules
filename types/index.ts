import type { Image, PortableTextBlock } from 'sanity'

export interface SEOProps {
  title: string
  description: PortableTextBlock[]
  ogImage: Image
}

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

export interface HomePayload {
  footer?: PortableTextBlock[]
  overview: PortableTextBlock[]
  title: string
  date: string
  links: LinkItem[]
  socialLinks: LinkItem[]
}

export interface AboutPayload {
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
  title: string
  stream: string
  schedule: TalkSpeakerPayload[]
  slug: { current: string }
}

export interface SettingsPayload {
  footerLinks?: Array<LinkItem>
  navigation?: Array<LinkItem>
  logo?: Image
  socialLinks: Array<LinkItem>
}

export interface ProjectPayload {
  seo: SEOProps
  title?: string
  overview?: PortableTextBlock[]
  coverImage?: Image
  logo?: Image
  slug: string
  description?: PortableTextBlock[]
  site?: string
  socialLinks?: Array<{
    _key: string
    label: string
    url: string
  }>
  team: Array<{
    _key: string
    name: string
    credits?: Array<string>
    link?: {
      label: string
      url: string
    }
  }>
  departments: Array<{
    _id: string
    courseOfStudies: { title: string; value: string }
    title: string
    value: string
  }>
}

export interface TalkSpeakerPayload {
  aboutPerson?: PortableTextBlock[]
  company?: string
  name: string
  project?: ProjectPayload
  seo: SEOProps
  slug: {
    current: string
  }
  speakerImage?: Image
  speakerLinks?: LinkItem[]
  speakerSlug: {
    current: string
  }
  talkDescription?: PortableTextBlock[]
  timeframe?: {
    day?: string
    endTime?: string
    startTime?: string
  }
  title: string
  topic?: string
}

export interface VenuePayload {
  title: string
  description: PortableTextBlock[]
  location: Array<{
    address: LinkItem
    description: PortableTextBlock[]
    image: Image
    title: string
  }>
}

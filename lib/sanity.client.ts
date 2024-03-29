import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
import {
  aboutPageQuery,
  homePageQuery,
  pagesBySlugQuery,
  pathsByType,
  projectBySlugQuery,
  seoPageBySlugQuery,
  seoPageQuery,
  settingsQuery,
  stagePageQuery,
  talkBySlugQuery,
  venuePageQuery,
} from 'lib/sanity.queries'
import type {
  AboutPayload,
  HomePayload,
  PagePayload,
  ProjectPayload,
  SettingsPayload,
  StagePayload,
  TalkSpeakerPayload,
  VenuePayload,
} from 'types'
import { urlForSeoImage } from './sanity.image'

const sanityClient = () => {
  return projectId
    ? createClient({ projectId, dataset, apiVersion, useCdn })
    : null
}

interface SlugProps {
  slug?: string
}

interface GetPageSeoProps {
  page?: string
  slug?: string
}

const BASE_TITLE = 'Creativity Rules 2023'

export async function getPageSeo({
  page = 'settings',
  slug,
}: GetPageSeoProps): Promise<{
  title: string
  description: string
  ogImage: string
}> {
  const fetcher = slug ? seoPageBySlugQuery(page) : seoPageQuery(page)
  const [defaultSeo, pageSeo] = await Promise.all([
    sanityClient()?.fetch(seoPageQuery('settings')),
    sanityClient()?.fetch(fetcher, slug ? { slug } : {}),
  ])
  const _seo = { ...defaultSeo, ...pageSeo }
  const title = `${_seo.title ? `${_seo.title} | ` : ''}${BASE_TITLE}`
  const ogImage = _seo.ogImage && urlForSeoImage(_seo.ogImage)

  return {
    title,
    description: _seo.description,
    ogImage,
  }
}

export async function getHomePage(): Promise<HomePayload> {
  return await sanityClient()?.fetch(homePageQuery)
}

export async function getAboutPage(): Promise<AboutPayload> {
  return await sanityClient()?.fetch(aboutPageQuery)
}

export async function getStagePage(): Promise<StagePayload> {
  return await sanityClient()?.fetch(stagePageQuery)
}

export async function getVenuePage(): Promise<VenuePayload> {
  return await sanityClient()?.fetch(venuePageQuery)
}

export async function getPageBySlug({ slug }: SlugProps): Promise<PagePayload> {
  return await sanityClient()?.fetch(pagesBySlugQuery, { slug })
}

export async function getProjectBySlug({
  slug,
}: SlugProps): Promise<ProjectPayload> {
  return await sanityClient()?.fetch(projectBySlugQuery, { slug })
}
export async function getTalkBySlug({
  slug,
}: SlugProps): Promise<TalkSpeakerPayload> {
  return await sanityClient()?.fetch(talkBySlugQuery, { slug })
}

export async function getPathsByType(
  type: string
): Promise<Array<{ slug: string; speakerSlug?: string }>> {
  return await sanityClient()?.fetch(pathsByType(type))
}

export async function getSettings(): Promise<SettingsPayload> {
  return await sanityClient()?.fetch(settingsQuery)
}

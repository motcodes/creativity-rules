import 'server-only'

import { ProjectPayload } from 'components/pages/project/ProjectPage'
import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
import {
  aboutPageQuery,
  homePageQuery,
  pagesBySlugQuery,
  projectBySlugQuery,
  seoPageBySlugQuery,
  seoPageQuery,
  settingsQuery,
  stagePageQuery,
} from 'lib/sanity.queries'
import { createClient } from 'next-sanity'
import type {
  AboutPagePayload,
  HomePagePayload,
  PagePayload,
  SettingsPayload,
} from 'types'

import { urlForSeoImage } from './sanity.image'

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const sanityClient = (token?: string) => {
  return projectId
    ? createClient({ projectId, dataset, apiVersion, useCdn, token })
    : null
}

interface TokenProps {
  token?: string
}

interface TokenSlugProps {
  token?: string
  slug?: string
}

interface GetPageSeoProps {
  page?: string
  slug?: string
  token?: string
}

const BASE_TITLE = 'Creativity Rules 2023'

export async function getPageSeo({
  page = 'settings',
  slug,
  token,
}: GetPageSeoProps): Promise<{
  title: string
  description: string
  ogImage: string
}> {
  const fetcher = slug ? seoPageBySlugQuery(page) : seoPageQuery(page)
  const [defaultSeo, pageSeo] = await Promise.all([
    sanityClient(token)?.fetch(seoPageQuery('settings')),
    sanityClient(token)?.fetch(fetcher, slug ? { slug } : {}),
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

export async function getHomePage({
  token,
}: TokenProps): Promise<HomePagePayload> {
  return await sanityClient(token)?.fetch(homePageQuery)
}

export async function getAboutPage({
  token,
}: TokenProps): Promise<AboutPagePayload> {
  return await sanityClient(token)?.fetch(aboutPageQuery)
}

export async function getStagePage({
  token,
}: TokenProps): Promise<AboutPagePayload> {
  return await sanityClient(token)?.fetch(stagePageQuery)
}

export async function getPageBySlug({
  slug,
  token,
}: TokenSlugProps): Promise<PagePayload> {
  return await sanityClient(token)?.fetch(pagesBySlugQuery, { slug })
}

export async function getProjectBySlug({
  slug,
  token,
}: TokenSlugProps): Promise<ProjectPayload> {
  return await sanityClient(token)?.fetch(projectBySlugQuery, { slug })
}

export async function getSettings({
  token,
}: TokenProps): Promise<SettingsPayload> {
  return await sanityClient(token)?.fetch(settingsQuery)
}

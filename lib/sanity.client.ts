import 'server-only'

import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
import {
  aboutPageQuery,
  homePageQuery,
  pagesBySlugQuery,
  projectBySlugQuery,
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
import { ProjectPayload } from 'components/pages/project/ProjectPage'
import { Block, Image } from 'sanity'

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const sanityClient = (token?: string) => {
  return projectId
    ? createClient({ projectId, dataset, apiVersion, useCdn, token })
    : null
}

interface GetPageSeoProps {
  page: string
  token?: string
}

export async function getPageSeo({ page, token }: GetPageSeoProps): Promise<{
  title: string
  description: Block[]
  ogImage: Image
}> {
  return await sanityClient(token)?.fetch(seoPageQuery(page))
}

export async function getHomePage({
  token,
}: {
  token?: string
}): Promise<HomePagePayload | undefined> {
  return (
    (await sanityClient(token)?.fetch(homePageQuery)) || {
      title: '',
      overview: [],
      showcaseProjects: [],
    }
  )
}

export async function getAboutPage({
  token,
}: {
  token?: string
}): Promise<AboutPagePayload | undefined> {
  return (
    (await sanityClient(token)?.fetch(aboutPageQuery)) || {
      title: '',
      overview: [],
      showcaseProjects: [],
    }
  )
}

export async function getStagePage({
  token,
}: {
  token?: string
}): Promise<AboutPagePayload | undefined> {
  return (
    (await sanityClient(token)?.fetch(stagePageQuery)) || {
      title: '',
      overview: [],
      showcaseProjects: [],
    }
  )
}

export async function getPageBySlug({
  slug,
  token,
}: {
  slug: string
  token?: string
}): Promise<PagePayload | undefined> {
  return await sanityClient(token)?.fetch(pagesBySlugQuery, { slug })
}

export async function getProjectBySlug({
  slug,
  token,
}: {
  slug: string
  token?: string
}): Promise<ProjectPayload | undefined> {
  return await sanityClient(token)?.fetch(projectBySlugQuery, { slug })
}

export async function getSettings({
  token,
}: {
  token?: string
}): Promise<SettingsPayload | undefined> {
  return await sanityClient(token)?.fetch(settingsQuery)
}

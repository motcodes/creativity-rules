import 'server-only'

import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
import {
  aboutPageQuery,
  aboutPageTitleQuery,
  homePageQuery,
  homePageTitleQuery,
  pagesBySlugQuery,
  projectBySlugQuery,
  settingsQuery,
} from 'lib/sanity.queries'
import { createClient } from 'next-sanity'
import type {
  AboutPagePayload,
  HomePagePayload,
  PagePayload,
  SettingsPayload,
} from 'types'
import { ProjectPayload } from 'components/pages/project/ProjectPage'

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const sanityClient = (token?: string) => {
  return projectId
    ? createClient({ projectId, dataset, apiVersion, useCdn, token })
    : null
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

export async function getHomePageTitle({
  token,
}: {
  token?: string
}): Promise<string | undefined> {
  return await sanityClient(token)?.fetch(homePageTitleQuery)
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

export async function getAboutPageTitle({
  token,
}: {
  token?: string
}): Promise<string | undefined> {
  return await sanityClient(token)?.fetch(aboutPageTitleQuery)
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

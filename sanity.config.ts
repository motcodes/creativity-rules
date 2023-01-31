import { visionTool } from '@sanity/vision'
import { apiVersion, dataset, projectId } from 'lib/sanity.api'
import { pageStructure, singletonPlugin } from 'plugins/settings'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import schemas, { sharedComponents, singeltonPages } from 'schemas'

const title = process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Creativity Rules'

export default defineConfig({
  basePath: '/studio',
  projectId: projectId || '',
  dataset: dataset || '',
  title,
  schema: schemas,
  plugins: [
    deskTool({
      structure: pageStructure(),
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([...singeltonPages, ...sharedComponents]),

    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})

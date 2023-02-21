import { defineType } from 'sanity'
import { DocumentVideoIcon } from '@sanity/icons'

export default defineType({
  title: 'Video',
  name: 'video',
  type: 'object',
  icon: DocumentVideoIcon,
  fields: [
    {
      name: 'poster',
      type: 'imageAlt',
      description: 'Ratio of the poster should be the same that the video.',
    },
    {
      title: 'Video showcase sources (Vimeo)',
      name: 'videoSrcs',
      type: 'object',
      fields: [
        {
          title: 'URL mobile',
          name: 'urlMobile',
          type: 'string',
          validation: Rule => Rule.required(),
        },
        {
          title: 'URL desktop',
          name: 'urlDesktop',
          type: 'string',
          validation: Rule => Rule.required(),
        },
      ],
    },
  ],
  preview: {
    prepare: () => ({ title: 'Video' }),
  },
})

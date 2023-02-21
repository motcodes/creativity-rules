import { ImageIcon } from '@sanity/icons'
import { defineType } from 'sanity'

export default defineType({
  title: 'Mobile & Desktop Image with Alt Text',
  name: 'images',
  type: 'object',
  icon: ImageIcon,
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    },
    {
      title: 'Image Mobile',
      name: 'imageMobile',
      type: 'image',
      options: { hotspot: true },
    },
    {
      title: 'Alt Text',
      name: 'alt',
      type: 'string',
    },
  ],
  preview: {
    select: {
      imageUrl: 'image.asset.url',
      title: 'alt',
    },
  },
})

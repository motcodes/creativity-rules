import { ImageIcon } from '@sanity/icons'
import { defineType } from 'sanity'

export default defineType({
  title: 'Image with Alt Text',
  name: 'imageAlt',
  type: 'image',
  options: { hotspot: true },
  icon: ImageIcon,
  fields: [
    {
      title: 'Alt Text',
      name: 'alt',
      type: 'string',
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'alt',
    },
  },
})

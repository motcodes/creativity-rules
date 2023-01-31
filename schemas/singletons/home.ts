import { HomeIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
  liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your personal website.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'overview',
      type: 'overview',
    }),
    defineField({
      name: 'date',
      description: 'temp',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'socialLinks',
      description: 'temp',
      type: 'array',
      of: [{ type: 'linkSocial' }],
    }),
    defineField({
      name: 'links',
      description: 'temp',
      type: 'array',
      of: [{ type: 'linkWithLabel' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'Home',
        title,
      }
    },
  },
})

import { defineField, defineType } from 'sanity'
import { BookIcon } from '@sanity/icons'

export default defineType({
  type: 'document',
  name: 'department',
  title: 'Deparments',
  icon: BookIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'value',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'courseOfStudies',
      type: 'reference',
      to: [{ type: 'courseOfStudies' }],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'courseOfStudies.title',
    },
    prepare: ({ title, subtitle }) => ({
      title,
      subtitle,
    }),
  },
})

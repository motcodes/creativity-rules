import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'projectsCard',
  title: 'Project Card',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your personal website.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'cta',
      type: 'linkInternalWithLabel',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: 'Projects Card',
        subtitle: title,
      }
    },
  },
})

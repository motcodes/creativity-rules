import { DashboardIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'page',
  title: 'Page',
  icon: DashboardIcon,
  groups: [
    { name: 'body', title: 'Body', default: true },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
      validation: rule => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      group: 'body',
      validation: rule => rule.required(),
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      group: 'body',
      options: {
        source: 'title',
      },
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'overview',
      type: 'overview',
      group: 'body',
    }),
    defineField({
      type: 'blockContent',
      name: 'body',
      title: 'Body',
      group: 'body',
      description:
        "This is where you can write the page's content. Including custom blocks like timelines for more a more visual display of information.",
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'Page',
        title,
      }
    },
  },
})

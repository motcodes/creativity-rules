import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
      description: 'Max 160 characters',
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description:
        'Displayed on social cards and search engine results. (1140x600)',
      options: {
        hotspot: true,
      },
    }),
  ],
})

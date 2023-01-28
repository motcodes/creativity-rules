import { CircleIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'venue',
  title: 'Venue',
  type: 'document',
  icon: CircleIcon,
  liveEdit: true,
  groups: [
    { name: 'body', title: 'Body', default: true },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    // SEO
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
      validation: (rule) => rule.required(),
    }),

    //Body
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'body',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'body',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'overview',
      group: 'body',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'locations',
      title: 'Locations',
      type: 'array',
      group: 'body',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              title: 'Description',
              name: 'description',
              type: 'overview',
              validation: (rule) => rule.required(),
            }),
            defineField({
              title: 'Address',
              name: 'address',
              type: 'linkExternalWithLabel',
              validation: (rule) => rule.required(),
            }),
            defineField({
              title: 'Venue Image',
              name: 'image',
              type: 'imageAlt',
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
})

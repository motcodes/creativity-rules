import { defineArrayMember, defineField, defineType } from 'sanity'
import { UserIcon } from '@sanity/icons'

export default defineType({
  name: 'speaker',
  title: 'Speaker',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'overview',
      type: 'overview',
    }),
    defineField({
      name: 'speakers',
      title: 'Speakers',
      description: 'A list of Speaker',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              title: 'Name',
              name: 'name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              title: 'Description',
              name: 'description',
              description: '',
              type: 'overview',
              validation: (rule) => rule.required(),
            }),
            defineField({
              title: 'Field Type',
              description: 'Like visual design, music act, ...',
              name: 'field',
              type: 'string',
            }),
            defineField({
              title: 'Country',
              name: 'country',
              type: 'string',
            }),
            defineField({
              title: 'Company / Project',
              name: 'company',
              type: 'string',
            }),
            defineField({
              title: 'Timeframe',
              name: 'timeframe',
              type: 'string',
            }),
            defineField({
              title: 'Social Link',
              name: 'link',
              type: 'url',
              validation: (Rule) =>
                Rule.required().uri({
                  scheme: ['http', 'https'],
                }),
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'About',
      }
    },
  },
})

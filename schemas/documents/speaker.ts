import { IceCreamIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'speaker',
  title: 'Speaker',
  type: 'document',
  icon: IceCreamIcon,
  groups: [
    { name: 'talk', title: 'Talk', default: true },
    { name: 'speaker', title: 'Speaker' },
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
    // Talk
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'talk',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'talk',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Description',
      name: 'talkDescription',
      type: 'overview',
      group: 'talk',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'timeframe',
      title: 'Timeframe',
      type: 'reference',
      group: 'talk',
      to: [{ type: 'schedule' }],
    }),
    defineField({
      name: 'topic',
      title: 'Topic',
      type: 'string',
      group: 'talk',
    }),
    defineField({
      name: 'project',
      title: 'Project (Optional)',
      type: 'reference',
      to: [{ type: 'project' }],
      group: 'talk',
    }),

    // Speaker
    defineField({
      name: 'name',
      title: 'Name of Speaker',
      type: 'string',
      group: 'speaker',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'About the Speaker',
      name: 'aboutPerson',
      type: 'overview',
      group: 'speaker',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Company',
      name: 'company',
      type: 'string',
      group: 'speaker',
    }),
    defineField({
      name: 'speakerImage',
      title: 'Speaker Image',
      type: 'imageAlt',
      group: 'speaker',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Speaker Links',
      name: 'speakerLinks',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Link',
          name: 'link',
          type: 'linkExternalWithLabel',
        }),
      ],
      group: 'speaker',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'name',
      media: 'speakerImage.asset',
    },
    prepare: ({ title, subtitle, media }) => ({
      title,
      subtitle,
      media,
    }),
  },
})

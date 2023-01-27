import { defineField, defineType } from 'sanity'
import { RobotIcon } from '@sanity/icons'

export default defineType({
  name: 'stage',
  type: 'document',
  title: 'Stage',
  icon: RobotIcon,
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

    // Stage
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'body',
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
      name: 'stream',
      type: 'string',
      title: 'Stream',
      group: 'body',
    }),
    defineField({
      title: 'Schedule',
      name: 'schedule',
      type: 'array',
      group: 'body',
      of: [
        {
          type: 'reference',
          to: [{ type: 'speaker' }],
        },
      ],
      validation: (Rule) =>
        Rule.unique().warning(`This talk is already in this schedule`),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      schedule: 'schedule',
    },
    prepare: ({ name = '', schedule = [] }) => {
      return {
        title: name,
        subtitle: `${schedule.length} talk${schedule.length !== 1 ? 's' : ''}`,
      }
    },
  },
})

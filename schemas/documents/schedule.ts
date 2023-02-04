import { ClockIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'schedule',
  title: 'Schedule',
  icon: ClockIcon,
  fields: [
    defineField({
      name: 'day',
      title: 'Day',
      type: 'string',
      options: {
        list: ['thursday', 'friday'],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'startTime',
      title: 'Talk Start Time',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'endTime',
      title: 'Talk End Time',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      day: 'day',
      startTime: 'startTime',
      endTime: 'endTime',
    },
    prepare: ({ day, startTime, endTime }) => ({
      title: `${startTime} - ${endTime}`,
      subtitle: day.toUpperCase(),
    }),
  },
})

import { defineType } from 'sanity'

export default defineType({
  title: 'Audio',
  name: 'audio',
  type: 'file',
  options: {
    accept: 'audio/mp3, audio/ogg, audio/wav',
  },
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
    },
    prepare: ({ title, description }) => ({
      title: `Audio: ${title}`,
      description,
    }),
  },
})

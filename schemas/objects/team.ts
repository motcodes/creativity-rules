import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  title: 'Team',
  name: 'team',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'object',
      fields: [
        defineField({
          title: 'Name',
          name: 'name',
          type: 'string',
          validation: Rule => Rule.required(),
        }),
        defineField({
          title: 'Social Link',
          name: 'link',
          type: 'linkExternalWithLabel',
        }),
        defineField({
          title: 'Credits',
          description: 'What the person did on the project',
          name: 'credits',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
      preview: {
        select: {
          title: 'name',
          subtitle: 'credits',
        },
        prepare: ({ title, subtitle }) => ({
          title,
          subtitle: subtitle && subtitle[0] ? subtitle[0] : '',
        }),
      },
    }),
  ],
})

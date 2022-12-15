import { defineType, defineArrayMember } from 'sanity'

export default defineType({
  title: 'Overview',
  description:
    'Used both for the <meta> description tag for SEO, and project subheader.',
  name: 'overview',
  type: 'array',
  of: [
    defineArrayMember({
      lists: [],
      marks: {
        annotations: [],
        decorators: [
          { title: 'Italic', value: 'em' },
          { title: 'Strong', value: 'strong' },
        ],
      },
      styles: [],
      type: 'block',
    }),
  ],
  validation: (rule) => rule.max(155).required(),
})

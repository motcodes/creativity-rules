import { defineType, defineArrayMember } from 'sanity'
import { LaunchIcon, LinkIcon } from '@sanity/icons'

export default defineType({
  title: 'Description',
  description:
    'Used both for the <meta> description tag for SEO, and project subheader.',
  name: 'overview',
  type: 'array',
  of: [
    defineArrayMember({
      lists: [],
      marks: {
        annotations: [
          {
            title: 'Internal Link',
            name: 'linkInternal',
            type: 'linkInternal',
            // @ts-ignore
            blockEditor: { icon: LinkIcon },
          },
          {
            title: 'External Link',
            name: 'linkExternal',
            type: 'linkExternal',
            // @ts-ignore
            blockEditor: { icon: LaunchIcon },
          },
        ],
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

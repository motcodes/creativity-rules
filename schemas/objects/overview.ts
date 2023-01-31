import { LaunchIcon, LinkIcon } from '@sanity/icons'
import { defineArrayMember, defineType } from 'sanity'

export default defineType({
  title: 'Description',
  description:
    'Used both for the <meta> description tag for SEO, and project subheader.',
  name: 'overview',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [],
      lists: [],
      marks: {
        annotations: [
          {
            title: 'Internal Link',
            name: 'linkInternal',
            type: 'linkInternal',
            icon: LinkIcon,
          },
          {
            title: 'External Link',
            name: 'linkExternal',
            type: 'linkExternal',
            icon: LaunchIcon,
          },
        ],
        decorators: [
          { title: 'Italic', value: 'em' },
          { title: 'Strong', value: 'strong' },
        ],
      },
    }),
  ],
  validation: (rule) => rule.max(155).required(),
})

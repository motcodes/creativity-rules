import { LaunchIcon, LinkIcon } from '@sanity/icons'
import { defineArrayMember, defineField } from 'sanity'

export default defineField({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
      ],
      lists: [{ title: 'Bullet', value: 'bullet' }],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
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
      },
    }),
    defineArrayMember({
      name: 'timeline',
      type: 'timeline',
    }),
    defineArrayMember({
      title: 'Image',
      name: 'imageAlt',
      type: 'imageAlt',
    }),
    defineArrayMember({
      title: 'Image Full',
      description: 'Image which takes up all the screen width',
      name: 'imageFull',
      type: 'imageAlt',
    }),
    defineArrayMember({
      name: 'audio',
      type: 'audio',
      preview: {
        prepare: () => ({ title: 'Audio' }),
      },
    }),
    defineArrayMember({
      title: 'Video',
      name: 'video',
      type: 'video',
    }),
    defineArrayMember({
      title: 'Blockquote',
      name: 'blockquote',
      type: 'object',
      fields: [
        {
          name: 'text',
          type: 'text',
          description: "Opening and closing quotes '\"\"' aren't necessary.",
          validation: Rule => Rule.required(),
        },
        {
          name: 'author',
          type: 'string',
          validation: Rule => Rule.required(),
        },
      ],
      preview: {
        select: {
          title: 'text',
          subtitle: 'author',
        },
      },
    }),
  ],
})

import { ImageIcon, LaunchIcon, LinkIcon } from '@sanity/icons'
import { defineArrayMember, defineField } from 'sanity'
import React from 'react'

export default defineField({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      // @ts-ignore
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
      },
    }),
    defineArrayMember({
      name: 'timeline',
      type: 'timeline',
    }),
    defineField({
      type: 'image',
      icon: ImageIcon,
      name: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      preview: {
        select: {
          imageUrl: 'asset.url',
          title: 'caption',
        },
      },
      fields: [
        defineField({
          title: 'Caption',
          name: 'caption',
          type: 'string',
        }),
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          description:
            'Alternative text for screenreaders. Falls back on caption if not set',
        }),
      ],
    }),
    defineArrayMember({
      name: 'audio',
      type: 'audio',
      preview: {
        prepare: () => ({ title: 'Audio' }),
      },
    }),
    defineArrayMember({
      name: 'video',
      type: 'object',
      fields: [
        {
          name: 'poster',
          type: 'image',
          description: 'Ratio of the poster should be the same that the video.',
          options: { hotspot: true, accept: '.jpg, .jpeg' },
          validation: (Rule) => Rule.required(),
        },
        {
          title: 'Video showcase sources (Vimeo)',
          name: 'videoSrcs',
          type: 'object',
          fields: [
            {
              title: 'URL mobile',
              name: 'urlMobile',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'URL desktop',
              name: 'urlDesktop',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      preview: {
        prepare: () => ({ title: 'Video' }),
      },
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
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'author',
          type: 'string',
          validation: (Rule) => Rule.required(),
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

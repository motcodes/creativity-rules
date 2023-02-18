import { LaunchIcon, LinkIcon } from '@sanity/icons'

const linkSocial = {
  title: 'Social Link',
  name: 'linkSocial',
  type: 'object',
  fields: [
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      validation: Rule =>
        Rule.required().uri({
          scheme: ['http', 'https', 'tel', 'mailto'],
        }),
    },
    {
      name: 'network',
      type: 'string',
      options: {
        list: [
          { title: 'LinkedIn', value: 'linkedin' },
          { title: 'Twitter', value: 'twitter' },
          { title: 'Facebook', value: 'facebook' },
          { title: 'Instagram', value: 'instagram' },
          { title: 'YouTube', value: 'youtube' },
          { title: 'Soundcloud', value: 'soundcloud' },
        ],
      },
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'network',
      subtitle: 'url',
    },
    prepare: ({ title, subtitle }) => ({
      title,
      subtitle,
    }),
  },
}

const linkExternal = {
  title: 'External Link',
  name: 'linkExternal',
  type: 'object',
  fields: [
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      validation: Rule =>
        Rule.required().uri({
          scheme: ['http', 'https', 'tel', 'mailto'],
        }),
    },
  ],
  preview: {
    select: {
      title: 'url',
    },
  },
}

const linkExternalWithLabel = {
  ...linkExternal,
  name: 'linkExternalWithLabel',
  fields: [
    ...linkExternal.fields,
    {
      name: 'label',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'url',
    },
    prepare: ({ title, subtitle }) => ({
      title,
      subtitle,
      media: LaunchIcon,
    }),
  },
}

const linkInternal = {
  title: 'Internal Link',
  name: 'linkInternal',
  type: 'object',
  fields: [
    {
      title: 'Document',
      name: 'reference',
      type: 'reference',
      to: [
        { type: 'page' },
        { type: 'home' },
        { type: 'project' },
        { type: 'about' },
        { type: 'stage' },
      ],
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'url',
    },
    prepare: ({ title }) => {
      return { title }
    },
  },
}

const linkInternalWithLabel = {
  ...linkInternal,
  name: 'linkInternalWithLabel',
  fields: [
    ...linkInternal.fields,
    {
      name: 'label',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'url',
    },
    prepare: ({ title, subtitle }) => ({
      title,
      subtitle,
      media: LinkIcon,
    }),
  },
}

const link = {
  title: 'Link',
  name: 'link',
  type: 'object',
  fields: [
    {
      name: 'type',
      type: 'string',
      options: {
        list: ['internal', 'external', 'unset'],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'unset',
    },
    {
      name: 'external',
      type: 'linkExternal',
      hidden: ({ parent }) => parent?.type !== 'external',
    },
    {
      name: 'internal',
      type: 'linkInternal',
      hidden: ({ parent }) => parent?.type !== 'internal',
    },
  ],
  preview: {
    select: {
      type: 'type',
      external: 'external',
      internalTitle: 'internal.reference.title',
      internalSlug: 'internal.reference.slug.current',
    },
    prepare({ type, external, internalTitle, internalSlug }) {
      switch (type) {
        case 'external':
          return { title: external?.url, media: LaunchIcon }
        case 'internal':
          return {
            title: internalTitle,
            subtitle: internalSlug,
            media: LinkIcon,
          }
        default:
          return { title: 'Link (unset)', media: LinkIcon }
      }
    },
  },
}

const linkWithLabel = {
  title: 'Link',
  name: 'linkWithLabel',
  type: 'object',
  fields: [
    {
      name: 'type',
      type: 'string',
      options: {
        list: ['internal', 'external', 'unset'],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'unset',
    },
    {
      name: 'external',
      type: 'linkExternalWithLabel',
      hidden: ({ parent }) => parent?.type !== 'external',
    },
    {
      name: 'internal',
      type: 'linkInternalWithLabel',
      hidden: ({ parent }) => parent?.type !== 'internal',
    },
  ],
  preview: {
    select: {
      type: 'type',
      external: 'external',
      internal: 'internal',
      internalSlug: 'internal.reference.slug.current',
    },
    prepare({ type, external, internal, internalSlug }) {
      switch (type) {
        case 'external':
          return {
            title: external?.label,
            subtitle: external?.url,
            media: LaunchIcon,
          }
        case 'internal':
          return {
            title: internal?.label,
            subtitle: internalSlug,
            media: LinkIcon,
          }
        default:
          return { title: 'Link (unset)', media: LaunchIcon }
      }
    },
  },
}

const objects = [
  linkExternal,
  linkExternalWithLabel,
  linkInternal,
  linkInternalWithLabel,
  linkSocial,
  link,
  linkWithLabel,
]

export default objects

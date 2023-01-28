import { CogIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  groups: [
    { default: true, title: 'Body', name: 'body' },
    { title: 'Seo', name: 'seo' },
  ],
  fields: [
    // Seo
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),

    defineField({
      name: 'navigation',
      title: 'Navigation',
      description: 'Links displayed on the header of your site.',
      type: 'array',
      group: 'body',
      of: [
        {
          type: 'reference',
          to: [{ type: 'page' }, { type: 'home' }, { type: 'about' }],
        },
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      group: 'body',
      of: [
        {
          title: 'Link',
          type: 'linkSocial',
        },
      ],
    }),
    defineField({
      name: 'footerLinks',
      title: 'Footer Links',
      type: 'array',
      group: 'body',
      of: [{ title: 'Link', type: 'linkWithLabel' }],
    }),

    defineField({
      name: 'logo',
      type: 'image',
      group: 'body',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Menu Items',
      }
    },
  },
})

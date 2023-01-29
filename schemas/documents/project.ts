import { PresentationIcon } from '@sanity/icons'
import { BAMA } from 'types/constants'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: PresentationIcon,
  liveEdit: true,
  groups: [
    { name: 'body', title: 'Body', default: true },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      description: 'This field is the title of your project.',
      title: 'Title',
      type: 'string',
      group: 'body',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'body',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'overview',
      type: 'overview',
      group: 'body',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logo',
      type: 'imageAlt',
      group: 'body',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      description:
        'This image will be used as the cover image for the project. If you choose to add it to the show case projects, this is the image displayed in the list within the homepage.',
      type: 'imageAlt',
      group: 'body',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Link to Project',
      name: 'site',
      type: 'url',
      group: 'body',
    }),
    defineField({
      title: 'Social Links',
      name: 'socialLinks',
      type: 'array',
      group: 'body',
      of: [
        defineArrayMember({
          title: 'Link',
          name: 'link',
          type: 'linkExternalWithLabel',
        }),
      ],
    }),
    defineField({
      title: 'Team',
      name: 'team',
      type: 'team',
      group: 'body',
    }),
    defineField({
      title: 'Degree',
      name: 'degree',
      type: 'string',
      initialValue: 'bachelor',
      group: 'body',
      options: {
        list: BAMA.map((item) => item.value),
        layout: 'radio',
        direction: 'horizontal',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Deparments',
      name: 'departments',
      type: 'array',
      group: 'body',
      of: [{ type: 'reference', to: [{ type: 'department' }] }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Project Description',
      type: 'blockContent',
      group: 'body',
    }),
  ],
})

import { PresentationIcon } from '@sanity/icons'
import { BAMA, MAIN_DEPARMENT, COURSE_OF_STUDIES } from 'types/constants'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: PresentationIcon,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your project.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
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
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logo',
      type: 'imageAlt',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      description:
        'This image will be used as the cover image for the project. If you choose to add it to the show case projects, this is the image displayed in the list within the homepage.',
      type: 'imageAlt',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Link to Project',
      name: 'site',
      type: 'url',
    }),
    defineField({
      title: 'Social Links',
      name: 'socialLinks',
      type: 'array',
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
    }),
    defineField({
      title: 'Degree',
      name: 'degree',
      type: 'string',
      initialValue: 'bachelor',
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
      of: [{ type: 'reference', to: [{ type: 'department' }] }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Project Description',
      type: 'blockContent',
    }),
  ],
})

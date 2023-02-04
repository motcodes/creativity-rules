import { groq } from 'next-sanity'

const resolvelinkWithLabel = () => groq`
  ...select(_type == 'linkWithLabel' => {
    ...select(defined(internal) => {
      "type": "internal",
      "label": internal.label,
      "slug": coalesce(internal.reference->slug.current, ''),
    }),
    ...select(defined(external) => {
      "type": "external",
      "label": external.label,
      "slug": external.url,
    }),
  }),
  ...select(_type == 'linkSocial' => {
    ...select(defined(network) => {
        "type": "social",
        "network": network,
        "label": network,
        "slug": url,
      }),
  }),
`

const overview = groq`
  "overview": overview[]{
    ...,
    markDefs[]{
      ...,
      'reference': select(_type == 'linkInternal' => reference->{_type, 'slug': coalesce(slug.current, '')})
    },
    _type =='audio' => {
      'url': asset->url,
      'mimeType': asset->mimeType,
    }
  }
`

const showcaseProjects = groq`
  showcaseProjects[]->{
    ...,
    "slug": "/projects/" + slug.current,
    ${overview}
  } 
`

const departments = groq`
  departments[]->{
    ...,
    courseOfStudies->{
      title,
      value
    }
  }
`

export const homePageQuery = groq`
  *[_type == "home"][0]{
    ...,
    ${overview},
    socialLinks[]{
      ${resolvelinkWithLabel()}
    }, 
    links[]{
      ${resolvelinkWithLabel()}
    },
  }
`
export const aboutPageQuery = groq`
  *[_type == "about"][0]{
    ...,
    ${overview}, 
    ${showcaseProjects}, 
  }
`

export const stagePageQuery = groq`
  *[_type == "stage"][0]{
    ...,
  }
`

export const seoPageQuery = (page: string) => groq`
  *[_type == "${page}"][0].seo
`
export const seoPageBySlugQuery = (page: string) => groq`
  *[_type == "${page}" && slug.current == $slug][0].seo
`

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    ...,
    ${overview}, 
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    ...,
    "slug": slug.current,
    ${overview},
    ${departments}
  }
`
export const talkBySlugQuery = groq`
  *[_type == "speaker" && slug.current == $slug][0] {
    ...,
  }
`

export const pathsByType = (type: string) => groq`
 *[_type == "${type}"] {
    "slug": slug.current,
  }
`

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    ...,
    navigation[]->{
      "type": _type,
      "slug": coalesce(slug.current, ''),
      "label": title,
    },
    footerLinks[]{
      ${resolvelinkWithLabel()}
    },
    socialLinks[]{
      ${resolvelinkWithLabel()}
    },
  }
`

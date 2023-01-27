import { groq } from 'next-sanity'

const showcaseProjects = groq`
  showcaseProjects[]->{
    _type,
    coverImage, 
    overview, 
    "slug": "/projects/" + slug.current,
    tags, 
    title, 
  } 
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

const departments = groq`
  departments[]->{
    title,
    value,
    _id,
    courseOfStudies->{
      title,
      value
    }
  }
`

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id, 
    footer,
    title, 
    ${overview}, 
    ${showcaseProjects}, 
  }
`
export const aboutPageQuery = groq`
  *[_type == "about"][0]{
    _id, 
    footer,
    title, 
    ${overview}, 
    ${showcaseProjects}, 
  }
`

export const stagePageQuery = groq`
  *[_type == "stage"][0]{
    _id, 
    title,
    stream,
    schedule,
    seo,
  }
`

export const seoPageQuery = (page: string) => groq`
  *[_type == ${page}][0].seo
`
export const homePageTitleQuery = groq`
  *[_type == 'home'][0].title
`
export const aboutPageTitleQuery = groq`
  *[_type == "about"][0].title
`
export const stagePageTitleQuery = groq`
  *[_type == "about"][0].title
`

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    body,
    slug,
    title,
    ${overview}, 
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    seo,
    coverImage,
    logo,
    site, 
    "slug": slug.current,
    title,
    socialLinks,
    team,
    description,
    ${overview},
    ${departments}
  }
`

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    footer,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    ogImage,
  }
`

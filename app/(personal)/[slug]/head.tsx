import { toPlainText } from '@portabletext/react'
import { SiteMeta } from 'components/global/SiteMeta'
import { getPageSeo } from 'lib/sanity.client'
import { previewData } from 'next/headers'

export default async function PageHead() {
  const token = previewData().token

  const { title, description, ogImage } = await getPageSeo({
    token,
    page: 'home',
  })

  return (
    <SiteMeta
      description={description ? toPlainText(description) : ''}
      image={ogImage}
      title={title}
    />
  )
}

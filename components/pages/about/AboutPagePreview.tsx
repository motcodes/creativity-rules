'use client'

import { usePreview } from 'lib/sanity.preview'
import { aboutPageQuery } from 'lib/sanity.queries'

import { AboutPage } from './AboutPage'

export function HomePagePreview({ token }: { token: null | string }) {
  const about = usePreview(token, aboutPageQuery)

  if (!about) {
    return (
      <div className="text-center">
        Please start editing your Home document to see the preview!
      </div>
    )
  }

  return <AboutPage data={about} />
}

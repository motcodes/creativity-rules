'use client'

import { usePreview } from 'lib/sanity.preview'
import { stagePageQuery } from 'lib/sanity.queries'
import { StagePayload } from 'types'

import { StagePage } from './StagePage'

export function StagePagePreview({ token }: { token: null | string }) {
  const stage: StagePayload = usePreview(token, stagePageQuery)

  if (!stage) {
    return (
      <div className="text-center">
        Please start editing your stage document to see the preview!
      </div>
    )
  }

  return <StagePage {...stage} />
}

import { HomePage } from 'components/pages/home/HomePage'
import { HomePagePreview } from 'components/pages/home/HomePagePreview'
import { StagePage } from 'components/pages/stage/StagePage'
import { StagePagePreview } from 'components/pages/stage/StagePreview'
import { PreviewSuspense } from 'components/preview/PreviewSuspense'
import { PreviewWrapper } from 'components/preview/PreviewWrapper'
import { getStagePage } from 'lib/sanity.client'
import { previewData } from 'next/headers'
import { notFound } from 'next/navigation'

export default async function StageRoute() {
  const token = previewData()?.token || null
  const data = await getStagePage({ token })

  if (!data && !token) {
    notFound()
  }

  return (
    <>
      {token ? (
        <>
          <PreviewSuspense
            fallback={
              <PreviewWrapper>
                <StagePage {...data} />
              </PreviewWrapper>
            }
          >
            <StagePagePreview token={token} />
          </PreviewSuspense>
        </>
      ) : (
        <StagePage {...data} />
      )}
    </>
  )
}

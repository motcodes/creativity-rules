import { CustomPortableText } from 'components/shared/CustomPortableText'
import { Header } from 'components/shared/Header'
import type { PagePayload } from 'types'

export function Page({ body, overview, title }: PagePayload) {
  return (
    <div>
      <div className="mb-14">
        <Header title={title} description={overview} />
        {body && (
          <div className="mt-10">
            <CustomPortableText
              paragraphClasses="font-serif max-w-3xl text-gray-600 text-xl"
              value={body}
            />
          </div>
        )}
      </div>
    </div>
  )
}

import { Header } from 'components/shared/Header'
import ScrollUp from 'components/shared/ScrollUp'
import { Stage } from 'components/shared/Stage'
import type { StagePayload } from 'types'

export function StagePage({ title, stream, schedule }: StagePayload) {
  return (
    <div className="">
      <div className="mb-14">
        <Header title={title} />
        <div className="my-16">
          <Stage stream={stream} />
        </div>
        <ScrollUp />
      </div>
    </div>
  )
}

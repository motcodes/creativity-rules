import { Fragment } from 'react'

import { AutoLink } from 'components/shared/AutoLink'
import { CustomPortableText } from 'components/shared/CustomPortableText'
import type { HomePayload } from 'types'
import TitleSvg from './TitleSvg'

export function HomePage({
  overview,
  title,
  date,
  links,
  socialLinks,
}: HomePayload) {
  return (
    <div className="h-screen space-y-20 p-6">
      <div className="flex flex-col h-full gap-4 justify-between">
        {title && (
          <div className="">
            <TitleSvg title={title} />
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between text-lg md:text-xl items-end">
          {overview && (
            <div className="text-lg md:text-xl">
              <CustomPortableText value={overview} />
            </div>
          )}
          {(date || links || socialLinks) && (
            <div className="flex flex-col items-start md:items-end leading-[100%] gap-[10px]">
              {date && <p>{date}</p>}
              {!!socialLinks?.length && (
                <div className="flex flex-row gap-2 justify-end">
                  {socialLinks.map((item, index) => (
                    <Fragment key={`socialLinks-${index}`}>
                      <AutoLink
                        label={item.label}
                        slug={item.slug}
                        type={item.type}
                      >
                        {item.label}
                      </AutoLink>
                      {index < socialLinks.length - 1 && <span>/</span>}
                    </Fragment>
                  ))}
                </div>
              )}
              {!!links?.length && (
                <div className="flex flex-row gap-2 justify-end">
                  {links.map((item, index) => (
                    <Fragment key={`links-${index}`}>
                      <AutoLink
                        label={item.label}
                        slug={item.slug}
                        type={item.type}
                      >
                        {item.label}
                      </AutoLink>
                      {index < links.length - 1 && <span>/</span>}
                    </Fragment>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

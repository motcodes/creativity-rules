import Link from 'next/link'
import { Fragment } from 'react'

import { CustomPortableText } from 'components/shared/CustomPortableText'
import { Header } from 'components/shared/Header'
import ImageBox from 'components/shared/ImageBox'
import { ProjectPayload } from 'types'

export function ProjectPage({
  coverImage,
  description,
  overview,
  site,
  title,
  socialLinks,
  team,
  departments,
  logo,
}: ProjectPayload) {
  const courseOfStudies = !!departments?.length
    ? departments
        .filter(
          (value, index, self) =>
            index ===
            self.findIndex(
              t => t.courseOfStudies.value === value.courseOfStudies.value
            )
        )
        .map(item => item.courseOfStudies)
    : []

  return (
    <div>
      <div className="mb-20 space-y-6">
        <Header logo={logo} title={title} description={overview} />

        <div className="py-5">
          <h2 className="text-lg font-bold mb-1">
            A Project by students from{' '}
            {!!courseOfStudies?.length &&
              courseOfStudies.map((item, index) => (
                <Fragment key={item.value}>
                  <span>{item.title}</span>
                  {index !== courseOfStudies.length - 1 && <span>, </span>}
                </Fragment>
              ))}
          </h2>
          <ul className="list-none flex flex-row gap-2 m-0">
            <li>Departments:</li>
            {!!departments?.length &&
              departments.map((item, index) => (
                <li key={item._id}>
                  <span>{item.title}</span>
                  {index !== departments.length - 1 && <span>, </span>}
                </li>
              ))}
          </ul>
        </div>

        <div className="py-5">
          <h2 className="text-lg font-bold mb-5">Social Links</h2>
          <ul className="list-none flex flex-col gap-2 m-0">
            {!!socialLinks?.length &&
              socialLinks.map(item => (
                <li key={item._key}>
                  <Link
                    target="_blank"
                    href={item.url}
                    className="text-md md:text-lg underline transition hover:opacity-50"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div className="py-5">
          <h2 className="text-lg font-bold mb-5">Team</h2>
          <ul className="list-none flex flex-col gap-2 m-0">
            {!!team?.length &&
              team.map(item => (
                <li key={item._key}>
                  <h3 className="text-md md:text-lg font-semibold">
                    {item.name}
                  </h3>
                  {item.link?.url && (
                    <Link
                      target="_blank"
                      href={item.link.url}
                      className="text-md md:text-lg underline transition hover:opacity-50"
                    >
                      {item.link.label}
                    </Link>
                  )}
                  {!!item.credits?.length && (
                    <>
                      <h4>Credits:</h4>
                      <ul className="flex flex-row gap-2">
                        {item.credits.map((subitem, index) => (
                          <li key={subitem}>
                            {subitem}
                            {index !== item.credits.length - 1 && (
                              <span>, </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              ))}
          </ul>
        </div>

        <div className="rounded-md border">
          {coverImage && (
            <ImageBox
              image={coverImage}
              alt={`Cover image for ${title}`}
              imageClassName="relative aspect-[16/9]"
            />
          )}

          <div className="divide-inherit grid grid-cols-1 divide-y lg:divide-y-0 lg:divide-x">
            {site && (
              <div className="p-3 lg:p-4">
                <div className="text-xs md:text-sm">Site</div>
                {site && (
                  <Link
                    target="_blank"
                    className="text-md break-words md:text-lg"
                    href={site}
                  >
                    {site}
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>

        {description && (
          <CustomPortableText
            paragraphClasses="max-w-3xl text-xl text-gray-600"
            value={description}
          />
        )}
      </div>
      <div className="absolute left-0 w-screen border-t" />
    </div>
  )
}

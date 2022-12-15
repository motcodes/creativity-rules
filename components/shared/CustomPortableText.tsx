import { PortableText, PortableTextComponents } from '@portabletext/react'
import ImageBox from 'components/shared/ImageBox'
import { TimelineSection } from 'components/shared/TimelineSection'
import Link from 'next/link'
import { Block, Image } from 'sanity'

export function CustomPortableText({
  paragraphClasses,
  value,
}: {
  paragraphClasses?: string
  value: Block[]
}) {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => {
        return <p className={paragraphClasses}>{children}</p>
      },
    },
    marks: {
      linkInternal: ({ children, value }) => {
        return (
          <Link
            className="underline transition hover:opacity-50"
            href={`/${value?.reference.slug}`}
            rel="noreferrer noopener"
          >
            {children}
          </Link>
        )
      },
      linkExternal: ({ children, value }) => {
        return (
          <a
            className="underline transition hover:opacity-50"
            href={value?.url}
            target="_blank"
            rel="noreferrer noopener"
          >
            {children}
          </a>
        )
      },
    },
    types: {
      image: ({
        value,
      }: {
        value: Image & { alt?: string; caption?: string }
      }) => {
        return (
          <div className="my-6 space-y-2">
            <ImageBox
              image={value}
              alt={value.alt}
              classesWrapper="relative aspect-[16/9]"
            />
            {value?.caption && (
              <div className="font-sans text-sm text-gray-600">
                {value.caption}
              </div>
            )}
          </div>
        )
      },
      timeline: ({ value }) => {
        const { items } = value || {}
        return <TimelineSection timelines={items} />
      },
      audio: ({ value }) => {
        const { url, mimeType, title, description } = value
        return (
          <audio controls>
            <source src={url} type={mimeType} />
            Your browser does not support the audio element.
          </audio>
        )
      },
    },
  }

  return <PortableText components={components} value={value} />
}

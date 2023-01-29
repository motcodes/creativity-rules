import { PortableText, PortableTextComponents } from '@portabletext/react'
import ImageBox from 'components/shared/ImageBox'
import { TimelineSection } from 'components/shared/TimelineSection'
import Link from 'next/link'
import { Image, PortableTextBlock } from 'sanity'

export function CustomPortableText({
  paragraphClasses,
  value,
}: {
  paragraphClasses?: string
  value: PortableTextBlock[]
}) {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => {
        return <p className={paragraphClasses}>{children}</p>
      },
      h2: ({ children }) => {
        return <h2 className={`text-3xl font-semibold`}>{children}</h2>
      },
      h3: ({ children }) => {
        return <h3 className={`text-2xl font-semibold`}>{children}</h3>
      },
    },
    marks: {
      linkInternal: ({ children, value }) => {
        return (
          <Link
            className="underline transition hover:opacity-50"
            href={`/${value?.reference.slug}`}
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
      imageAlt: ({ value }: { value: Image & { alt?: string } }) => {
        return (
          <div className="my-6 space-y-2">
            <ImageBox
              image={value}
              alt={value.alt}
              className="relative aspect-[16/9]"
            />
            {value?.alt && (
              <div className="text-sm text-gray-600">{value.alt}</div>
            )}
          </div>
        )
      },
      imageFull: ({ value }: { value: Image & { alt?: string } }) => {
        return (
          <div className="my-6 space-y-2">
            <ImageBox
              image={value}
              alt={value.alt}
              className="relative aspect-[16/9]"
            />
            {value?.alt && (
              <div className="text-sm text-gray-600">{value.alt}</div>
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

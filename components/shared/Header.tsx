import { Image } from 'sanity'

import { CustomPortableText } from 'components/shared/CustomPortableText'
import ImageBox from './ImageBox'

interface HeaderProps {
  centered?: boolean
  description?: any[]
  title?: string
  logo?: Image
}
export function Header({
  title,
  description,
  logo,
  centered = false,
}: HeaderProps) {
  if (!description && !title) {
    return null
  }

  return (
    <div className="flex flex-col gap-4">
      {logo && (
        <ImageBox
          height={96}
          width={96}
          image={logo}
          alt={`Logo: ${logo.alt}`}
        />
      )}
      {title && (
        <div className="text-3xl font-extrabold tracking-tight md:text-5xl">
          {title}
        </div>
      )}
      {description && (
        <div className="text-xl text-gray-600 md:text-2xl">
          <CustomPortableText value={description} />
        </div>
      )}
    </div>
  )
}

import Link from 'next/link'
import { ReactNode } from 'react'
import { LinkItem } from 'types'

export interface AutoLinkProps extends LinkItem {
  children: ReactNode
}

export const AutoLink = ({ slug, type, label, children }) => {
  if (type === 'internal') {
    return (
      <Link className="hover:underline" href={`/${slug}`} aria-label={label}>
        {children || label}
      </Link>
    )
  } else {
    return (
      <Link
        className="capitalize hover:underline"
        href={slug}
        target="_blank"
        rel="noopener"
        aria-label={label}
      >
        {children || label}
      </Link>
    )
  }
}

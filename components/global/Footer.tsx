import { AutoLink } from 'components/shared/AutoLink'
import { partition } from 'lib/partition'
import Link from 'next/link'
import { Image } from 'sanity'
import { LinkItem } from 'types'

export interface FooterProps {
  logo: Image
  links: Array<LinkItem>
  socialLinks: Array<LinkItem>
}

export function Footer({ links, logo, socialLinks }: FooterProps) {
  const [linksLeft, linksRight] = partition(links, 2)
  return (
    <footer className="bottom-0 w-full p-12 md:py-20 border-t flex flex-row justify-between">
      <div className="flex flex-row gap-12">
        {!!linksLeft?.length && (
          <ul>
            {linksLeft.map((item: LinkItem) => (
              <li key={item.label}>
                <AutoLink {...item}>{item.label}</AutoLink>
              </li>
            ))}
          </ul>
        )}
        {!!linksRight?.length && (
          <ul>
            {linksRight.map((item: LinkItem) => (
              <li key={item.label}>
                <AutoLink {...item}>{item.label}</AutoLink>
              </li>
            ))}
          </ul>
        )}
      </div>
      {!!socialLinks?.length && (
        <ul>
          {socialLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.slug}
                className="hover:underline"
                target="_blank"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </footer>
  )
}

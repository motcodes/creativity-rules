import { AutoLink } from 'components/shared/AutoLink'
import { LinkItem } from 'types'

interface NavbarProps {
  navigation?: LinkItem[]
}

export function Navbar({ navigation }: NavbarProps) {
  return (
    <div className="sticky top-0 z-10 flex flex-wrap items-center gap-x-5 bg-white/80 py-4 px-4 backdrop-blur md:py-5 md:px-16 lg:px-32">
      {navigation &&
        navigation.map((item, key) => (
          <AutoLink
            key={key}
            className={`text-lg hover:text-black md:text-xl text-gray-600`}
            slug={item.slug}
            type={item.type}
          >
            {item.label}
          </AutoLink>
        ))}
    </div>
  )
}

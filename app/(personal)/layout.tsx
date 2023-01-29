import 'styles/index.css'

import { Footer } from 'components/global/Footer'
import { Navbar } from 'components/global/Navbar'
import { getSettings } from 'lib/sanity.client'
import { ReactNode } from 'react'

export default async function IndexRoute({
  children,
}: {
  children: ReactNode
}) {
  const settings = await getSettings()
  const { socialLinks, footerLinks, logo, navigation } = settings

  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <Navbar navigation={navigation} />
      <div className="mt-20 flex-grow px-4 md:px-16 lg:px-32">{children}</div>
      <Footer links={footerLinks} socialLinks={socialLinks} logo={logo} />
    </div>
  )
}

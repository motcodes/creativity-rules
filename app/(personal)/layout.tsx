import 'styles/index.css'

import { Footer } from 'components/global/Footer'
import { Navbar } from 'components/global/Navbar'
import { PreviewBanner } from 'components/preview/PreviewBanner'
import { getSettings } from 'lib/sanity.client'
import { previewData } from 'next/headers'
import { ReactNode } from 'react'

export default async function IndexRoute({
  children,
}: {
  children: ReactNode
}) {
  const token = previewData().token
  const settings = await getSettings({ token })
  const { socialLinks, footerLinks, logo, navigation } = settings

  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      {token && <PreviewBanner />}
      <Navbar navigation={navigation} />
      <div className="mt-20 flex-grow px-4 md:px-16 lg:px-32">{children}</div>
      <Footer links={footerLinks} socialLinks={socialLinks} logo={logo} />
    </div>
  )
}

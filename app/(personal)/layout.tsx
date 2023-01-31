import 'styles/index.css'

import { getSettings } from 'lib/sanity.client'
import { ReactNode } from 'react'

export interface LayoutProps {
  children: ReactNode
}

export default async function Layout({ children }: LayoutProps) {
  // const settings = await getSettings()
  // const { socialLinks, footerLinks, logo, navigation } = settings

  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      {children}
    </div>
  )
}

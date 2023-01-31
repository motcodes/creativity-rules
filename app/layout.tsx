import 'tailwindcss/tailwind.css'

import { ReactNode } from 'react'

export interface RootLayoutProps {
  children: ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="font-sans">
      <body>{children}</body>
    </html>
  )
}

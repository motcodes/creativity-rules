import 'tailwindcss/tailwind.css'

import { Inter } from '@next/font/google'
import { ReactNode } from 'react'

const sans = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
})

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className={`${sans.variable}`}>
      <body>{children}</body>
    </html>
  )
}

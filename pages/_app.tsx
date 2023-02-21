import 'styles/index.css'

import type { AppProps } from 'next/app'

import { Footer } from 'components/global/Footer'
import { Navbar } from 'components/global/Navbar'

export default function MyApp({ Component, pageProps }: AppProps) {
  const { settings } = pageProps
  return (
    <div className="min-h-screen flex flex-col">
      {settings?.navigation && <Navbar navigation={settings.navigation} />}
      <main>
        <Component {...pageProps} />
      </main>
      {settings?.footerLinks && settings?.socialLinks && (
        <Footer
          links={settings.footerLinks}
          socialLinks={settings.socialLinks}
        />
      )}
    </div>
  )
}

import 'tailwindcss/tailwind.css'

import { getSettings } from 'lib/sanity.client'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (context) => {
  let settings = {}

  try {
    settings = await getSettings()
  } catch (error) {
    return { error }
  }

  return { settings }
}

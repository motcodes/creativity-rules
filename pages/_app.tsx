import 'tailwindcss/tailwind.css'
import 'styles/index.css'

import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

// MyApp.getInitialProps = async () => {
//   let settings = {}

//   try {
//     settings = await getSettings()
//   } catch (error) {
//     return { error }
//   }

//   return { settings }
// }

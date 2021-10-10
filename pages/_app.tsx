import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  // @ts-ignore
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />);
}


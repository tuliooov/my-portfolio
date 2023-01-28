import Theme from '../styles/theme'
import Head from 'next/head'

export default function App({
  Component,
  pageProps,
}: {
  Component: any
  pageProps: any
}) {
  return (
    <>
      <Head>
        <title>Vipul Jha - Android & Flutter Dev</title>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  )
}

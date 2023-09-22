import Theme from '../styles/theme'
import Head from 'next/head'

export default function App({
  Component,
  pageProps,
}: {
  Component: any
  pageProps: Record<string, unknown>
}) {
  return (
    <>
      <Head>
        <title>Marco Túlio - Fullstack Developer</title>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  )
}

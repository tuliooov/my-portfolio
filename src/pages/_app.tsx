import Theme from '../styles/theme'
import Head from 'next/head'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'

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
      <PrismicPreview repositoryName={repositoryName} />
    </>
  )
}

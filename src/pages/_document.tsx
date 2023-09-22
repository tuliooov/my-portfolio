import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: Record<string, unknown>) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en-GB">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta name="title" content="Marco Túlio - Fullstack Developer" />
          <meta
            name="description"
            content="I'm a passionate software developer with a strong track record in creating efficient software solutions."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Marco Túlio - Fullstack Developer"
          />
          <link
            rel="icon"
            type="image/png"
            href="https://tuliooov.github.io/my-portfolio/profile.jpeg"
          />
          <meta
            property="og:description"
            content="I'm a passionate software developer with a strong track record in creating efficient software solutions."
          />
          <meta
            property="og:image"
            content="https://tuliooov.github.io/my-portfolio/profile.jpeg"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:title"
            content="Marco Túlio - Fullstack Developer"
          />
          <meta
            property="twitter:description"
            content="I'm a passionate software developer with a strong track record in creating efficient software solutions."
          />
          <meta
            property="twitter:image"
            content="https://tuliooov.github.io/my-portfolio/profile.jpeg"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
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
            content="I am currently twenty-five years old and live in the city of Divinópolis in the state of Minas Gerais - Brazil. I work as a full stack developer at Banco Inter. I am communicative, competitive, optimistic and helpful. In addition, I have learned to work as a team. My motto is"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Marco Túlio - Fullstack Developer"
          />
          <meta
            property="og:description"
            content="I am currently twenty-five years old and live in the city of Divinópolis in the state of Minas Gerais - Brazil. I work as a full stack developer at Banco Inter. I am communicative, competitive, optimistic and helpful. In addition, I have learned to work as a team. My motto is"
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
            content="I am currently twenty-five years old and live in the city of Divinópolis in the state of Minas Gerais - Brazil. I work as a full stack developer at Banco Inter. I am communicative, competitive, optimistic and helpful. In addition, I have learned to work as a team. My motto is"
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

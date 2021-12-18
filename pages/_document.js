import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-gradient-to-b from-dark-800 to-dark-900 min-h-screen">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

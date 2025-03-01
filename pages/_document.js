import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link 
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800;900&display=swap" 
            rel="stylesheet" 
        />
        <link rel="shortcut icon" href="/icon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
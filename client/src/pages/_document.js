import { Html, Head, Main, NextScript } from 'next/document'
import Header from '@/components/Header'


export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="icon" type="image/x-icon" href="/assets/favicon.svg"/>
      </Head>
      {/* <Head>
        <meta name="description" content="Web site created using create-react-app"/>
        <title>MemoMind</title>
      </Head> */}
      <body>
          <Main />
        <NextScript />
      </body>
    </Html>
  )
}

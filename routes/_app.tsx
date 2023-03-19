import { AppProps } from "$fresh/server.ts"
import { Head } from "$fresh/runtime.ts";

export default function Home({ Component }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <title>やば道チェッカー</title>
        <link rel="icon" type="image/png" href="/logo.png" sizes="16x16" />
      </Head>
      <Component/>
    </>
  );
}


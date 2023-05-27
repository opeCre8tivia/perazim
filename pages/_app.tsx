import "../styles/globals.css"
import type { AppProps } from "next/app"
import Script from "next/script"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        id="g-tag-script"
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-Z2SL1G6LRX"
      ></Script>

      <Script id="g-2-tag-script" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config','G-Z2SL1G6LRX',{page_path:window.location.pathname});
          `}
      </Script>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp

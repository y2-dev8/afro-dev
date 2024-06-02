import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from '@/components/theme-provider'
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <Head>
        <title>Nook.to</title>
        <link rel="icon" href="/desktop-fav.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
    <Component {...pageProps} />
    </ThemeProvider>
  )
}
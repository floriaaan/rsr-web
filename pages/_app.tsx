import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from 'next/head'
import { ThemeProvider } from "next-themes";
import { DarkModeToggler } from "@components/helpers/DarkMode";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <DarkModeToggler />
    </ThemeProvider>
  );
}
export default MyApp;

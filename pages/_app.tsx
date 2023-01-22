import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/dracula.css";
import { theme } from "../styles/theme";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta property="og:title" content="Ilton Andrew" />
        <meta property="og:description" content="Portifólio & Blog" />
        <meta property="og:image" content="/images/profile_photo.jpg" />
        <meta property="og:url" content="https://iltonandrew.com.br" />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;

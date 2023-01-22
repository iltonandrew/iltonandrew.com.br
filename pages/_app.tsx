import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/dracula.css";
import { theme } from "../styles/theme";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <Analytics />
    </ChakraProvider>
  );
}

export default MyApp;

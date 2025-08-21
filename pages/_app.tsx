import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/dracula.css";
import "../styles/global.css";
import { theme } from "../styles/theme";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import appWithTranslation from "next-translate/appWithTranslation";

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

export default appWithTranslation(MyApp);

import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import { GoogleFonts } from "next-google-fonts";
import { theme } from "../styles/theme";

export default function Document() {
  return (
    <Html>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
      <Head>
        <meta property="og:title" content="Ilton Andrew" />
        <meta property="og:description" content="Portifólio & Blog" />
        <meta property="og:image" content="/images/profile_photo.jpg" />
        <meta property="og:url" content="https://iltonandrew.com.br" />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

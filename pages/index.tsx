import type { NextPage } from "next";
import { ToggleColorMode } from "../src/components/ToggleColorMode";
import Head from "next/head";
import Hero from "../src/components/Hero";
import Companies from "@/components/Companies";
import { Divider } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";

const Home: NextPage = () => {
  const { t, lang } = useTranslation("common");
  
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <NextSeo
        title="Ilton Andrew"
        description={lang === "pt-BR" ? "Portifólio & Blog" : "Portfolio & Blog"}
        openGraph={{
          url: "https://iltonandrew.com.br",
          title: "Ilton Andrew",
          description: lang === "pt-BR" ? "Portifólio & Blog" : "Portfolio & Blog",
          images: [
            {
              url: "/images/profile_photo.jpg",
              width: 800,
              height: 600,
              alt: "Ilton Andrew",
              type: "image/jpeg",
            },
            {
              url: "https://iltonandrew.com.br/images/profile_photo.jpg",
              width: 300,
              height: 200,
              alt: "Ilton Andrew",
              type: "image/jpeg",
            },
          ],
        }}
      />
      <Hero />
      <Divider />
      <Companies />
    </>
  );
};

export default Home;

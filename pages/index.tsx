import type { NextPage } from "next";
import { ToggleColorMode } from "../src/components/ToggleColorMode";
import Head from "next/head";
import Hero from "../src/components/Hero";
import Companies from "@/components/CompaniesList";
import Footer from "@/components/Footer";
import { Divider } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <NextSeo
        title="Ilton Andrew"
        description="Portifólio & Blog"
        openGraph={{
          url: "https://iltonandrew.com.br",
          title: "Ilton Andrew",
          description: "Portifólio & Blog",
          images: [
            {
              url: "/images/profile_photo.jpg",
              width: 800,
              height: 600,
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

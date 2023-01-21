import type { NextPage } from "next";
import { ToggleColorMode } from "../src/components/ToggleColorMode";
import Head from "next/head";
import Hero from "../src/components/Hero";
import Companies from "@/components/CompaniesList";
import Footer from "@/components/Footer";
import { Divider } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Hero />
      <Divider />
      <Companies />
      <Footer />
    </>
  );
};

export default Home;

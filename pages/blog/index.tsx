import { getAllPosts } from "../../src/api";
import { Container, Heading, Divider } from "@chakra-ui/layout";
import { ContextType, PostMeta } from "@/types";
import Article from "@/components/Article";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

export default function Blog({ posts }: { posts: PostMeta[] }) {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>{t("blog.title")}</title>
      </Head>
      <Container maxW={"7xl"} p="12" minH={"100vh"}>
        <Heading as="h1">{t("blog.myPosts")}</Heading>
        {posts.map((post) => (
          <>
            <Article post={post} key={post.slug} />
            <Divider marginTop="5" />
          </>
        ))}
      </Container>
    </>
  );
}

export function getStaticProps(context: ContextType) {
  const { locale } = context;
  const posts = getAllPosts(locale).map((post) => post.meta);

  return {
    props: {
      title: "Blog",
      posts,
    },
  };
}

"use client";

import { getAllPosts } from "../../src/api";
import { Container, Heading, Divider } from "@chakra-ui/layout";
import { ContextType, PostMeta } from "@/types";
import Article from "@/components/Article";

export default function Blog({ posts }: { posts: PostMeta[] }) {
  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h1">Meus Posts</Heading>
      {posts.map((post) => (
        <>
          <Article post={post} key={post.slug} />
          <Divider marginTop="5" key={post.slug} />
        </>
      ))}
    </Container>
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

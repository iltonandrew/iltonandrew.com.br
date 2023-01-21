import type { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import { getPostBySlug, getSlugs } from "@/api";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { PostMeta } from "@/types";
import YouTube from "@/components/youtube";
import Head from "next/head";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";

interface MDXPost {
  meta: PostMeta;
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
}

export default function BlogPost({ post }: { post: MDXPost }) {
  return (
    <>
      <Head>
        <title>{post.meta.title}</title>
      </Head>
      <div>
        <h1>{post.meta.title}</h1>
        <div className="mdx-prose">
          <MDXRemote {...post.source} components={{ Image, YouTube }} />
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostBySlug(slug, locale);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  });

  return {
    props: {
      post: {
        meta,
        source: mdxSource,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths =
    locales?.flatMap((locale) => {
      return getSlugs(locale).map((slug) => ({
        params: { slug, locale },
      }));
    }) || [];

  return {
    paths,
    fallback: false,
  };
};

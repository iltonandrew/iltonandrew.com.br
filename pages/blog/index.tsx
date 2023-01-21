import { getAllPosts } from "../../src/api";
import { ContextType, PostMeta } from "@/types";
import Link from "next/link";

export default function Blog({ posts }: { posts: PostMeta[] }) {
  return (
    <div>
      <h1>Blog</h1>
      <p>Blog page</p>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
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

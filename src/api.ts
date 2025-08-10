import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { Post } from "@/types";

const POSTS_PATH = path.join(process.cwd(), "posts");

export const getSlugs = (locale: string) => {
  const files = fs.readdirSync(path.join(process.cwd(), "posts", locale));
  return files.map((filename) => filename.replace(".mdx", ""));
};

export const getAllPosts = (locale: string) => {
  const posts = getSlugs(locale)
    .map((slug) => getPostBySlug(slug, locale))
    .sort((post1, post2) =>
      new Date(post2.meta.date).getTime() - new Date(post1.meta.date).getTime()
    );

  return posts;
};

export const getPostBySlug = (slug: string, locale: string): Post => {
  const postPath = path.join(process.cwd(), "posts", locale, `${slug}.mdx`);
  const source = fs.readFileSync(postPath);
  const { content, data } = matter(source);
  return {
    content,
    meta: {
      summary: data.summary ?? "",
      slug,
      title: data.title ?? slug,
      tags: Array.isArray(data.tags) ? [...data.tags].sort() : [],
      date: new Date(data.date ?? Date.now()).toISOString(),
      image: data.image ?? "",
    },
  };
};

import { getCollection, type CollectionEntry } from "astro:content";
import { localePath, type Locale } from "../i18n";

export type Post = CollectionEntry<"blog">;

// glob loader slugifies ids ("pt-BR/x" -> "pt-br/x"), so compare case-insensitively.
export async function getPosts(locale: Locale): Promise<Post[]> {
  const all = await getCollection("blog", (e) => !e.data.draft && e.id.toLowerCase().startsWith(`${locale.toLowerCase()}/`));
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const postSlug = (entry: Post) => entry.id.slice(entry.id.indexOf("/") + 1);

export const postPath = (locale: Locale, slug: string) => localePath(locale, `/blog/${slug}`);

export function readingMinutes(body = ""): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(locale, { dateStyle: "long", timeZone: "UTC" }).format(date);
}

import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPosts, postPath, postSlug } from "../../lib/posts";
import { useTranslations } from "../../i18n";

export async function GET(context: APIContext) {
  const t = useTranslations("en");
  const posts = await getPosts("en");
  return rss({
    title: "Ilton Andrew — Blog",
    description: t("meta.blogDescription"),
    site: context.site!,
    trailingSlash: false,
    customData: "<language>en</language>",
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.summary,
      pubDate: p.data.date,
      link: postPath("en", postSlug(p)),
    })),
  });
}

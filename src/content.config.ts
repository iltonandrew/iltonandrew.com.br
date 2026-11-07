import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Posts live in src/content/blog/<locale>/<slug>.md → id "<locale>/<slug>".
const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      date: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      image: z.union([image(), z.string().url()]).optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };

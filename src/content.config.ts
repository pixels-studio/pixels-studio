import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const works = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/works" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cover: z.string().optional(),
    status: z.enum(["draft", "published"]),
    product: z.string(),
    tags: z.array(z.string()),
    date: z.coerce.date(),
    order: z.number().optional(),
  }),
});

export const collections = { works };

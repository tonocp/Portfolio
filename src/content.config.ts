import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const linkSchema = z.object({
  label: z.string(),
  href: z.url()
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string(),
      year: z.number().int(),
      stack: z.array(z.string()).min(1),
      summary: z.string(),
      role: z.string(),
      links: z.array(linkSchema).min(1),
      featured: z.boolean(),
      order: z.number().int(),
      cover: image(),
      theme: z.enum(["amber", "ice", "coral", "mint", "violet"])
    })
});

export const collections = {
  projects
};

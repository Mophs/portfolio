// Imports
import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";
// Projects
const projects = defineCollection({
  loader: glob({ pattern: ["*.md"], base: "src/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover_image: image().optional(),
    }),
});
// Exports
export const collections = { projects };

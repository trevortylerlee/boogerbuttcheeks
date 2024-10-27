import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      draft: z.boolean().default(false),
      publicationDate: z.coerce.date(),
      lastUpdated: z.coerce.date().optional(),
      image: image()
        .refine((img) => img.width >= 1200, {
          message: "Image should be 1200px × 630px.",
        })
        .optional(),
      imageAlt: z.string().optional(),
      tags: z.array(z.string()).optional(),
    }),
});

const lists = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      lastUpdated: z.coerce.date().optional(),
      tags: z.array(z.string()).optional(),
    }),
});

export const collections = { blog, lists };

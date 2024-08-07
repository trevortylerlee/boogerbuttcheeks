import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publicationDate: z.coerce.date(),
      editDate: z.coerce.date().optional(),
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
      tags: z.array(z.string()).optional(),
    }),
});

export const collections = { blog, lists };

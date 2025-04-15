import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string().optional(),
    }).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};

// src/content/config.js
import { defineCollection, z } from 'astro:content';

const toolsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()),
    category: z.string().optional(),
    url: z.string().optional(),
    cost: z.string().optional(),
    excerpt: z.string().optional(),
    pricing: z.string().optional(),
  })
});

export const collections = {
  'tools': toolsCollection,
};



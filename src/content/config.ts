// src/content/config.js
import { defineCollection, z } from 'astro:content';

const toolsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    category: z.string().optional(),
    url: z.string().optional(),
    cost: z.string().optional(),
    excerpt: z.string().optional(),
  })
});

export const collections = {
  'tools': toolsCollection,
};



// src/content/config.js
import { defineCollection, z } from 'astro:content';

const resourcesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()),
    category: z.string().optional(),
    url: z.string().optional(),
    cost: z.string().optional(),
    excerpt: z.string().optional(),
    date: z.string().optional(),
    pricing: z.string().optional(),
  })
});

export const resources = {
  'resources': resourcesCollection,
};



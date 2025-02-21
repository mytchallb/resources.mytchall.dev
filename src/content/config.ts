// src/content/config.js
import { defineCollection, z } from 'astro:content';

const toolsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
  })
});

export const collections = {
  'tools': toolsCollection,
};
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const bestiary = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/bestiary' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({ url: z.string(), alt: z.string() }),
    tags: z.array(z.string()),
  }),
});

export const collections = { bestiary };

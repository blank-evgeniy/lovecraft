import type { InferEntrySchema, RenderedContent } from 'astro:content';

export type Image = {
  url: string;
  alt: string;
};

export type Bestyary = {
  id: string;
  body?: string;
  collection: 'bestiary';
  data: InferEntrySchema<'bestiary'>;
  rendered?: RenderedContent;
  filePath?: string;
};

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		role: z.string(),
		repo: z.string().url(),
		website: z.string().url().optional(),
		tags: z.array(z.string()),
		startDate: z.coerce.date(),
		endDate: z.coerce.date().optional(),
		featured: z.boolean().default(false),
		order: z.number().default(0)
	})
});

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		draft: z.boolean().default(false)
	})
});

export const collections = { projects, blog };

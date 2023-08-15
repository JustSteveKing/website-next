import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z
            .string()
            .or(z.date())
            .transform((val) => new Date(val)),
        image: z.string(),
        source: z.string().optional(),
        repost: z.boolean().optional(),
        partner: z.string().optional(),
    }),
});

export const collections = { blog };
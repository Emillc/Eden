import config from '@/config/common'
import { defineCollection, z } from 'astro:content'

const { author } = config

const posts = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    /** The title of the post */
    title: z.string(),

    /** The author of the post */
    author: z.string().default(author),

    /** The description of the post */
    description: z.string(),

    /** The published date of the post */
    pubDate: z.date(),

    /** The updated date of the post */
    updDate: z.date().optional().nullable(),

    /** The tags of the post */
    tags: z.array(z.string()).default(['others']),

    /** Whether the post is a draft */
    draft: z.boolean().optional(),

    /** the OpenGraph image of the post. */
    ogImage: image()
      .refine(
        img => img.width >= 1200 && img.height >= 630,
        'OpenGraph image must be at least 1200 x 630 pixels!',
      )
      .or(z.string())
      .optional(),

    /** The canonical URL of the post */
    canonicalURL: z.string().optional(),
  }),
})

export const collections = { posts }

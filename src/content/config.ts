import { defineCollection, z } from 'astro:content'
import config from '@/config/common'

const { author } = config

const posts = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    author: z.string().default(author),
    description: z.string().default(''),
    pubDate: z.coerce.date(),
    updDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default(['others']),
    draft: z.boolean().default(false),
    ogImage: image()
      .refine(img => img.width >= 1200 && img.height >= 630, 'OpenGraph image must be at least 1200 x 630 pixels!')
      .or(z.string())
      .optional(),
    canonicalURL: z.string().optional(),
  }),
})

export const collections = { posts }

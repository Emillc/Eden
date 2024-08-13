import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

import config from '@config'

const { description, title, url: site } = config

export async function GET() {
  const posts = await getCollection('posts')
  return rss({
    title,
    description,
    site,
    items: posts.map((post) => {
      const { pub: pubDate, ...rest } = post.data

      return {
        ...rest,
        pubDate,
        link: `/posts/${post.slug}/`,
      }
    }),
  })
}

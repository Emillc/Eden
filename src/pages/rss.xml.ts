import config from '@/config'

import getPosts from '@/utils/getPosts'
import rss from '@astrojs/rss'

const { description, title, url: site } = config

export async function GET() {
  const posts = await getPosts()
  return rss({
    title,
    description,
    site,
    items: posts.map(post => ({
      ...post.data,
      link: `/posts/${post.id}/`,
    })),
  })
}

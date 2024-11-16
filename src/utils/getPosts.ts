import { getCollection } from 'astro:content'

const getPosts = async () => await getCollection('posts', ({ data }) => !data.draft)

export default getPosts

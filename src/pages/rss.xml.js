import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get() {
  const posts = await getCollection('blog');
  return rss({
    title: 'QUIETLYPURE Blog',
    description: 'Explore our latest blog posts about lifestyle and wellness.',
    site: import.meta.env.SITE,
    items: posts.map((item) => {
      const publishDate = new Date(item.data.publishDate);
      publishDate.setUTCHours(0, 0, 0, 0);
      return {
        title: item.data.title,
        description: item.data.description,
        pubDate: publishDate.toUTCString(),
        link: `/blog/${item.slug}/`,
      };
    }),
  });
}

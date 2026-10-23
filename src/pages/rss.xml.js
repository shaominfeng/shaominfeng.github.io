import rss from '@astrojs/rss';
import { FEATURED_ARTICLES } from '../data/articles';
import { SITE } from '../data/site';

export async function GET(context) {
  const items = FEATURED_ARTICLES.map((article) => ({
    title: article.title,
    description: article.excerpt,
    link: article.href,
    pubDate: new Date('2026-02-24'),
    categories: [article.part, ...article.tags],
  }));

  return rss({
    title: SITE.name + ' · 技术写作',
    description: SITE.description,
    site: context.site,
    trailingSlash: true,
    items,
    customData: '<language>zh-cn</language>',
  });
}

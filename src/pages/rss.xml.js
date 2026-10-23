import rss from '@astrojs/rss';
import { FEATURED_ARTICLES, SERIES_CHAPTERS } from '../data/articles';
import { SITE } from '../data/site';

export async function GET(context) {
  const items = [
    ...FEATURED_ARTICLES.map((article) => ({
      title: article.title,
      description: article.excerpt,
      link: article.href,
      pubDate: new Date('2026-02-24'),
      categories: [article.part, ...article.tags],
    })),
    ...SERIES_CHAPTERS.filter(
      (chapter) => !FEATURED_ARTICLES.some((article) => article.href === chapter.href)
    ).map((chapter) => ({
      title: chapter.title,
      description: '《从对话到协作》系列章节',
      link: chapter.href,
      pubDate: new Date('2026-02-24'),
      categories: [chapter.part],
    })),
  ];

  return rss({
    title: SITE.name + ' · 技术写作',
    description: SITE.description,
    site: context.site,
    trailingSlash: true,
    items,
    customData: '<language>zh-cn</language>',
  });
}

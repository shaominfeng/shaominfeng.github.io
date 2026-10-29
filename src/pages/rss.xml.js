import rss from '@astrojs/rss';
import { SITE } from '../data/site';
import { getWritingFeed, writingBlock } from '../data/writing';

/**
 * 主页 RSS 不再手工维护文章列表，直接由博客的 writing.json 生成。
 * 博客自己的 /blog/rss.xml 是主订阅源；这里是给只订阅主页的人留的最近若干篇。
 */
export async function GET(context) {
  const feed = await getWritingFeed();
  const block = writingBlock(feed, 'zh');

  const items = (block?.latest ?? []).map((item) => ({
    title: item.title,
    description: item.excerpt,
    link: SITE.siteUrl + item.path,
    pubDate: item.date ? new Date(item.date) : undefined,
    categories: [item.kind === 'essay' ? '单篇' : item.part || item.seriesTitle, ...item.tags].filter(Boolean),
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

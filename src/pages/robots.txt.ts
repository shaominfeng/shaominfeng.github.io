import type { APIRoute } from 'astro';

// robots.txt 随站点域名变化，避免切换域名后仍指向旧地址
export const GET: APIRoute = ({ site }) => {
  const base = (site?.href || 'https://shaominfeng.github.io/').replace(/\/+$/, '');

  const body = `# 通用
User-agent: *
Allow: /

# 百度
User-agent: Baiduspider
Allow: /

User-agent: Baiduspider-render
Allow: /

# 国内其他搜索引擎
User-agent: Sogou web spider
Allow: /

User-agent: Sogou inst spider
Allow: /

User-agent: 360Spider
Allow: /

User-agent: HaosouSpider
Allow: /

User-agent: YisouSpider
Allow: /

User-agent: Bytespider
Allow: /

# 海外
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: ${base}/sitemap-index.xml
Sitemap: ${base}/blog/sitemap-index.xml
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

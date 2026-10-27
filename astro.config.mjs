import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 站点域名可切换：默认 GitHub Pages，国内部署时用 SITE_URL 覆盖
//   SITE_URL=https://example.com npm run build
const SITE_URL = (process.env.SITE_URL || 'https://shaominfeng.github.io').replace(/\/+$/, '');

export default defineConfig({
  site: SITE_URL,
  base: '/',
  trailingSlash: 'always',
  build: { format: 'directory' },
  // 中文为默认语言，保留在根路径（/）；英文在 /en/ 下。
  // redirectToDefaultLocale 必须关掉，否则 Astro 会把 / 重定向到 /zh/。
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [sitemap()],
});

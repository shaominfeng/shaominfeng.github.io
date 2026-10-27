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
  integrations: [sitemap()],
});

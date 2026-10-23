import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://shaominfeng.github.io',
  base: '/',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
});

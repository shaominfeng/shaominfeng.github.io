const SITE_URL = (import.meta.env.SITE || 'https://shaominfeng.github.io').replace(/\/+$/, '');

export const SITE = {
  name: 'Allen Shao',
  en: 'Allen Shao',
  role: '全栈工程师 · AI Agent 与云安全',
  tagline: '把 AI 从「会聊天」做成「能干活」。',
  description:
    'Allen Shao，全栈工程师，专注 AI Agent、云安全与开发者体验。3 年企业 AI 平台实践，写代码，也把踩过的坑写成 14 章系列和单篇长文。',
  email: 'shaominfeng8@gmail.com',
  github: 'https://github.com/shaominfeng',
  siteUrl: SITE_URL,
  blogUrl: SITE_URL + '/blog/',
  seriesUrl: SITE_URL + '/blog/ai-evolution/',
  blogRepo: 'https://github.com/shaominfeng/blog',
  aiHotUrl: SITE_URL + '/ai-hot-daily/',
  aiHotRepo: 'https://github.com/shaominfeng/ai-hot-daily',
  updated: '2026.10',
};

export const NAV = [
  { href: '/work/', label: '项目' },
  { href: SITE.blogUrl, label: '文章' },
  { href: '/about/', label: '关于' },
];
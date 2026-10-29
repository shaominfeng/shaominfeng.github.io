import { UI, localePath, type Lang } from '../i18n/ui';

const SITE_URL = (import.meta.env.SITE || 'https://shaominfeng.github.io').replace(/\/+$/, '');

export const SITE = {
  name: 'Allen Shao',
  en: 'Allen Shao',
  role: '全栈工程师 · AI Agent 与云安全',
  tagline: '把 AI 从「会聊天」做成「能干活」。',
  description:
    'Allen Shao，全栈工程师，专注 AI Agent、云安全与开发者体验。3 年企业 AI 平台实践，写代码，也把踩过的坑写成系列与单篇长文。',
  email: 'shaominfeng8@gmail.com',
  github: 'https://github.com/shaominfeng',
  siteUrl: SITE_URL,
  blogUrl: SITE_URL + '/blog/',
  seriesUrl: SITE_URL + '/blog/ai-evolution/',
  essaysUrl: SITE_URL + '/blog/essays/',
  blogRepo: 'https://github.com/shaominfeng/blog',
  aiHotUrl: SITE_URL + '/ai-hot-daily/',
  aiHotRepo: 'https://github.com/shaominfeng/ai-hot-daily',
  updated: '2026.10',
};

/**
 * 博客入口：英文页指向博客的英文版 /blog/en/
 * 主页不读取博客的任何内容，只保留这些链接 —— 两边唯一的约定就是 URL。
 */
export function getBlogUrl(lang: Lang) {
  return lang === 'en' ? SITE_URL + '/blog/en/' : SITE.blogUrl;
}

/** 单篇入口（跟随语言） */
export function getEssaysUrl(lang: Lang) {
  return getBlogUrl(lang) + 'essays/';
}

/** 系列入口（跟随语言） */
export function getSeriesUrl(lang: Lang) {
  return getBlogUrl(lang) + 'ai-evolution/';
}

/** 主导航（按语言生成，写作指向对应语言的博客） */
export function getNav(lang: Lang) {
  const t = UI[lang];
  return [
    { href: localePath('/work/', lang), label: t.nav.work },
    { href: getBlogUrl(lang), label: t.nav.writing },
    { href: localePath('/about/', lang), label: t.nav.about },
  ];
}

export const NAV = getNav('zh');
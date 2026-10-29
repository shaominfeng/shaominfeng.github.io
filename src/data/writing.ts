import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import type { Lang } from '../i18n/ui';

/**
 * 写作数据：只从博客的 /blog/writing.json 读，不在本仓库维护任何文章副本。
 *
 * 取名顺序（先近后远，任何一步失败都往下走，绝不抛错）：
 *   1. BLOG_WRITING_JSON 环境变量指定的文件
 *   2. 本地 ../blog/dist/writing.json —— 本地开发、npm run build:all 时命中
 *   3. 本地 .build/blog/dist/writing.json —— build:all 克隆下来的博客仓库
 *   4. 线上 https://<site>/blog/writing.json —— GitHub Pages 单独构建时命中
 *   5. 全失败 → null，页面降级为“三个入口链接”，构建照常通过
 *
 * 因此：新增文章只需要发博客，本仓库不用改。只有站点名、版式、区块文案
 * 这类“主页自己的东西”变了，才需要动这里。
 */

export interface WritingItem {
  id: string;
  kind: 'chapter' | 'essay';
  series: string;
  seriesTitle: string;
  part: string;
  title: string;
  subtitle: string;
  excerpt: string;
  date: string;
  minutes: number;
  tags: string[];
  path: string;
}

export interface WritingSeries {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  chapters: number;
  words: string;
  wordsUnit: string;
  minutes: number;
  sources: number | null;
  written: string;
  updated: string;
  path: string;
  cover: string | null;
}

export interface WritingBlock {
  totals: {
    series: number;
    chapters: number;
    essays: number;
    words: string;
    wordsUnit: string;
    minutes: number;
    sources: number;
  };
  entrance: { writing: string; series: string; essays: string };
  series: WritingSeries[];
  latest: WritingItem[];
}

export interface WritingFeed {
  version: number;
  generated: string;
  site: { name: string; author: string; base: string; url: string };
  zh: WritingBlock;
  en: WritingBlock;
}

const REMOTE_URL = (import.meta.env.SITE || 'https://shaominfeng.github.io').replace(/\/+$/, '') + '/blog/writing.json';
const TIMEOUT_MS = 5000;

const localCandidates = (): string[] => {
  const cwd = process.cwd();
  return [
    process.env.BLOG_WRITING_JSON,
    path.resolve(cwd, '../blog/dist/writing.json'),
    path.resolve(cwd, '.build/blog/dist/writing.json'),
  ].filter((item): item is string => Boolean(item));
};

function readLocal(): WritingFeed | null {
  for (const file of localCandidates()) {
    if (!existsSync(file)) continue;
    try {
      return JSON.parse(readFileSync(file, 'utf8')) as WritingFeed;
    } catch (error) {
      console.warn(`[writing] 读取 ${file} 失败：${(error as Error).message}`);
    }
  }
  return null;
}

async function readRemote(): Promise<WritingFeed | null> {
  try {
    const response = await fetch(REMOTE_URL, { signal: AbortSignal.timeout(TIMEOUT_MS) });
    if (!response.ok) return null;
    return (await response.json()) as WritingFeed;
  } catch {
    return null;
  }
}

let cached: Promise<WritingFeed | null> | undefined;

/** 读一次、缓存到本次构建结束 */
export function getWritingFeed(): Promise<WritingFeed | null> {
  cached ??= (async () => {
    const local = readLocal();
    if (local) return local;
    const remote = await readRemote();
    if (!remote) {
      console.warn('[writing] 没有拿到博客的写作清单，写作区降级为入口链接。');
      return null;
    }
    return remote;
  })();
  return cached;
}

export const writingBlock = (feed: WritingFeed | null, lang: Lang): WritingBlock | null =>
  feed ? feed[lang] : null;

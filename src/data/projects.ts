export interface Metric {
  value: string;
  label: string;
}

export interface Section {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface ProjectText {
  title: string;
  tagline: string;
  description: string;
  role: string;
  status: string;
  demoLabel: string;
  metrics: Metric[];
  sections: Section[];
  note?: string;
}

export interface Project {
  slug: string;
  index: string;
  title: string;
  en: string;
  tagline: string;
  description: string;
  year: string;
  role: string;
  stack: string[];
  status: string;
  demo?: string;
  demoLabel: string;
  repo?: string;
  cover?: string;
  coverAlt?: string;
  coverCaption?: string;
  metrics: Metric[];
  sections: Section[];
  note?: string;
  /**
   * 英文文案。填了才会生成 /en/work/<slug>/ 详情页；
   * 不填时英文列表页会退回中文项目名（只加 /en/ 路径）。
   */
  enText?: ProjectText;
}

/**
 * 项目列表。
 *
 * 项目内容暂缓发布，数组保持为空 —— 首页与项目页会按 PROJECT_SLOTS
 * 渲染等量的占位卡片。补齐内容时，往数组里加对象即可：首页卡片、
 * /work/ 列表和 /work/<slug>/ 详情页都会自动生成。
 *
 * 英文详情页（/en/work/<slug>/）由 src/pages/en/work/[slug].astro 渲染。
 * 只要在对象里补上 enText，英文页就会用英文文案；不补则退回中文文案
 * 放在英文路径下（不推荐，会被搜索引擎判为重复内容）。
 */
export const PROJECTS: Project[] = [];

/** 按语言取项目文案：英文缺 enText 时退回中文 */
export function projectText(project: Project, lang: 'zh' | 'en'): ProjectText {
  if (lang === 'en' && project.enText) return project.enText;
  return {
    title: project.title,
    tagline: project.tagline,
    description: project.description,
    role: project.role,
    status: project.status,
    demoLabel: project.demoLabel,
    metrics: project.metrics,
    sections: project.sections,
    note: project.note,
  };
}

/** 预留给未来项目的占位数（页面按此渲染空占位卡片） */
export const PROJECT_SLOTS = 2;

export const getProject = (slug: string) => PROJECTS.find((project) => project.slug === slug);

/*
新增项目时按下面的结构补进 PROJECTS：

{
  slug: 'example-project',          // 详情页路径 /work/example-project/
  index: '01',
  title: '项目名称',
  en: 'Project Name',
  tagline: '一句话说清它解决什么问题',
  description: '两三句话展开这个项目。',
  year: '2026.10',
  role: '作者 / 维护者',
  stack: ['TypeScript', 'Node.js'],
  status: '进行中',
  demoLabel: '查看项目',
  demo: 'https://example.com',      // 可选
  repo: 'https://github.com/...',   // 可选
  cover: '/images/xxx.webp',        // 可选，缺省时用 metrics 生成封面
  coverAlt: '界面截图',
  coverCaption: 'Live demo',
  metrics: [
    { value: '1', label: '指标名' },
    { value: '2', label: '指标名' },
  ],
  sections: [
    { title: '为什么做', paragraphs: ['……'] },
    { title: '怎么做', paragraphs: ['……'], bullets: ['要点一', '要点二'] },
  ],
  note: '可选补充说明',
},
*/

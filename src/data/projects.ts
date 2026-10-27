export interface Metric {
  value: string;
  label: string;
}

export interface Section {
  title: string;
  paragraphs: string[];
  bullets?: string[];
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
}

/**
 * 项目列表。
 *
 * 项目内容暂缓发布，数组保持为空 —— 首页与项目页会按 PROJECT_SLOTS
 * 渲染等量的占位卡片。补齐内容时，往数组里加对象即可：首页卡片、
 * /work/ 列表和 /work/<slug>/ 详情页都会自动生成。
 */
export const PROJECTS: Project[] = [];

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

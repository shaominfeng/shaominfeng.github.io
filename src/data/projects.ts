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

export const PROJECTS: Project[] = [
  {
    slug: 'ai-hot-daily',
    index: '01',
    title: 'AI HOT · 每日晨报',
    en: 'AI HOT Daily',
    tagline: '把每天 6 条 AI 新闻，压成 5 分钟晨报',
    description:
      '每天抓取 AI HOT 日报，渲染成单文件 HTML 仪表盘，按月份归档到 GitHub Pages。无后端、无数据库，打开一个文件就能读。',
    year: '2026.07',
    role: '作者 / 维护者',
    stack: ['Python', 'HTML', 'GitHub Pages'],
    status: '已归档 15 期',
    demo: 'https://shaominfeng.github.io/ai-hot-daily/',
    demoLabel: '打开今日晨报',
    repo: 'https://github.com/shaominfeng/ai-hot-daily',
    cover: '/images/ai-hot-daily.webp',
    coverAlt: 'AI HOT 每日晨报的在线界面，包含今日概览与历史归档',
    coverCaption: 'Live demo — 今日概览与历史归档',
    metrics: [
      { value: '15', label: '期归档' },
      { value: '1', label: '单文件 / 期' },
      { value: '5', label: '分钟读完' },
      { value: '0', label: '运行时依赖' },
    ],
    sections: [
      {
        title: '为什么做',
        paragraphs: [
          '每天醒来，AI 新闻已经堆了几十条。真正重要的可能只有五六条，但翻完所有信息要花掉一个小时。',
          '我想要一个更小的入口：5 分钟知道今天发生了什么，而且每一期都能离线打开、随时回看。',
        ],
      },
      {
        title: '怎么做',
        paragraphs: [
          '用 Python 抓取 AI HOT 日报，把内容渲染成一个自包含的 HTML 文件：样式、脚本、数据全部内联，不依赖任何外部资源。按月份归档，GitHub Pages 直接托管。',
        ],
        bullets: [
          '单文件 HTML：双击即可阅读，适合邮件、U 盘和离线场景',
          '按月份分目录，索引页支持日期与星期检索',
          '零运行时：没有后端、数据库和第三方统计',
        ],
      },
      {
        title: '结果',
        paragraphs: [
          '2026 年 7 月，每天自动生成一期，打开一个文件就能读完。现在它作为那个月的完整归档保留，也是我练习「把复杂信息压成结构化界面」的小项目。',
        ],
      },
    ],
  },
  {
    slug: 'enterprise-ai-platform',
    index: '02',
    title: '企业 AI 平台',
    en: 'Enterprise AI Platform',
    tagline: '从 POC 到 4000+ 用户的三年',
    description:
      '参与建设的企业内部 AI 服务平台：模型接入、Agent 工具、成本治理与 MCP 生态。已脱敏，只保留可迁移的方法。',
    year: '2023—2026',
    role: '平台工程 / 全栈',
    stack: ['TypeScript', 'Node.js', 'MCP', 'Dify', 'OIDC'],
    status: '内部系统',
    demoLabel: '阅读完整案例',
    demo: 'https://shaominfeng.github.io/blog/ai-evolution/enterprise-case/',
    cover: '/images/platform-cover.webp',
    coverAlt: '用户调用模型的完整架构示意图',
    coverCaption: '平台能力分层（示意）',
    metrics: [
      { value: '4000+', label: '平台用户' },
      { value: '17 天', label: '集成 R1' },
      { value: '10+', label: 'MCP Servers' },
      { value: '10—15h', label: '每周节省' },
    ],
    sections: [
      {
        title: '背景',
        paragraphs: [
          '2023 年初，团队决定把大模型接进真实的研发与安全业务。最初只是一个 POC：一个 API Gateway、几个模型供应商、少量内部试用者。',
          '三年后，它变成了一个有 4,000+ 用户的内部平台，覆盖模型接入、Agent 工具、成本治理与权限体系。',
        ],
      },
      {
        title: '我做了什么',
        paragraphs: [
          '参与平台从基础设施到服务化、再到生态化的几个阶段：API Gateway、Portal、AI Endpoint、模型接入、MCP Server 与 Skills 落地，以及成本与可观测性。',
          '技术上，最有价值的不是某个框架，而是几条边界：模型接入要可替换，工具调用要可审计，成本要能看到每一个团队，Agent 要能回滚。',
        ],
        bullets: [
          'DeepSeek-R1 发布后 17 天内完成平台集成',
          '开发与集成 10+ MCP Servers，把内部系统接进 Agent',
          'Skills ROI 验证：每周节省 10—15 小时重复劳动',
          '从单点成本事故，走到订阅制与预算可控',
        ],
      },
      {
        title: '结果',
        paragraphs: [
          '平台成为团队默认的 AI 入口，4,000+ 用户在日常工作里使用。更重要的是，它让「模型能力」变成了「组织能力」：可以复用、可以治理、可以算账。',
        ],
      },
      {
        title: '说明',
        paragraphs: [
          '内部系统，无公开 Demo。公司名、产品名与具体金额已脱敏，完整方法写在《从对话到协作》第 13 章。',
        ],
      },
    ],
    note: '内部系统 · 无公开 Demo',
  },
];

export const getProject = (slug: string) => PROJECTS.find((project) => project.slug === slug);
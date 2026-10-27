/**
 * 全站文案字典。
 *
 * 中文为默认语言，页面在根路径（/），英文在 /en/ 下。
 * 新增页面或文案时：先写进 `zh`，再补 `en`（类型会强制两边字段一致）。
 */

export const LANGS = ['zh', 'en'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'zh';

export const HTML_LANG: Record<Lang, string> = { zh: 'zh-CN', en: 'en' };
export const OG_LOCALE: Record<Lang, string> = { zh: 'zh_CN', en: 'en_US' };

/** 当前路径属于哪种语言 */
export function getLangFromUrl(pathname: string): Lang {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'zh';
}

/** 把当前路径换算成目标语言的等价路径（用于 hreflang 与语言切换） */
export function swapLangPath(pathname: string, lang: Lang): string {
  const clean = pathname.replace(/\/+$/, '') || '/';
  const stripped = clean === '/en' ? '/' : clean.startsWith('/en/') ? clean.slice(3) : clean;
  const base = stripped === '/' ? '/' : stripped + '/';
  if (lang === 'zh') return base;
  return base === '/' ? '/en/' : '/en' + base;
}

/** 站内链路的语言前缀 */
export function localePath(path: string, lang: Lang): string {
  if (lang === 'zh') return path;
  return path === '/' ? '/en/' : '/en' + path;
}

const zh = {
  meta: {
    siteDescription:
      'Allen Shao，全栈工程师，专注 AI Agent、云安全与开发者体验。3 年企业 AI 平台实践，写代码，也把踩过的坑写成 14 章系列和单篇长文。',
    role: '全栈工程师 · AI Agent 与云安全',
    aboutTitle: '关于',
    aboutDescription:
      'Allen Shao，全栈工程师，专注 AI Agent、云安全与开发者体验。3 年企业 AI 平台实践。',
    workTitle: '项目',
    workDescription: 'Allen Shao 的项目。项目内容整理中，先把位置留出来，完成后会陆续补上。',
    notFoundTitle: '页面不存在',
    notFoundDescription: '这个页面不存在，回到首页继续浏览。',
  },
  a11y: {
    skipToContent: '跳到正文',
  },
  nav: {
    aria: '主导航',
    work: '项目',
    writing: '文章',
    about: '关于',
    cta: '聊聊',
    brandSub: 'FULL-STACK / AI · 2026',
    switchAria: 'Switch to English',
    switchTargetHrefLang: 'en',
    currentToken: '中',
    otherToken: 'EN',
  },
  footer: {
    navAria: '页脚导航',
    note: '做平台，也写代码。把踩过的坑，写清楚。',
    noteEm: 'Keep Passion.',
    builtWith: '用 Astro 构建 · 部署于 GitHub Pages · 无跟踪脚本',
    updated: '最后更新',
  },
  home: {
    kicker: 'Full-stack · AI Agent / Cloud security',
    portfolio: 'Portfolio · 2026',
    heroLineA: '把 AI 从「会聊天」',
    heroLineB: '做成',
    heroLineEm: '「能干活」',
    heroLineTail: '。',
    heroDesc:
      '3 年 AI 平台与 Agent 工程实践。做平台，也写代码；把踩过的坑，写成 2.6 万字的技术长文。',
    ctaWork: '看项目',
    ctaRead: '读文章',
    notes: ['开放交流：AI Agent / 平台工程', 'Base in China', '中文 / English'],
    fieldNotes: 'Field notes / AI',
    fieldRange: '2022—2026',
    stages: [
      { year: '2022', label: '对话 AI' },
      { year: '2023', label: '长文本 AI' },
      { year: '2024', label: '推理 AI' },
      { year: '2025', label: 'Agent AI' },
      { year: '2026', label: '协作 AI' },
    ],
    contextWindow: 'Context window',
    growth: 'Three-year growth',
    gatewayAria: '主要内容',
    gwProjects: {
      label: '01 / Projects',
      title: '项目',
      desc: '做过的东西。项目文档整理中，位置先留着。',
      foot: '待补充 · 整理中',
    },
    gwArticles: {
      label: '02 / Articles',
      title: '文章',
      desc: '技术长文与系列连载。14 章，另有单篇长文。',
      foot: '从对话到协作 · Agentic Coding',
      count: '15',
    },
    sectionProjects: '项目',
    sectionProjectsNote: '全部项目 →',
    sectionWriting: '文章',
    sectionWritingNote: '进入文章集 →',
    placeholderIndex: (n: string) => `Project ${n} / 待补充`,
    placeholderTitle: '待补充',
    placeholderDesc: '这个位置留给下一个要做的项目。内容补齐后，卡片和详情页会自动出现在这里。',
    comingSoon: 'Coming soon',
    projectsFoot: '项目内容整理中，完成后会补到这里。',
    projectsFootLink: '项目路线 →',
    detail: '详情 →',
    viewProject: (title: string) => `查看项目：${title}`,
    writingFoot: '以上几篇，有系列里最适合单独阅读的章节，也有一篇完整的工作流长文。文章集会持续更新。',
    writingFootLink: '进入文章集 ↗',
    numbers: {
      users: '企业平台用户',
      mcp: 'MCP Servers 开发 / 集成',
      stars: 'GitHub Stars',
      years: '年 AI 工程实践',
      writing: '写作 2.6 万字 · 14 章 + 单篇 · 17 份参考',
      follow: 'Follow on GitHub ↗',
    },
    timelineTitle: '时间线',
    timelineNote: '2022 — 2026 · 从工具到同事',
    aboutTitle: '关于我',
    aboutNote: '完整介绍 →',
    aboutStatementA: '做平台，也写代码。',
    aboutStatementB: '把踩过的坑，写清楚。',
    aboutParas: [
      '我是 Allen Shao，一名全栈工程师。过去三年，我大部分时间在做一件事：把大模型从「演示」变成「可用的内部产品」——模型接入、Agent 工具、成本治理、权限与可观测性。',
      '我也写代码。TypeScript、Node.js、Python，从 API Gateway 到前端 Portal，从 MCP Server 到静态站点。技术选型的原则很简单：能被替换，能被审计，能被团队接手。',
      '写作是我检验理解的方式。如果一件事不能写清楚，通常说明我还没想清楚。',
    ],
    aboutMore: '更多关于我 →',
    contactBlog: '文章集',
  },
  about: {
    label: 'About / Allen Shao',
    headingA: '写代码，',
    headingB: '也写清楚。',
    intro:
      '我是 Allen Shao，一名全栈工程师。过去三年，我在做一件事：把大模型从「演示」变成「可用的内部产品」。做平台，也写代码；做工程，也写复盘。',
    markSmall: 'ALLEN SHAO · 2026',
    sections: [
      {
        title: '现在',
        paragraphs: [
          '主要关注三件事：Agent 如何真正落地、平台如何把模型能力变成组织能力、开发者如何用更少的摩擦把事做完。',
          '日常在 TypeScript / Node.js 与 Python 之间切换，做 API Gateway、Portal、MCP Server、成本与权限系统。也花很多时间在 Claude Code 里：不是让它替我打字，而是把任务拆成可验收的步骤。',
        ],
      },
      {
        title: '过去',
        paragraphs: [
          '2023 年，从企业 AI 平台的 POC 开始，参与它从基础设施到服务化、再到生态化的过程。平台从几十个试用者走到 4,000+ 用户，我也从「接模型」走到「设计边界」。',
          '2026 年，把三年的观察写成《从对话到协作》：14 章、2.1 万字；也把最近一年的 Agent 工作流写成单篇《工程师 Agentic Coding 的一天》。写作让我把很多模糊的直觉，变成了可以检验的判断。',
        ],
      },
      {
        title: '怎么做',
        paragraphs: [
          '技术上，我偏好「可替换、可审计、可接手」：模型可以换，工具调用有记录，成本能算到团队，Agent 能回滚。产品上，我相信少即是多：一个 5 分钟能读完的晨报，比一个功能齐全但没人打开的仪表盘更有价值。',
        ],
      },
    ],
    facts: [
      { term: 'Base', detail: '中国 · 双语工作' },
      { term: 'Role', detail: '全栈工程师' },
      { term: 'Focus', detail: 'AI Agent / 云安全' },
      { term: 'Experience', detail: '3 年 AI 平台' },
      { term: 'Writing', detail: '14 章 + 1 篇单篇' },
      { term: 'Open to', detail: 'AI Agent / 平台工程' },
    ],
    skills: [
      { title: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'Java'] },
      {
        title: 'AI / Agent',
        items: ['Claude Code', 'MCP', 'Agent Skills', 'RAG', 'Context Engineering'],
      },
      {
        title: 'Platform',
        items: ['Node.js', 'React', 'Docker / K8s', 'OIDC', 'Cost / Observability'],
      },
    ],
    openTitle: '开放交流',
    openBody:
      '如果你在做 AI Agent、平台工程或云安全相关的事，欢迎聊聊。无论是技术问题、合作，还是一个还没想清楚的想法。',
    openCta: '发一封邮件',
  },
  work: {
    label: 'Projects / 2026',
    heading: '项目',
    intro:
      '项目内容正在整理。先把位置留出来，完成后会陆续补上——每一个都从真实问题出发，也尽量留下可以复用的方法。',
    metaCount: (n: number) => (n > 0 ? `${n} 个项目` : '整理中'),
    metaSlots: (n: number) => `${n} 个位置预留`,
    metaFoot: '完成后陆续补上',
    placeholderIndex: (n: string) => `Project ${n} / 待补充`,
    placeholderTitle: '待补充',
    placeholderTagline: '留给下一个要做的项目',
    placeholderDesc: '这个位置先空着。内容补齐后，卡片、指标和详情页会自动生成，不需要再改页面。',
    roadmapTitle: '正在构建',
    roadmapNote: 'Roadmap',
    roadmap: [
      {
        title: 'MCP 工具集',
        desc: '把内部系统接进 Agent 的可复用工具层。从认证、权限到审计，做成可以安装的组件。',
        tag: '探索中',
      },
      {
        title: 'Agent 工作流',
        desc: '从任务拆解、执行到验收的工程化模板。目标不是更炫的 Demo，而是可回滚的生产流程。',
        tag: '设计中',
      },
      {
        title: '开发者效率实验',
        desc: '用更小的工具缩短反馈回路：一个脚本、一个页面，或者一个下午能做完的东西。',
        tag: '持续',
      },
    ],
    roadmapFoot: '想一起做点什么？或者你有一个值得被做出来的想法。',
    roadmapFootLink: '聊聊 →',
    detail: '项目详情 →',
  },
  notFound: {
    heading: '这里什么也没有',
    body: '链接可能已经移动。旧的报告链接会自动跳转到新的文章集。',
    backHome: '回到首页',
    toBlog: '去文章集',
  },
};

type Dict = typeof zh;

const en: Dict = {
  meta: {
    siteDescription:
      'Allen Shao — full-stack engineer working on AI agents, cloud security and developer experience. Three years of enterprise AI platform work; I write the code, and write up the sharp edges.',
    role: 'Full-stack engineer · AI agent & cloud security',
    aboutTitle: 'About',
    aboutDescription:
      'Allen Shao, full-stack engineer focused on AI agents, cloud security and developer experience. Three years of enterprise AI platform practice.',
    workTitle: 'Projects',
    workDescription:
      'Projects by Allen Shao. Write-ups are in progress — the slots are reserved and will fill in over time.',
    notFoundTitle: 'Page not found',
    notFoundDescription: 'This page does not exist. Head back to the homepage.',
  },
  a11y: {
    skipToContent: 'Skip to content',
  },
  nav: {
    aria: 'Main navigation',
    work: 'Projects',
    writing: 'Writing',
    about: 'About',
    cta: "Let's talk",
    brandSub: 'FULL-STACK / AI · 2026',
    switchAria: '切换到中文',
    switchTargetHrefLang: 'zh-CN',
    currentToken: 'EN',
    otherToken: '中',
  },
  footer: {
    navAria: 'Footer navigation',
    note: 'Build platforms, write code. Document the potholes.',
    noteEm: 'Keep Passion.',
    builtWith: 'Built with Astro · Deployed on GitHub Pages · No tracking scripts',
    updated: 'Last updated',
  },
  home: {
    kicker: 'Full-stack · AI Agent / Cloud security',
    portfolio: 'Portfolio · 2026',
    heroLineA: 'Taking AI from “it can chat”',
    heroLineB: 'to ',
    heroLineEm: '“it gets work done.”',
    heroLineTail: '',
    heroDesc:
      'Three years of AI platform and agent engineering. I build the platform and write the code — then turn the sharp edges into 26,000 words of technical writing.',
    ctaWork: 'See the work',
    ctaRead: 'Read the writing',
    notes: ['Open to: AI agent / platform engineering', 'Base in China', 'Chinese / English'],
    fieldNotes: 'Field notes / AI',
    fieldRange: '2022—2026',
    stages: [
      { year: '2022', label: 'Chat AI' },
      { year: '2023', label: 'Long context' },
      { year: '2024', label: 'Reasoning' },
      { year: '2025', label: 'Agentic' },
      { year: '2026', label: 'Collaborative' },
    ],
    contextWindow: 'Context window',
    growth: 'Three-year growth',
    gatewayAria: 'Main sections',
    gwProjects: {
      label: '01 / Projects',
      title: 'Projects',
      desc: 'Things I have built. Write-ups are being organised; the slots are reserved.',
      foot: 'Pending · in progress',
    },
    gwArticles: {
      label: '02 / Articles',
      title: 'Writing',
      desc: 'Long-form technical essays and a series. 14 chapters, plus standalone pieces.',
      foot: 'From chat to collaboration · Agentic coding',
      count: '15',
    },
    sectionProjects: 'Projects',
    sectionProjectsNote: 'All projects →',
    sectionWriting: 'Writing',
    sectionWritingNote: 'Enter the collection →',
    placeholderIndex: (n: string) => `Project ${n} / Open slot`,
    placeholderTitle: 'Open slot',
    placeholderDesc:
      'Reserved for the next thing I build. Once it is written up, the card and its detail page appear here automatically.',
    comingSoon: 'Coming soon',
    projectsFoot: 'Project write-ups are in progress; they will land here when ready.',
    projectsFootLink: 'Project roadmap →',
    detail: 'Details →',
    viewProject: (title: string) => `View project: ${title}`,
    writingFoot:
      'A few of these read well on their own; one is a full workflow essay. The collection keeps growing.',
    writingFootLink: 'Enter the collection ↗',
    numbers: {
      users: 'Enterprise platform users',
      mcp: 'MCP servers built / integrated',
      stars: 'GitHub Stars',
      years: 'Years of AI engineering',
      writing: '26k words · 14 chapters + essays · 17 references',
      follow: 'Follow on GitHub ↗',
    },
    timelineTitle: 'Timeline',
    timelineNote: '2022 — 2026 · From tool to teammate',
    aboutTitle: 'About',
    aboutNote: 'Full profile →',
    aboutStatementA: 'Build platforms. Write code.',
    aboutStatementB: 'Document the potholes.',
    aboutParas: [
      'I am Allen Shao, a full-stack engineer. For the past three years most of my time has gone into one thing: taking large models from “demo” to “usable internal product” — model access, agent tooling, cost control, permissions and observability.',
      'I also write the code. TypeScript, Node.js, Python; from API gateway to front-end portal, from MCP server to static site. My rule for technology choices is simple: replaceable, auditable, something a team can inherit.',
      'Writing is how I test understanding. If I cannot explain it clearly, I usually have not understood it yet.',
    ],
    aboutMore: 'More about me →',
    contactBlog: 'Writing collection',
  },
  about: {
    label: 'About / Allen Shao',
    headingA: 'Write code.',
    headingB: 'Write it clearly.',
    intro:
      'I am Allen Shao, a full-stack engineer. For the past three years I have been doing one thing: taking large models from “demo” to “usable internal product”. I build the platform, I write the code; I do the engineering, and I write the retrospectives.',
    markSmall: 'ALLEN SHAO · 2026',
    sections: [
      {
        title: 'Now',
        paragraphs: [
          'Three things hold my attention: how agents actually land in production, how a platform turns model capability into organisational capability, and how developers get things finished with less friction.',
          'Day to day I move between TypeScript / Node.js and Python, building API gateways, portals, MCP servers, cost and permission systems. I also spend a lot of time inside Claude Code — not to have it type for me, but to break work into steps that can be accepted or rejected.',
        ],
      },
      {
        title: 'Then',
        paragraphs: [
          'In 2023 I joined the POC of an enterprise AI platform, and stayed through its shift from infrastructure to service to ecosystem. The platform grew from a few dozen trial users to 4,000+, and I moved from “connecting models” to “designing boundaries”.',
          'In 2026 I wrote those three years down as “From Chat to Collaboration”: 14 chapters, 21,000 words. I also turned the past year of agent workflows into a standalone essay, “A Day of Agentic Coding”. Writing converts fuzzy intuition into claims that can be tested.',
        ],
      },
      {
        title: 'How I work',
        paragraphs: [
          'On the technical side I prefer replaceable, auditable, inheritable: models can be swapped, tool calls are logged, cost is attributable to a team, agents can be rolled back. On the product side I believe less is more: a five-minute morning brief beats a feature-complete dashboard nobody opens.',
        ],
      },
    ],
    facts: [
      { term: 'Base', detail: 'China · bilingual' },
      { term: 'Role', detail: 'Full-stack engineer' },
      { term: 'Focus', detail: 'AI agents / cloud security' },
      { term: 'Experience', detail: '3 years, AI platform' },
      { term: 'Writing', detail: '14 chapters + 1 essay' },
      { term: 'Open to', detail: 'AI agent / platform engineering' },
    ],
    skills: [
      { title: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'Java'] },
      {
        title: 'AI / Agent',
        items: ['Claude Code', 'MCP', 'Agent Skills', 'RAG', 'Context Engineering'],
      },
      {
        title: 'Platform',
        items: ['Node.js', 'React', 'Docker / K8s', 'OIDC', 'Cost / Observability'],
      },
    ],
    openTitle: 'Open to conversation',
    openBody:
      'If you are working on AI agents, platform engineering or cloud security, I would like to hear about it. A technical question, a collaboration, or an idea you have not finished thinking through.',
    openCta: 'Send an email',
  },
  work: {
    label: 'Projects / 2026',
    heading: 'Projects',
    intro:
      'Project write-ups are being organised. The slots are reserved here and will fill in one by one — each starts from a real problem, and tries to leave behind a method worth reusing.',
    metaCount: (n: number) => (n > 0 ? `${n} projects` : 'In progress'),
    metaSlots: (n: number) => `${n} slots reserved`,
    metaFoot: 'Filled in as they ship',
    placeholderIndex: (n: string) => `Project ${n} / Open slot`,
    placeholderTitle: 'Open slot',
    placeholderTagline: 'Reserved for the next thing I build',
    placeholderDesc:
      'This slot is empty for now. Once the content is ready, the card, metrics and detail page are generated automatically — no page edits needed.',
    roadmapTitle: 'In the works',
    roadmapNote: 'Roadmap',
    roadmap: [
      {
        title: 'MCP toolkit',
        desc: 'A reusable tool layer that connects internal systems to agents. Authentication, permissions and audit, packaged as installable components.',
        tag: 'Exploring',
      },
      {
        title: 'Agent workflows',
        desc: 'An engineering template from task breakdown to execution and acceptance. The goal is not a flashier demo, but a production flow you can roll back.',
        tag: 'Designing',
      },
      {
        title: 'Dev-experience experiments',
        desc: 'Shorter feedback loops with smaller tools: a script, a page, or something one afternoon can finish.',
        tag: 'Ongoing',
      },
    ],
    roadmapFoot: 'Want to build something together? Or you have an idea worth making real.',
    roadmapFootLink: "Let's talk →",
    detail: 'Project details →',
  },
  notFound: {
    heading: 'Nothing here',
    body: 'The link may have moved. Old report links redirect to the writing collection automatically.',
    backHome: 'Back to homepage',
    toBlog: 'Writing collection',
  },
};

export const UI: Record<Lang, Dict> = { zh, en };

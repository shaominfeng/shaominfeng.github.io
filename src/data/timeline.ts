export interface Milestone {
  year: string;
  date: string;
  title: string;
  description: string;
  tag: string;
  /** 英文版文案（/en/ 页面使用） */
  en: {
    title: string;
    description: string;
    tag: string;
  };
}

export const TIMELINE: Milestone[] = [
  {
    year: '2022',
    date: '2022.11',
    title: '第一次把 ChatGPT 放进工作流',
    description: '开始记录 AI 能做什么、不能做什么。最初的震撼很快变成一个问题：它什么时候能真的替我干活？',
    tag: '起点',
    en: {
      title: 'First ChatGPT wired into the workflow',
      description:
        'Started keeping notes on what AI could and could not do. The early awe quickly became a question: when will it actually do the work for me?',
      tag: 'Starting point',
    },
  },
  {
    year: '2023',
    date: '2023.02',
    title: '企业 AI 平台 POC 启动',
    description: '从 API Gateway 开始，把模型接进真实业务。第一次意识到，模型不是产品，平台才是。',
    tag: '平台',
    en: {
      title: 'Enterprise AI platform POC kicks off',
      description:
        'Started at the API gateway, wiring models into real business flows. First realisation: the model is not the product — the platform is.',
      tag: 'Platform',
    },
  },
  {
    year: '2024',
    date: '2024.04',
    title: 'Portal 开放，4,000+ 用户',
    description: '平台从项目变成产品。用户、权限、成本、SLA，每一项都开始变成工程问题。',
    tag: '产品',
    en: {
      title: 'Portal opens, 4,000+ users',
      description:
        'The platform turned from project into product. Users, permissions, cost, SLA — every one of them became an engineering problem.',
      tag: 'Product',
    },
  },
  {
    year: '2024',
    date: '2024.06',
    title: 'AI Endpoint 上线',
    description: '模型接入服务化。可替换、可计量、可治理，比「接得更快」更重要。',
    tag: '平台',
    en: {
      title: 'AI Endpoint ships',
      description:
        'Model access as a service. Replaceable, metered, governable — more important than “integrated faster”.',
      tag: 'Platform',
    },
  },
  {
    year: '2025',
    date: '2025.07',
    title: 'Claude Code 进入日常',
    description: '从「写提示词」转向「委派任务」。开始用 Agent 的方式思考：目标、约束、验收、回滚。',
    tag: '工具',
    en: {
      title: 'Claude Code becomes part of the day',
      description:
        'From writing prompts to delegating tasks. Started thinking in agents: goal, constraints, acceptance, rollback.',
      tag: 'Tooling',
    },
  },
  {
    year: '2025',
    date: '2025.10',
    title: '10+ MCP Servers 与 Skills 落地',
    description: '工具与知识分层。MCP 解决「能连什么」，Skills 解决「知道怎么做」，Agent 开始有边界。',
    tag: '工具',
    en: {
      title: '10+ MCP servers and Skills in production',
      description:
        'Tools and knowledge, layered. MCP answers “what can it connect to”; Skills answer “how is it done”; agents finally have boundaries.',
      tag: 'Tooling',
    },
  },
  {
    year: '2026',
    date: '2026.01',
    title: '发布《从对话到协作》',
    description: '2.1 万字，14 章，把三年串成一条线。写作逼我把「感觉懂了」变成「真的懂了」。',
    tag: '写作',
    en: {
      title: 'Publishing “From Chat to Collaboration”',
      description:
        '21,000 words, 14 chapters, three years pulled into one line. Writing forced “I get it” to become “I actually get it”.',
      tag: 'Writing',
    },
  },
  {
    year: '2026',
    date: '2026.10',
    title: '个人站上线',
    description: '把作品、写作和正在做的事放在一起。下一件事：继续做，继续写。',
    tag: '写作',
    en: {
      title: 'Personal site goes live',
      description:
        'Work, writing and what comes next, in one place. Next up: keep building, keep writing.',
      tag: 'Writing',
    },
  },
];

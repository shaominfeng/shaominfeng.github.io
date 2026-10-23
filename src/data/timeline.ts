export interface Milestone {
  year: string;
  date: string;
  title: string;
  description: string;
  tag: '起点' | '平台' | '产品' | '工具' | '写作';
}

export const TIMELINE: Milestone[] = [
  {
    year: '2022',
    date: '2022.11',
    title: '第一次把 ChatGPT 放进工作流',
    description: '开始记录 AI 能做什么、不能做什么。最初的震撼很快变成一个问题：它什么时候能真的替我干活？',
    tag: '起点',
  },
  {
    year: '2023',
    date: '2023.02',
    title: '企业 AI 平台 POC 启动',
    description: '从 API Gateway 开始，把模型接进真实业务。第一次意识到，模型不是产品，平台才是。',
    tag: '平台',
  },
  {
    year: '2024',
    date: '2024.04',
    title: 'Portal 开放，4,000+ 用户',
    description: '平台从项目变成产品。用户、权限、成本、SLA，每一项都开始变成工程问题。',
    tag: '产品',
  },
  {
    year: '2024',
    date: '2024.06',
    title: 'AI Endpoint 上线',
    description: '模型接入服务化。可替换、可计量、可治理，比「接得更快」更重要。',
    tag: '平台',
  },
  {
    year: '2025',
    date: '2025.07',
    title: 'Claude Code 进入日常',
    description: '从「写提示词」转向「委派任务」。开始用 Agent 的方式思考：目标、约束、验收、回滚。',
    tag: '工具',
  },
  {
    year: '2025',
    date: '2025.10',
    title: '10+ MCP Servers 与 Skills 落地',
    description: '工具与知识分层。MCP 解决「能连什么」，Skills 解决「知道怎么做」，Agent 开始有边界。',
    tag: '工具',
  },
  {
    year: '2026',
    date: '2026.01',
    title: '发布《从对话到协作》',
    description: '2.1 万字，14 章，把三年串成一条线。写作逼我把「感觉懂了」变成「真的懂了」。',
    tag: '写作',
  },
  {
    year: '2026',
    date: '2026.10',
    title: '个人站上线',
    description: '把作品、写作和正在做的事放在一起。下一件事：继续做，继续写。',
    tag: '写作',
  },
];

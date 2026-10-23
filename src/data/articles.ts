export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  minutes: number;
  part: string;
  tags: string[];
  href: string;
}

const REPORT = 'https://shaominfeng.github.io/ai-evolution';

export const FEATURED_ARTICLES: Article[] = [
  {
    slug: 'context-revolution',
    title: '上下文革命：从 4K 到 2M',
    subtitle: '500 倍增长之后，成本才是下一个战场',
    excerpt:
      '三年 500 倍。长上下文解决了遗忘，也把成本、延迟与信息噪音推到新的量级，并催生缓存、压缩与检索三条优化路径。',
    minutes: 4,
    part: '技术深潜',
    tags: ['上下文', '推理成本'],
    href: REPORT + '/read/context-revolution/',
  },
  {
    slug: 'agent-skills',
    title: 'Agent Skills：比 MCP 更重要的创新',
    subtitle: '把领域知识变成可安装的资产',
    excerpt:
      'Skills 补的不是模型能力，而是架构：把团队最佳实践沉淀为可复用、可版本化的知识包，Token 更省，边界更清晰。',
    minutes: 5,
    part: '技术深潜',
    tags: ['Agent', 'Skills', 'MCP'],
    href: REPORT + '/read/agent-skills/',
  },
  {
    slug: 'new-paradigm',
    title: 'AI 进化的新范式：推理层才是核心',
    subtitle: '同样的模型，不同的服务团队',
    excerpt:
      '参数不是唯一的护城河。推理层决定模型如何被调度、约束与优化，也决定了同样能力下的成本、可靠性与体验差距。',
    minutes: 4,
    part: '洞察',
    tags: ['推理层', '架构'],
    href: REPORT + '/read/new-paradigm/',
  },
];

export const SERIES_CHAPTERS = [
  { num: 1, title: '总览：从对话到协作', part: '序章', href: REPORT + '/read/overview/', minutes: 19 },
  { num: 2, title: '用一家餐厅，理解 AI 系统', part: '导读', href: REPORT + '/read/restaurant-analogy/', minutes: 21 },
  { num: 3, title: '2022：生成式 AI 的觉醒', part: '时间线', href: REPORT + '/read/year-2022/', minutes: 3 },
  { num: 4, title: '2023：长文本元年与百模大战', part: '时间线', href: REPORT + '/read/year-2023/', minutes: 4 },
  { num: 5, title: '2024：推理革命与生态标准化', part: '时间线', href: REPORT + '/read/year-2024/', minutes: 4 },
  { num: 6, title: '2025：生态爆发与范式转移', part: '时间线', href: REPORT + '/read/year-2025/', minutes: 5 },
  { num: 7, title: '2026：协作时代的开启', part: '时间线', href: REPORT + '/read/year-2026/', minutes: 5 },
  { num: 8, title: '上下文革命：从 4K 到 2M', part: '技术深潜', href: REPORT + '/read/context-revolution/', minutes: 4 },
  { num: 9, title: 'Prompt 工程的兴衰', part: '技术深潜', href: REPORT + '/read/prompt-engineering/', minutes: 2 },
  { num: 10, title: 'MCP 协议：从炒作到现实', part: '技术深潜', href: REPORT + '/read/mcp/', minutes: 2 },
  { num: 11, title: 'Agent Skills：比 MCP 更重要的创新', part: '技术深潜', href: REPORT + '/read/agent-skills/', minutes: 5 },
  { num: 12, title: 'AI 进化的新范式：推理层才是核心', part: '洞察', href: REPORT + '/read/new-paradigm/', minutes: 4 },
  { num: 13, title: '企业 AI 平台发展史（2023—2026）', part: '实践', href: REPORT + '/read/enterprise-case/', minutes: 2 },
  { num: 14, title: '未来展望与结论', part: '展望', href: REPORT + '/read/outlook/', minutes: 3 },
];

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

const SITE_URL = (import.meta.env.SITE || 'https://shaominfeng.github.io').replace(/\/+$/, '');
const BLOG = SITE_URL + '/blog/ai-evolution';


export const FEATURED_ARTICLES: Article[] = [
  {
    slug: 'a-day-of-agentic-coding',
    title: '工程师 Agentic Coding 的一天',
    subtitle: '当 AI 从「工具」变成「一直在跑的同事」',
    excerpt:
      '从 09:00 的自动晨报到 18:00 的最后一轮巡检：一个工程师怎样把 AI 嵌进工单、调试、开发、复盘与工具改进，让时间从「排队」变成「重叠」。',
    minutes: 19,
    part: '单篇',
    tags: ['Agentic Coding', '工作流'],
    href: SITE_URL + '/blog/essays/a-day-of-agentic-coding/',
  },
  {
    slug: 'context-revolution',
    title: '上下文革命：从 4K 到 2M',
    subtitle: '500 倍增长之后，成本才是下一个战场',
    excerpt:
      '三年 500 倍。长上下文解决了遗忘，也把成本、延迟与信息噪音推到新的量级，并催生缓存、压缩与检索三条优化路径。',
    minutes: 4,
    part: '技术深潜',
    tags: ['上下文', '推理成本'],
    href: BLOG + '/context-revolution/',
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
    href: BLOG + '/agent-skills/',
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
    href: BLOG + '/new-paradigm/',
  },
];

# shaominfeng.github.io

邵敏峰的个人主页：作品、技术写作与关于。

**Live: https://shaominfeng.github.io/**

## 结构

- `/` — 首页：定位、精选作品、技术写作、社区数据、时间线
- `/work/` — 三个项目：AI 演进报告、AI HOT 每日晨报、企业 AI 平台
- `/writing/` — 技术文章，链接到《从对话到协作》系列
- `/about/` — 个人介绍、技能与联系方式
- `/rss.xml` — 订阅

## 技术栈

- [Astro](https://astro.build/) 静态站点
- 自托管字体 + 原生 CSS，无 UI 框架
- 构建时读取 GitHub API，展示真实的 stars / followers / repos
- GitHub Pages 托管，无追踪脚本

## 本地开发

```bash
npm install
npm run dev       # http://localhost:4321
npm run build
npm run preview
```

## 内容更新

- 项目数据：`src/data/projects.ts`
- 首页与关于页的文案：`src/pages/index.astro`、`src/pages/about.astro`
- 时间线：`src/data/timeline.ts`
- 文章列表：`src/data/articles.ts`
- 站点信息：`src/data/site.ts`

## 相关

- 技术报告：https://shaominfeng.github.io/ai-evolution/
- GitHub：https://github.com/shaominfeng

## 授权

代码 MIT；文字与图片 CC BY-NC-SA 4.0。

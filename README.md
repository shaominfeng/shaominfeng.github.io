# shaominfeng.github.io

Allen Shao 的个人主页：个人介绍 + 两个清晰入口（文章 / 项目）。

**Live: https://shaominfeng.github.io/**

## 结构

- `/` — 首页：个人定位、文章与项目入口、精选项目、技术文章、社区数据、时间线
- `/work/` — 项目：AI HOT 每日晨报、企业 AI 平台，以及「正在构建」的项目路线
- `/blog/` — 文章集（独立仓库 [blog](https://github.com/shaominfeng/blog)）
- `/about/` — 个人介绍、技能与联系方式
- `/writing/` — 旧链接，跳转到 `/blog/`
- `/ai-evolution/` — 旧报告链接，跳转到 `/blog/ai-evolution/`
- `/rss.xml` — 订阅精选文章

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
- 首页文案：`src/pages/index.astro`
- 项目路线图：`src/pages/work/index.astro`
- 时间线：`src/data/timeline.ts`
- 精选文章：`src/data/articles.ts`
- 站点信息：`src/data/site.ts`

## 部署

GitHub Pages 的 `gh-pages` 分支发布：

```bash
npm run build
cd dist
touch .nojekyll
git init -b gh-pages
git add -A && git commit -m "Deploy"
git push -f <your-remote> gh-pages
```

仓库设置 → Pages → Source 选择 `gh-pages` 分支。

## 相关

- 文章集：https://shaominfeng.github.io/blog/
- 从对话到协作：https://shaominfeng.github.io/blog/ai-evolution/
- GitHub：https://github.com/shaominfeng

## 授权

代码 MIT；文字与图片 CC BY-NC-SA 4.0。
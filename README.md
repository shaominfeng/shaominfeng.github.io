# shaominfeng.github.io

Allen Shao 的个人主页：个人介绍 + 文章与项目两个入口。

**Live: https://shaominfeng.github.io/**

## 结构

- `/` — 首页：个人定位、项目与写作入口、最新写作、社区数据、时间线
- `/work/` — 项目。内容整理中，先按 `PROJECT_SLOTS` 预留占位
- `/blog/` — 写作，独立仓库部署（[blog](https://github.com/shaominfeng/blog)）
- `/about/` — 个人介绍、技能与联系方式
- `/en/`、`/en/work/`、`/en/about/` — 英文版，与上面一一对应
- `/rss.xml` — 由博客的 `writing.json` 生成，不再是手抄清单
- `/writing/`、`/ai-evolution/` — 旧链接，重定向到 `/blog/` 与 `/blog/ai-evolution/`

## 技术栈

- [Astro](https://astro.build/) 静态站点
- 自托管字体 + 原生 CSS，无 UI 框架
- 构建时读取 GitHub API，展示真实的 stars / followers / repos
- GitHub Pages 托管，无追踪脚本

## 本地开发

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # 产物在 dist/
npm run preview
```

## 内容更新

- 项目数据：`src/data/projects.ts` —— 往 `PROJECTS` 里加对象即可生成卡片与详情页；数组为空时按 `PROJECT_SLOTS` 渲染占位卡片
- 界面文案：`src/i18n/ui.ts` —— 中英文文案的唯一来源
- 页面结构：`src/components/HomeView.astro`、`AboutView.astro`、`WorkView.astro` —— 中英文共用，按 `lang` 取文案
- 时间线：`src/data/timeline.ts` —— 每条带 `en` 字段
- 写作区块：**不需要维护**。由博客的 `/blog/writing.json` 驱动，见 `src/data/writing.ts`
- 站点信息：`src/data/site.ts`

## 多语言

中文在根路径，英文在 `/en/` 下，中文 URL 保持不变，两边各自是独立静态页（可被搜索引擎分别收录）。

- 语言由路径判定：`getLangFromUrl(pathname)`；`/en/...` 为英文，其余为中文
- 页头 `中 / EN` 切换器用 `swapLangPath()` 换算等价路径，例如 `/work/` ↔ `/en/work/`
- `<head>` 自动输出 `hreflang`（zh-CN / en / x-default）与 `og:locale`，两版互为备选
- 新增页面时：在 `src/i18n/ui.ts` 的 `zh` 里写文案，`en` 缺字段会报类型错误；页面用 `HomeView` 之类共用组件，再在 `src/pages/` 与 `src/pages/en/` 各放一个薄壳
- `404.html` 只有一个产物，所以中英并列展示

### 博客与项目详情页

- 文章正文在博客仓库里（`src/content/articles/{zh,en}/**`），地址是 `/blog/...` 与 `/blog/en/...`；主页的写作入口与首页写作区都由博客数据驱动（`src/data/site.ts` 的 `getBlogUrl(lang)`）
- 项目详情页：中文 `src/pages/work/[slug].astro`，英文 `src/pages/en/work/[slug].astro`
- 往 `PROJECTS` 里加项目时，补一个 `enText` 对象（含 title / tagline / description / role / status / demoLabel / metrics / sections）才有真正的英文详情页；缺 `enText` 时英文页会退回中文文案（不推荐）

## 与博客仓库的关系

主页（本仓库）与博客（`shaominfeng/blog`）是两个独立仓库、两次独立部署，共用同一个域名：

| | 主页 | 博客 |
|---|---|---|
| 地址 | `/`、`/en/` | `/blog/`、`/blog/en/` |
| 仓库 | 本仓库 | `shaominfeng/blog` |
| 部署 | 本仓库 Actions → Pages | 博客自己的 Actions → Pages（项目页落在 `/blog/`） |

**必要的联系只有三条，其余一律不该耦合：**

1. **URL 契约**：博客挂在 `/blog/` 前缀下，路由形如 `/blog/[series]/[slug]/`。主页所有写作链接都依赖它 —— 博客不能改 `base`，也不能改路由形态。
2. **数据契约**：博客构建时输出 `/blog/writing.json`（中英双语：总量、系列、最近 6 篇）。主页只读它，见 `src/data/writing.ts`。字段只增不改，消费方要能容忍缺字段。
3. **构建契约**：`npm run build:all`（国内部署）会把博客产物挂到 `dist/blog/`，所以两边 `base` 必须保持 `/` 与 `/blog`。

**加文章、加章节都不用动主页。** 博客推送 → 博客部署 →（可选）触发主页重建 → 主页写作区自动出现新内容。

`writing.json` 的读取顺序（`src/data/writing.ts`）：

1. `BLOG_WRITING_JSON` 环境变量
2. 本地 `../blog/dist/writing.json`（本地开发、`build:all`）
3. 本地 `.build/blog/dist/writing.json`（`build:all` 克隆下来的博客）
4. 线上 `https://<SITE_URL>/blog/writing.json`（GitHub Pages 单独构建时）
5. 全失败 → 降级为「系列 / 单篇 / 全部」三个入口链接，构建不报错

### 让主页自动跟上博客（可选，配一次就够）

博客仓库 Settings → Secrets and variables → Actions → 新建 `HOMEPAGE_TOKEN`（Personal Access Token，`repo` 权限）。

配好后，博客每次部署完成会 `repository_dispatch` 触发这个仓库（`deploy.yml` 已监听 `blog-updated`）重建，主页写作区立刻更新。不配也不会坏 —— 主页只会在自己下次推送时读到最新清单。

## 部署

### 海外（GitHub Pages）

推送到 `main` 即自动发布：`.github/workflows/deploy.yml` 执行 `npm ci` → `npm run build`，通过 GitHub Actions 部署到 Pages。

仓库设置 → Pages → Source 应为 **GitHub Actions**。

### 国内（EdgeOne Pages）

主站 + blog 子站合并成一个 `dist/` 后发布，`/blog/...` 路径与 GitHub Pages 完全一致，已有外链不失效。

```bash
# 本地验证
SITE_URL=https://你的域名 npm run build:all

# 手动部署
npx edgeone pages deploy ./dist -n shaominfeng-site -t $EDGEONE_API_TOKEN
```

CI：`.github/workflows/deploy-edgeone.yml`，推送 `main` 自动部署。仓库需配置：

| 类型 | 名称 | 值 |
|---|---|---|
| Variable | `ENABLE_EDGEONE` | `1`（不设则跳过国内部署） |
| Variable | `SITE_URL` | `https://你的域名` |
| Variable | `EDGEONE_PROJECT` | 项目名，默认 `shaominfeng-site` |
| Variable | `PUBLIC_BAIDU_VERIFY` | 百度搜索资源平台的验证码（可选） |
| Secret | `EDGEONE_API_TOKEN` | EdgeOne Pages 控制台生成的 API Token |

### 域名切换机制

`SITE_URL` 环境变量驱动全部绝对地址：`site`、canonical、og:url、sitemap、robots.txt、文章内链。不设时回落到 `https://shaominfeng.github.io`。

国内构建还会额外注入：

- `<meta name="applicable-device">`、`renderer`、`format-detection` 等国内搜索/浏览器适配
- 百度、360、搜狗站点归属验证 meta（设置对应环境变量后才输出）
- 百度「自动推送」脚本（`PUBLIC_BAIDU_PUSH=1` 时开启），页面被访问即把 URL 推给百度

> 注意：EdgeOne Pages 的免费二级域名在中国大陆不可用——加速区域选「全球（不含中国大陆）」时大陆访问返回 401，选含大陆时只能用 3 小时有效的预览链接。**必须绑定自有域名**（未备案域名选「全球（不含中国大陆）」加速区即可）。

## 相关

- 写作：https://shaominfeng.github.io/blog/
- 从对话到协作：https://shaominfeng.github.io/blog/ai-evolution/
- GitHub：https://github.com/shaominfeng

## 授权

代码 MIT；文字与图片 CC BY-NC-SA 4.0。

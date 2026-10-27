# shaominfeng.github.io

Allen Shao 的个人主页：个人介绍 + 文章与项目两个入口。

**Live: https://shaominfeng.github.io/**

## 结构

- `/` — 首页：个人定位、项目与文章入口、技术文章、社区数据、时间线
- `/work/` — 项目。内容整理中，先按 `PROJECT_SLOTS` 预留占位
- `/blog/` — 文章集，独立仓库部署（[blog](https://github.com/shaominfeng/blog)）
- `/about/` — 个人介绍、技能与联系方式
- `/en/`、`/en/work/`、`/en/about/` — 英文版，与上面一一对应
- `/rss.xml` — 订阅精选文章
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
- 精选文章：`src/data/articles.ts` —— 每条带 `en` 字段（标题/摘要译成英文，正文仍为中文）
- 站点信息：`src/data/site.ts`

## 多语言

中文在根路径，英文在 `/en/` 下，中文 URL 保持不变，两边各自是独立静态页（可被搜索引擎分别收录）。

- 语言由路径判定：`getLangFromUrl(pathname)`；`/en/...` 为英文，其余为中文
- 页头 `中 / EN` 切换器用 `swapLangPath()` 换算等价路径，例如 `/work/` ↔ `/en/work/`
- `<head>` 自动输出 `hreflang`（zh-CN / en / x-default）与 `og:locale`，两版互为备选
- 新增页面时：在 `src/i18n/ui.ts` 的 `zh` 里写文案，`en` 缺字段会报类型错误；页面用 `HomeView` 之类共用组件，再在 `src/pages/` 与 `src/pages/en/` 各放一个薄壳
- `404.html` 只有一个产物，所以中英并列展示

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

- 文章集：https://shaominfeng.github.io/blog/
- 从对话到协作：https://shaominfeng.github.io/blog/ai-evolution/
- GitHub：https://github.com/shaominfeng

## 授权

代码 MIT；文字与图片 CC BY-NC-SA 4.0。

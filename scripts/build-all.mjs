#!/usr/bin/env node
/**
 * 一体化构建：主站 + blog 子站 → 输出单个 dist/（含 dist/blog/）
 *
 * 用法：
 *   npm run build:all
 *   SITE_URL=https://example.com npm run build:all
 *   BLOG_DIR=../blog SITE_URL=https://example.com npm run build:all
 *
 * 说明：blog 是独立仓库，这里构建后把产物挂到 dist/blog，
 * 保证 /blog/... 路径结构与 GitHub Pages 时期完全一致，已有外链不失效。
 */
import { execFileSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const cache = path.join(root, '.build');

const SITE_URL = (process.env.SITE_URL || 'https://shaominfeng.github.io').replace(/\/+$/, '');
const BLOG_REPO = process.env.BLOG_REPO || 'https://github.com/shaominfeng/blog.git';
const env = { ...process.env, SITE_URL };

function run(cmd, args, cwd) {
  console.log(`\n$ ${cmd} ${args.join(' ')}`);
  execFileSync(cmd, args, { cwd, stdio: 'inherit', env });
}

function resolveBlogDir() {
  const local = process.env.BLOG_DIR
    ? path.resolve(process.env.BLOG_DIR)
    : path.resolve(root, '..', 'blog');
  if (existsSync(path.join(local, 'package.json'))) return local;

  const cloned = path.join(cache, 'blog');
  if (!existsSync(path.join(cloned, 'package.json'))) {
    mkdirSync(cache, { recursive: true });
    run('git', ['clone', '--depth', '1', BLOG_REPO, cloned], root);
  } else {
    run('git', ['pull', '--ff-only'], cloned);
  }
  return cloned;
}

console.log(`SITE_URL = ${SITE_URL}`);

// 1) 构建 blog 子站
const blogDir = resolveBlogDir();
console.log(`BLOG_DIR = ${blogDir}`);
if (!existsSync(path.join(blogDir, 'node_modules'))) {
  run('npm', ['ci'], blogDir);
}
run('npm', ['run', 'build'], blogDir);

// 2) 构建主站（放在 blog 之后，避免主站产物被覆盖）
rmSync(dist, { recursive: true, force: true });
run('npm', ['run', 'build'], root);

// 3) 合并：dist/blog/
const blogDist = path.join(blogDir, 'dist');
if (!existsSync(blogDist)) {
  console.error(`✖ blog 构建产物不存在：${blogDist}`);
  process.exit(1);
}
cpSync(blogDist, path.join(dist, 'blog'), { recursive: true });

console.log('\n✔ 构建完成 → dist/（含 dist/blog/）');

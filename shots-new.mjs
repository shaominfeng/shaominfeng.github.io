import { chromium } from 'playwright-core';
const exe = '/Users/allen_shao/Library/Caches/ms-playwright/chromium-1140/chrome-mac/Chromium.app/Contents/MacOS/Chromium';
const browser = await chromium.launch({ executablePath: exe, args: ['--no-sandbox'] });
const jobs = [
  ['b-home', 'http://127.0.0.1:4324/blog/', 1440, 1000, true],
  ['b-home-top', 'http://127.0.0.1:4324/blog/', 1440, 1000, false],
  ['b-series', 'http://127.0.0.1:4324/blog/ai-evolution/', 1440, 1000, false],
  ['b-article', 'http://127.0.0.1:4324/blog/ai-evolution/context-revolution/', 1440, 1000, false],
  ['b-about', 'http://127.0.0.1:4324/blog/about/', 1440, 1000, true],
  ['b-home-mobile', 'http://127.0.0.1:4324/blog/', 390, 844, true],
  ['p4-home-top', 'http://127.0.0.1:4323/', 1440, 1000, false],
  ['p4-home', 'http://127.0.0.1:4323/', 1440, 1000, true],
  ['p4-work', 'http://127.0.0.1:4323/work/', 1440, 1000, true],
  ['p4-home-mobile', 'http://127.0.0.1:4323/', 390, 844, false],
];
for (const [name, url, w, h, full] of jobs) {
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.waitForTimeout(250);
  await page.screenshot({ path: '/Users/allen_shao/Documents/deepseek-harness/default-workspace/shots/' + name + '.png', fullPage: full });
  const dims = await page.evaluate(() => ({ w: document.documentElement.scrollWidth, h: document.documentElement.scrollHeight, title: document.title }));
  console.log(name, JSON.stringify(dims));
  await page.close();
}
await browser.close();

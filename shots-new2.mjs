import { chromium } from 'playwright-core';
const exe = '/Users/allen_shao/Library/Caches/ms-playwright/chromium-1140/chrome-mac/Chromium.app/Contents/MacOS/Chromium';
const browser = await chromium.launch({ executablePath: exe, args: ['--no-sandbox'] });
const jobs = [
  ['p5-home-top', 'http://127.0.0.1:4323/', 1440, 1000, false],
  ['p5-home-full', 'http://127.0.0.1:4323/', 1440, 1200, true],
  ['p5-home-mobile', 'http://127.0.0.1:4323/', 390, 900, false],
  ['b2-home-top', 'http://127.0.0.1:4324/blog/', 1440, 1000, false],
  ['b2-home-full', 'http://127.0.0.1:4324/blog/', 1440, 1000, true],
  ['b2-home-mobile', 'http://127.0.0.1:4324/blog/', 390, 844, true],
];
for (const [name, url, w, h, full] of jobs) {
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.waitForTimeout(250);
  await page.screenshot({ path: '/Users/allen_shao/Documents/deepseek-harness/default-workspace/shots/' + name + '.png', fullPage: full });
  await page.close();
}
await browser.close();

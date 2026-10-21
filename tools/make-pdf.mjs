// Renders the site into portfolio-klik.pdf as one long page that looks like the desktop site.
// Usage: python3 -m http.server 8765 & node tools/make-pdf.mjs
import { chromium } from 'playwright';

const WIDTH = 1440;
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: WIDTH, height: 900 } });
await page.goto('http://localhost:8765/', { waitUntil: 'networkidle' });
await page.emulateMedia({ media: 'screen' });
await page.evaluate(async () => {
  document.querySelectorAll('a[href$=".pdf"]').forEach((a) => a.remove());
  document.querySelector('.top').style.position = 'static';
  document.querySelectorAll('img[loading=lazy]').forEach((img) => { img.loading = 'eager'; });
  await Promise.all([...document.images].map((img) => img.complete ? 0 : new Promise((r) => { img.onload = img.onerror = r; })));
  await document.fonts.ready;
});
const height = await page.evaluate(() => Math.ceil(document.documentElement.scrollHeight));
await page.pdf({
  path: 'portfolio-klik.pdf',
  width: `${WIDTH}px`,
  height: `${height + 2}px`,
  printBackground: true,
  pageRanges: '1',
});
await browser.close();
console.log(`portfolio-klik.pdf: ${WIDTH}x${height}px`);

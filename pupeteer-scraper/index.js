const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://github.com/rajeshmn47');
  await page.screenshot({path:'quora.png'});
  await browser.close();
})();
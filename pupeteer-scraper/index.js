const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://photoclickz.com/anushka-shetty-don-hot-pics');
  await page.screenshot({path: 'quora.png'});
  await browser.close();
})();
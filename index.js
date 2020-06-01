const puppeteer = require('puppeteer');
 
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://chillgeeks.com');
  await page.screenshot({path: 'chillgeeks.png'});
 
  await browser.close();
})();
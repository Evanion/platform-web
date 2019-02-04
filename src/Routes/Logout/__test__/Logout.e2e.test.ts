import puppeteer, { Browser, Page } from 'puppeteer';
import ROUTEMAP from '../../../Services/ROUTEMAP';

let browser: Browser;
let page: Page;

describe('Logout Route E2E', () => {
  beforeEach(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 1920,
        height: 1080
      },
      userAgent: ''
    });
  });

  afterEach(async () => {
    await browser.close();
  });

  it('should redirect to login', async () => {
    await page.goto(`http://localhost:3000${ROUTEMAP.LOGOUT}`);
    await page.waitForSelector('#root > div');

    const url = page.url();

    // @ts-ignore
    expect(url).toBe(`http://localhost:3000${ROUTEMAP.LOGIN}`);
  });
});

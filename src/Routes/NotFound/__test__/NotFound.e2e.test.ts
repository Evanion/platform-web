import puppeteer, { Browser, Page } from 'puppeteer';

let browser: Browser;
let page: Page;

describe('NotFound Route E2E', () => {
  beforeEach(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 1920,
        height: 1080,
      },
      userAgent: '',
    });
  });

  afterEach(async () => {
    await browser.close();
  });

  it("should be displayed if the requested route doesn't exist", async () => {
    await page.goto('http://localhost:3000/you-dont-exist');
    await page.waitForSelector('#root > div');

    const html = await page.$eval('#root > div', e => e.innerHTML);

    // @ts-ignore
    expect(html).toMatchSnapshot();
  });
});

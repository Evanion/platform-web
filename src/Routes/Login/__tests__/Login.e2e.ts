import puppeteer, { Browser, Page } from 'puppeteer';
import ROUTEMAP from '../../../Services/ROUTEMAP';

let browser: Browser;
let page: Page;

const mockUser = {
  success: {
    email: 'test@testsson.se',
    password: 'test22',
  },
  fail: {
    email: 'fail@testsson.se',
    password: 'test22',
  },
};

describe('Login E2E', () => {
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

  it("should be able to access if you aren't authenticated", async () => {
    await page.goto(`http://localhost:3000${ROUTEMAP.LOGIN}`);
    await page.waitForSelector('#root > div');

    const url = page.url();

    expect(url).toBe(`http://localhost:3000${ROUTEMAP.LOGIN}`);
  });

  it("should redirect to login if you aren't authenticated", async () => {
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('#root > div');

    const url = page.url();

    expect(url).toBe(`http://localhost:3000${ROUTEMAP.LOGIN}`);
  });

  it('should redirect to home after successfull login', async () => {
    await page.goto(`http://localhost:3000${ROUTEMAP.LOGIN}`);
    await page.waitForSelector('[data-test=login-page]');

    await page.click('input[name=email]');
    await page.type('input[name=email]', mockUser.success.email);
    await page.click('input[name=password]');
    await page.type('input[name=password]', mockUser.success.password);
    await page.click('button[type=submit]');
    await page.waitForSelector('[data-test=dashboard-page]');
    const url = page.url();

    expect(url).toBe(`http://localhost:3000${ROUTEMAP.HOME}`);
  });
});

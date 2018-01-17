const puppeteer = require('puppeteer');

beforeAll(async () => {
    global.browser = await puppeteer.launch();
});
beforeEach(async () => {
    global.page = await global.browser.newPage();
});

afterEach(async () => {
    await global.page.close();
});
afterAll(async () => {
    await global.browser.close();
});
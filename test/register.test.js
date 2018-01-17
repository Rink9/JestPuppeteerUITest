const puppeteer = require('puppeteer');
const path = require('path');
let config = require('./config.register.js');

describe('Lazada Website', () => {
    jest.setTimeout(config.timeout);

    it('should register user correclt', () => {
        config.data.id = 22;
        return register(config);
    });

});

const register = async(config) => {
    let ids = [21];
    for (let id of ids) {
        const browser = await puppeteer.launch({
            headless: false
        });

        const page = await browser.newPage();

        await page.setViewport({
            width: 1280,
            height: 800
        });

        // open test target
        await page.goto(config.url);
        
        // fill out the form
        await page.click(config.ids.male);
        await page.type(config.ids.email, config.data.email(config.data.id))
        await page.type(config.ids.name, config.data.name(config.data.id));
        await page.type(config.ids.password, config.data.password);
        await page.type(config.ids.confirmPassword, config.data.password);

        // save screenshot
        await page.screenshot({
            path: path.resolve("screenshots") + '/register_result-' + config.data.screenshot(config.data.id) + '.png'
        });

        // submit the form
        await page.$eval(config.ids.form, form => form.submit());

        // You can add evaluation/test logic here

        await browser.close();
    }
};
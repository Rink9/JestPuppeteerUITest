const puppeteer = require('puppeteer');
const config = require('./config.register.js');
const path = require('path');

describe('Lazada Website', () => {
    jest.setTimeout(config.timeout);

    it('should register user correclt', () => {
        return register(config);
    });

});

const register = async(config) => {
    let ids = [21];
    for (let id of ids) {
        const browser = await puppeteer.launch({
            headless: false,
            devtools: true
        });

        const page = await browser.newPage();

        await page.setViewport({
            width: 1280,
            height: 800
        });

        // prepare test data
        const email = "youshouldverifyemail" + id + "@gmail.com";
        const name = "Jack Ma" + id;
        const password = "JackMa123";

        // open test target
        await page.goto(config.url);
        
        // fill out the form
        await page.click(config.ids.male);
        await page.type(config.ids.email, email)
        await page.type(config.ids.name, name);
        await page.type(config.ids.password, password);
        await page.type(config.ids.confirmPassword, password);
        console.log(path.resolve("screenshots") + '/register_result-' + email.substring(0, email.lastIndexOf("@")) + '.png');
        // save screenshot
        await page.screenshot({
            path: '../screenshots/register_result-' + email.substring(0, email.lastIndexOf("@")) + '.png'
        });

        // submit the form
        //await page.$eval(config.ids.form, form => form.submit());

        // You can add evaluation/test logic here

        await browser.close();
    }
};
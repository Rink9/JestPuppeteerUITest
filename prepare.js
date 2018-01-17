const fs = require('fs');
const path = require('path');
const screenshotDir = path.resolve(__dirname, 'screenshots');

if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir);
}
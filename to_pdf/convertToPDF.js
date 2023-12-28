const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    // Load the existing HTML file
    const htmlContent = fs.readFileSync('index.html', 'utf8');

    // Set the HTML content and wait until the network is idle
    await page.setContent(`<!DOCTYPE html>${htmlContent}`, { waitUntil: 'networkidle2' });

    // Generate a PDF from the page
    await page.pdf({ path: 'output.pdf', format: 'A4' });

    // Close the browser
    await browser.close();
})();

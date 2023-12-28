const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' }); // Explicitly specify headless mode
    const page = await browser.newPage();
    
    // Load the existing HTML file
    const htmlContent = fs.readFileSync('index.html', 'utf8');
    
    // Set the HTML content and wait until the network is idle
    await page.setContent(`<!DOCTYPE html>${htmlContent}`, { waitUntil: 'networkidle2' });

    // Take a screenshot of the entire page
    await page.screenshot({ path: 'output.png', fullPage: true });

    // Close the browser
    await browser.close();
})();

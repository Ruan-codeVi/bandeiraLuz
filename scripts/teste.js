const puppeteer = require( 'puppeteer' );

async function robo() {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto(`https://unsplash.com/`);
    
   await page.click('[href="/login"]')
    }
robo()
    


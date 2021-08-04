const puppeteer = require('puppeteer');

async function robo() {
const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto('https://www.enel.com.br/pt-saopaulo/Para_Voce/Bandeira_Tarifaria.html');
  page.waitForNavigation()
    await page.click('.truste-button1')
  // const [button] = await page.$x( "//button[contains(., 'Aceitar Tudo ')]" );
  //   if ( button ) {
  //    await button.click()
  //   }

  page.waitForNavigation()
  const selector = 'a'
  await page.$$eval( selector, anchors => {
    anchors.map( anchor => {
      if ( anchor.textContent == 'SÃO PAULO' ) {
        anchor.click()
        
      }
    } )
  } );
  
  await page.waitForNavigation()
  const bandeira = await page.$eval( '.hero_title.text--page-heading', divs => divs.innerText )
  browser.close()
  return  bandeira 
  
}
robo().then( ( value ) => {
  console.log(value)
}).catch((erro)=>{console.log(erro);})
  
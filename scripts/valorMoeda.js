const puppeteer = require( 'puppeteer' );
const readlineSync = require('readline-sync'); // lib que pega inputs digitados atraves do node

async function robo() {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    const moedaBase = readlineSync.question('Informe uma moeda base: ') || 'dolar'
    const moedaFinal = readlineSync.question('informe uma moeda desejada: ')|| 'real'
    await page.goto(`https://www.google.com/search?sxsrf=ALeKk003xZ5zBlpRI2PAxx40N7lt0oHAyA:1627658091883&q=${moedaBase}+${moedaFinal}&spell=1&sa=X&ved=2ahUKEwihlYfziovyAhUDKLkGHejyBxgQBSgAegQIARA2&biw=1306&bih=641`);
    
    const valor = await page.evaluate( () => {
        return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value
    } )
    console.log( `O valor de  1 ${moedaBase} em ${moedaFinal} é de R$ ${valor}` );
    await browser.close();
    }
    robo()
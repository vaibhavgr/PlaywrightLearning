//{} around test beacuse playwright/test exports an object, and we wan to extract only 
// test properties from that object. Object Destructing. 
const {test} = require('@playwright/test')

test('First PW Program' , async({browser}) =>
{
    const context = await browser.newContext();
    const page = await context.newPage();

     //open page 
     await page.goto("https://google.com/");
});

test.only('Second PW Program' , async({browser,page}) =>
{
     //open page 
     await page.goto("https://web.whatsapp.com/");
     await console.log(page.title());
});
const {test,expect} = require('@playwright/test');

test.only('auto wait concepts',async({page})=>
{
    await page.goto('https://www.noon.com/uae-en/');
    page.locator().hover();
    await page.pause();
})
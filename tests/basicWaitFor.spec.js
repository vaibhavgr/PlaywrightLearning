const {test,expect} = require('@playwright/test');

test.only('auto wait concepts',async({page})=>
{
    await page.goto("https://www.noon.com/uae-en/");
    const kidsFashio =  page.locator("[data-qa=\"btn_main_menu_Kids' Fashion\"]").hover();
    

    await page.pause();
})
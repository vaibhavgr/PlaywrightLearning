const {test,expect} = require('@playwright/test');

test('auto wait concepts',async({page})=>
{
    
    await page.goto("https://www.noon.com/uae-en/");
    //await page.waitForLoadState('load')

    //best wait to use is with loactor 
    const hover = await page.locator("[data-qa=\"btn_main_menu_Kids' Fashions\"]").waitFor({state : "visible" , timeout: 5000});
    hover.hover()

    await page.waitForURL('**/register', {timeout : 5000})

    //static wait - 
    await page.waitForTimeout(1000)

    await page.pause();
})
const{test, expect} = require('@playwright/test');
test.only('frames' , async({page})=>
    {
        await page.goto("https://formstone.dev/components/checkbox/");
        const checkBox=page.locator(".form_fieldset [for*='checkbox']").nth(1);
        await checkBox.check();

    });
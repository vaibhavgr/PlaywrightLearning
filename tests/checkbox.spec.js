const{test, expect} = require('@playwright/test');
test('checkbox' , async({page})=>
    {
        await page.goto("https://formstone.dev/components/checkbox/");
        const checkBox=page.locator(".form_fieldset [for*='checkbox']").nth(1);
        await checkBox.check();

        //assertion 
        await expect(checkBox).toBeChecked();

        //assrtion when needs to test on boolean value
        expect(await checkBox.isChecked()).toBeTruthy();

        await checkBox.uncheck();
        expect(await checkBox.isChecked()).toBeFalsy();

    });
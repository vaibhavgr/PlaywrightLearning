const {test, expect} = require('@playwright/test');
const { text } = require('node:stream/consumers');

test(' Single DropDowns' , async({ page}) =>
{
    //const context = await browser.newContext();
    //const page = await context.newPage();
     //open page 
     await page.goto("https://vinothqaacademy.com/drop-down/");
     const simpleDropdown = page.locator('span.select2-selection__rendered',{ hasText: 'Choose A City' });
     await simpleDropdown.click()

    //single dropdown
     //The short version: :has-text() is a specialized CSS engine feature, while hasText is typically a property or argument used in code.
     //const selectDropdown = page.locator('li.select2-results__option:has-text("London")').click();
     const selectDropdown = page.locator('li.select2-results__option',{ hasText: 'Mumbai'}).click();
    await page.pause();     
    
});

test ('Dynamic Dropdowm', async({page})=>
    {
     await page.goto("https://vinothqaacademy.com/drop-down/");
     const dynamicDrop = await page.locator('.select2-selection__rendered',{hasText: 'Choose an Account'}).click();
     
     // keyboard options to inputdata or arrowdown/enter
     //await page.keyboard.type("vaibhav");
     await page.keyboard.press('ArrowDown');
     await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
     await page.pause();
    }
)

test('Multiple Dropdwon',async({page})=>
    {
        await page.goto("https://vinothqaacademy.com/drop-down/");
        await page.locator('.select2-selection--multiple').click();

        const values = ['Javascript', 'PHP']
        for (const value of values)
            {
                await page.keyboard.type(value ,{ delay: 100});
                await page.getByRole('option', { dropdownValue: value }).click();
            }
        await page.pause();
        // await page.locator("li[role='option']").filter({hasText:'JavaScript'}).click();
        // await page.locator('.select2-selection--multiple').click();
        // await page.locator("li[role='option']").filter({hasText:'PHP'}).click();

        
    }
)

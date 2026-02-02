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
     const selectDropdown = page.locator('li.select2-results__option',{ hasText: 'London'}).click();
    await page.pause();     
    
});

test.only ('Dynamic Dropdowm', async({page})=>
    {
     await page.goto("https://vinothqaacademy.com/drop-down/");
     //for scrolling page
    // const pageScroller = await page.locator('.select2-selection__rendered');
     const dynamicDrop = await page.locator('.select2-selection__rendered',{hasText: 'Choose an Account'}).click();
     
     // keyboard options to inputdata or arrowdown/enter
     //await page.keyboard.type("vaibhav");
     await page.keyboard.press('ArrowDown');
     await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
     await page.pause();
    }

)


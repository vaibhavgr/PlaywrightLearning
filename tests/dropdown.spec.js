const {test, expect} = require('@playwright/test');
const { text } = require('node:stream/consumers');

test.only('DropDowns' , async({ page}) =>
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




const {test , expect} = require('@playwright/test');
const {faker} = require('@faker-js/faker');


test('E2E Test', async({page})=>{

await page.goto("https://www.iplt20.com/");


});
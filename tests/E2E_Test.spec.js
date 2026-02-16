const {test , expect} = require('@playwright/test');
const {faker} = require('@faker-js/faker');


test.only('E2E Test', async({page})=>{

await page.goto("https://www.stg.kinship.com/");
await page.getByRole('button', {name:'Reject All'}).click();
await page.getByRole('button', {name:'Maybe Later'}).click();
await page.getByRole('button', {name:'Sign Up / Login'}).click();
await page.locator('#email').first().fill(getfakerData('email'))
await page.getByRole('button', {name:'Next'}).click();


});

function getfakerData(type)
{
    const fakeDataMap = {
        firstname : () => faker.person.firstName(),
        
    }

}


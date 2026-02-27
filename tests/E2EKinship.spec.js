const {test , request} = require('@playwright/test');
const{APIutils} = require('./Utils/APIutils.js');


let tokens
let addpet
//API Part- test.beforeALL
test.beforeAll(async()=>{
    const apiContext = await request.newContext({
    ignoreHTTPSErrors: true
});
    const apiUtilsPage = new APIutils(apiContext);
    tokens = await apiUtilsPage.authorizeToken()
    addpet = await apiUtilsPage.addpet(tokens);
    console.log(tokens , addpet);
    
    
})

//FRONETENT UI -----------------------------------------------------------------------------------
test('E2E Kinship Add Pet', async ({page }) => {
await page.goto("https://www.stg.kinship.com/uk");
await page.addInitScript(value=>{
  window.localStorage.setItem('access_token',value);  
}, tokens)
//addpet
await page.getByRole('button',{name: 'Reject All'}).click();
//await page.getByRole('button',{name: 'Maybe Later'}).click();
await page.locator("[opti-default-header-user-account-button='user-account-button']").click();
await page.getByText('Add a pet').click();
await page.pause();

});


test.only('E2E Kinship Pet Removal', async ({page})=>{
await page.goto("https://www.stg.kinship.com/uk");
await page.addInitScript(value=>{
  window.localStorage.setItem('access_token',value);  
}, tokens)
//addpet
await page.getByRole('button',{name: 'Reject All'}).click();
//await page.getByRole('button',{name: 'Maybe Later'}).click();
await page.locator("[opti-default-header-user-account-button='user-account-button']").click();
await new Promise(res=>setTimeout(res, 6000));
const postPetName = page.getByText(`${addpet}`);
await postPetName.waitFor();
const petCard = page.locator(`//section//*[contains(text(),"${addpet}")]/../..`);
await petCard.getByText('Remove').click();
await page.getByRole('button', {name : 'Yes, Remove This Pet'}).click();
await page.pause();

});
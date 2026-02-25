const {test , request} = require('@playwright/test');
const{APIutils} = require('./Utils/APIutils.js');


let token
//API Part- test.beforeALL
test.beforeAll(async()=>{
    const apiContext = await request.newContext();
    const apiUtilsPage = new APIutils(apiContext);
    token = await apiUtilsPage.authorizeToken()
    const addpet = await apiUtilsPage.addpet();
    console.log(token);
    console.log(addpet)
})

//FRONETENT UI -----------------------------------------------------------------------------------
test.only('E2E Kinship Pet Test', async ({page }) => {
await page.goto("https://www.stg.kinship.com/uk");
await page.addInitScript(value=>{
  window.localStorage.setItem('access_token',value);  
}, token)
//addpet
await page.getByRole('button',{name: 'Reject All'}).click();
//await page.getByRole('button',{name: 'Maybe Later'}).click();
await page.locator("[opti-default-header-user-account-button='user-account-button']").click();
await page.getByText('Add a pet').click();
await page.pause();

});
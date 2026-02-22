const {test , request} = require('@playwright/test');
const{APIutils} = require('./Utils/APIutils.js');



//API Part- test.beforeALL
test.beforeAll(async()=>{
    const apiContext = await request.newContext();
    const apiUtilsPage = new APIutils(apiContext);
    const token = await apiUtilsPage.authorizeToken()
    console.log(token);


    
})





//FRONETENT UI -----------------------------------------------------------------------------------
test.only('E2E Kinship Pet Test', async ({page }) => {
await page.goto("https://www.stg.kinship.com/uk");

});

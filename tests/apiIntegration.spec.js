const {test , expect , request} = require('@playwright/test');


const loginURL = "https://api.demoblaze.com/login";
const addtoCartURL = "https://api.demoblaze.com/addtocart";
const payload = {
    username : "vaibhav@yopmail.com",
    password : "cXdlcnR5MTIz",
}


test.beforeAll(async()=>
{
const apiRequest = await request.newContext();
const response = await apiRequest.post(loginURL, {
    data: payload
})
//fetch response Auth token 
console.log(await response.text())
const addToCartResponse = await apiRequest.post(addtoCartURL , {
    data : {
    id : "230817b8-5d90-9ba5-c9c8-fd5c18b34338",
    cookie : "dmFpYmhhdkB5b3BtYWlsLmNvbTE3NzE5MTQ=",
    flag : "true",
    prod_id : "1",
}
})

})



test.only('Api Integration', async({page})=>{
await page.goto('https://www.demoblaze.com');
await login(page);
await page.pause();


async function login(page){
await page.getByRole('link', { name : 'Log in'}).click();
await page.locator('#loginusername').fill('vaibhav@yopmail.com');
await page.locator('#loginpassword').fill('qwerty123');
await page.getByRole('button', {name:'Log in'}).click();
await page.getByRole('link', { name: 'Cart' }).click();

}

});


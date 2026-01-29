//{} around test beacuse playwright/test exports an object, and we wan to extract only 
// test properties from that object. Object Destructing. 
const {test, expect} = require('@playwright/test')

test('First PW Program' , async({browser}) =>
{
    const context = await browser.newContext();
    const page = await context.newPage();
     //open page 
     await page.goto("https://google.com/");
});

test.only('Second PW Program' , async({browser,page}) =>
{
     //open page 
     await page.goto("https://demowebshop.tricentis.com/");
     console.log(await page.title())
     
     //asserting title of the page
     await expect(page).toHaveTitle(await page.title());
     
     //login locator
     const loginheaderBtn = page.locator('.ico-login')
     await expect(loginheaderBtn).toBeVisible();
     await loginheaderBtn.click();

     //input fields for login (email, pass, loginBtn)
     const emailField = await page.locator('#Email').fill('obsqura24@gmail.com');
     const passwordField = await page.locator('#Password').fill('mypassword');
     const loginButton = await page.locator("[value='Log in']").click();

    //fetching one element from the list using nth
    //nth always return oen element

    const listItems = await page.locator('.listbox li ').nth(0);
    await listItems.click();
    console.log(await listItems.count());




     
     await page.pause();
});
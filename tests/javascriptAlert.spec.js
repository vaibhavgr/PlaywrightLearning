const { test, expect } = require('@playwright/test');

//By default playwright dismiss all types of dialogs : alert, prompt etc
//but we can customize an event to listen dialog as below


test('JavaScript Alert', async ({page }) => {
await page.goto("https://selenium.qabible.in/javascript-alert.php");
page.on('dialog', async dialog=>{
    //promise to wait for 2 seconds basically pausing a thread
    await new Promise(res=>setTimeout(res, 2000));
    await dialog.accept("hello vinod !");        
})

await page.locator(".btn-success").click();
});



test('JavaScript Confirm Alert', async ({page }) => {
await page.goto("https://selenium.qabible.in/javascript-alert.php");
page.on('dialog', async dialog=>{
    //promise to wait for 2 seconds basically pausing a thread
    await new Promise(res=>setTimeout(res, 2000));
    await dialog.accept("hello vinod !");        
})

await page.locator(".btn-warning").click();
});


test('Prompt', async ({page }) => {
await page.goto("https://selenium.qabible.in/javascript-alert.php");
page.on('dialog', async dialog=>{
    //promise to wait for 2 seconds basically pausing a thread
    await new Promise(res=>setTimeout(res, 2000));
    await dialog.accept("hello Vaibhav !");        
})

await page.locator(".btn-danger").click();
});
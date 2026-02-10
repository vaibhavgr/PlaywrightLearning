const { test, expect } = require('@playwright/test');


test('Playwright Locators', async ({page }) => {
await page.goto("https://selenium.qabible.in/simple-form-demo.php");
await page.getByPlaceholder('Message').fill("Hello Brother");
await page.getByRole('button',{name : 'Show Message'}).click();
await page.getByRole('button' , {'name': 'Show Message'}).click();
await page.getByRole('link', {'name': 'Checkbox Demo'}).click();
await page.getByLabel('Check Box One').click();
await page.getByText('Simple Form Demo').click();
await page.getByRole('textbox',{'name': 'Message'}).fill('Hello India');



});
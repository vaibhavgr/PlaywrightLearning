const{test, expect} = require('@playwright/test');

test.only('Child Window Test',async({browser}) => {

const context = await browser.newContext();
const page = await context.newPage();

await page.goto('https://the-internet.herokuapp.com/windows');

//assertion of heading is correct or not
const heading = await page.locator("//h3[text()='Opening a new window']").textContent();

await expect(heading).toHaveText('Opening a new window')
console.log(heading);
    


})
const{test, expect} = require('@playwright/test');

test.only('Child Window Test',async({browser}) => {

const context = await browser.newContext();
const page = await context.newPage();

await page.goto('https://the-internet.herokuapp.com/windows');

//assertion of heading is correct or not
const heading = await page.locator("//h3[text()='Opening a new window']");
await expect(heading).toHaveText('Opening a new window');


//child window -
const link = await page.locator("//a[text()='Click Here']")
const [newPage] = await Promise.all(
[
    context.waitForEvent(page),
    link.click,
]);

const title = await newPage.title();
expect(title).toEqual('New Window');
await page.pause();
    


});
const{test, expect} = require('@playwright/test');
test('frames' , async({page})=>
{
await page.goto('https://vinothqaacademy.com/iframe/');

//first method when frame name is given : 
//const frame =  page.frame('employeetable');
//await frame.locator("[placeholder = 'Name']").fill("Hey");


// second method when want to do with frame locator 
const secondFrame = page.frameLocator("[class = iframe-container]").frameLocator("registeruser").frameLocator("");
await page.getByLabel('First Name').fill('vaibhav');
//await secondFrame.locator(".registration-form").fill('Hey we are in second frame');

await page.pause();
});


test('Nested Frame', async({page})=>{
        await page.goto('https://the-internet.herokuapp.com/nested_frames');
        const middleFrameLocator =  page.frameLocator("[name = 'frame-top']").frameLocator("[name = 'frame-middle']");
        const middleText = await middleFrameLocator.locator("#content").textContent();
        console.log(middleText);
        expect(middleText).toEqual("Middle");

          
        await page.pause();
    }
);







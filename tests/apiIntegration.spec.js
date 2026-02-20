const { test, expect, request } = require('@playwright/test');


const loginURL = "https://api.demoblaze.com/login";
const addtoCartURL = "https://api.demoblaze.com/addtocart";
const payload = {
    username: "vaibhav@yopmail.com",
    password: "cXdlcnR5MTIz",
}
const prodMap = {
    1: "d55b727e-363e-94fc-1a53-cf1390b205a5",
    2: "78bef5ff-f433-1726-7c6b-7e9c04b24a60",
    4: "170ba846-8ac0-50e0-07e1-0707aee86a79"
}
const deleteItemCartURL = "https://api.demoblaze.com/deleteitem";
test.beforeAll(async () => {
    const apiRequest = await request.newContext();
    const response = await apiRequest.post(loginURL, {
        data: payload
    })
    //fetch response Auth token 
    const authToken = (await response.text()).split(":")[1].trim().replace('"', "");
    for (const key in prodMap) {
        const addToCartResponse = await apiRequest.post(addtoCartURL, {
            data: await getCartpayload(prodMap[key], key, authToken)
        }
        )
        expect(addToCartResponse.ok()).toBeTruthy();
    };

    const cartDelResponse = await apiRequest.post(deleteItemCartURL , 
        {
            data : {
                id : "78bef5ff-f433-1726-7c6b-7e9c04b24a60",
            }
        }
    )
    expect(cartDelResponse.ok()).toBeTruthy();

});



test('Api Integration', async ({ page }) => {
    await page.goto('https://www.demoblaze.com');
    await login(page);
});
    async function login(page) {
        await page.getByRole('link', { name: 'Log in' }).click();
        await page.locator('#loginusername').fill('vaibhav@yopmail.com');
        await page.locator('#loginpassword').fill('qwerty123');
        await page.getByRole('button', { name: 'Log in' }).click();
        await page.getByRole('link', { name: 'Cart' }).click();

    }
    async function getCartpayload(id, prod_id, cookie) {
        return {
            id: id,
            cookie: cookie,
            flag: 'true',
            prod_id: prod_id
        }
    }



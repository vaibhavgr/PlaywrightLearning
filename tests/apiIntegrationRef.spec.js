const { test, expect, request } = require('@playwright/test');

// API Part 
const loginURL = "https://api.demoblaze.com/login";
const addtoCartURL = "https://api.demoblaze.com/addtocart";
const deleteItemCartURL = "https://api.demoblaze.com/deleteitem";

const payload = {
    username: "vaibhav@yopmail.com",
    password: "cXdlcnR5MTIz",
}

const prodMap = {
    1: "d55b727e-363e-94fc-1a53-cf1390b205a5",
    2: "78bef5ff-f433-1726-7c6b-7e9c04b24a60",
    4: "170ba846-8ac0-50e0-07e1-0707aee86a79"
}



let apiContext;

test.beforeAll(async () => {
    apiContext = await request.newContext();
    const authToken = await getAuthToken(apiContext);
    await addProductsToCart(apiContext, authToken)
})

async function getAuthToken(apiContext) {
    const response = await postCall(apiContext, payload, loginURL);
    const authToken = (await response.text()).split(":")[1].trim().replace('"', "");
    console.log(authToken);
    return authToken;
}


async function postCall(apiContext, payload, URL) {
    return await apiContext.post(URL, {
        data: payload
    })
}

async function addProductsToCart(apiContext, authToken) {
    for (const key in prodMap) {
        const responseCart = await postCall(apiContext, getCartpayload(prodMap[key], key, authToken), addtoCartURL);
        expect(responseCart.ok()).toBeTruthy();
    }


}

function getCartpayload(id, prod_id, cookie) {
    return {
        id: id,
        cookie: cookie,
        flag: true,
        prod_id: prod_id
    };
}

////////////////////////////////////////////////////////////////////////////////////////////


test.only('Api Integration', async ({ page }) => {
    await page.goto('https://www.demoblaze.com');
    await login(page);
    await verifyCartProducts(page);
    await deleteProductsFromCart(apiContext)
});

async function login(page) {
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').fill('vaibhav@yopmail.com');
    await page.locator('#loginpassword').fill('qwerty123');
    await page.getByRole('button', { name: 'Log in' }).click();
}

async function verifyCartProducts(page) {
    await page.getByRole('link', { name: 'Cart' }).click();
    const locator = page.locator('.success td:nth-child(3)');
    await locator.first().waitFor();
    const listPrices = await locator.allTextContents();
    let sum = 0;
    listPrices.forEach(price => {
        sum = sum + Number(price);
    })
    console.log(sum);
    const value = Number(await page.locator('#totalp').textContent());
    expect(value).toEqual(sum);
}

async function deleteProductsFromCart(apiContext) {
    for (const key in prodMap) {
        const deleteCartResponse = await postCall(apiContext, getDeletePayLoad(prodMap[key]), deleteItemCartURL);
        expect(deleteCartResponse.ok()).toBeTruthy();
    }
}

function getDeletePayLoad(prod_id) {
    return {
        id: prod_id
    }
}
const { test, expect } = require('@playwright/test');

test.describe('API Interception & Mocking Tests', () => {

    test('Mock the entire product list to show a Free Gift', async ({ page }) => {
        
        // 1. Fake Data taiyar karein (Aapka custom response)
        const myFakeProducts = {
            products: [
                {
                    id: 500,
                    name: "MOCKED: Gemini Special Gift",
                    price: "Rs. 0",
                    brand: "Google",
                    category: { usertype: { usertype: "Men" }, category: "Tshirts" }
                }
            ]
        };

        // 2. INTERCEPTION: Browser ke request bhejne se PEHLE ise setup karein
        await page.route('**/api/productsList', async (route) => {
            console.log("--> Request intercepted for: " + route.request().url());
            
            // Real server ko bypass karke apna data 'fulfill' karein
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify(myFakeProducts),
            });
        });

        // 3. Ab page par jayein
        await page.goto('https://automationexercise.com/products');

        // 4. Verification: UI par ab real products nahi, hamara fake product dikhega
        const firstProductName = page.locator('.productinfo p').first();
        await expect(firstProductName).toHaveText('MOCKED: Gemini Special Gift');

        const firstProductPrice = page.locator('.productinfo h2').first();
        await expect(firstProductPrice).toHaveText('Rs. 0');

        console.log("Test Passed: API data successfully hijacked!");
    });
});
const { test, expect } = require('@playwright/test');

test('Easy Universal Date Picker', async ({ page }) => {

  await page.goto("https://selenium.qabible.in/date-picker.php");

  const targetMonth = "April";
  const targetYear = "2022";
  const targetDay = "8";

  await page.locator("[data-provide='datepicker']").click();

  // Target date object
  const targetDateObj = new Date(`${targetMonth} 1, ${targetYear}`);

  while (true) {

    const uiText = (await page.locator('.datepicker-switch').first().textContent()).trim();

    console.log("UI:", uiText);

    if (uiText === `${targetMonth} ${targetYear}`) break;

    const uiDateObj = new Date(uiText);

    if (uiDateObj > targetDateObj) {
      await page.locator('.prev').first().click();

    } else {
      await page.locator('.next').first().click();
    }
  }

  // Click day
  await page.locator(`//td[normalize-space()='${targetDay}']`).click();
  await page.pause();

});

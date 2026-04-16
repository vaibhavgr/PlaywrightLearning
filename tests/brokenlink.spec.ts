import { test, expect, request } from '@playwright/test';

test.only('Check broken links on single page', async ({ page }) => {

  // Step 1: Open page
  await page.goto('https://www.sheinindia.in/');


   await page.pause();
})


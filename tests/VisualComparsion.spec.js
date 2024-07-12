import { test, expect } from '@playwright/test';

test('Visual Testing', async ({ page }) => {
  await page.goto('https://stage.weather.com');
  //await page.waitForTimeout(60000);
  //await expect(page).toHaveScreenshot();
  //await page.waitForTimeout(120_000);
  await page.waitForLoadState("domcontentloaded")

  expect (await page.screenshot({ path: 'test.png', fullPage: true })).toMatchSnapshot(test.png)
  await page.waitForTimeout(60000);

});
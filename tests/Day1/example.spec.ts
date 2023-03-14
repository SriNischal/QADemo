import { test, expect,chromium } from '@playwright/test';

test('has title', async () => {
  const Browser = await chromium.launch({headless:false});
  const Context = await Browser.newContext();
  const Page = await Context.newPage();
  await Page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(Page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

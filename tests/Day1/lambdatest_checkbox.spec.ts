import { test, expect } from '@playwright/test';
test('Should add item to cart', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/');
    await page.hover("(//a[@data-toggle='dropdown'])[1]")
    //await Page.click("//a[@title='Desktop']")
    //await (await page.waitForSelector("//a[@class='nav-link icon-left text active']")).waitForElementState("visible");
    await page.click("'Desktop'")
    //await page.click("(//label[@class='custom-control-label'])[35]")
    //await (await page.waitForSelector("(//label[@class='custom-control-label'])[39]")).waitForElementState("visible");
    await page.check("(//label[@class='custom-control-label'])[39]")
    console.log(await page.isChecked("(//label[@class='custom-control-label'])[39]"))
});
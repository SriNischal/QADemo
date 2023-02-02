import {test, expect} from '@playwright/test'

test("Verify products are visible once login is successful", async ({ page }) => {
    const cardTitles = page.locator(".card-body a");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator('#username').type("rahulshettyacademy");
    await page.locator('#password').type("learning");
    await page.locator('#signInBtn').click();
    //console.log(await page.locator (".card-body a").nth(0).textContent());
    await (await page.waitForSelector(".card-body a")).waitForElementState("visible");
    //await page.waitForLoadState('networkidle');
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);
    await expect(cardTitles.first()).toContainText("iphone X");
    await expect(cardTitles.nth(1)).toContainText("Samsung Note 8");
    await expect(cardTitles.nth(2)).toContainText("Nokia Edge");
    await expect(cardTitles.last()).toContainText("Blackberry");
  })


test('Check static selection dropdown', async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator('#username');
    const password = page.locator('#password');
    const signin = page.locator('signInBtn');
    const dropdown =  page.locator('select.form-control');
    await dropdown.selectOption('Student');
    await page.pause();

}

)




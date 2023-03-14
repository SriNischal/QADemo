import {test, expect} from "@playwright/test";

test('login to Lambdatest with valid credentials', async({page})=>{
    await page.goto('https://ecommerce-playground.lambdatest.io/')
    await page.hover("(//a[@data-toggle='dropdown'])[3]")
    await page.click("'Login'")
    console.log(await page.title());
    await expect(page).toHaveTitle('Account Login');
    await page.locator("//input[@id='input-email']").type("srinischalthiparani@gmail.com");
    await page.locator("//input[@type='password']").type("Subhanivas@1204");
    await page.click("//input[@type='submit']");
    console.log(await page.title())
    await expect(page).toHaveTitle('My Account')

})

test('login to Lambdatest with invalid credentials', async({page})=>{
    await page.goto('https://ecommerce-playground.lambdatest.io/')
    await page.hover("(//a[@data-toggle='dropdown'])[3]")
    await page.click("'Login'")
    console.log(await page.title());
    await expect(page).toHaveTitle('Account Login');
    await page.locator("//input[@id='input-email']").type("srinischhalthiparani@gmail.com");
    await page.locator("//input[@type='password']").type("Subhanivas@1204");
    await page.click("//input[@type='submit']");
    await expect(page.locator("//div[@class='alert alert-danger alert-dismissible']")).toHaveText(' Warning: No match for E-Mail Address and/or Password.')
})



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


test('Selecting static option from dropdown', async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator('#username');
    const password = page.locator('#password');
    const signin = page.locator('signInBtn');
    const dropdown =  page.locator('select.form-control');
    await dropdown.selectOption('Student');
}
)

test('Handling pop-up when user select radio button & CheckBox', async({page})=>{
    const userRadiobutton = page.locator('.radiotextsty').nth(1);
    const checkbox1 = page.locator('#terms');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await userRadiobutton.click();
    await page.locator('#okayBtn').click();
    await expect(userRadiobutton).toBeChecked();
    console.log(await userRadiobutton.isChecked());
    await checkbox1.check();
    await expect(checkbox1).toBeChecked();
    console.log(await checkbox1.isChecked());
    await checkbox1.uncheck();
    console.log(await checkbox1.isChecked());  
}
)

test.only('Check text is blicking or not',async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const blinktxtlocator1 = page.locator('.blinkingText');
    await expect(blinktxtlocator1).toHaveAttribute("class","blinkingText");

})

test('Handling child window scenario', async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const blinktxtlocator2 = page.locator('.blinkingText');
    const newPage = await Promise.all([
        context.waitForEvent('page'),
        await blinktxtlocator2.click(),

    ])
    const text = page.locator('.red').textContent();
    console.log(text)

})





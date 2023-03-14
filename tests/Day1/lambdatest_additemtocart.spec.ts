import { test,expect} from '@playwright/test';
test('Should add item to cart', async({page})=>{
  //const Browser = await chromium.launch();
  //const Context = await Browser.newContext();
  //const Page = await Context.newPage();
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  const text = page.locator("'Upto 50% Off on Fully Automatic Top Load Washing Machine'")
  console.log(text)
  const expectedText = "Upto 50% Off on Fully Automatic Top Load Washing Machine"
  console.log(expectedText)
  //expect(text).toHaveText("" + expectedText)
  await expect(page.locator("'Upto 50% Off on Fully Automatic Top Load Washing Machine'")).toHaveText("Upto 50% Off on Fully Automatic Top Load Washing Machine") 
  await page.hover("(//a[@data-toggle='dropdown'])[3]")
  //await Page.click("(//span['text=Login'])[43]")
  await page.click("'Login'")
  console.log(await page.title());
  //await expect(page).toHaveTitle('Account Login');
  //await page.locator("//input[@id='input-email']").type("srinischalthiparani@gmail.com");
  //await page.locator("//input[@type='password']").type("Subhanivas@1204");
  //await page.click("//input[@type='submit']");
  //console.log(await page.title())
  //await expect(page).toHaveTitle('My Account')
  await page.hover("(//a[@data-toggle='dropdown'])[1]")
  //await Page.click("//a[@title='Desktop']")
  await (await page.waitForSelector("'Desktop'")).waitForElementState("visible");
  //await page.click("'Desktop'")
  //await page.click("(//label[@class='custom-control-label'])[35]")
  await page.check("(//label[@class='custom-control-label'])[39]")
  console.log(page.isChecked("(//label[@class='custom-control-label'])[39]"))
  //await page.click("((//label[@class='custom-control-label'])[43]")
  //await page.waitForSelector("5000")
  //console.log(await test.isChecked())
  await page.click("(//div[@class='carousel-item active'])[1]")
  await page.click("(//button[@title='Add to Cart'])[2]")
  //await Page.waitForSelector("(//div[@class='cart-icon'])[1]")
  await page.click("//a[@class='btn btn-primary btn-block']")
  //await expect(Page.locator("(//img[@class='img-thumbnail'])[2]")).toBeVisible()
  await expect(page.locator("(//input[@class='form-control'])[1]")).toHaveValue("8");
})


  const maxValue = 20;
  const targetValue = 0.4;
  const sliderHandle = page.locator(".ant-slider-handle").first();
  const slider = page.locator(".ant-slider.ant-slider-horizontal").first();
  const sliderBoundingBox = await slider.boundingBox();
  await sliderHandle.dragTo(sliderHandle, {
    force: true,
    targetPosition: {
      x: sliderBoundingBox.width * targetValue,
      y: 0,
    },
  });
  const input = page.locator(".ant-input-number-input").first();
  const value = await input.getAttribute("value");
  const expectedValue = '${maxValue * targetValue}';

  expect(value).toEqual(expectedValue);
});
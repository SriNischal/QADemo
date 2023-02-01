import { test,expect } from '@playwright/test';// here we are importing playwright test annotation
test ('Login with invalid credentials using browser fixture', async({browser})=>{ 
  //test is our test spec with an annonomous function 
   // {browser} is a global fixture from playwright
         const context = await browser.newContext(); 
         // In this step we will open a new fresh browser with a method newContext()
         const page = await context.newPage();
         // A new fresh page opens to enter url
         // await is a command used to wait until the browser and page opens.
         await page.goto("https://rahulshettyacademy.com/loginpagePractise/") // goto is a method which invoke the url into the browser
         console.log(await page.title);
         await expect (page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
         await page.locator('#username').type("rahulshetty");
         await page.locator('#password').type("learning");
         await page.locator('#signInBtn').click;
         console.log(page.locator("[style*='block']").textContent);

       });


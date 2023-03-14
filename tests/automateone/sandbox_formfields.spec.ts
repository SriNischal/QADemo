import {Page, test, chromium} from '@playwright/test'
import formfield_page from './pages/formfield_page';

let page: Page;
let browser, context: any;
test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
});

test('Form fields validation', async()=>{
    const form = new formfield_page(page);
    await form.gotourl();
    await form.clickformfields();
    await form.pageformfieldsValidation()
    await form.enterName();
    await form.checkboxdrink();
    await form.checkboxcolor();
    await form.dropdown();
    await form.clicksiblings();
    await form.enterEmail();
    await form.enterMessage();
    await form.submit();
    await form.pageresultmessage();
    await form.pageresultname();
    await form.pageresultdrink();
    await form.pageresultcolor
    await form.pageresultsiblings();
    await form.pageresultemail();
    await form.pageresulttextmessage();
});

test.afterAll(async () => {
    await browser.close();
})
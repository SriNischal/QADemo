import {chromium, Page, test} from '@playwright/test'
import search_page from './pages/search_page';
import {searchtest} from './helper/searchboxheper';

let page: Page;
let browser, context: any;
let searchsand : searchtest;

test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    searchsand = new searchtest(page);
});

test('Search for particular value by entering in search text box', async () => {
    await context.tracing.start({screenshots : true, snapshots : true});
    const search = new search_page(page);
    const searchsand = new searchtest(page);
    await search.gotourl();
    //searchsand.searchtest();
    //await page.goto(searchtest);
    //await searchsand.searchtest();
    await search.clickonsearchbtn();
    await search.urlvalidation();
    await search.searchtitlevalidation();
    await search.searchmessagevalidation();
    await search.textboxclicking();
    await search.entertextbox();
    await search.submitbtn();
    await search.searchimagevalidation();
    await search.searchtextpagetitle();
    await search.searchtextpagetext();
    await search.searchmessagetext();
    await search.searchedtextclicking();
    await search.searchedmessagetitle();
    await search.searchedmessagetext();
    await search.clickcypressbtn();
    await search.cypresstitlevalidation();
    await search.cypressmessagevalidation();
    await search.clickcypressmessage();
    await search.clickseleniumbtn();
    await search.seleniumtitlevalidation();
    await search.seleniummessagevalidation();
    await context.tracing.stop({path : "searchtraces.zip"});
})

test.only('Click on submit button without entering data', async()=>{
    await context.tracing.start({screenshots : true, snapshots : true});
    const search = new search_page(page);
    await search.gotourl();
    await search.clickonsearchbtn();
    await search.urlvalidation();
    await search.searchtitlevalidation();
    await search.searchmessagevalidation();
    await search.textboxclicking();
    await search.submitbtn();
    await search.tooltipmessage();
    await context.tracing.stop({path : "searchtraces.zip"});
})

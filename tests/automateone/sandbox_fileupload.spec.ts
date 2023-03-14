import {chromium, Page, test} from '@playwright/test'
import fileupload_page from './pages/fileupload_page';

let page: Page;
let browser, context: any;
test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
});

test('Sandbox text validation', async()=>{
    const file = new fileupload_page(page);
    await file.gotourl();
    await file.sandboxtext();
});

test.only('Upload supported file format file', async()=>{
    const file = new fileupload_page(page);
    await file.gotourl();
    await file.clickfileupload();
    await file.pageheader();
    await file.pagetext();
    await file.filesize();
    await file.filessupported();
    await file.choosefile();
    await file.supportedfileselection();
    await file.uploadbutton();
    await file.fileuploadmessage();
});

test('Upload not supported file format file', async()=>{
    const file = new fileupload_page(page);
    await file.gotourl();
    await file.clickfileupload();
    await file.pageheader();
    await file.pagetext();
    await file.filesize();
    await file.filessupported();
    await file.choosefile();
    await file.notsupportedfileselection();
    await file.unsupportedfile();
});

test.afterAll(async () => {
    await browser.close();
})


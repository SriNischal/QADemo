import {chromium, Page, test, FullConfig} from '@playwright/test'
import gestures_page from './pages/gestures_page';

let page: Page;
let browser, context: any;
let config : FullConfig;
test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();

});

test('Move image from box1 to box2',async () => {
    await context.tracing.start({screenshots : true, snapshots : true});
    const gesture = new gestures_page(page);
    await gesture.gotourl();
    //await page.goto('/');
    await gesture.clickongesturebtn();
    await gesture.gesturetitlevalidation();
    await gesture.startimagepositionvalidation();
    await gesture.dragtheimage();
    await gesture.endimagepositionvalidation();
    await context.tracing.stop({path : "imagetraces.zip"});
})

test.only('Click on pointer and validate',async () => {
    await context.tracing.start({screenshots : true, snapshots : true});
    const gesture = new gestures_page(page);
    await gesture.gotourl();
    await gesture.clickongesturebtn();
    await gesture.gesturetitlevalidation();
    await gesture.mapmessagevalidation();
    await gesture.positionintialposition();
    await gesture.clickpointer();
    await gesture.citynamevalidation();
    await gesture.closepopup();
    await gesture.mapzoominzoomout();
    await gesture.pointerafterposition();
    await context.tracing.stop({path : "imagetraces.zip"});
})

test('Move the box',async () => {
    await context.tracing.start({screenshots : true, snapshots : true});
    const gesture = new gestures_page(page);
    await gesture.gotourl();
    await gesture.clickongesturebtn();
    await gesture.gesturetitlevalidation();
    await gesture.boxtextvalidation();
    await gesture.initalpositionvalidation();
    await gesture.dragbox();
    await gesture.afterpostionvalidation();
    await context.tracing.stop({path : "imagetraces.zip"});
})
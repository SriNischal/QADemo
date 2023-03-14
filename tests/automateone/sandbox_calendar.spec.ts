import {chromium, Page, test} from '@playwright/test'
import calendar_page from './pages/calendar_page';

let page: Page;
let browser, context: any;
test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
});

test('Select date in calendar',async () => {
    await context.tracing.start({screenshots : true, snapshots : true});
    const calendar = new calendar_page(page);
    await calendar.gotourl();
    await calendar.clickoncalendarbtn();
    await calendar.urlvalidation();
    await calendar.calendartitlevalidation();
    await calendar.textboxclicking();
    await calendar.dateselection();
    await calendar.submitbuttonclicking();
    await calendar.submissionmessagevalidation();
    await calendar.datevalidation();
    await context.tracing.stop({path :"trace.zip"});
});

test('Select date by entering in the text field',async () =>{
    await context.tracing.start({screenshots : true, snapshots : true});
    const calendar = new calendar_page(page);
    await calendar.gotourl();
    await calendar.clickoncalendarbtn();
    await calendar.urlvalidation();
    await calendar.calendartitlevalidation();
    await calendar.textboxclicking();
    await calendar.enterdate();
    await calendar.calendarclose();
    await calendar.submitbuttonclicking();
    await calendar.submissionmessagevalidation();
    await calendar.entereddatevalidation();
    await context.tracing.stop({path :"trace.zip"});
})

test ('Select date from previous month',async () =>{
    await context.tracing.start({screenshots : true, snapshots : true});
    const calendar = new calendar_page(page);
    await calendar.gotourl();
    await calendar.clickoncalendarbtn();
    await calendar.urlvalidation();
    await calendar.calendartitlevalidation();
    await calendar.textboxclicking();
    await calendar.previousmonthbth();
    await calendar.dateselection();
    await calendar.submitbuttonclicking();
    await calendar.submissionmessagevalidation();
    await calendar.prevmonthdatevalidation();
    await context.tracing.stop({path :"trace.zip"});
})
test ('Select date from next month',async () =>{
    await context.tracing.start({screenshots : true, snapshots : true});
    const calendar = new calendar_page(page);
    await calendar.gotourl();
    await calendar.clickoncalendarbtn();
    await calendar.urlvalidation();
    await calendar.calendartitlevalidation();
    await calendar.textboxclicking();
    await calendar.nextmonthbtn();
    await calendar.dateselection();
    await calendar.submitbuttonclicking();
    await calendar.submissionmessagevalidation();
    await calendar.nextmonthdatevalidation();
    await context.tracing.stop({path :"trace.zip"});
})

test ('Select particular previous date',async () =>{
    await context.tracing.start({screenshots : true, snapshots : true});
    const calendar = new calendar_page(page);
    await calendar.gotourl();
    await calendar.clickoncalendarbtn();
    await calendar.urlvalidation();
    await calendar.calendartitlevalidation();
    await calendar.textboxclicking();
    await calendar.particularpreviousdate();
    await calendar.dateselection();
    await calendar.submitbuttonclicking();
    await calendar.submissionmessagevalidation();
    await calendar.prevdatevalidation();
    await context.tracing.stop({path :"trace.zip"});
})

test.only ('Select particular next date',async () =>{
    await context.tracing.start({screenshots : true, snapshots : true});
    const calendar = new calendar_page(page);
    await calendar.gotourl();
    await calendar.clickoncalendarbtn();
    await calendar.urlvalidation();
    await calendar.calendartitlevalidation();
    await calendar.textboxclicking();
    await calendar.particularnextdate();
    await calendar.dateselection();
    await calendar.submitbuttonclicking();
    await calendar.submissionmessagevalidation();
    await calendar.nextdatevalidation();
    await context.tracing.stop({path :"trace.zip"});
})

test.afterAll(async () => {
    await browser.close();
})
import {chromium, Page, test} from '@playwright/test'
import carousel_page from './pages/carousel_page';

let page: Page;
let browser, context: any;
test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    
});
test('Validating images in the carousel',async () => {
    await context.tracing.start({screenshots : true, snapshots : true});
    const carousel = new carousel_page(page);
    await carousel.gotourl();
    await carousel.clickcarouselbtn();
    await carousel.urlvalidation();
    await carousel.carouseltitlevalidation();
    await carousel.carouselfirstimagevalidation();
    await carousel.carouselsecondimagevalidation();
    await carousel.carouselthirdimagevalidation();
    await carousel.carouselfourthimagevalidation();
    await carousel.carouselfifthimagevalidation();
    await context.tracing.stop({path :"trace.zip"});
});

test.only('Validating images by clicking on the image',async () => {
    await context.tracing.start({screenshots : true, snapshots : true});
    const carousel = new carousel_page(page);
    await carousel.gotourl();
    await carousel.clickcarouselbtn();
    await carousel.urlvalidation();
    await carousel.carouseltitlevalidation();
    await carousel.secondimageclicking();
    await carousel.carouselsecondimagevalidation();
    await carousel.thirdimageclicking();
    await carousel.carouselthirdimagevalidation();
    await carousel.fourthimageclicking();
    await carousel.carouselfourthimagevalidation();
    await carousel.fifthimageclicking();
    await carousel.carouselfifthimagevalidation();
    await carousel.firstimageclicking();
    await carousel.carouselfirstimagevalidation();
    await context.tracing.stop({path :"trace.zip"});
});

test('Validating the name of the images', async()=>{
    await context.tracing.start({screenshots : true, snapshots : true});
    const carousel = new carousel_page(page);
    await carousel.gotourl();
    await carousel.clickcarouselbtn();
    await carousel.urlvalidation();
    await carousel.carouseltitlevalidation();
    await carousel.firstimagetitlevalidation();
    await carousel.secondimageclicking();
    await carousel.secondimagetitlevalidation();
    await carousel.thirdimageclicking();
    await carousel.thirdimagetitlevalidation();
    await carousel.fourthimageclicking();
    await carousel.fourthimagetitlevalidation();
    await carousel.fifthimageclicking();
    await carousel.fifthimagetitlevalidation();
    await context.tracing.stop({path :"./traces/images.zip"});
})

test.afterAll(async () => {
    await browser.close();
})
import { expect, Page, } from "@playwright/test";
import { gesturelocators } from "../utils/gestureslocators";
let locator: gesturelocators;
export default class gestuures_page {
    constructor(public page: Page,) {
        locator = new gesturelocators();
    }

    async gotourl() {
        await this.page.goto(locator.baseURL);
        await expect(this.page).toHaveURL(locator.baseURL);
    }
    async urlvalidation() {
        const url = locator.URL;
        await expect(this.page).toHaveURL(url);
        console.log(url);

    }
    async clickongesturebtn() {
        await this.page.locator(locator.gesturebtn).click();
    }
    async gesturetitlevalidation() {
        const actualtext = this.page.locator(locator.actualgesturestitle);
        console.log(actualtext);
        const expectedtext = locator.expectedgesturestitle;
        console.log(expectedtext);
        await expect(actualtext).toHaveText(expectedtext);
    }
    async dragtheimage() {
        await this.page.locator(locator.image).click();
        await this.page.dragAndDrop(locator.startlocation, locator.droplocation);
        await this.page.mouse.up();
    }
    async clickpointer() {
        await this.page.locator(locator.pointer).click();
    }
    async citynamevalidation() {
        const actualtext = this.page.locator(locator.actualcityname);
        console.log(actualtext);
        const expectedtext = locator.expectedcityname;
        console.log(expectedtext);
        await expect(actualtext).toHaveText(expectedtext);
    }
    async closepopup() {
        await this.page.locator(locator.closebtn).click();
    }
    async boxtextvalidation() {
        const actualtext = this.page.locator(locator.actualgestureboxheading);
        console.log(actualtext);
        const expectedtext = locator.expectedgestureboxheading;
        console.log(expectedtext);
        await expect(actualtext).toHaveText(expectedtext);
    }
    async mapmessagevalidation() {
        const actualtext = this.page.locator(locator.actualmapmessage);
        console.log(actualtext);
        const expectedtext = locator.expectedmapmessage;
        console.log(expectedtext);
        await expect(actualtext).toHaveText(expectedtext);
    }
    async mapzoominzoomout() {
        await this.page.locator(locator.maximizemap).click();
        await this.page.locator(locator.plussymbol).click();
        await this.page.locator(locator.minussymbol).click();
        await this.page.locator(locator.maximizemap).click();
    }
    async dragbox() {
        await this.page.locator(locator.box).hover();
        await this.page.mouse.down();
        await this.page.mouse.move(500, 414);
        await this.page.mouse.up();

    }
    async initalpositionvalidation() {
        const element = this.page.locator(locator.actualinitialposition);
        const boundingBox = await element.boundingBox();
        if (boundingBox) {
            const x = boundingBox.x;
            const y = boundingBox.y;
            const height = boundingBox.height;
            const width = boundingBox.width;
            console.log('The element is located at position:', "height" + height, "width" + width, "x" + x, "y" + y);
        } else {
            console.log('Unable to get the position of the element');
        }
        const expectedtext = locator.expectedinitialposition;
        console.log(expectedtext);
        expect(boundingBox).toStrictEqual(expectedtext);
    }
    async afterpostionvalidation() {
        const element = this.page.locator(locator.actualinitialposition);
        const boundingBox = await element.boundingBox();
        if (boundingBox) {
            const x = boundingBox.x;
            const y = boundingBox.y;
            const height = boundingBox.height;
            const width = boundingBox.width;
            console.log('The element is located at position:', "height" + height, "width" + width, "x" + x, "y" + y);
        } else {
            console.log('Unable to get the position of the element');
        }
        const expectedtext = locator.expectedafterposition;
        console.log(expectedtext);
        expect(boundingBox).toStrictEqual(expectedtext);
    }
    async positionintialposition(){
        const element = this.page.locator(locator.pointer);
        const boundingBox = await element.boundingBox();
        if (boundingBox) {
            const x = boundingBox.x;
            const y = boundingBox.y;
            const height = boundingBox.height;
            const width = boundingBox.width;
            console.log('The element is located at position:', "height" + height, "width" + width, "x" + x, "y" + y);
        } else {
            console.log('Unable to get the position of the element');
        }
        const expectedtext = locator.actualpointerinitialposition;
        console.log(expectedtext);
        expect(boundingBox).toStrictEqual(expectedtext);
        
    }
    async pointerafterposition() {
        await this.page.locator(locator.map).hover();
        await this.page.mouse.down();
        await this.page.mouse.move(500, 414);
        await this.page.mouse.up();
        const element = this.page.locator(locator.pointer);
        const boundingBox = await element.boundingBox();
        if (boundingBox) {
            const x = boundingBox.x;
            const y = boundingBox.y;
            const height = boundingBox.height;
            const width = boundingBox.width;
            console.log('The element is located at position:', "height" + height, "width" + width, "x" + x, "y" + y);
        } else {
            console.log('Unable to get the position of the element');
        }
        const expectedtext = locator.expectedpointerafterposition;
        console.log(expectedtext);
        expect(boundingBox).toStrictEqual(expectedtext);
        
    }
    async startimagepositionvalidation(){
       const image = await this.page.locator(locator.droplocation).focus();
       const imageposition = await this.page.locator(locator.image).isVisible();
       console.log(image,imageposition)
    }
    async endimagepositionvalidation(){
        const image =  await this.page.locator(locator.droplocation).focus();
        const imageposition = await this.page.locator(locator.image).isVisible();
        console.log(image,imageposition)
     }
}
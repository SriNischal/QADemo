import { expect, Page } from "@playwright/test";
import { carouselslocators } from "../utils/carouselslocators";
let locator: carouselslocators;
export default class calendar_page {

    constructor(public page: Page) {
        locator = new carouselslocators();
    }
    async gotourl(){
        await this.page.goto(locator.baseURL);
        await expect(this.page).toHaveURL(locator.baseURL);
    }
    async urlvalidation(){
        const url = locator.URL;
        await expect(this.page).toHaveURL(url); 
        console.log(url);
    }
    async clickcarouselbtn() {
        await this.page.locator(locator.carouselsbtn).click();
    }
    async carouseltitlevalidation() {
        const actualtext = this.page.locator(locator.actualcarouselheader);
        console.log(actualtext);
        const expectedtext = locator.expectedcarouselheader;
        console.log(expectedtext);
        await expect(actualtext).toHaveText(expectedtext);
    }

    async firstimagetitlevalidation() {
        await this.page.waitForTimeout(5000);
        const actualtext = this.page.locator(locator.firstimagetitle);
        console.log(actualtext);
        const expectedtext = locator.expectedfirstimagename;
        console.log(expectedtext);
        expect(actualtext).toHaveText(expectedtext);
        //expect(actualtext).toBe(expectedtext);
        console.log("first image title validated");
    }
    async secondimagetitlevalidation() {
        const actualtext = this.page.locator(locator.secondimagetitle);
        console.log(actualtext);
        const expectedtext = locator.expectedsecondimagename;
        console.log(expectedtext);
        await expect(actualtext).toHaveText(expectedtext);
        console.log("second image title validated");
    }
    async thirdimagetitlevalidation() {       
        await this.page.waitForTimeout(5000); 
        const actualtext = this.page.locator(locator.thirdimagetitle);
        console.log(actualtext);
        const expectedtext = locator.expectedthirdimagename;
        console.log(expectedtext);
        await expect(actualtext).toHaveText(expectedtext);
        console.log("third image title validated");
    }
    async fourthimagetitlevalidation() {
        await this.page.waitForTimeout(5000);
        const actualtext = this.page.locator(locator.fourthimagetitle);
        console.log(actualtext);
        const expectedtext = locator.expectedfourthimagename;
        console.log(expectedtext);
        await expect(actualtext).toHaveText(expectedtext);
        console.log("fourth image title validated");
    }
    async fifthimagetitlevalidation() {
        await this.page.waitForTimeout(5000);
        const actualtext = this.page.locator(locator.fifthimagetitle);
        console.log(actualtext);
        const expectedtext = locator.expectedfifthimagename;
        console.log(expectedtext);
        await expect(actualtext).toHaveText(expectedtext);
        console.log("fifth image title validated");
    }
    async carouselfirstimagevalidation() {
        await this.page.waitForTimeout(5000);
        let image = await this.page.locator(locator.firstimage).screenshot(locator.actualfirstimagepath);
        expect(image).toMatchSnapshot(locator.expectedfirstimagepath);
        console.log("firstimagevalidated");
    }
    async carouselsecondimagevalidation() {
        let image = await this.page.locator(locator.secondimage).screenshot(locator.actualsecondimagepath);
        expect(image).toMatchSnapshot(locator.expectedsecondimagepath);
        console.log("secondimagevalidated");
    }
    async carouselthirdimagevalidation() {
        await this.page.waitForTimeout(5000);
        let image = await this.page.locator(locator.thirdimage).screenshot(locator.actualthirdimagepath);
        expect(image).toMatchSnapshot(locator.expectedthirdimagepath);
        console.log("thirdimagevalidated");
    }
    async carouselfourthimagevalidation() {
        await this.page.waitForTimeout(5000);
        let image = await this.page.locator(locator.fourthimage).screenshot(locator.actualfourthimagepath);
        expect(image).toMatchSnapshot(locator.expectedfourthimagepath);
        console.log("fourthimagevalidated");
    }
    async carouselfifthimagevalidation() {
        let image = await this.page.locator(locator.fifthimgae).screenshot(locator.actualfifthimagepath);
        expect(image).toMatchSnapshot(locator.expectedfifthimagepath);
        console.log("fifthmagevalidated");
    }
    async secondimageclicking(){
        await this.page.waitForTimeout(5000)
        await this.page.locator(locator.clicksecondimage).click();
    }
    async thirdimageclicking(){
        await this.page.locator(locator.clickthirdimage).click();
    }
    async fourthimageclicking(){
        await this.page.locator(locator.clickfourthimage).click();
    }
    async fifthimageclicking(){
        await this.page.locator(locator.clickfifthimage).click();
    }
    async firstimageclicking(){
        await this.page.locator(locator.clickfirstimage).click();
    }
}
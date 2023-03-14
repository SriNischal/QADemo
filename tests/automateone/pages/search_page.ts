import { expect, Page, } from "@playwright/test";
import { searchlocators } from "../utils/searchboxlocators";
let locator: searchlocators;
export default class search_page {
    constructor(public page: Page) {
        locator = new searchlocators();
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
    async clickonsearchbtn() {
        await this.page.locator(locator.searchbtn).click();
    }
    async searchtitlevalidation() {
        const actualtext = this.page.locator(locator.actualsearchtitle);
        console.log(actualtext);
        const expectedtext = locator.expectedsearchtitle;
        console.log(expectedtext);
        await expect(actualtext).toHaveText(expectedtext);
    }
    async searchmessagevalidation() {
        const actualtext = this.page.locator(locator.actualsearchboxtext);
        console.log(actualtext);
        const expectedtext = locator.expectedsearchboxtext;
        console.log(expectedtext);
        await expect(actualtext).toHaveText(expectedtext);
    }
    async textboxclicking() {
        await this.page.locator(locator.searchboxclick).click();
    }
    async entertextbox() {
        await this.page.locator(locator.searchboxclick).fill(locator.text);
    }
    async submitbtn() {
        await this.page.locator(locator.submitbtn).click();
    }

    async tooltipmessage(){
        const message = this.page.locator(locator.actualvalidationmessage);
        console.log(message);
        const expectedmessage = locator.expectedvalidationmessage;
        console.log(expectedmessage);
        await expect(message).toHaveText(expectedmessage);
    }
    async searchtextpagetitle() {
        const actualtext = this.page.locator(locator.actualsearchpagetitle);
        console.log(actualtext);
        const expectedtext = locator.expecetdsearchpagetitle;
        console.log(expectedtext);
        await expect(actualtext).toHaveText(expectedtext);
    }
    async searchtextpagetext() {
        const actualtext = this.page.locator(locator.actualsearchedtext);
        console.log(actualtext);
        const expectedtext = locator.expectedsearchedtext;
        console.log(expectedtext);
        await expect(actualtext).toHaveText(expectedtext);
    }
    async searchmessagetext() {
        const actualtext = this.page.locator(locator.actualsearchedmessage);
        console.log(actualtext);
        const expectedtext = locator.expectedsearchmessage;
        console.log(expectedtext);
        await expect(actualtext).toHaveText(expectedtext);
    }
    async searchedtextclicking() {
        await this.page.locator(locator.actualsearchedtext).click();
    }
    async searchedmessagetitle() {
        const actualtext = this.page.locator(locator.actualmessage);
        console.log(actualtext);
        const expectedtext = locator.expectedmessage;
        console.log(expectedtext);
        await expect(actualtext).toHaveText(expectedtext);
    }
    async searchedmessagetext() {
        const actualtext = this.page.locator(locator.actualheader);
        console.log(actualtext);
        const expectedtext = locator.expectedheader;
        console.log(expectedtext);
        await expect(actualtext).toHaveText(expectedtext);
    }
    async clickcypressbtn() {
        await this.page.locator(locator.cypressbtn).click();
    }
    async cypresstitlevalidation() {
        const actualtext = this.page.locator(locator.actualcypresstitile);
        console.log(actualtext);
        const expectedtext = locator.expectedcypresstitle;
        console.log(expectedtext);
        await expect(actualtext).toHaveText(expectedtext);
    }
    async cypressmessagevalidation() {
        const actualtext = this.page.locator(locator.actualcypresstext);
        console.log(actualtext);
        const expectedtext = locator.expectedcypresstext;
        console.log(expectedtext);
        await expect(actualtext).toHaveText(expectedtext);
    }
    async clickcypressmessage() {
        await this.page.locator(locator.actualcypresstext).click();
    }
    async clickseleniumbtn() {
        await this.page.locator(locator.seleniumbtn).click();
    }
    async seleniumtitlevalidation() {
        const actualtext = this.page.locator(locator.actualcypresstitile);
        console.log(actualtext);
        const expectedtext = locator.expectedseleniumtitle;
        console.log(expectedtext);
        await expect(actualtext).toHaveText(expectedtext);
    }
    async seleniummessagevalidation() {
        const actualtext = this.page.locator(locator.actualcypresstext);
        console.log(actualtext);
        const expectedtext = locator.expectedcypresstext;
        console.log(expectedtext);
        await expect(actualtext).toHaveText(expectedtext);
    }
    async searchimagevalidation() {
        let image = await this.page.locator(locator.image).screenshot(locator.actualimagepath);
        expect(image).toMatchSnapshot(locator.expectedimagepath);
        console.log("secondimagevalidated");
    }

}
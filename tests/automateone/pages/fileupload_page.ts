import { expect, Page} from "@playwright/test";
import { fileuploadlocators } from "../utils/fileuploadlocators";
let locator : fileuploadlocators;
export default class fileupload_page {
    constructor(public page: Page) {
        locator = new fileuploadlocators();
    }
    async gotourl(){
        await this.page.goto(locator.baseURL);
    }
    async clickfileupload() {
        await this.page.locator(locator.uploadfile)
            .click();
    }
    async pageheader() {
        const actualheader = this.page.locator(locator.actualheader);
        console.log(actualheader);
        const expectedheader = locator.expectedheader
        console.log(expectedheader);
        await expect(actualheader).toHaveText(expectedheader);
    }
    async pagetext() {
        const actualtext = this.page.locator(locator.actualtext);
        console.log(actualtext);
        const expectedtext = locator.expectedtext;
        console.log(expectedtext);
        await expect(actualtext).toHaveText(expectedtext);
    }
    async filesize() {
        const actualfilesize = this.page.locator(locator.actualfilesize);
        console.log(actualfilesize);
        const expectedfilesize = locator.expectedfilesize;
        console.log(expectedfilesize);
        await expect(actualfilesize).toHaveText(expectedfilesize);
    }
    async filessupported() {
        const actualfilessupported = this.page.locator(locator.actualsupportedfiles);
        console.log(actualfilessupported);
        const expectedfilessupported = locator.expectedsupportedfiles;
        console.log(expectedfilessupported);
        await expect(actualfilessupported).toHaveText(expectedfilessupported);
    }
    async choosefile() {
        await this.page.locator(locator.choosefile)
            .click();
    }
    async supportedfileselection() {
        await this.page.setInputFiles(locator.selectinputfile,locator.selectfile)
    }
    async notsupportedfileselection() {
        await this.page.setInputFiles(locator.unsupportedselectinputfile,locator.unsupportedselectfile)
    }
    async uploadbutton() {
        await this.page.locator(locator.uploadbutton)
            .click();
    }
    async fileuploadmessage() {
        const actualfileuploadedmessage = this.page.locator(locator.actualfileuploadedmessage)
        console.log(actualfileuploadedmessage);
        const expectedfileuploadedmessage = locator.expectedfileuploadedmessage;
        console.log(expectedfileuploadedmessage);
        await expect(actualfileuploadedmessage).toHaveText(expectedfileuploadedmessage);
    }
    async sandboxtext() {
        const actualtext = this.page.locator(locator.actualsandboxtext);
        console.log(actualtext);
        const expectedtext = locator.expectedsandboxtext;
        console.log(expectedtext);
        await expect(actualtext).toHaveText(expectedtext);
    }
    async unsupportedfile() {
        const actualtext = this.page.locator(locator.actualunsupportedfile);
        console.log(actualtext);
        const expectedtext = locator.expectedunsupportedfile; 
        console.log(expectedtext);
        await expect(actualtext).toHaveText(expectedtext);
    }
}
import { expect, Page } from "@playwright/test";
import { formfieldlocators } from "../utils/formfieldslocators";
let locator : formfieldlocators;
export default class formfield_page {
    constructor(public page: Page) {
        locator = new formfieldlocators();
    }
    
    async gotourl(){
        await this.page.goto(locator.baseURL);
    }
    async clickformfields() {
        await this.page.locator(locator.formfield)
            .click();
    }
    async enterName() {
        await this.page.locator(locator.enterName)
            .type(locator.name);
    }
    async checkboxdrink() {
        await this.page.locator(locator.checkboxDrink)
            .check();
    }
    async checkboxcolor() {
        await this.page.locator(locator.checkboxcolor)
            .check();
    }

    async clicksiblings() {
        await this.page.locator(locator.clicksiblings)
            .click();
    }
    async enterEmail() {
        await this.page.locator(locator.enterEmail)
            .type(locator.email);
    }
    async enterMessage() {
        await this.page.locator(locator.entermessage)
            .type(locator.message);
    }
    async submit() {
        await this.page.locator(locator.clicksubmit)
            .click();
    }
    async dropdown(){
        await this.page.locator(locator.dropdownvalue).click();
    }
    async pageformfieldsValidation() {
        const actualtext = await this.page.locator(locator.actualtext);
        console.log(actualtext);
        const expectedtext = locator.expectedtext;
        console.log(expectedtext);
        await expect(actualtext).toHaveText(expectedtext);
    }
    async pageresultmessage() {
        const actualresultmessage = await this.page.locator(locator.actualresultmessage);
        console.log(actualresultmessage);
        const expectedresultmessage = locator.exepctedresultmessage;
        console.log(expectedresultmessage);
        await expect(actualresultmessage).toHaveText(expectedresultmessage);
    }
    async pageresultname() {
        const actualresultname = await this.page.locator(locator.actualresultname);
        console.log(actualresultname);
        const expectedresultname = locator.expectedresultname
        console.log(expectedresultname);
        await expect(actualresultname).toHaveText(expectedresultname);
    }
    async pageresultdrink() {
        const actualresultdrink = await this.page.locator(locator.actualresultdrink);
        console.log(actualresultdrink);
        const expectedresultdrink = locator.expectedresultdrink;
        console.log(expectedresultdrink);
        await expect(actualresultdrink).toHaveText(expectedresultdrink);
    }
    async pageresultcolor() {
        const actualresultcolor = await this.page.locator(locator.actualresultcolor);
        console.log(actualresultcolor);
        const expectedresultcolor = locator.expectedresultcolor;
        console.log(expectedresultcolor);
        await expect(actualresultcolor).toHaveText(expectedresultcolor);
    }
    async pageresultsiblings() {
        const actualresultsiblings = await this.page.locator(locator.actualresultsiblings);
        console.log(actualresultsiblings);
        const expectedresultsiblings = locator.expectedresultsiblings
        console.log(expectedresultsiblings);
        await expect(actualresultsiblings).toHaveText(expectedresultsiblings);
    }
    async pageresultemail() {
        const actualresultemail = await this.page.locator(locator.actualresultemail);
        console.log(actualresultemail);
        const expectedresultemail = locator.expectedresultemail;
        console.log(expectedresultemail);
        await expect(actualresultemail).toHaveText(expectedresultemail);
    }
    async pageresulttextmessage() {
        const actualresultmessagetext = await this.page.locator(locator.actualresulttextmessage);
        console.log(actualresultmessagetext);
        const expectedresultmessagetext = locator.expectedresulttextmessage;
        console.log(expectedresultmessagetext);
        await expect(actualresultmessagetext).toHaveText(expectedresultmessagetext);
    }
}
import { expect, Page,  } from "@playwright/test";
import { calendarlocators } from "../utils/calendarlocators";
let locator: calendarlocators;
export default class calendar_page {
    constructor(public page: Page, ) {
        locator = new calendarlocators();
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
    async clickoncalendarbtn() {
        await this.page.locator(locator.calendarbtn).click();
    }
    async calendartitlevalidation() {
        const actualtext = this.page.locator(locator.actualcalendarheadervalidation);
        console.log(actualtext);
        const expectedtext = locator.expectedalendarheadervalidation;
        console.log(expectedtext);
        await expect(actualtext).toHaveText(expectedtext);
    }
    async calendarclose() {
        await this.page.locator(locator.actualcalendarheadervalidation).click();
    }
    async textboxclicking() {
        await this.page.locator(locator.textboxclicking).click();
    }
    async dateselection() {
        const date = await this.page.locator(locator.dateselection).click();
        console.log(date);
    }
    async enterdate() {
        await this.page.locator(locator.textboxclicking).fill("09-02-2023");
    }
    async submitbuttonclicking() {
        await this.page.locator(locator.submitbutton).click();
    }
    async submissionmessagevalidation() {
        const actualtext = this.page.locator(locator.actualsubmissionmessagevalidation);
        console.log(actualtext);
        const expectedtext = locator.expectedsubmissionmessagevalidation;
        console.log(expectedtext);
        await expect(actualtext).toHaveText(expectedtext);
    }
    async datevalidation() {
        const actualtext = this.page.locator(locator.actualdatevalidation);
        console.log(actualtext);
        const expectedtext = locator.expecteddatevalidation;
        console.log(expectedtext);
        await expect(actualtext).toHaveText(expectedtext);
    }
    async entereddatevalidation() {
        const actualtext = this.page.locator(locator.actualdatevalidation);
        console.log(actualtext);
        const expectedtext = locator.expectedenterdatevalidation;
        console.log(expectedtext);
        await expect(actualtext).toHaveText(expectedtext);
    }
    async previousmonthbth() {
        await this.page.locator(locator.previousmonth).click();
    }
    async prevmonthdatevalidation() {
        const actualtext = this.page.locator(locator.actualdatevalidation);
        console.log(actualtext);
        const expectedtext = locator.expectedpreviousmonthdate;
        console.log(expectedtext);
        await expect(actualtext).toHaveText(expectedtext);
    }
    async prevdatevalidation(){
        const actualtext = this.page.locator(locator.actualdatevalidation);
        console.log(actualtext);
        const expectedtext = locator.expectedprevmonthdate;
        console.log(expectedtext);
        await expect(actualtext).toHaveText(expectedtext);
    }
    async nextdatevalidation(){
        const actualtext = this.page.locator(locator.actualdatevalidation);
        console.log(actualtext);
        const expectedtext = locator.expectednextmonthdate;
        console.log(expectedtext);
        await expect(actualtext).toHaveText(expectedtext);
    }
    async nextmonthdatevalidation() {
        const actualtext = this.page.locator(locator.actualdatevalidation);
        console.log(actualtext);
        const expectedtext = locator.expectednextmonthdate;
        console.log(expectedtext);
        await expect(actualtext).toHaveText(expectedtext);
    }
    async nextmonthbtn() {
        await this.page.locator(locator.nextmonth).click();
    }
    async particularpreviousdate() {
        let month = this.page.locator(locator.month);
        let year = this.page.locator(locator.year);
        console.log(month);
        console.log(year);
        let monthrequired = locator.prevmonth;
        let yearrequired = locator.prevyear;
        while (await year.textContent() != yearrequired) {
                await this.page.locator(locator.previousmonth).click();
                while (await month.textContent() != monthrequired) {
                    await this.page.locator(locator.previousmonth).click();
            }
        }

    }
    async particularnextdate() {
        let month = this.page.locator(locator.month);
        let year = this.page.locator(locator.year);
        console.log(month);
        console.log(year);
        let monthrequired = locator.nextmonths;
        let yearrequired = locator.nextyear;
        while (await year.textContent() != yearrequired) {
                await this.page.locator(locator.nextmonth).click();
                while (await month.textContent() != monthrequired) {
                    await this.page.locator(locator.nextmonth).click();
            }
        }

    }
}
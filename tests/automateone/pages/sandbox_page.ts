import { Page, expect } from '@playwright/test'
export default class sandbox_page {
    constructor(public page: Page) {

    }
    async gotourl(){
        await this.page.goto("locator.baseURL");
    }
    async clicksliders() {
        await this.page.locator("//a[text()='Sliders']")
            .click();
    }
    async sandboxtext() {
        const actualtext = this.page.locator("//h1[text()='Sandbox']");
        console.log(actualtext);
        const expectedtext = "Sandbox"
        console.log(expectedtext);
        await expect(actualtext).toHaveText(expectedtext);
    }
    async slidertext() {
        const actualtext = this.page.locator("//h1[text()='Slider']");
        console.log(actualtext);
        const expectedtext = "Slider"
        console.log(expectedtext);
        await expect(actualtext).toHaveText(expectedtext);
    }
    async slidermessage() {
        const actualpagtext = this.page.locator("//div[@class='wp-block-group is-layout-flow']");
        console.log(actualpagtext);
        const expectedpagetext = "This is a range slider. You can adjust it by using drag-and-drop operation or by clicking a given area of the slider. As you move the slider, the current value will be updated."
        console.log(expectedpagetext);
        await expect(actualpagtext).toHaveText(expectedpagetext);
    }
    async clickmodals() {
        await this.page.locator("//div/a[text()='Modals']")
            .click();
    }
    async modaltext() {
        const actualtext = this.page.locator("//h1[text()='Modals']");
        console.log(actualtext);
        const expectedtext = "Modals"
        console.log(expectedtext);
        await expect(actualtext).toHaveText(expectedtext);
    }
    async simplemodaltext() {
        const actualtext = this.page.locator("//p[text()='Click to see a simple modal.']");
        console.log(actualtext);
        const expectedtext = "Click to see a simple modal."
        console.log(expectedtext);
        await expect(actualtext).toHaveText(expectedtext);
    }
    async samplemodalbutton() {
        await this.page.locator("//div/button[@id='simpleModal']").click();
    }
    async simplepopupheader() {
        const actualpopupheader = this.page.locator("//div[@id='pum_popup_title_1318']");
        console.log(actualpopupheader);
        const expectedpopupheader = "Simple Modal"
        console.log(expectedpopupheader);
        await expect(actualpopupheader).toHaveText(expectedpopupheader);
    }
    async simplepopuptext() {
        const actualpopuptext = this.page.locator("//p[text()='Hi, I’m a simple modal.']");
        console.log(actualpopuptext);
        const expectedpopuptext = "Hi, I’m a simple modal."
        console.log(expectedpopuptext);
        await expect(actualpopuptext).toHaveText(expectedpopuptext);
    }
    async closepopup() {
        await this.page.locator("(//button[@class='pum-close popmake-close'])").click
    }
    async modalbutton() {
        await this.page.locator("//button[@id='formModal']").click();
    }
    async popupheader() {
        const actualpopupheader = this.page.locator("//div[@id='pum_popup_title_674']");
        console.log(actualpopupheader);
        const expectedpopupheader = "Modal Containing A Form"
        console.log(expectedpopupheader);
        await expect(actualpopupheader).toHaveText(expectedpopupheader);
    }
    async fillname(){
        await this.page.locator("//input[@id='g1051-name']").fill("Sri");
    }
    async fillemail(){
        await this.page.locator("//input[@id='g1051-email']").fill("sri@gmail.com");
    }
    async fillmessage(){
        await this.page.locator("//textarea[@id='contact-form-comment-g1051-message']").fill("Test the form");
    }
    async clicksubmit(){
        await this.page.locator("//button[@class='pushbutton-wide']").click();
    }
    async clickclose(){
        await this.page.locator("(//button[@class='pum-close popmake-close'])").click();
    }
}
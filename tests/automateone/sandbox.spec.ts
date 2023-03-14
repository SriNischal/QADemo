import {expect, test} from '@playwright/test'
import sandbox_page from './pages/sandbox_page';

test('Sandbox text validation', async({page})=>{
    const sandbox = new sandbox_page(page);
    await page.goto('sandbox-automation-testing-practice-website/');
    await sandbox.sandboxtext();
});

test('Click on Sliders', async({page})=>{
    const sandbox =new sandbox_page(page);
    await page.goto('sandbox-automation-testing-practice-website/');
    await sandbox.clicksliders();
    await sandbox.slidertext();
    await sandbox.slidermessage();
})

test('Click on Slider bar', async({page})=>{
    const sandbox = new sandbox_page(page);
    await page.goto('sandbox-automation-testing-practice-website/');
    sandbox.clicksliders();
    const value = page.locator("'25'");
    //const initialvalue = console.log(value);
    const slider = page.locator("//input[@id='slideMe']");
    console.log(slider);
    await expect(slider).toHaveValue("25");
    let slider1 = page.locator("//input[@id='slideMe']").last();
    console.log(slider1);
    //for(slider1 = slider; slider1<=100 ; slider1++){
    await slider.dragTo(slider1);
    await expect(slider1).toHaveValue("50");
    //}
});

test('Click on Modals', async({page})=>{
    const sandbox = new sandbox_page(page);
    await page.goto('sandbox-automation-testing-practice-website/');
    sandbox.clickmodals();
    sandbox.modaltext();
})

test.only('Click on Simple Modal button', async({page})=>{
    const sandbox = new sandbox_page(page);
    await page.goto('sandbox-automation-testing-practice-website/');
    sandbox.clickmodals();
    sandbox.simplemodaltext();
    sandbox.samplemodalbutton();
    sandbox.simplepopupheader();
    sandbox.simplepopuptext();
    sandbox.closepopup();

})

test('Click on Form Modal button', async({page})=>{
    const sandbox = new sandbox_page(page);
    await page.goto('sandbox-automation-testing-practice-website/');
    sandbox.clickmodals();
    sandbox.modaltext();
    sandbox.modalbutton();
    sandbox.popupheader();
    sandbox.fillname();
    sandbox.fillemail();
    sandbox.fillmessage();
    sandbox.fillmessage();
    sandbox.modaltext();

})

test('Click on Form Modal button without entering required fields', async({page})=>{
    const sandbox = new sandbox_page(page);
    await page.goto('sandbox-automation-testing-practice-website/');
    sandbox.clickmodals();
    sandbox.modaltext();
    sandbox.modalbutton();
    sandbox.popupheader();
    sandbox.clickclose();
    //await page.locator("//button[@class='pushbutton-wide']").click();
    

})
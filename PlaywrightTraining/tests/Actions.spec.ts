import {test,expect} from '@playwright/test'

/**
 * click
 *    button?: "left" | "right" | "middle" | undefined;: Which button do I need to use
    clickCount?: number | undefined; How many clicks you want to perform.
    delay?: number | undefined; by how ms or second you want to click on element.
    force?: boolean | undefined; : true then Auto checks disabled.
    modifiers?: ("Alt" | "Control" | "ControlOrMeta" | "Meta" | "Shift")[] | undefined;
    noWaitAfter?: boolean | undefined;
    position?: {
        x: number;
        y: number;
    } | undefined;
    timeout?: number | undefined;
    trial?: boolean | undefined;
 * fill and presssequentially
        fill() : Html which is of type input , textarea then we use fill(), just of copy paste, it clears the pre-existing text
        pressSequentially() : it works on any html elemen type, itt replicate human typing ,it will not clear the text , 
 * checkbox and radio    
 * frames
 * upload files
 * download files
 * javascript popups
 * hover
 * textcontext()
 * New Page
 * Basic Authenciation
 * Drag and Drop
 * select options
 */


test("click action example",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/");
    await page.locator("[href='/login']").click()

})

test("Fill and press sequentially action example",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/");
    await page.locator("[href='/login']").click()
    await page.locator("#username").fill('tomsmith');
    await page.locator('#password').fill('SuperSecretPassword!');
})


test('check and uncheck example',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/");
    await page.locator("[href='/checkboxes']").click()
    await page.locator("#checkboxes input").nth(0).check();
    await page.locator("#checkboxes input").nth(0).uncheck();
})

test('Select action',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/");
    await page.locator('[href="/dropdown"]').click()
    //select html element
    await page.locator('#dropdown').selectOption({value:'1'});
    await page.locator('#dropdown').selectOption({label:'Option 2'});
    await page.locator('#dropdown').selectOption({index:1});
})

test('single frames',async({page})=>{
     await page.goto("https://the-internet.herokuapp.com/");
    await page.locator('[href="/frames"]').click();
    await page.locator('[href="/iframe"]').click();
    const frameLocator = await page.frameLocator('#mce_0_ifr');
    await expect(frameLocator.locator("#tinymce")).toBeVisible();
})

test('nested frames',async({page})=>{
     await page.goto("https://the-internet.herokuapp.com/");
    await page.locator('[href="/frames"]').click();
    await page.locator('[href="/nested_frames"]').click();
    const topFrame = await page.frameLocator('[name="frame-top"]');
    const rightFrame = await topFrame.frameLocator('[name="frame-right"]');
    await expect(rightFrame.locator("//body[contains(text(),'RIGHT')]")).toBeVisible();
})

test.only("upload files",async({page})=>{
    //button which chooses the file is of input type
    await page.goto("https://the-internet.herokuapp.com/");
    await page.locator('[href="/upload"]').click();
    await page.locator("#file-upload").setInputFiles('C:/Users/adonge2d/source/repos/PlaywrightTrainingBatchJun25WE/PlaywrightTrainingBatchJun25WE/PlaywrightTraining/uploadFolder/CSS_Locators_Detailed.pdf');
})
    
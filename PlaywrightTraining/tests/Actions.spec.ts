import { test, expect, chromium } from "@playwright/test";
import { downloadFile, getBrowser, getNewWindowAfterClick, uploadFile } from "./../PageModel/ActionsMethods";
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

test("click action example", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator("[href='/login']").click();
});

test("Fill and press sequentially action example", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator("[href='/login']").click();
  await page.locator("#username").fill("tomsmith");
  await page.locator("#password").fill("SuperSecretPassword!");
});

test("check and uncheck example", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator("[href='/checkboxes']").click();
  await page.locator("#checkboxes input").nth(0).check();
  await page.locator("#checkboxes input").nth(0).uncheck();
});

test("Select action", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/dropdown"]').click();
  //select html element
  await page.locator("#dropdown").selectOption({ value: "1" });
  await page.locator("#dropdown").selectOption({ label: "Option 2" });
  await page.locator("#dropdown").selectOption({ index: 1 });
});

test("single frames", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/frames"]').click();
  await page.locator('[href="/iframe"]').click();
  const frameLocator = await page.frameLocator("#mce_0_ifr");
  await expect(frameLocator.locator("#tinymce")).toBeVisible();
});

test("nested frames", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/frames"]').click();
  await page.locator('[href="/nested_frames"]').click();
  const topFrame = await page.frameLocator('[name="frame-top"]');
  const rightFrame = await topFrame.frameLocator('[name="frame-right"]');
  await expect(
    rightFrame.locator("//body[contains(text(),'RIGHT')]")
  ).toBeVisible();
});

test("@smoke upload files", async ({ page }) => {
  //button which chooses the file is of input type
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/upload"]').click();
  await page
    .locator("#file-upload")
    .setInputFiles(
      "C:/Users/adonge2d/source/repos/PlaywrightTrainingBatchJun25WE/PlaywrightTrainingBatchJun25WE/PlaywrightTraining/uploadFolder/CSS_Locators_Detailed.pdf"
    );
});

test("upload files using File Chooser event", async ({ page }) => {
  //When ever the element that chooses the file in not an Input Type
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/upload"]').click();
  //await uploadFile(page,"#file-upload","./../PlaywrightTraining/uploadFolder/CSS_Locators_Detailed.pdf");
  const fileChooserEvent = page.waitForEvent("filechooser");
  await page.locator("#file-upload").click();
  const fileChooser = await fileChooserEvent;
  await fileChooser.setFiles(
    "./../PlaywrightTraining/uploadFolder/CSS_Locators_Detailed.pdf"
  );
});

test("@smoke Download file example", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/download"]').click();
  await downloadFile(page, '[href="download/1.jpg"]');
});

test("@regression Alert handling ", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/javascript_alerts"]').click();
  page.on("dialog", (dialog) => {
    console.log(dialog.message());
    dialog.accept();
  });
  await page.locator('[onclick="jsAlert()"]').click();
  await expect(page.locator("#result")).toHaveText(
    "You successfully clicked an alert"
  );
});

test("@smoke JS Confirm popup handling and click Ok ", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/javascript_alerts"]').click();
  page.on("dialog", async (dialog) => {
    console.log(dialog.message());
    await dialog.accept();
  });
  await page.locator('[onclick="jsConfirm()"]').click();
  await expect(page.locator("#result")).toHaveText("You clicked: Ok");
});

test("@smoke @regression JS Confirm popup handling and click Cancel ", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/javascript_alerts"]').click();
  page.on("dialog", async (dialog) => {
    console.log(dialog.message());
    await dialog.dismiss();
  });
  await page.locator('[onclick="jsConfirm()"]').click();
  await expect(page.locator("#result")).toHaveText("You clicked: Cancel");
});

test("JS Prompt popup handling and click Ok ",{
  tag:"@p1"
}, async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/javascript_alerts"]').click();
  page.on("dialog", async (dialog) => {
    console.log(dialog.message());
    await page.waitForTimeout(5000);
    await dialog.accept("This is a prompt");
  });
  await page.locator('[onclick="jsPrompt()"]').click();
  await expect(page.locator("#result")).toHaveText(
    "You entered: This is a prompt"
  );
});

test("Browser to Page Example",async()=>{
  const browser = await getBrowser('webkit');
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://the-internet.herokuapp.com/");
})

test("New Page example", async ({ page ,context}) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/windows"]').click();
  const newPage = await getNewWindowAfterClick(context, page,'[href="/windows/new"]');
  await expect(newPage[0].locator('.example h3')).toHaveText('New Window');
  await expect(page.locator(".example h3")).toHaveText("Opening a new window")
});

test("Basic Authentication",async({page})=>{
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/digest_auth"]').click();
  await expect(page.locator(".example p")).toContainText("Congratulations! You must have the proper credentials.");
})

test("Basic Authentication in Test",async({browser})=>{
  const context = await browser.newContext({httpCredentials:{username:'admin',password:'admin'}});
  const page = await context.newPage();
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/digest_auth"]').click();
  await expect(page.locator(".example p")).toContainText("Congratulations! You must have the proper credentials.");
})

// test("drag and drop example",async({page})=>{
//   await page.goto("https://the-internet.herokuapp.com/");
//   await page.locator('[href="/drag_and_drop"]').click();
//   await page.locator("#column-a").dragTo(page.locator("#column-b"));
// })

test("Hovers example",async({page})=>{
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/hovers"]').click();
  await page.locator('[src="/img/avatar-blank.jpg"]').nth(0).hover();
  
})

test('Text Content example ',async({page})=>{
  await page.goto("https://the-internet.herokuapp.com/");
  await page.waitForLoadState('load');
  await page.waitForLoadState('networkidle');
  console.log("wait for few seconds")
  await page.waitForTimeout(3000)
  console.log('Waiting completed......')
  const locator = page.locator('#content h2');
  await locator.waitFor({state:'visible'}); // waitFor is used on locator level.
  /**
   * Attached: Elements is present in DOM
   * detached: Elements is not in DOM
   * visible: Element visible on the html page.
   * hidden: Invisible on the Html page.
   */
  /*
  page level: waitforloadstate()
  1. domcontentLoaded: DOM is ready
  2. load : Resources and page element loaded on the page.
  3. networkidle: 
  */
  const text = await locator.textContent()
  console.log(text);
  expect(text).toBe('Available Examples');
})
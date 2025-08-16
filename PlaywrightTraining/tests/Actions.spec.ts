import { test, expect } from "@playwright/test";
import { downloadFile, uploadFile } from "./../PageModel/ActionsMethods";
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

test("upload files", async ({ page }) => {
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

test("Download file example", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/download"]').click();
  await downloadFile(page, '[href="download/1.jpg"]');
});

test("Alert handling ", async ({ page }) => {
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

test("JS Confirm popup handling and click Ok ", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/javascript_alerts"]').click();
  page.on("dialog", async (dialog) => {
    console.log(dialog.message());
    await dialog.accept();
  });
  await page.locator('[onclick="jsConfirm()"]').click();
  await expect(page.locator("#result")).toHaveText("You clicked: Ok");
});

test("JS Confirm popup handling and click Cancel ", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/javascript_alerts"]').click();
  page.on("dialog", async (dialog) => {
    console.log(dialog.message());
    await dialog.dismiss();
  });
  await page.locator('[onclick="jsConfirm()"]').click();
  await expect(page.locator("#result")).toHaveText("You clicked: Cancel");
});

test("JS Prompt popup handling and click Ok ", async ({ page }) => {
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

test.only("New Page example", async ({ page ,context}) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/windows"]').click();
  const newPageEvent = context.waitForEvent('page');
  await page.locator('[href="/windows/new"]').click();
  const newPage = await newPageEvent;
  await expect(newPage.locator('.example h3')).toHaveText('New Window');
});

import test, { expect } from "@playwright/test";
import { printOut } from "../PageModel/ActionsMethods";
/**
 * test.describe()// Grouping of test
 * test.beforeAll()
 * test.beforeEach()
 * test.AfterEach();
 * test.AfterAll();
 * test.step()
 *
 * only(), skip(), slow()
 * tags
 */

test.describe("this is a group of test", async () => {
  test.beforeAll("Before All Method", async () => {
    printOut("This is Before All Method");
  });

  test.beforeEach("This is a before each method", async ({ page }) => {
    await test.step("Navigating to the Heroku App", async () => {
      //await page.goto('/login');
    });
  });

  test.afterEach("This is After Each Method", async () => {
    console.log("This is a After Each Method");
  });
  test.afterAll("After All Method", async () => {
    console.log("this is After All method");
  });
  test("single frames", async ({ page }) => {
    await page.locator('[href="/frames"]').click();
    await page.locator('[href="/iframe"]').click();
    const frameLocator = await page.frameLocator("#mce_0_ifr");
    await expect(frameLocator.locator("#tinymce")).toBeVisible();
  });

  test("nested frames", async ({ page }) => {
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

  test("validation of login with test.step", async ({ page }) => {
    await test.step("Click on Login link", async () => {
      await page.goto("/login");
      //await page.locator('[href="/login"]').click();
    });

    await test.step("Enter Username and Password", async () => {
      await page.locator("#username").fill("tomsmith");
      await page.locator("#password").fill("SuperSecretPassword!");
    });

    await test.step("Click on Login Button", async () => {
      await page.locator(".radius").click();
    });

    await test.step("Validate login is successfull", async () => {
      await expect(page.locator(".subheader")).toContainText(
        "Welcome to the Secure Area."
      );
    });
  });

  test("validation of login", async ({ page }) => {
    await page.locator('[href="/login"]').click();
    await page.locator("#username").fill("tomsmith");
    await page.locator("#password").fill("SuperSecretPassword!");
    await page.locator(".radius").click();
    await expect(page.locator(".subheader")).toContainText(
      "Welcome to the Secure Area."
    );
  });
});

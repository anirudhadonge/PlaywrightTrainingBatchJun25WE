import test, { expect } from "@playwright/test";

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
  const text = await locator.textContent();
  console.log(text);
  //expect(text).toBe('Available Examples'); //General Assertions Assert.equals(value1,value2)
  //expect(text == 'Available Examples').toBeTruthy();

})

test("check and uncheck example", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator("[href='/checkboxes']").click();
  const locator = page.locator("#checkboxes input").nth(0);
  await expect(locator).not.toBeChecked() //General Assertion 
  await page.locator("#checkboxes input").nth(0).check();
  await expect(locator).toBeChecked(); // Locator Assertions , AutoRetrying Assertions
  await page.locator("#checkboxes input").nth(0).uncheck();
});

test("validation of login", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/login");
  await page.locator("#username").fill("tomsmith");
  await page.locator("#password").fill("SuperSecretPassword!");
  await page.locator('.radius').click();
  await expect(page.locator('.subheader')).toContainText('Welcome to the Secure Area.');
});
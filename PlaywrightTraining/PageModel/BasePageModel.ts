import { expect, Locator, Page } from "@playwright/test";
import IBasePage from "../PageInterface/IBasePage";

export abstract class BasePageModel implements IBasePage {
  page: Page;

  homePageLink: string = '.shop-menu.pull-right [href="/"]';
  productLink: string = '.shop-menu.pull-right [href="/products"]';
  cartLink: string = '.shop-menu.pull-right [href="/view_cart"]';
  loginLink: string = '.shop-menu.pull-right [href="/login"]';

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url:string):Promise<void>{
    console.log("Navigating to url "+ url);
    await this.page.goto(url);
  }

  async presseSequentially(locator: Locator, text: string): Promise<void> {
    console.log("Enter the text "+text);
    await locator.pressSequentially(text);
  }

  async uploadFile(locator: string, filePath: string): Promise<void> {
    const fileChooserEvent = this.page.waitForEvent("filechooser");
    await this.page.locator(locator).click();
    const fileChooser = await fileChooserEvent;
    await fileChooser.setFiles(filePath);
  }

  async click(locator: Locator): Promise<void> {
    console.log("Click on element " + locator);
    await locator.click();
  }

  async getLocator(locator: string): Promise<Locator> {
    return this.page.locator(locator);
  }

  async fill(locator: Locator, inputString: string): Promise<void> {
    console.log(`Fill the ${inputString} in the input field`);
    await locator.fill(inputString);
  }
  async downloadFile(locator: string): Promise<string> {
    const downloadEvent = this.page.waitForEvent("download");
    await this.page.locator(locator).click();
    const download = await downloadEvent;
    await download.saveAs("./Files/" + download.suggestedFilename());
    return download.suggestedFilename();
  }

  async handleAlert(locator: string) {
    this.page.on("dialog", async (dialog) => {
      await this.page.waitForTimeout(3000);
      console.log(dialog.message());
      dialog.accept();
    });
    await this.page.locator(locator).click();
  }

  async dismissConfirmPopup(locator: string) {
    this.page.on("dialog", async (dialog) => {
      await this.page.waitForTimeout(3000);
      console.log(dialog.message());
      dialog.dismiss();
    });
    await this.page.locator(locator).click();
  }

  async ValidateElementIsVisible(locator: Locator) {
    console.log(`Validate the element ${locator} is visible`);
    await expect(locator).toBeVisible();
  }

  async clickOnHome() {
    await this.click(await this.getLocator(this.homePageLink));
  }

  async clickOnProduct() {
    await this.click(await this.getLocator(this.productLink));
  }

  async clickOnCart() {
    await this.click(await this.getLocator(this.cartLink));
  }

  async clickOnLoginlink(){
    await this.click(await this.getLocator(this.loginLink));
  }
}

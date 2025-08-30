import { Locator, Page } from "@playwright/test";

export default interface IBasePage {
  goto(url:string):Promise<void>
  click(locator:Locator): Promise<void>;
  getLocator(locator: string): Promise<Locator>;
  presseSequentially(locator: Locator, text: string): Promise<void>;
  fill(locator: Locator, text: string): Promise<void>;
  uploadFile(locator:string, filePath:string):Promise<void>
  downloadFile(locator:string):Promise<string>
}

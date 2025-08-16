import { Page } from "@playwright/test";


export async function uploadFile(page:Page , locator:string, filePath:string){{
    const fileChooserEvent = page.waitForEvent('filechooser');
    await page.locator(locator).click();
    const fileChooser = await fileChooserEvent;
    await fileChooser.setFiles(filePath);
}}

export async function downloadFile(page:Page, locator:string){
    const downloadFile = page.waitForEvent('download');
    await page.locator(locator).click();
    const download = await downloadFile;
    await download.saveAs('./Download/'+download.suggestedFilename());
}
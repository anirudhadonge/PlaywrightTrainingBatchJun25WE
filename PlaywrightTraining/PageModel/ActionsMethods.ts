import { Browser, BrowserContext, chromium, firefox, Page, webkit } from "@playwright/test";


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


export async function getBrowser(browseName:string):Promise<Browser>{
    switch(browseName.toLowerCase()){
        case "chromium":
            return await chromium.launch({headless:false});
        case 'firefox':
            return await firefox.launch({headless:false});
        case 'webkit':
            return await webkit.launch({headless:false});
        default:
            return await chromium.launch({headless:false})
    }
}

export async function getNewWindowAfterClick(context: BrowserContext, page:Page,locator:string){
  return await Promise.all([
    context.waitForEvent('page'),
    page.locator(locator).click()
]);
}
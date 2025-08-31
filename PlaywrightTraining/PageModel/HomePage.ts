import { Page } from "@playwright/test";
import { BasePageModel } from "./BasePageModel";


export class HomePage extends BasePageModel{
    
    brandName:string= ".brands-name";

    brandNameList:string =".brands-name ul li"

    constructor(page:Page){
        super(page);
    }

    async NavigatedToHomePage(){
        await this.ValidateElementIsVisible(await this.getLocator(this.brandName));
    }

    async selectBrandName(brandName:string){
        await this.click(await this.getLocator(`//div[@class='brands-name']//a[text()='${brandName}']`))
    }

    async getBrandCound(brandName:string){
        let count = await this.textContent(await this.getLocator(`//div[@class='brands-name']//a[text()='${brandName}']`))
        return count;
    }
}
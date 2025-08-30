import { Page } from "@playwright/test";
import { BasePageModel } from "./BasePageModel";


export class HomePage extends BasePageModel{
    
    brandName:string= ".brands-name";

    constructor(page:Page){
        super(page);
    }

    async NavigatedToHomePage(){
        await this.ValidateElementIsVisible(await this.getLocator(this.brandName));
    }
}
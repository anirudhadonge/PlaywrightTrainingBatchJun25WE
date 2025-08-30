import { Page } from "@playwright/test";
import { BasePageModel } from "./BasePageModel";


export class LoginPage extends BasePageModel{
    
    userNameInput:string = '[data-qa="login-email"]';
    passwordInput:string = '[data-qa="login-password"]';
    signInBtn:string = '[data-qa="login-button"]';

    constructor(page:Page){
        super(page);
    }


    async enterUserName(userName:string){
        await this.fill(await this.getLocator(this.userNameInput),userName);
    }

    async enterPassword(password:string){
        await this.fill(await this.getLocator(this.passwordInput),password);
    }

    async clickSignIn(){
        await this.click(await this.getLocator(this.signInBtn));
    }

    async loginToApplication(userName:string,password:string){
        await this.enterUserName(userName);
        await this.enterPassword(password);
        await this.clickSignIn();
    }
}
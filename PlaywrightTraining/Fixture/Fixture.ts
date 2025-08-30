import {test} from '@playwright/test'
import { LoginPage } from '../PageModel/LoginPage'
import { HomePage } from '../PageModel/HomePage'




export const superTest = test.extend<{homePage:HomePage,loginPage:LoginPage}>({
    homePage: async({page},use)=>{
        const home = new HomePage(page);
        await home.goto("https://www.automationexercise.com/");
        use(home)
    },
    loginPage : async({page},use)=>{
        const login = new LoginPage(page);
        use(login);
    }
})
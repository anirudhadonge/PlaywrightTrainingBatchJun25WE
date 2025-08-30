import test from "@playwright/test";
import { HomePage } from "../PageModel/HomePage";
import { LoginPage } from "../PageModel/LoginPage";
import { superTest } from "../Fixture/Fixture";

let homePage:HomePage;
let loginPage:LoginPage;
test("@smoke Validate successfull login to application",async({page})=>{
   homePage = new HomePage(page);
   await homePage.goto("https://www.automationexercise.com/");
   await homePage.clickOnLoginlink();
   loginPage = new LoginPage(page);
   await loginPage.loginToApplication('anirudha.donge@gmail.com','password25');
   await homePage.NavigatedToHomePage();
})

superTest("@smoke Validate successfull login to application with fixture",async({homePage,loginPage})=>{
   await homePage.clickOnLoginlink();
   await loginPage.loginToApplication('anirudha.donge@gmail.com','password25');
   await homePage.NavigatedToHomePage();
})
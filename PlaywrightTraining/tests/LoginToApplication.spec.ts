import test, { expect } from "@playwright/test";
import { HomePage } from "../PageModel/HomePage";
import { LoginPage } from "../PageModel/LoginPage";
import { superTest } from "../Fixture/Fixture";
import brandCount from "../TestData/BrandCount.json"

let homePage:HomePage;
let loginPage:LoginPage;
test("@smoke Validate successfull login to application",async({page})=>{
   homePage = new HomePage(page);
   await homePage.goto(process.env.url);
   await homePage.clickOnLoginlink();
   loginPage = new LoginPage(page);
   await loginPage.loginToApplication(process.env.AppUserName,process.env.AppPassword);
   await homePage.NavigatedToHomePage();
})

superTest("@smoke Validate successfull login to application with fixture",async({homePage,loginPage})=>{
   await homePage.clickOnLoginlink();
   await loginPage.loginToApplication(process.env.AppUserName,process.env.AppPassword);
   await homePage.NavigatedToHomePage();
})

superTest("@smoke, @p2 validate the brand count",async({homePage,loginPage})=>{
   const testData = brandCount[process.env.Environment]
   console.log(testData);
   await homePage.clickOnLoginlink();
   await loginPage.loginToApplication(process.env.AppUserName,process.env.AppPassword);
   await homePage.NavigatedToHomePage();
   const count = await homePage.getBrandCound(brandCount[process.env.Environment]["BrandName"])
   await homePage.selectBrandName(brandCount[process.env.Environment]["BrandName"]);
   //expect(count).toBe(brandCount["Count"])
})
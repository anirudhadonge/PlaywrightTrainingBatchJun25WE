import { Given, setDefaultTimeout, Then } from "@cucumber/cucumber";
import { chromium, Page } from "playwright";
import { expect } from "playwright/test";
import { CusomtWorld } from "../../../World/CustomWorld";
import { StaticObject } from "../../../lib/staticObjec";

setDefaultTimeout(60000);
let page:Page
Given("I navigate to the url", async function (this:CusomtWorld) {
    page = StaticObject.page;//this.getData('page');
    await page.goto("https://www.automationexercise.com/");
});



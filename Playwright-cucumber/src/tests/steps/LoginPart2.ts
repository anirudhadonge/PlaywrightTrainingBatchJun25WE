/**
 * world object in cucumber
 */
import { Then } from "@cucumber/cucumber";
import { Page } from "playwright";
import { expect } from "playwright/test";
import { CusomtWorld } from "../../../World/CustomWorld";
let page:Page;

Then("I click on Login Link", async function (this:CusomtWorld) {
    let page = this.getData('page');
    await page.locator('[href="/login"]').click();
});

Then("I enter {string} and {string}", async function (userName:string, password:string) {
    let page = this.getData('page');
    await page.locator('[data-qa="login-email"]').fill(userName);
    await page.locator('[data-qa="login-password"]').fill(password);
    await page.locator('[data-qa="login-button"]').click();
});

Then("Login is sucessfull", async function () {
    let page = this.getData('page');
    await expect(page.locator('[href="/logout"]')).toBeVisible();
});
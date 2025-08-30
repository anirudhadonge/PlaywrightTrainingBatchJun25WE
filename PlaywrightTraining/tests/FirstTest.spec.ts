// Test file should have extension ".spec.ts"(Typescript project) or ".spec.js"(javascript project)
import {test, expect} from "@playwright/test"

test("this is a demo test",async({page})=>{
      await page.goto('https://playwright.dev/');
      await page.getByRole('link', { name: 'Get started' }).click();
      await expect(page.locator(".theme-doc-markdown.markdown h1")).toHaveText("Installation");
})

// test("this is a demo test",async({page})=>{
//      await page.goto('https://playwright.dev/');
//      await page.getByRole('link', { name: 'Get started' }).click();
//      await expect(page.locator(".theme-doc-markdown.markdown h1")).toHaveText("Installation");
// })
import {test, expect} from '@playwright/test'

/**
 * 			Locate by role
			Locate by label
			Locate by placeholder : element with attribute named 'placeholder'
			Locate by text
			Locate by alt text
			Locate by title: title attribute in html elment
			Locate by test id
            Locate by CSS or XPath
 */


test('GetByRole example',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/");
    await page.getByRole('link',{name: 'Checkboxes'}).click();
    await page.getByRole('checkbox').nth(0).check();
})

test('getBylabel example',async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/");
    await page.getByRole('link',{name: 'Form Authentication'}).click();
    await page.getByLabel('Username').fill("tomsmith");
})


test('GetByPlaceholder example',async({page})=>{
    await page.goto("https://selectorshub.com/xpath-practice-page/");
    await page.getByPlaceholder("Enter your company").fill("xyz");
})

test('GetByText example', async({page})=>{
        await page.goto("https://the-internet.herokuapp.com/");
    await page.getByText('Form Authentication').click();
})

test('GetByTitle example',async({page})=>{
    await page.goto("https://selectorshub.com/xpath-practice-page/");
    await page.getByTitle("Email").pressSequentially("xyz@xyz.com");
})

test('Locator example',async({page})=>{
    //locator method need either a xpath or css locator
    await page.goto("https://the-internet.herokuapp.com/");
    await page.locator("[href='/login']").click();
})

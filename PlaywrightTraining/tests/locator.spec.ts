import {test, expect} from '@playwright/test'

/**
 * 			Locate by role
			Locate by label
			Locate by placeholder
			Locate by text
			Locate by alt text
			Locate by title
			Locate by test id
            Locate by CSS or XPath
 */


test('GetByRole example',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/");
    await page.getByRole('link',{name: 'Checkboxes'}).click();
    await page.getByRole('checkbox').nth(0).check();
})

test.only('getBylabel example',async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/");
    await page.getByRole('link',{name: 'Form Authentication'}).click();
    await page.getByLabel('Username').fill("tomsmith");
})


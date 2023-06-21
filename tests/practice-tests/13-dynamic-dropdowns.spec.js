const {test, expect} = require('@playwright/test')

test('Dynamic Dropdown', async({page})=>{

    await page.goto('https://selectorshub.com/xpath-practice-page/')

    await page.locator('text=Checkout here').hover() // 1. either click() or hover()
    await page.waitForTimeout(2000)
    await page.locator('//div[@class="dropdown-content"]/a[2]').click()
    await page.waitForTimeout(5000)

})

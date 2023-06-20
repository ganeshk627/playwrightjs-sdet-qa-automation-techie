const {test, expect} = require('@playwright/test')

test('Input Box', async({page})=>{


    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.waitForTimeout(5000) //pausing the code for 5 Seconds

    await expect(page.locator('//input[@placeholder="Username"]')).toBeVisible()
    await expect(page.locator('//input[@placeholder="Username"]')).toBeEmpty()
    await expect(page.locator('//input[@placeholder="Username"]')).toBeEditable()
    await expect(page.locator('//input[@placeholder="Username"]')).toBeAttached()
    await expect(page.locator('//input[@placeholder="Username"]')).toBeEnabled()


    await page.fill('//input[@placeholder="Username"]', 'Admin')
    await page.locator('input[placeholder="Password"]').fill('admin123')

    await expect(page.locator('//input[@placeholder="Username"]')).not.toBeEmpty()
    await expect(page.locator('//input[@placeholder="Username"]')).toHaveValue('Admin')

    await expect(page.locator('//input[@placeholder="Password"]')).not.toBeEmpty()
    await expect(page.locator('//input[@placeholder="Password"]')).toHaveValue('admin123')



})
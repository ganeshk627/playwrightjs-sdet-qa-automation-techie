const {test, expect} = require('@playwright/test')

test('Soft assertions', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await expect.soft(page).toHaveURL('https://opensource-demo.orangehrmlive.com/')

    await expect.soft(page).toHaveTitle('OrangeHRM')

    await expect.soft(page.locator('img[alt="company-branding"]')).toBeVisible()

    await expect.soft(page.locator('h5:has-text("Login")')).toHaveText('Login')

    await expect.soft(page.locator('button[type="submit"]')).toContainText('Login')


    await page.fill('//input[@placeholder="Username"]', 'Admin')
    await expect.soft(page.locator('//input[@placeholder="Username"]')).toHaveValue('admin')

    await expect.soft(page.locator('//input[@placeholder="Username"]')).toHaveAttribute('placeholder', 'Username')

    await expect.soft(page.locator("input")).toHaveCount(3)

})
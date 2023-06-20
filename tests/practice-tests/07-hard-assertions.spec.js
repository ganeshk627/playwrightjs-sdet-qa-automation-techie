const {test, expect} = require('@playwright/test')

test('Hard assertions', async({page})=>{
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await expect(page).toHaveTitle('OrangeHRM')

    await expect(page.locator('img[alt="company-branding"]')).toBeVisible()

    await expect(page.locator('h5:has-text("Login")')).toHaveText('Login')

    await expect(page.locator('button[type="submit"]')).toContainText('Login')


    await page.fill('//input[@placeholder="Username"]', 'Admin')
    await expect(page.locator('//input[@placeholder="Username"]')).toHaveValue('Admin')

    await expect(page.locator('//input[@placeholder="Username"]')).toHaveAttribute('placeholder', 'Username')

    await expect(page.locator("input")).toHaveCount(3)

    await expect(true).toBeTruthy()
    await expect(false).toBeFalsy()

}) 
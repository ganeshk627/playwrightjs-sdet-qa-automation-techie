// const {test, expect} = require('@playwright/test')
import {test, expect} from '@playwright/test'

test('Locators - direct methods', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // css selector
    await page.fill('input[placeholder="Username"]', 'Admin')
    // xpath
    await page.fill('//input[@placeholder="Password"]', 'admin123')
    // playwright selector
    await page.click('button:has-text("Login")')
})

test('Locators - using locator', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // xpath
    await page.locator('//input[@placeholder="Username"]').fill('Admin')
    // css selector
    await page.locator('input[placeholder="Password"]').fill('admin123')
    // playwright selector
    await page.locator('button:has-text("Login")').click()
    
})

test('Locators - Multiple elements', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('//input[@placeholder="Username"]').fill('Admin')
    await page.locator('input[placeholder="Password"]').fill('admin123')
    await page.locator('button:has-text("Login")').click()
    
    // Waiting for selector visible
    await page.waitForSelector('//aside[@class="oxd-sidepanel"]//li')
    // Multiple selectors
    const sections = await page.$$('//aside[@class="oxd-sidepanel"]//li')
    // console.log(sections)
    console.log(typeof sections)
    console.log(sections.length)
    for(const section of sections) {
        const text = await section.textContent();
        console.log(text);
    }
})



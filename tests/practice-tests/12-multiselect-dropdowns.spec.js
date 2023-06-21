const {test, expect} = require('@playwright/test')

test('Multi-select Dropdown', async({page})=>{

    await page.goto('https://selectorshub.com/xpath-practice-page/')

    // Converting single-select dropdown to multi-select
    await page.evaluate('document.querySelector("#cars").setAttribute("multiple", null)')
    await page.waitForTimeout(2000)

    await page.locator('select[name="cars"]').selectOption(['Saab', 'Opel', 'Audi'])
    await page.waitForTimeout(2000)
    await page.selectOption('select[name="cars"]', ['Volvo', 'Audi', 'Opel'])
    await page.waitForTimeout(2000)

    await page.waitForTimeout(5000)


})

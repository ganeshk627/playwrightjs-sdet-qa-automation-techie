const {test, expect} = require('@playwright/test')

test('Simple Dropdown', async({page})=>{
    await page.goto('https://selectorshub.com/xpath-practice-page/')

    // Select by label text
    await page.locator('select[name="cars"]').selectOption({label:'Audi'})
    await page.waitForTimeout(2000)
    await page.selectOption('select[name="cars"]', {label:'Saab'})
    await page.waitForTimeout(2000)

    // Select by visible text
    await page.locator('select[name="cars"]').selectOption('Volvo')
    await page.waitForTimeout(2000)
    await page.selectOption('select[name="cars"]', 'Audi')
    await page.waitForTimeout(2000)

    // Select by value
    await page.locator('select[name="cars"]').selectOption({value:'opel'})
    await page.waitForTimeout(2000)
    await page.locator('select[name="cars"]').selectOption('saab')
    await page.waitForTimeout(2000)
    await page.selectOption('select[name="cars"]', {value:'audi'})
    await page.waitForTimeout(2000)


    // Select by index
    await page.locator('select[name="cars"]').selectOption({index: 0})
    await page.waitForTimeout(2000)
    await page.selectOption('select[name="cars"]', {index:3})
    await page.waitForTimeout(2000)

    // Verify options count
    const cars1 = await page.locator('select[name="cars"] option') // way 1
    await expect(cars1).toHaveCount(4)

    const cars2 = await page.$$('select[name="cars"] option') // way 2
    await expect(cars2.length).toEqual(4)

    // Verify the presence of value in dropdown 
    const cars_text = await page.locator('select[name="cars"]').textContent() // way 1
    await expect(cars_text.includes('Volvo')).toBeTruthy()

    const cars_options = await page.$$('select[name="cars"] option') // way 2
    let status = false
    for(const car_option of cars_options) {
        let car_option_text = await car_option.textContent()
        if(car_option_text.includes('Audi')) {
            status = true;
            break;
        }
    }
    await expect(status).toBeTruthy()

    
    await page.waitForTimeout(5000)


})
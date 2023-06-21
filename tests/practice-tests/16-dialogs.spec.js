const {test, expect} = require('@playwright/test')

test('Simple Alert', async({page})=>{

    await page.goto('https://selectorshub.com/xpath-practice-page/')
    
    await page.on('dialog', dialog=> console.log(dialog.message()))

    await page.on('dialog', dialog=> dialog.accept())
    await page.evaluate('alert("Hello Harry!")')

    await page.waitForTimeout(5000)
})

test('Confirm Alert', async({page})=>{

    await page.goto('https://selectorshub.com/xpath-practice-page/')

    await page.on('dialog', dialog=> console.log(dialog.message()))

    await page.on('dialog', dialog=> dialog.accept())
    let bool = await page.evaluate('confirm("Are u Harry?")')
    console.log(bool)
    await expect(bool).toBeTruthy()

    // await page.on('dialog', dialog=> dialog.dismiss())
    // let bool = await page.evaluate('confirm("Are u not Harry?")')
    // console.log(bool)
    // await expect(bool).toBeFalsy()

    await page.waitForTimeout(5000)
})

test('Prompt Alert', async({page})=>{

    await page.goto('https://selectorshub.com/xpath-practice-page/')

    await page.on('dialog', dialog=> console.log(dialog.message()))

    await page.on('dialog', dialog=> dialog.accept('Tom Riddle!'))
    let name = await page.evaluate('prompt("I am harry. Who are u?")')
    console.log('My name is ' + name)
    await expect(name).toEqual('Tom Riddle!')

    await page.waitForTimeout(5000)
})
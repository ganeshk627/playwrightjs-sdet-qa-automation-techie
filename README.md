# playwrightjs-sdet-qa-automation-techie

# 00. Installation
## 1. Install nodejs
https://nodejs.org/en/download

## 2. Install Vscode
https://code.visualstudio.com/download

## 3. Install "Playwright Test for VS Code" extension in VS Code
https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright

## 4. Creating Playwright project

    npm init playwright@latest

## 5. Installing browsers

    npx playwright install

# 01. Creating Tests
naming convention: mytest.spec.js

# 02. Runing the Tests
## Running all the tests in headless mode with all configured  browsers
    npx playwright test

## Running all the tests in headed mode with configured all browsers
    npx playwright test --headed

## Running all the tests only in mytest.spec.js with configured all browsers in headed mode
    npx playwright test mytest.spec.js --headed

## Running all the tests only in mytest.spec.js with specified browser in headed mode
    npx playwright test mytest.spec.js --project=chromium --headed

## Running all the tests only in mytest.spec.js with specified browser in headed mode and debug mode
    npx playwright test mytest.spec.js --project=chromium --headed --debug

# 03. Viewing Playwright Report
    npx playwright show-report

# 04. Locators
1. Xpath
2. Css selector
3. Class
4. 

# 05. Playwright locators
https://playwright.dev/docs/locators

# 06. Code Generator
## Code Generator help

    npx playwright codegen --help

## To open codegen window along with default browser (chromium)

    npx playwright codegen

## To save recorded script into file in default language (javascript)

    npx playwright codegen -o tests/practice-tests/06-recorded-script.spec.js

## To save recorded script into file in python-pytest

    npx playwright codegen --target python-pytest -o tests/practice-tests/06-recorded-script.py

## To open chrome browser

    npx playwright codegen --browser chromium --channel chrome

## To open chrome browser in light mode

    npx playwright codegen --browser chromium --channel chrome --color-scheme light

## To get emulation device list

    npx playwright codegen --device --help

## To open in iPhone 13 device emulation

    npx playwright codegen --device "iPhone 13"

## To Run recorded scripts

    npx playwright test tests/practice-tests/06-recorded-script.spec.js


# 07. Hard Assertions
https://playwright.dev/docs/test-assertions

## 1. Locator Assertions

    await expect('locator').toBeVisible()

    await expect('locator').not.toBeVisible()

## 2. Page Assertions

    await expect(page).toHaveURL()

    await expect(page).not.toHaveURL()

## 3. Object Assertions

    await expect(value1).toEqual(value2)

    await expect(value1).not.toEqual(value2)

## 4. Boolean Assertions

    await expect(boolean).toBeTruthy()

    await expect(boolean).toBeFalsy()

# 08. Soft Assertions

https://playwright.dev/docs/test-assertions#soft-assertions

By default, failed assertion will terminate test execution.
Playwright also supports soft assertions:failed soft assertions do not terminate test execution,
but mark the test as failed.

    await expect.soft('locator').toBeVisible()

    await expect.soft(page).toHaveURL()

    await expect.soft(value1).toEqual(value2)

# 09. Input Boxes
    await expect(page.locator('locator')).toBeEmpty()

    await page.fill('locator', 'value')

    await page.locator('locator').fill('value')

    await expect(page.locator('locator')).not.toBeEmpty()

    await expect(page.locator('locator')).toHaveValue('value')

# 10. Radio Buttons and Checkboxes
    await page.locator('locator1').check()

    await page.locator('locator2').uncheck()

    await expect(page.locator('locator1')).toBeChecked()

    await expect(page.locator('locator2')).not.toBeChecked()

    await expect(page.locator('locator1').isChecked()).toBeTruthy()

    await expect(page.locator('locator2').isChecked()).toBeFalsy()

# 11. Simple Dropdowns
    // Select by label text
    await page.locator('select[name="cars"]').selectOption({label:'Audi'})
    await page.selectOption('select[name="cars"]', {label:'Saab'})


    // Select by visible text
    await page.locator('select[name="cars"]').selectOption('Volvo')
    await page.selectOption('select[name="cars"]', 'Audi')


    // Select by value
    await page.locator('select[name="cars"]').selectOption({value:'opel'})
    await page.locator('select[name="cars"]').selectOption('saab')
    await page.selectOption('select[name="cars"]', {value:'audi'})

    // Select by index
    await page.locator('select[name="cars"]').selectOption({index: 0})
    await page.selectOption('select[name="cars"]', {index:3})

# 12. Multi-select Dropdowns
    await page.locator('select[name="cars"]').selectOption(['Saab', 'Opel', 'Audi'])
    await page.selectOption('select[name="cars"]', ['Volvo', 'Audi', 'Opel'])

# 13. Bootstrap/React/Dynamic Dropdowns
    await page.click('dropdown-loactor')
    await page.click('option-locator')

# 14. Auto Suggest/ Auto Complete Dropdowns
    await page.fill('input-loactor', 'input-value')
    await page.click('search-option-locator')

# 15. Hidden Item Dropdown
    await page.click('dropdown-loactor')
    await page.click('option-locator')

# 16. Dialogs
    await page.on('dialog', dialog=> dialog.accept())
    await page.on('dialog', dialog=> dialog.accept('text to prompt'))
    await page.on('dialog', dialog=> console.log(dialog.message()))
    await page.on('dialog', dialog=> dialog.dismiss())


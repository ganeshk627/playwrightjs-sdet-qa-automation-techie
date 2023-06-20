# playwrightjs-sdet-qa-automation-techie

# 00. Installation
1. Install nodejs
2. Install Vscode
3. Install "Playwright Test for VS Code" extension in VS Code
4. Creating Playwright project
> npm init playwright@latest
5. Installing browsers
> npx playwright install

# 01. Creating Tests
naming convention: mytest.spec.js

# 02. Runing the Tests
Running all the tests in headless mode with all configured  browsers
> npx playwright test
Running all the tests in headed mode with configured all browsers
> npx playwright test --headed
Running all the tests only in mytest.spec.js with configured all browsers in headed mode
> npx playwright test mytest.spec.js --headed
Running all the tests only in mytest.spec.js with specified browser in headed mode
> npx playwright test mytest.spec.js --project=chromium --headed
Running all the tests only in mytest.spec.js with specified browser in headed mode and debug mode
> npx playwright test mytest.spec.js --project=chromium --headed --debug

# 03. Viewing Playwright Report
> npx playwright show-report

# 06. Code Generator
> npx playwright codegen --help
> npx playwright codegen   #(copy the generated code and paste in test)
> npx playwright codegen -o tests/practice-tests/06-recorded-script.spec.js
> npx playwright test tests/practice-tests/06-recorded-script.spec.js

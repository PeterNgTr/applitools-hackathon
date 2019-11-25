# Introduction

[![Greenkeeper badge](https://badges.greenkeeper.io/PeterNgTr/applitools-hackathon.svg?token=e5231e0159e1707c69e239eb7f04d0f4008cc22eca858befba9a1f1de95cc5e3&ts=1574681984115)](https://greenkeeper.io/)

This repo aims to show you how to automate tests in traditional way and in Applitools way. 

The traditional way is going with approach using `CodeceptJS` and `WebDriver` helper. In other words, the tests will be executing using `webdriverio@5`.

# Installation

- You will need Node.JS +12 to run the tests.
- Install needed packages
```sh
npm i 
```
- There is test needed to extract text from the image and make the assertions. So I decided to use [!Tesseract OCR](https://github.com/tesseract-ocr/tesseract) to finish that task. There is a hard dependency on the Tesseract project. You can find installation instructions for various platforms on the project site. For Homebrew users, the installation is quick and easy.

```sh
brew install tesseract --with-all-languages
```

- Also, codeceptjs-applitoolshelper is a [CodeceptJS](https://codecept.io/) helper which can publish tests results on [Applitools](https://applitools.com) after the tests execution is used for this task.

NPM package: https://www.npmjs.com/package/codeceptjs-applitoolshelper 
  
# Running tests

Before running tests, we need to set those 2 variable envs:

```sh
export APPLITOOLS_API='YOUR_APPLITOOLS_KEY'
export TARGET_URL='your_app_url'
```

## Traditional Tests

- To run all tests
```sh
npx codeceptjs run
```

- To run a specific test with tag
```sh
npx codeceptjs run --grep @test1
```

## VisualAI Tests

- To run a test
```sh
npx codeceptjs run --grep @visualTestLoginPage
```

More tags could be found inside each test scenario. 
For instance, you have 
```js
Scenario('Login Page UI Elements Test @visualTestLoginPage', async () => {
    await I.eyeCheck('Login Page');
});
```

Then the tag would be: `@visualTestLoginPage`

For a failed case, you can see something like this:

```sh
Thanhs-MacBook-Pro:applitools-hackathon thanhnguyen$ npx codeceptjs run --grep @visualTestCanvasChart2
CodeceptJS v2.3.5
Using test root "/Users/thanhnguyen/Desktop/applitools-hackathon"

VisualAITests - Canvas Chart --
  ✖ Canvas Chart - Show data next year @visualTestCanvasChart2 in 29819ms

-- FAILURES:

  1) VisualAITests - Canvas Chart
       Canvas Chart - Show data next year @visualTestCanvasChart2:
     Test 'Canvas Chart - Show data next year' of 'Application Under Test' detected differences!. See details at: https://eyes.applitools.com/app/batches/00000251828491086877/00000251828488022799?accountId=zFben2IP-EOi2ydhZNqmvQ~~
  
  Scenario Steps:
  
  - I.eyeCheck("Canvas Chart - Show data next year", "canvasChart") at Test.<anonymous> (tests/visualAI/VisualAI_canvas_test.js:23:13)
  - I.click("Show data for next year") at Test.<anonymous> (tests/visualAI/VisualAI_canvas_test.js:22:7)
  - I.click("Compare Expenses") at Test.<anonymous> (tests/visualAI/VisualAI_canvas_test.js:21:7)
  - I.click("#log-in") at Test.<anonymous> (tests/visualAI/VisualAI_canvas_test.js:20:7)
  - I.fillField("#password", "abc") at Test.<anonymous> (tests/visualAI/VisualAI_canvas_test.js:19:7)
  - I.fillField("#username", "abc") at Test.<anonymous> (tests/visualAI/VisualAI_canvas_test.js:18:7)
  
  
  
  Run with --verbose flag to see NodeJS stacktrace


  FAIL  | 0 passed, 1 failed   // 35s
  ```
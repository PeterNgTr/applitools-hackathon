# Introduction

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
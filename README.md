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

# Running tests

## Traditional Tests

- To run all tests
```sh
npx codeceptjs run
```

- To run a specific test with tag
```sh
npx codeceptjs run --grep @test1
```
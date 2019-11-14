const { I } = inject();
const CP = require('currency-parser');
const expect = require('chai').expect;
const tesseract = require('node-tesseract-promise');

Feature('TraditionalTests');

Before(() => {
    I.amOnPage('https://demo.applitools.com/hackathonV2.html');
});

Scenario('Login Page UI Elements Test @test1', () => {
    I.seeElement('//img[@src="img/logo-big.png"]');
    I.see('Logout Form'); //on V1: Login Form
    I.see('Username');
    I.see('Pwd'); //on V1: Password
    // I.seeElement('//div[@class="pre-icon os-icon os-icon-user-male-circle"]'); removed on V2
    I.seeElement('#username');
    // I.seeElement('//div[@class="pre-icon os-icon os-icon-fingerprint"]'); removed on V2
    I.seeElement('#password');
    I.seeElement('#log-in');
    I.see('Remember Me');
    I.seeElement('//img[@src="img/social-icons/twitter.png"]');
    I.seeElement('//img[@src="img/social-icons/facebook.png"]');
    // I.seeElement('//img[@src="img/social-icons/linkedin.png"]'); removed on V2
});

Scenario('Data-Driven Test  @test2', () => {
    I.click('Log In');
    // text changed from `Both Username and Password must be present` to `Please enter both username and password`
    I.see('Please enter both username and password');

    I.fillField('#username', 'abc');
    I.click('Log In');
    I.see('Password must be present');

    I.fillField('#username', '');
    I.fillField('#password', 'abc');
    I.click('#log-in');
    I.see('Username must be present');

    I.fillField('#username', 'abc');
    I.fillField('#password', 'abc');
    I.click('#log-in');
    I.see('Total Balance');
});

Scenario('Table Sort Test @test3', async () => {
    I.fillField('#username', 'abc');
    I.fillField('#password', 'abc');
    I.click('#log-in');
    I.see('Total Balance');
    let beforeSorted = await I.grabTextFrom('tr');
    beforeSorted.shift();
    I.click('#amount');
    let afterSorted = await I.grabTextFrom('tr');
    let afterAmounts = await I.grabTextFrom('//span[contains(@class, "text-")]');
    afterSorted.shift();
    let parserAfterAmounts = [];
    afterAmounts.forEach(v => {
        parserAfterAmounts.push(CP.english_currency_parser(v.split(' USD')[0].replace(' ', '')));
    });

    expect(parserAfterAmounts.every((val, i, arr) => !i || (val >= arr[i - 1]))).to.be.true;

    const findOne = function (haystack, arr) {
        return arr.some(function (v) {
            return haystack.indexOf(v) >= 0;
        });
    };

    expect(findOne(beforeSorted, afterSorted)).to.be.true;
});

Scenario('Canvas Chart Test  @test4', async () => {
    I.fillField('#username', 'abc');
    I.fillField('#password', 'abc');
    I.click('#log-in');
    I.see('Total Balance');
    I.click('Compare Expenses');
    let text = await I.grabHTMLFrom('//div[contains(@class, "element-wrapper compact pt-4")]/script');
    expect(text).to.contain('10, 20, 30, 40, 50, 60, 70');
    // this is v1
    // expect(text).to.contain('[\n\t\t\t\t\t8,\n\t\t\t\t\t9,\n\t\t\t\t\t-10,\n\t\t\t\t\t10,\n\t\t\t\t\t40,\n\t\t\t\t\t60,\n\t\t\t\t\t40\n');
    expect(text).to.contain('[\n\t\t\t\t\t15,\n\t\t\t\t\t9,\n\t\t\t\t\t-10,\n\t\t\t\t\t10,\n\t\t\t\t\t40,\n\t\t\t\t\t60,\n\t\t\t\t\t50\n\t\t\t\t]');

    I.click('Show data for next year');
    await I.saveScreenshot('cavas.png');

    const filename = 'output/cavas.png';
    const chartText = await tesseract.process(filename);
    expect(chartText).to.include('2019');   
});

Scenario('Dynamic Content Test  @test5', async () => {
    I.amOnPage('https://demo.applitools.com/hackathonAppV2.html?showAd=true')
    I.seeElement('//img[contains(@src, "img/flashSale.gif")]');
    I.seeElement('//img[@src="img/flashSale2.gif"]')
});





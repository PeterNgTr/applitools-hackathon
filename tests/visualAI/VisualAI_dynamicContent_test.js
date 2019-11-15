const { I } = inject();

Feature('VisualAITests - Dynamic Content');

Scenario('Flash sale gifs @visualTestDynamicContent', async () => {
    I.amOnPage(`${process.env['TARGET_URL']}?showAd=true`)
    if (await I.grabNumberOfVisibleElements('#username') >= 1) {
        I.fillField('#username', 'abc');
        I.fillField('#password', 'abc');
        I.click('#log-in');
    }
    await I.eyeCheck('Dynamic Content', 'dynamicContent', 'Layout');
});


const { I } = inject();

Feature('VisualAITests - Dynamic Content');

Scenario('Flash sale gifs @visualTestDynamicContent', async () => {
    I.amOnPage(`${process.env['TARGET_URL']}?showAd=true`)
    await I.eyeCheck('Dynamic Content', 'dynamicContent', 'Layout');
});


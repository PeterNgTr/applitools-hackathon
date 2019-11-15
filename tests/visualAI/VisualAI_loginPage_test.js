const { I } = inject();

Feature('VisualAITests - Login');

Before(() => {
    I.amOnPage(process.env['TARGET_URL']);
});

Scenario('Login Page UI Elements Test @visualTestLoginPage', async () => {
    await I.eyeCheck('Login Page');
});

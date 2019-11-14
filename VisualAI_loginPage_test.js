const { I } = inject();

Feature('VisualAITests - Login');

Before(() => {
    I.amOnPage('https://demo.applitools.com/hackathon.html');
});

Scenario('Login Page UI Elements Test @visualTest1', async () => {
    await I.eyeCheck('Login Page');
});

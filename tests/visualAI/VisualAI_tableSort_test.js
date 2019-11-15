const { I } = inject();

Feature('VisualAITests - Table Sort');

Before(() => {
    I.amOnPage(process.env['TARGET_URL']);
});

Scenario('Table Sort @visualTestTableSort', async () => {
    I.fillField('#username', 'abc');
    I.fillField('#password', 'abc');
    I.click('#log-in');
    I.click('#amount');
    await I.eyeCheck('Table Sort', 'tableSort');
});

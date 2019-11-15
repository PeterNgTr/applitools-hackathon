const { I } = inject();

Feature('VisualAITests - Canvas Chart');

Before(() => {
    I.amOnPage(process.env['TARGET_URL']);
});

Scenario('Canvas Chart @visualTestCanvasChart1', async () => {
    I.fillField('#username', 'abc');
    I.fillField('#password', 'abc');
    I.click('#log-in');
    I.click('Compare Expenses');
    await I.eyeCheck('Canvas Chart', 'canvasChart');
});

Scenario('Canvas Chart - Show data next year @visualTestCanvasChart2', async () => {
    I.fillField('#username', 'abc');
    I.fillField('#password', 'abc');
    I.click('#log-in');
    I.click('Compare Expenses');
    I.click('Show data for next year');
    await I.eyeCheck('Canvas Chart - Show data next year', 'canvasChart');
});

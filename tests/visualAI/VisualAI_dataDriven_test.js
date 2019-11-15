const { I } = inject();

function _generateRandomString() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}; 

Feature('VisualAITests - Data Driven');

Before(() => {
    I.amOnPage(process.env['TARGET_URL']);
});

Scenario('Data-Driven Test @dd1', async () => {
    I.click('Log In');
    const id1 = 'dd1';
    await I.eyeCheck('Login Page - Empty username and password', id1);
});

Scenario('Data-Driven Test @dd2', async () => {
    I.fillField('#password', 'abc');
    I.click('#log-in');
    await I.eyeCheck('Login Page - Empty username', 'dd2');
});


Scenario('Data-Driven Test @dd3', async () => {
    I.fillField('#username', 'abc');
    I.click('#log-in');
    await I.eyeCheck('Login Page - Empty password', 'dd3');
});

Scenario('Data-Driven Test @dd4', async () => {
    I.fillField('#username', 'abc');
    I.fillField('#password', 'abc');
    I.click('#log-in');
    await I.eyeCheck('Dashboard page', 'dd4');
});
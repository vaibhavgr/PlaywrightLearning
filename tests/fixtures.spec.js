//there are 4 types of fixtures test fixtures, worker fixture, auto fixture 
const { test: vaibhav } = require('@playwright/test');
const test = vaibhav.extend({

    vinodkafixture: async ({ }, use) => {
        const heera = console.log("Vaibhav is not good in testing");
        await use(heera);
    }


});

test.only('my test', async ({ vinodkafixture }) => {

    console.log(vinodkafixture);

});
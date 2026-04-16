const { Parent } = require('./Parent.js');
const { test } = require('@playwright/test');

class child extends Parent{

    constructor(name){
        super(name);
        console.log("Child constructor called");
    }       
async vinay(){
    this.vaibhav()
}
}

test('Child class test', async () => {
    const childObj = new child();
    console.log(childObj);
})
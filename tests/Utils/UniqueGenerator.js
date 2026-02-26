const {faker} = require('@faker-js/faker');
class UniqueGenerator{

    static getUniqueName()
    {
        return faker.person.firstName();
    }
}

module.exports= {UniqueGenerator}
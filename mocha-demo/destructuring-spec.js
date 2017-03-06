function writeName({ name, age }) {
    console.log(name);
    console.log(age);
}

const user = {
    name: 'dave',
    gender: 'male',
    age: '24'
};

describe('Destructuring', () => {
    require('should');
    it('can be used to specify object\'s interface in function arguments', () => {
        writeName(user);
        true.should.be.exactly(true);
    });
});

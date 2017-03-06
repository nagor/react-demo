describe('Template Literals', () => {
    require('should');
    it('ES6 introduces template literals', () => {
        let a = 5;
        let b = 4;
        let total = `Your total balance is ${a + b}`;
        total.should.be.exactly('Your total balance is 9');
    });

    it('Template literals can handle multilines', () => {
        let multiLine = `This is a multi-line comment,
            spread over 3
            lines`;
        /(\n)/.exec(multiLine).length.should.be.exactly(2);
    });
});

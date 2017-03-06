describe('Sifferent ways of calling function', () => {
    require('should');
    function someFunc(arg1, arg2) {
        return arg1 + arg2;
    }
    it('can be called directly', () => {
        someFunc(1, 2).should.be.exactly(3);
    });

    it('can be called via apply', () => {
        someFunc.apply(this, [1, 2]).should.be.exactly(3);
    });

    it('can be called via call', () => {
        someFunc.call(this, 1, 2).should.be.exactly(3);
    });
});

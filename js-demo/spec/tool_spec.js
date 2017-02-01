describe('Specs for Tool', () => {
    var Tool = require('../tool');
    it('can be created', () => {
        var foo = new Tool();
        expect(foo.init).not.toBe(undefined);
    });
});
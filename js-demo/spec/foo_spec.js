describe('Specs for foo', () => {
    var Foo = require('../foo');
    it('can be created', () => {
        var foo = new Foo();
        expect(foo).not.toBe(undefined);
    });

    it('has a method double', () => { 
        var foo = new Foo();
        expect(foo.double).not.toBe(undefined);
    })

    it('can double numbers using double', () => {
        var foo = new Foo();
        expect(foo.double(2)).toBe(4);
        expect(foo.double(3.6)).toBe(7.2);
    });
});
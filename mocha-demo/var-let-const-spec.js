describe('var let const', () => {
    require('should');
    it('let/const can persitst block context', () => {
        var one = 1;
        let two = 2;
        const five = 5;
        if (one === 1) {
            var one = 10;
            let two = 20;
            let three = 3;
            var four = 4;
            const five = 6;
            one.should.be.exactly(10);
            two.should.be.exactly(20);
            five.should.be.exactly(6);
        }
        one.should.be.exactly(10);
        two.should.be.exactly(2);

        // three available from within block context
        (() => three).should.throw(ReferenceError);
        four.should.be.exactly(4);
        five.should.be.exactly(5);
    });

    it('const cannot be reasigned, but its content properties can', () => {
        const obj = {
            name: 'John'
        };
        (() => obj = 'key2').should.throw(TypeError);
        obj.name = 'Michael';
        obj.name.should.be.exactly('Michael');
    });

});
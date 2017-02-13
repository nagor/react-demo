describe('Some regexp games', () => {
    const should = require('should');
    it('escaping', () => {
        var name = "dea+hl[]rd";
        var text = "This dea+hl[]rd guy is super annoying.";
        var escaped = name.replace(/[^\w\s]/g, "\\$&");
        var regexp = new RegExp("\\b(" + escaped + ")\\b", "gi");
        text.replace(regexp, "_$1_")
            .should.be.exactly('This _dea+hl[]rd_ guy is super annoying.');
    });

    it('global can cause issues', () => { 
        var digit = /\d/g;
        digit.exec("here it is: 1")[0].should.be.exactly('1');
        should(digit.exec("and now: 1")).be.exactly(null);
    });

    it('looping through matches', () => { 
        var input = "A string with 3 numbers in it... 42 and 88.";
        var number = /\b(\d+)\b/g;
        var match;
        var array = [];
        while (match = number.exec(input)) {
            Number(match[1]).should.be.a.Number();
            array.push(Number(match[1]));
        }
        array.should
            .containDeep([3, 42, 88])
            .and.have.lengthOf(3);
        //   Found 3 at 14
        //   Found 42 at 33
        //   Found 88 at 40
    });
});
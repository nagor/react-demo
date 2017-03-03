// https://medium.freecodecamp.com/whats-a-javascript-closure-in-plain-english-please-6a1fc1d2ff1c#.lxqi9q7tp

// scope: global
var a = 1;
function one() {
    // scope: one
    // closure: [one, global]
    var b = 2;

    function two() {
        // scope: two
        // closure: [two, one, global]
        var c = 3;

        function three() {
            // scope: three
            // closure: [three, two, one, global]
            var d = 4;
            return a + b + c + d; // => 10
        };
        return three();
    };
    return two();
}

var v = 1;
function f1() {
    return v;
}

function f2() {
    var v = 2;
    return f1(); // Will this print 1 or 2?
};

describe('Closures', () => {
    require('should');
    it('works', () => {
        one().should.be.exactly(10);
    });

    it('closure magic :)', () => {
        f2().should.be.exactly(1);
    });
});



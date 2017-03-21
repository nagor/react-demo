var countLength = function countLength(arr) {
    function countLengthFor(arr, accum) {
        return arr.slice(0, 1)[0] === undefined
            ? accum
            : countLengthFor(arr.slice(1), accum + 1);
    }
    return countLengthFor(arr, 0);
};

describe('recLength rec', () => {
    require('should');
    it('can count length', () => {
        countLength([4, 5, 6, 7]).should.be.exactly(4);
        countLength([]).should.be.exactly(0);
    });
});

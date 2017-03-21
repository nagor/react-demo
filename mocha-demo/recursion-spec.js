var countLength = function countLength(arr, accum = 0) {
    return arr.slice(0, 1)[0] === undefined
        ? accum
        : countLength(arr.slice(1), accum + 1);
};

describe('recLength rec', () => {
    require('should');
    it('can count length', () => {
        countLength([4, 5, 6, 7]).should.be.exactly(4);
        countLength([]).should.be.exactly(0);
    });
});

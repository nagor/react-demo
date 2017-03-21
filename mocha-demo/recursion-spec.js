var countLength = function countLength(arr) {
    function countLengthFor(arr, accum) {
        return arr[0] === undefined
            ? accum
            : countLengthFor(arr.slice(1), accum + 1);
    }
    return countLengthFor(arr, 0);
};

var sum = function sum(arr) {
    function sumFor(arr, accum) {
        var item = arr[0];
        return item === undefined
            ? accum
            : sumFor(arr.slice(1), accum + item);
    }
    return sumFor(arr, 0);
};

var max = function max(arr) {
    function maxFor(arr, accum) {
        var item = arr[0];
        return item === undefined
            ? accum
            : maxFor(arr.slice(1), item > accum ? item : accum);
    }
    return maxFor(arr, -Infinity);
};

describe('recursion', () => {
    require('should');
    it('can count length', () => {
        countLength([4, 5, 6, 7]).should.be.exactly(4);
        countLength([]).should.be.exactly(0);
    });

    it('can count sum', () => {
        sum([4, 5, 6, 7]).should.be.exactly(22);
        sum([]).should.be.exactly(0);
    });

    it('can count max', () => {
        max([4, 5, 6, 7, 3, 2, 1, 7, 4]).should.be.exactly(7);
        max([]).should.be.exactly(-Infinity);
    });
});

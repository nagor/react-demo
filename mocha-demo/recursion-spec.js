function countLength(arr) {
    return arr[0] === undefined
        ? 0
        : 1 + countLength(arr.slice(1));
}

function sum(arr) {
    return arr[0] === undefined
        ? 0
        : arr[0] + sum(arr.slice(1));
}

function max(arr) {
    return function maxFor(accum = -Infinity) {
        return arr[0] === undefined
            ? accum
            : max(arr.slice(1))(arr[0] > accum ? arr[0] : accum);
    };
}

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
        max([4, 5, 6, 7, 3, 2, 1, 7, 4])().should.be.exactly(7);
        max([])().should.be.exactly(-Infinity);
    });
});

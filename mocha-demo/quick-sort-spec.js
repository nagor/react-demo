function quickSort(arr) {
    return arr.length < 2
        ? arr
        : (() => {
            const { left, right } = partition(arr.slice(1))(arr[0]);
            return quickSort(left).concat(arr[0], quickSort(right));
        })();
};

function partition(arr) {
    return function forPivot(pivot) {
        function byParts(pivot, arr, i = 0, left = [], right = []) {
            return i >= arr.length
                ? { left, right }
                : arr[i] > pivot
                    ? byParts(pivot, arr, i + 1, left, right.concat(arr[i]))
                    : byParts(pivot, arr, i + 1, left.concat(arr[i]), right);
        }
        return byParts(pivot, arr);
    };
}

describe('recursion', () => {
    require('should');
    it('sort', () => {
        quickSort([13, 17, 9, 10, 25, 16, 3])
            .should.containDeep([3, 9, 10, 13, 16, 17, 25]);
        quickSort([]).should.containDeep([]);
    });
});

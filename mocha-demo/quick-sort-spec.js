var quickSort = function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const pivot = arr.slice(0, 1);
    const rest = arr.slice(1);
    const { left, right } = partition(pivot, rest);

    return quickSort(left).concat(pivot, quickSort(right));
};

function partition(pivot, arr, i = 0, left = [], right = []) {
    return i >= arr.length
        ? { left, right }
        : arr[i] > pivot
            ? partition(pivot, arr, i + 1, left, right.concat(arr[i]))
            : partition(pivot, arr, i + 1, left.concat(arr[i]), right);
}

describe('recursion', () => {
    require('should');
    it('sort', () => {
        quickSort([13, 17, 9, 10, 25, 16, 3])
            .should.containDeep([3, 9, 10, 13, 16, 17, 25]);
        quickSort([]).should.containDeep([]);
    });
});

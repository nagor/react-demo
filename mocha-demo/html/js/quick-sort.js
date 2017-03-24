// https://khan4019.github.io/front-end-Interview-Questions/sort.html
(function (exports) {
    function quickSort(arr, left, right) {
        var pivot;
        var partitionIndex;

        if (left < right) {
            pivot = right;
            partitionIndex = partition(arr, pivot, left, right);

            // sort left and right
            quickSort(arr, left, partitionIndex - 1);
            quickSort(arr, partitionIndex + 1, right);
        }
        return arr;
    }

    function partition(arr, pivot, left, right) {
        var pivotValue = arr[pivot];
        var partitionIndex = left;

        for (var i = left; i < right; i++) {
            if (arr[i] < pivotValue) {
                swap(arr, i, partitionIndex);
                partitionIndex++;
            }
        }
        swap(arr, right, partitionIndex);
        return partitionIndex;
    }

    function swap(arr, i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    exports.quickSort = quickSort;
}(
    typeof exports === 'undefined'
        ? window
        : exports
));

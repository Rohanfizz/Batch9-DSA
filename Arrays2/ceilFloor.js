function getCeil(arr, target) {
    var l = 0;
    var r = arr.length - 1;
    var ceil = -1;
    while (l <= r) {
        var mid = Math.floor((l + r) / 2);
        if (arr[mid] == target)
            return target;
        else if (arr[mid] > target) {
            ceil = arr[mid];
            r = mid - 1;
        }
        else
            l = mid + 1;
    }
    return ceil;
}
var arr = [10, 12, 23, 34, 39, 40, 45, 52, 59, 63, 70, 90, 101];
var val = getCeil(arr, 89);
console.log(val);

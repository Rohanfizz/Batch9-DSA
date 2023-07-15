function binarySearch(arr, target) {
    var l = 0;
    var r = arr.length - 1;
    while (l <= r) {
        var mid = Math.floor((l + r) / 2);
        if (arr[mid] == target) {
            return mid;
        }
        else if (arr[mid] < target) {
            l = mid + 1;
        }
        else {
            r = mid - 1;
        }
    }
    return -1;
}
var arr = [10, 12, 23, 34, 39, 40, 45, 52, 59, 63, 70, 90, 101];
var idx = binarySearch(arr, 101);
console.log(idx);

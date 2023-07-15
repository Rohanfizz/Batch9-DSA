function linearSearch(arr, target) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}
var arr = [10, 12, 23, 34, 39, 40, 45, 52, 59, 63, 70, 90, 101];
var idx = linearSearch(arr, 90);
console.log(idx);

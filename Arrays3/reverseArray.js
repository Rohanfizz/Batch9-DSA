function reverse(arr) {
    var l = 0;
    var r = arr.length - 1;
    while (l < r) {
        //swap arr[l] <-> arr[r]
        var temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
}
function reverseInRange(arr, l, r) {
    while (l < r) {
        //swap arr[l] <-> arr[r]
        var temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
}
var arr = [1, 2, 3, 4, 5, 6, 7];
// reverse(arr);
reverseInRange(arr, 2, 5);
console.log(arr);

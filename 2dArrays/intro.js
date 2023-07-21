var arr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [8, 9, 10],
    [11, 12, 13],
];
function iteration1(arr) {
    var s = "";
    for (var i = 0; i < arr.length; i++) {
        //we want to print the ith array
        for (var j = 0; j < arr[i].length; j++) {
            s += arr[i][j] + " ";
        }
    }
    console.log(s);
}
function iteration2(arr) {
    var s = "";
    for (var i = 0; i < arr.length; i++) {
        for (var j = arr[i].length - 1; j >= 0; j--) {
            s += arr[i][j] + " ";
        }
    }
    console.log(s);
}
function iteration3(arr) {
    var s = "";
    for (var j = 0; j < arr[0].length; j++) {
        for (var i = arr.length - 1; i >= 0; i--) {
            s += arr[i][j] + " ";
        }
    }
    console.log(s);
}
function zigZagIteration(arr) {
    var s = "";
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            //even = left to right
            for (var j = 0; j < arr[i].length; j++) {
                s += arr[i][j] + " ";
            }
        }
        else {
            //odd = right to left
            for (var j = arr[i].length - 1; j >= 0; j--) {
                s += arr[i][j] + " ";
            }
        }
    }
    console.log(s);
}
zigZagIteration(arr1);

function mss(arr) {
    var train = 0;
    var maxi = 0;
    for (var i = 0; i < arr.length; i++) {
        var startNewTrain = arr[i]; //if i start a new train
        var sitWithPrevTrain = train + arr[i];
        train = Math.max(startNewTrain, sitWithPrevTrain);
        maxi = Math.max(maxi, train);
    }
    return maxi;
}
var arr = [5, -2, -7, 3, -4, -2, 6, 7, -2, 8, -1, 10, -2, -4, 2];
console.log(mss(arr));

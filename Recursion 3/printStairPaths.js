function printStairPaths(n, currStair, asf) {
    if (currStair == n) {
        console.log(asf);
        return;
    }
    if (currStair > n) {
        return;
    }
    //i am having 3 options
    //jump of 1
    printStairPaths(n, currStair + 1, asf + "1");
    //jump of 2
    printStairPaths(n, currStair + 2, asf + "2");
    //jump of 3
    printStairPaths(n, currStair + 3, asf + "3");
}
function coinDenominations(n, currStair, asf, coins) {
    if (currStair == n) {
        console.log(asf);
        return;
    }
    if (currStair > n) {
        return;
    }
    //i am having 3 options
    for (var i = 0; i < coins.length; i++) {
        //jump of coin
        var coin = coins[i];
        coinDenominations(n, currStair + coin, asf + coin, coins);
    }
}
printStairPaths(3, 0, "");

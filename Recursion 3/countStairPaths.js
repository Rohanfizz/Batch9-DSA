function countStairPaths(n, currStair) {
    if (currStair == n)
        return 1;
    if (currStair > n)
        return 0;
    var one = countStairPaths(n, currStair + 1);
    var two = countStairPaths(n, currStair + 2);
    var three = countStairPaths(n, currStair + 3);
    return one + two + three;
}
console.log(countStairPaths(3, 0));

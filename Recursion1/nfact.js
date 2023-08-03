function factorial(n) {
    //base case
    if (n == 1)
        return 1;
    //calc my ans, n = n * (n-1)!
    // let nm1f = factorial(n-1);
    // return n * nm1f;
    n *= factorial(n - 1);
    return n;
}
console.log(factorial(5));

function fib(n:number) : number {
    //base case
    if(n == 1) return 0;
    if(n == 2) return 1;
    //if im not a base case,
    //ill have to calculate my own answer
    //to calculate nth fibonacci number
    //i need n-1th and n-2th fibonacci number
    let nm1 = fib(n-1);
    let nm2 = fib(n-2);
    //i have both the ingredients for my dish,
    //dish = nth fibonacci number
    return nm1+nm2;
}

console.log(fib(8));

function countStairPaths(n:number,currStair:number) : number{
    if(currStair == n) return 1;
    if(currStair > n) return 0;

    let one = countStairPaths(n,currStair+1);
    let two = countStairPaths(n,currStair+2);
    let three = countStairPaths(n,currStair+3);

    return one + two + three;
}
console.log(countStairPaths(3,0));
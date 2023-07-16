function mss(arr:number[]) : number{
    let train : number = 0;
    let maxi : number = 0;
    for(let i = 0;i<arr.length;i++){
        let startNewTrain = arr[i];//if i start a new train
        let sitWithPrevTrain = train + arr[i];
        train = Math.max(startNewTrain,sitWithPrevTrain);
        maxi = Math.max(maxi,train);
    }
    return maxi;
}

let arr = [5,-2,-7,3,-4,-2,6,7,-2,8,-1,10,-2,-4,2];
console.log(mss(arr));
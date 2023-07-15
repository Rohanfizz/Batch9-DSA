function binarySearch(arr: number[] , target:number) : number{
    let l = 0;
    let r = arr.length-1;
    while(l<=r){
        let mid = Math.floor((l+r)/2);

        if(arr[mid] == target){
            return mid;
        }else if(arr[mid] < target){
            l = mid+1;
        }else{
            r = mid-1;
        }
    }
    return -1;
}

let arr = [10, 12, 23, 34, 39, 40, 45, 52, 59, 63, 70, 90,101];
let idx = binarySearch(arr,101);
console.log(idx);
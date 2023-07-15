
function getCeil(arr:number[],target:number){
    let l = 0;
    let r = arr.length-1;
    let ceil = -1;
    while(l<=r){
        let mid = Math.floor((l+r)/2);
        if(arr[mid]==target) return target;
        else if(arr[mid] > target){
            ceil = arr[mid];
            r = mid-1;
        }else l = mid+1;
    }
    return ceil;
}


let arr = [10, 12, 23, 34, 39, 40, 45, 52, 59, 63, 70, 90,101];
let val = getCeil(arr,89);
console.log(val);
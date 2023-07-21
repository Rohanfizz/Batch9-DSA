/**
 Do not return anything, modify matrix in-place instead.
 */
 function reverse(arr: number[]){
    let l =0;
    let r = arr.length-1;
    while(l<r){
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;

        l++;
        r--;
    }
}

function rotate(arr: number[][]): void {
    for(let i = 0;i<arr.length;i++){
        for(let j = i;j<arr[0].length;j++){
            let temp =arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = temp;
        }
    }
    // console.log(arr);
    for(let i = 0;i<arr.length;i++){
        reverse(arr[i]);
    }
};
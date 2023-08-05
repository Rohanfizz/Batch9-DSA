function merge2SortedArrays(arr1: number[], arr2: number[]): number[] {
    let n = arr1.length;
    let m = arr2.length;

    let ans: number[] = [];
    let i = 0; //traverses on arr1
    let j = 0; // traverses on arr2

    while (i < n && j < m) {
        //comapre arr1[i] with arr2[j], the  smaller one will be added to ans
        if (arr1[i] < arr2[j]) {
            ans.push(arr1[i]);
            i++;
        } else {
            ans.push(arr2[j]);
            j++;
        }
    }
    //if i exceeds arr1, add all the people of arr2
    while (j < m) {
        ans.push(arr2[j]);
        j++;
    }
    //if j exceeds arr2, add all remaining people of arr1
    while (i < n) {
        ans.push(arr1[i]);
        i++;
    }
    return ans;
}

function mergeSort(arr: number[], l: number, r: number) {
    //if only 1 element is in the range,
    //single element is always sorted
    if (l == r) {
        let res: number[] = [];
        res.push(arr[l]);
        return res;
    }

    let mid = Math.floor((l + r) / 2);
    let leftSortedArray = mergeSort(arr, l, mid);
    let rightSortedArray = mergeSort(arr, mid + 1, r);
    let fullSortedArray = merge2SortedArrays(leftSortedArray, rightSortedArray);
    return fullSortedArray;
}

function sort(arr) {
    //return a sorted array
    return mergeSort(arr, 0, arr.length - 1);
}

let arr= [26,44,108,123,54,7,3,23,8643,12,43];
let sorted = sort(arr);
console.log(sorted);
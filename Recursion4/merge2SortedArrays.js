function merge2SortedArrays(arr1, arr2) {
    var n = arr1.length;
    var m = arr2.length;
    var ans = [];
    var i = 0; //traverses on arr1
    var j = 0; // traverses on arr2
    while (i < n && j < m) {
        //comapre arr1[i] with arr2[j], the  smaller one will be added to ans
        if (arr1[i] < arr2[j]) {
            ans.push(arr1[i]);
            i++;
        }
        else {
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
var arr1 = [1, 13, 14, 17, 59, 99];
var arr2 = [4, 15, 19, 26, 34, 60, 109, 209, 309];
var ans = merge2SortedArrays(arr1, arr2);
console.log(ans);

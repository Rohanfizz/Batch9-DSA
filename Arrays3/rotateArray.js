/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function reverseInRange(nums,l,r){
    while(l<r){
        //swap
        let temp = nums[l];
        nums[l] = nums[r];
        nums[r] = temp;

        l++;
        r--;
    }
}
var rotate = function(nums, k) {
    //normalize k
    let n = nums.length;
    k = k%n;

    reverseInRange(nums,n-k,n-1);
    reverseInRange(nums,0,n-k-1);
    reverseInRange(nums,0,n-1);
};  
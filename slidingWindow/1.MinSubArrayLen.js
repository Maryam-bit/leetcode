/*
========== Question:  =========
209. Minimum Size Subarray Sum

========== Description: =========== 
Given an array of positive integers nums and a positive integer target, return the minimal length of a 
subarray
 whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

========== Example 1: ============  
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
*/

var minSubArrayLen = function(target, nums) {
    let minLength = Infinity;
    let sum = nums[0];
    let l = 0; r = 0

    while(l <= r && r < nums.length) {
        if(sum>=target){
            minLength = Math.min(r-l+1, minLength)
            sum-=nums[l]
            l++;
        } else {
            r++;
            sum+=nums[r]
        }
    } 
    return minLength === Infinity ? 0 : minLength
};

const nums = [1, 2, 3, 4, 5]
// const nums = [2,3,1,2,4,3]
const target = 11; 
// const target = 7; 
console.log(minSubArrayLen(target, nums))
/*
========== Question:  =========
189. Rotate Array

========== Description: =========== 
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

========== Example 1: ============ 
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
*/

// Solution#01
var rotate = function(nums, k) {
    while(k>0) {
     const popped = nums.pop();
     nums.unshift(popped)
     k--;    
    }
 };

//  Solution#02
 var rotate2 = function(nums, k) {
    while(k>0) {
         const temparr = [...nums]
         const temp = nums[nums.length-1]
      for(let i=0; i<nums.length-1; i++) {
         nums[i+1] = temparr[i]
        }
        nums[0] = temp
        k--;    
    }
};

// Solution#03
var reverse = function (arr, si, ei) {
    while(si<ei) {
        [arr[si], arr[ei]] = [arr[ei], arr[si]]
        si++;
        ei--;
    }   
}
var rotate3 = function(nums, k) {
    let n = nums.length;
    k = k % n;
    reverse(nums, 0, n-1)
    reverse(nums, 0, k-1)
    reverse(nums, k, n-1)
}

const nums = [1,2,3,4,5,6,7], k = 3
rotate3(nums, 3);
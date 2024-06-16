/*
========== Question:  =========
219. Contains Duplicate II

========== Description: =========== 
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

========== Example 1: ============  
Input: nums = [1,2,3,1], k = 3
Output: true

========== Example 2: ============  
Input: nums = [1,0,1,1], k = 1
Output: true
*/

var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();

    for(let i = 0; i<=nums.length-1; i++) {
        let n = nums[i];
    
        if(!map.has(n)) map.set(n, i);

        else {
            if ((Math.abs(map.get(n) - i)) <= k) return true; 
            
            map.set(n, i); // update the index of duplicated element if distance is still greater than k
        }
    }

    return false;
};
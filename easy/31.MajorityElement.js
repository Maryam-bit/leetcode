/*
========== Question:  =========
169. Majority Element

========== Description: =========== 
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

========== Example 1: ============ 
Input: nums = [3,2,3]
Output: 3

========== Example 2: ============ 
Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

var majorityElement = function(nums) {
    const n = nums.length;
    const majority = Math.floor(n/2);
    let bucket = {};

    for(i=0; i<n; i++) {
        bucket[nums[i]] = bucket[nums[i]] || 0;
        bucket[nums[i]]++

        if(bucket[nums[i]] > majority ) {
            return nums[i];
        }
    }
}

const nums = [2,2,1,1,1,1,1,1,2,2]
const n = 2

const majority = majorityElement(nums);
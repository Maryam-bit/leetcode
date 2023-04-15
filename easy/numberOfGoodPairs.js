/*
========== Question:  =========
Number of Good Pairs

========== Description: =========== 
Given an array of integers nums, return the number of good pairs.
A pair (i, j) is called good if nums[i] == nums[j] and i < j.

========== Example 1: ============ 
Input: nums = [1,2,3,1,1,3]
Output: 4
== Explanation: == 
There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
*/

var numIdenticalPairs = function(nums) {
    let count = 0;
    for(i=0; i<=nums.length-1; i++) {
        for(j=0; j<=nums.length-1; j++){
            if(i<j){
                if(nums[i] === nums[j]){
                    count++
                }
            }
        }
    }
    return count;
};

const nums = [1, 2, 3, 1, 1, 3];
const result = numIdenticalPairs(nums);

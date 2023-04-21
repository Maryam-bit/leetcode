/*
========== Question:  =========
Create Target Array in the Given Order

========== Description: =========== 
Given two arrays of integers nums and index. Your task is to create target array under the following rules:
* Initially target array is empty
* From left to right read nums[i] and index[i], insert at index[i] the value nums[i] in target array. 
* Repeat the previous step until there are no elements to read in nums and index
Return the target array.
It is guaranteed that the insertion operations will be valid.

========== Example 1: ============ 
Input: nums = [0, 1, 2, 3, 4], index = [0, 1, 2, 2, 1]
Output: [0, 4, 1, 3, 2]
=== Explanation: === 
nums        index       target
0           0           [0]
1           1           [0, 1]
2           2           [0, 1, 2]
3           2           [0, 1, 3, 2]
4           1           [0, 4, 1, 3, 2]
*/

var createTargetArray = function(nums, index) {
    const target = [];
    for(i=0; i<=nums.length-1; i++) {
        if(index[i] <= i) {
            // inserts element at index[i], removing 0 values, insert value is nums[i]
            target.splice(index[i], 0 , nums[i]);
        }
        target[index[i]] = nums[i]
    }
    return target;
};

const nums = [0, 1, 2, 3, 4], index = [0, 1, 2, 2, 1];
const result = createTargetArray(nums, index);
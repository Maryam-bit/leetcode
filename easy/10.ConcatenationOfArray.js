/*
========== Question:  =========
Concatenation of Array

========== Description: =========== 
Create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

========== Example 1: ============ 
Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
== Explanation: == 
The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]
*/

var getConcatenation = function(nums) {
    return nums.concat(nums)
}

const nums = [1,2,3];
const concatinatedNum = getConcatenation(nums);
/*
========== Question:  =========
45. Jump Game II

========== Description: =========== 
You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

0 <= j <= nums[i] and
i + j < n
Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

========== Example 1: ============  
Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
*/


var jump = function(nums) {
    let totalJumps = 0;
    let currentJumpEnd = 0;
    let farthest = 0;

    for(let i=0; i<nums.length-1; i++) {
        farthest = Math.max(farthest, i + nums[i]);
        if(i === currentJumpEnd) {
            totalJumps++;
            currentJumpEnd = farthest;
        }
    }
    return totalJumps;
};
const nums = [2,3,1,1,4]

console.log(jump(nums)) // 2



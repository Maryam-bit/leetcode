/*
========== Question:  =========
55. Jump Game

========== Description: =========== 
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
Return true if you can reach the last index, or false otherwise. 

========== Example 1: ============ 
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
*/


/* If the array does not have a 0, then i will always reasch the final step 
A Greedy appraoch 
The number of jumps from current step, should allow me to reach the final position 
*/
var canJump = function(nums) {
    // initially the final position is the last index 
    let finalPosition = nums.length-1;

    // start with the  2nd last index
    for(i=nums.length-2; i>=0; i--) {
        
        // If you can react the final position from this index, update the final position flag
        if(nums[i] + i >= finalPosition) {
            finalPosition = i;
        }
    }

    // if we react the first indexedDB, then we can make the jump possible
    return finalPosition == 0;
};

const nums =[2,3,1,1,4]
console.log(canJump(nums)) // true



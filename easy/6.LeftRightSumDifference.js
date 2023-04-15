/*
========== Question:  =========
Left and Right Sum Differences

========== Description: =========== 
Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

answer.length == nums.length.
answer[i] = |leftSum[i] - rightSum[i]|.
Where:
leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
Return the array answer.

========== Example 1: ============ 
Input: nums = [10,4,8,3]
Output: [15,1,11,22]
== Explanation: == 
The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].
*/

var leftRigthDifference = function(nums) {
    let leftSum = [...nums];
    let rightSum = [...nums];
    let answer = []
    leftSum.unshift(0);
    leftSum.pop();
    rightSum.push(0);
    rightSum.shift();

    for (let index = 0; index <=nums.length-1; index++) {
       leftSum[index] = leftSum[index] + leftSum[index-1] || 0;
    }

    for (let index = nums.length-1; index >=0; index--) {
        rightSum[index] = rightSum[index] +  rightSum[index+1] || 0
    }

    for (let index = 0; index <=nums.length-1; index++) {
        answer.push(Math.abs(leftSum[index] - rightSum[index]))
    }

    return answer;
};

const nums = [10, 4, 8, 3];
const result = leftRigthDifference(nums);
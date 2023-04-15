/*
========== Question:  =========
Squares of a Sorted Array

========== Description: =========== 
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

========== Example 1: ============ 
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
== Explanation: == 
After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
*/

function sortedSquares(nums: number[]): number[] {
    const squaredNumsArray = nums.map(num => num*num);
    const sortedArray = squaredNumsArray.sort((a,b) => a-b);
    return sortedArray;
};

const numbers: number[] = [-4, -1, 0, 3, 10];

sortedSquares(numbers);
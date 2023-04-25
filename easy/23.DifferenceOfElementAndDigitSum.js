/*
========== Question:  =========
Difference between element sum and digit sum of an array

========== Description: =========== 
You are given a positive integer array nums.

The element sum is the sum of all the elements in nums.
The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
Return the absolute difference between the element sum and digit sum of nums.

Note that the absolute difference between two integers x and y is defined as |x - y|.

========== Example 1: ============ 
Input: nums = [1,15,6,3]
Output: 9
Explanation: 
The element sum of nums is 1 + 15 + 6 + 3 = 25.
The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
The absolute difference between the element sum and digit sum is |25 - 16| = 9.


========== Example 2: ============ 
Input: nums = [1,2,3,4]
Output: 0
Explanation:
The element sum of nums is 1 + 2 + 3 + 4 = 10.
The digit sum of nums is 1 + 2 + 3 + 4 = 10.
The absolute difference between the element sum and digit sum is |10 - 10| = 0.
*/

// ==== Method 1 ====
var differenceOfSum = function(nums) {
    const elementSum = eval(nums.join('+'));
    const digitSum = eval(nums.toString().replaceAll(',', '').split('').join('+'))
    return Math.abs(elementSum - digitSum)
};

// ==== Method 2 ====
var differenceOfSum = function(nums) {
    let elementSum = 0;
    let digitSum = 0;
    for(let i=0; i<=nums.length-1; i++) {
        elementSum += nums[i]
        const num = nums[i].toString().split('')
        for(let j=0; j<=num.length-1; j++) {
        digitSum += Number(num[j])
        }
    }
    return Math.abs(elementSum - digitSum);
};

const nums = [1, 15, 6, 3];
const result = differenceOfSum(nums)

/*
========== Question:  =========
XOR Operation in an Array

========== Description: =========== 
You are given an integer n and an integer start.

Define an array nums where nums[i] = start + 2 * i (0-indexed) and n == nums.length.

Return the bitwise XOR of all elements of nums.

========== Example 1: ============ 
Input: n = 5, start = 0
Output: 8
Explanation: Array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.
Where "^" corresponds to bitwise XOR operator.


========== Example 2: ============ 
Input: n = 4, start = 3
Output: 8
Explanation: Array nums is equal to [3, 5, 7, 9] where (3 ^ 5 ^ 7 ^ 9) = 8.
*/

const xorOperation = function(n, start) {
    let xor = 0;
    for(let i=0; i<=n-1; i++) {
        const num = start + 2 * i;
        xor ^= num;
    }
    return xor;
};

const n = 4, start = 3;
const result = xorOperation(n, start);

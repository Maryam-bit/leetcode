/*
========== Question:  =========
Number of Steps to Reduce a Number to Zero

========== Description: =========== 
Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

========== Example 1: ============ 
Input: num = 8
Output: 4
Explanation: 
Step 1) 8 is even; divide by 2 and obtain 4. 
Step 2) 4 is even; divide by 2 and obtain 2. 
Step 3) 2 is even; divide by 2 and obtain 1. 
Step 4) 1 is odd; subtract 1 and obtain 0.
*/

// USING RECURSION
var numberOfSteps = function(num) {
    return num == 0 ? 0 : 1 + (num % 2 == 0 ? numberOfSteps(num / 2) : numberOfSteps(num-1));
};

// USING LOOP
var numberOfSteps = function(num) {
    let count = 0
    while(num !== 0) {
        if(num%2==0) num = num/2;
        else num = num-1;
        count++
    }
    return count;
};

const num = 14;
const result = numberOfSteps(num);

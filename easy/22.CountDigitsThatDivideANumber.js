/*
========== Question:  =========
Count the Digits That Divide a Number

========== Description: =========== 
Given an integer num, return the number of digits in num that divide num.

An integer val divides nums if nums % val == 0.

========== Example 1: ============ 
Input: num = 7
Output: 1
Explanation: 7 divides itself, hence the answer is 1.


========== Example 2: ============ 
Input: num = 121
Output: 2
Explanation: 121 is divisible by 1, but not 2. Since 1 occurs twice as a digit, we return 2.
*/

var countDigits = function(num) {
    let count = 0;
    num.toString().split('').forEach(val => num % val == 0 && count++);
    return count;
}

const num = 1248;
const result = countDigits(num);

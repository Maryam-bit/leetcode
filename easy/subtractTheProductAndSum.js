/*
========== Question:  =========
Subtract the Product and Sum of Digits of an Integer

========== Description: =========== 
Given an integer number n return the difference between the product of its digits and the sum of its digits

========== Example 1: ============ 
Input: n = 234
Output: 15 
== Explanation: == 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15
*/


var subtractProductAndSum = function (n) {
    const product = eval(n.toString().split('').join('*'))
    const sum = eval(n.toString().split('').join('+'))
    return product - sum;
}

const n = 234;
const result = subtractProductAndSum(n);
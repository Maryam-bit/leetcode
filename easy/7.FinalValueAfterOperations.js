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

var finalValueAfterOperations = function(operations) {
    let X = 0;
    operations.forEach(operation => {
        eval(operation);
    });
    return X;
};

const operations = ["--X","X++","X++"];
const result = finalValueAfterOperations(operations);

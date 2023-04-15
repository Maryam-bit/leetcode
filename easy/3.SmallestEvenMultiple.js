/*
========== Question:  =========
Smallest Even Multiple

========== Description: =========== 
Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.

========== Example 1: ============ 
Input: n = 5
Output: 10
== Explanation: == 
Explanation: The smallest multiple of both 5 and 2 is 10.
*/

var smallestEvenMultiple = function(n) {
    //   even => input = output
    //   odd  => input * 2 
    if(n%2 === 0) return n;
    return n*2;
};

const n = 6;
const result = smallestEvenMultiple(n);

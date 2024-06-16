/*
========== Question:  =========
202. Happy Number

========== Description: =========== 
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

========== Example 1: ============  
Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

========== Example 2: ============  
Input: n = 2
Output: false
*/

// Solution 1
var isHappy = function(n) {
    const sadNumers = [2, 3, 4, 5, 6, 8, 9];
    let total = 0;
        const nArr = (""+n).split('');

        for(let i = 0; i<=nArr.length-1; i++) {
            total += nArr[i]*nArr[i];
        }
        if(sadNumers.includes(total)) return false


    if(total==1) {
        return true;
    } else {
       return isHappy(total)
    }
};

// Solution 2
var isHappy = function (n) {
    let seen = new Set();
    let number = n.toString();

    while(!seen.has(number)) {
        let total = 0;
        
        for(let i = 0; i <= number.length - 1; i++) {
            total += Math.pow(parseFloat(number[i]), 2);
        }

        if(total == 1) return true;

        seen.add(number);

        number = total.toString();
    }
    return false
}

console.log(isHappy(19))
console.log(isHappy(2))
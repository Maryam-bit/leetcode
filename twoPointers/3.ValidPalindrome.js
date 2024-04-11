/*
========== Question:  =========
125. Valid Palindrome

========== Description: =========== 
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

========== Example 1: ============ 
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
*/

var isPalindrome = function(s) {
    let l = 0;
    let r = s.length - 1;

    s = s.toLowerCase();
    let isPalindromeCheck = true;

    function isValidStr(c) {
        return (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122) || (c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57)
    }

    while (l < r) {
        const lValid = isValidStr(s[l]);
        const rValid = isValidStr(s[r]);
        if (!lValid) {
            l++;
            continue;
        }
        if (!rValid) {
            r--;
            continue;
        }
        if (s[l] !== s[r]) {
            isPalindromeCheck = false;
            break;
        }
        l++;
        r--;
    }
    return isPalindromeCheck;
};

const s =" "
console.log(isPalindrome(s))

// another solution 
// var isPalindrome = function(s) {
//     let result = ""
//     s = s.toLowerCase();

//     function isValidStr(c) {
//         return (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122) || (c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57)
//     }

//     for(let i = 0; i<=s.length-1; i++) {
//         if(isValidStr(s[i])) result += s[i]
//     }

//     const reversed = result.split('').reverse().join("")
//     return result == reversed
// }
/*
========== Question:  =========
3. Longest Substring Without Repeating Characters

========== Description: =========== 
Given a string s, find the length of the longest 
substring
 without repeating characters

========== Example 1: ============  
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/

var lengthOfLongestSubstring = function(s) {
    // include first character
    let str = [];
    if(s.length) str.push(s[0]);
    
    let longestSubStr = str.length;
    // r is the right pointer 
    for(let r = 1; r<=s.length-1; r++) {
        if(str.includes(s[r])) {
            // if string already contains the current character, if its index and move the left pointer (starting point of index) to current position
            // here we are deleting all the elements till the repeating index
            const repeatingIndex = str.indexOf(s[r]);
            str.splice(0, repeatingIndex + 1);
        }
        // add continous non duplicate elements and update the longest string value
        str.push(s[r]);
        longestSubStr = Math.max(longestSubStr, str.length)
    }
    return longestSubStr;
};

const s = "au"
console.log(lengthOfLongestSubstring(s));
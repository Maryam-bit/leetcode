/*
========== Question:  =========
392. Is Subsequence

========== Description: =========== 
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

========== Example 1: ============ 
Input: s = "abc", t = "ahbgdc"
Output: true

========== Example 2: ============ 
Input: s = "axc", t = "ahbgdc"
Output: false
*/


var isSubsequence = function (s, t) {
    let matches = 0
    for(i=matches; i<=t.length-1; i++) {
        if(s[matches] === t[i]) {
            matches++
        }
    }
    return matches === s.length;
}

const s = "abc";
const t = "ahbgddc";
console.log(isSubsequence(s,t))
/*
========== Question:  =========
242. Valid Anagram

========== Description: =========== 
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

========== Example 1: ============  
Input: s = "anagram", t = "nagaram"
Output: true
*/


// Solution 1
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    const map = new Map();

    for(i of s) {
        map.set(i, (map.get(i) || 0)+1);
    }

    for(j of t) {
        if(!map.has(j) || map.get(j) == 0) return false
        map.set(j, map.get(j)-1);
    }
    
    return true;
};


// Solution 2 
// var isAnagram = function(s, t) {
//     return s.split('').sort().join('') == t.split('').sort().join('')   
// };
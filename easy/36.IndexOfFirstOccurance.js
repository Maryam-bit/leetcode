  /*
========== Question:  =========
Find the Index of the First Occurrence in a String

========== Description: =========== 
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

========== Example 1: ============ 
Input: haystack = "sadbutsad", needle = "sad"
Output: 0

========== Example 2: ============ 
Input: haystack = "leetcode", needle = "leeto"
Output: -1
*/


var strStr = function(haystack, needle) {
    for(let i=0; i<=haystack.length - needle.length; i++) {
        let j = 0;
        while(j<needle.length && haystack[i+j]== needle[j]) {
            j++
        }
        if(j == needle.length) return i;
    }
    return -1 // needle not found
};


const haystack = "sadbutsad";
const needle = "sad";
strStr(haystack, needle);
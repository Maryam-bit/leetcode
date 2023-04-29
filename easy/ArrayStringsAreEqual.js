/*
========== Question:  =========
Check If Two String Arrays are Equivalent

========== Description: =========== 
Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.

========== Example 1: ============ 
Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.

========== Example 2: ============ 
Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
Output: false
*/

var arrayStringsAreEqual = function(word1, word2) {
    return word1.join('') === word2.join('');
}

const word1 = ["ab", "c"];
const word2 = ["a", "bc"];
const result = arrayStringsAreEqual(word1, word2);

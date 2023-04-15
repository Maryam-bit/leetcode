/*
========== Question:  =========
Reverse Words in a String III

========== Description: =========== 
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

========== Example 1: ============ 
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
*/

function reverseWords(s: string): string {
    return s.split(' ').map(word => word.split('').reverse().join('')).join(' ')
 };
 
 const sentence: string = "Let's take LeetCode contest"
 reverseWords(sentence)
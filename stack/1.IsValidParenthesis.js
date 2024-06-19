/*
========== Question:  =========
1. IS Valid Parentheses

========== Description: =========== 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

==== example 1 
Input: s = "()"
Output: true

==== example 2
Input: s = "()[]{}"
Output: true
*/

var isValid = function(s) {
    const chars = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    const stack = []

    for(let i = 0; i<=s.length-1; i++) {
        const char = s[i];
        if(chars[char]) {
            stack.push(chars[char]);
        } else {
            if(stack.pop() !== char) {
                return false;
            }
        }
    }
    return stack.length == 0;
};
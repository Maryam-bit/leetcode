/*
========== Question:  =========
290. Word Pattern

========== Description: =========== 
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s

========== Example 1: ============  
Input: pattern = "abba", s = "dog cat cat dog"
Output: true
*/

var wordPattern = function(pattern, s) {
    const sArray = s.split(' ');
    const patternMap = new Map();
    const stringMap = new Map();

    if(sArray.length !== pattern.length) return false

    for(let i = 0; i<=pattern.length-1; i++) {
        let patternChar = pattern[i];
        let string = sArray[i];
        if((patternMap.has(patternChar) && patternMap.get(patternChar) != string) ||
        (stringMap.has(string) && stringMap.get(string) != patternChar)
        ) {
            return false;
        }

        patternMap.set(patternChar, string);
        stringMap.set(string, patternChar);
    }

    return true;
};
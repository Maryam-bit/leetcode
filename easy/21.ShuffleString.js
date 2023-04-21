/*
========== Question:  =========
Shuffle String

========== Description: =========== 
You are given a string's and an integer array indices of the same length. The string's will be shuffled such that the character at the ith 
position moves to indices[i] in the shuffled string.
Return the shuffled string.

========== Example 1: ============ 
Input: s = "codeleet", indices = [4, 5, 6, 7, 0, 2, 1, 3]
Output: "leetcode"
=== Explanation: ===
*/

var restoreString = function(s, indices) {
    const shuffledString = [];
    for(i=0; i<=indices.length-1; i++) {
        const stringArr = s.split('');
        shuffledString[indices[i]] = stringArr[i]
    }
    return shuffledString.join('')
}

const s = "codeleet", indices = [4, 5, 6, 7, 0, 2, 1, 3];
const result = restoreString(s, indices);

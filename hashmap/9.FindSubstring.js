/*
========== Question:  =========
30. Substring with Concatenation of All Words

========== Description: =========== 
You are given a string s and an array of strings words. All the strings of words are of the same length.

A concatenated string is a string that exactly contains all the strings of any permutation of words concatenated.

For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated string because it is not the concatenation of any permutation of words.
Return an array of the starting indices of all the concatenated substrings in s. You can return the answer in any order.

========== Example 1: ============  
Input: s = "barfoothefoobarman", words = ["foo","bar"]

Output: [0,9]

Explanation:

The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.

========== Example 2: ============  
Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]

Output: []

Explanation:

There is no concatenated substring.uy
*/

var findSubstring = function(s, words) {
    const wordsMap = new Map();
    const wordLen = words[0].length;
    const wordWindow = wordLen*words.length;
    const resIndexes = []


    for(let word of words) {
        wordsMap.set(word, (wordsMap.get(word) || 0) + 1);
    }

    var isConcatinating = function (chunk) {
        const chunkMap = new Map();

        for (let i = 0; i <= chunk.length; i += wordLen) {
            const subString = chunk.substring(i, i + wordLen);
            chunkMap.set(subString, (chunkMap.get(subString) || 0) + 1);
        }
        for(let [key, value] of wordsMap) {
            if(chunkMap.get(key) !== value) return false
        }
        return true;
    }

    for (let i = 0; i<=s.length-wordWindow; i++) {
        const chunk = s.substring(i, i+wordWindow);
        console.log(chunk, "CHUNKKKKK")
        if(isConcatinating(chunk)) resIndexes.push(i)
    }

    return resIndexes;
};


let s = "barfoothefoobarman";
let words = ["bar","foo", "the"]
console.log(findSubstring(s, words))
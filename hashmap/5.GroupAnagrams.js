/*
========== Question:  =========
49. Group Anagrams

========== Description: =========== 
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

========== Example 1: ============  
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

========== Example 2: ============  
Input: strs = [""]
Output: [[""]]

========== Example 3: ============  
Input: strs = ["a"]
Output: [["a"]]
*/

// Solution 1 
var groupAnagrams = function(strs) {
    const anagrams = {};

    for(const str of strs) {
        const sortedStr = str.split('').sort().join();

        if(!anagrams[sortedStr]) {
            anagrams[sortedStr] = []
        }

        anagrams[sortedStr].push(str);
    }

    return Object.values(anagrams)
}



// Solution 2
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const map = new Map();

    for (let i of s) {
        map.set(i, (map.get(i) || 0) + 1);
    }

    for (let j of t) {
        if (!map.has(j) || map.get(j) === 0) return false;
        map.set(j, map.get(j) - 1);
    }
    return true;
}

var groupAnagrams = function(strs) {
    let groupAnagram = [];
    let visited = new Set();

    for (let i = 0; i < strs.length; i++) {
        if (visited.has(i)) continue; // Change to use index as identifier in visited set

        let anagramArr = [strs[i]];
        visited.add(i); // Change to use index as identifier in visited set

        for (let j = i + 1; j < strs.length; j++) {
            if (!visited.has(j) && isAnagram(strs[i], strs[j])) {
                anagramArr.push(strs[j]);
                visited.add(j); // Change to use index as identifier in visited set
            }
        }
        groupAnagram.push(anagramArr);
    }
    return groupAnagram;
};


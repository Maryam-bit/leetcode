/*
========== Question:  =========
383. Ransom Note

========== Description: =========== 
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

========== Example 1: ============  
Input: ransomNote = "a", magazine = "b"
Output: false
*/

// ========== solution 1 
var canConstruct = function(ransomNote, magazine) {
    const map = new Map();
    const magazineMap = new Map();

    for(i of ransomNote) {
        map.set(i, (map.get(i) || 0) + 1)
    }

    for(j of magazine) {
        magazineMap.set(j, (magazineMap.get(j) || 0) + 1)
    }

    for(let [key, value] of map) {
        if((magazineMap.get(key) || 0) < value) {
            return false
        }
    }
    return true
};

// ========== solution 2 
var canConstruct = function (ransomNote , magzine) {
    for(const char of magzine) {
        ransomNote = ransomNote.replace(char, "");
    }
    return !ransomNote
}
console.log(canConstruct("aa", "aab"))
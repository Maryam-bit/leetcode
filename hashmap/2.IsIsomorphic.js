/*
========== Question:  =========
205. Isomorphic Strings

========== Description: =========== 
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

========== Example 1: ============  
Input: s = "egg", t = "add"
Output: true
*/

// SOLUTION 1 
// function hasValue(map, value) {
//     for(let val of map.values()) {
//         if(val === value) {
//             return true;
//         }
//     }
//     return false;
//  }

// var isIsomorphic = function(s, t) {
//     const hashMap = new Map();
//     for(let i = 0; i<=s.length-1; i++) {
//           if(!hashMap.has(s[i]) && !hasValue(hashMap, t[i])) {
//             hashMap.set(s[i], t[i])
//         } else {
//             if(hashMap.get(s[i]) !== t[i]) return false
//         }
//     }      
//     return true;
// };


// SOLUTION 2
var isIsomorphic = function(s, t) {
    const mapST = new Map();
    const mapTS = new Map();
    for(let i = 0; i<=s.length-1; i++) {
        let sChar = s[i]
        let tChar = t[i]
        console.log(mapTS, tChar)
        if((mapST.has(sChar) && mapST.get(sChar) != tChar) || 
        (mapTS.has(tChar) && mapTS.get(tChar) != sChar)) {
            return false
        }
         else {
            mapST.set(sChar, tChar)
            mapTS.set(tChar, sChar)
        }
    }      
    return true;
};

console.log(isIsomorphic("badc", "baba"))
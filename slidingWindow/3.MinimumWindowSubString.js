/*
========== Question:  =========
76. Minimum Window Substring

========== Description: =========== 
Given two strings s and t of lengths m and n respectively, return the minimum window 
substring
 of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

========== Example 1: ============  
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
*/

var minWindow = function(s, t) {
    const tMap = new Map()
    const windowMap = new Map()

    // populate the target character frequency map
    for(const char of t) {
        tMap.set(char, tMap.has(char) ? tMap.get(char) + 1 : 1);
    }
    
    let l = 0;
    let resultLength = Infinity;
    let resultIndices = [-1, -1]
    let have = 0;

    for(let r = 0; r < s.length; r++) {
        const char = s[r];
        if(tMap.has(char)) {
            windowMap.set(char, windowMap.has(char) ? windowMap.get(char) + 1 : 1);
            if(windowMap.get(char) <= tMap.get(char)) {
                have++;
            }
        }
        console.log(windowMap, have)
        while (have === t.length) {
            // update result
            if (r-l+1 < resultLength) {
                resultIndices = [l, r]
                resultLength = (r-l+1);
            }

            //  skrink window 
            const leftChar = s[l];
            if(tMap.has(leftChar)) {
                windowMap.set(leftChar, windowMap.get(leftChar) - 1);
                if(windowMap.get(leftChar) < tMap.get(leftChar)) {
                    have--
                }
            }
            l++
        }
    }

    return resultLength === Infinity ? "" : s.substring(resultIndices[0], resultIndices[1]+1)
};

// ======== Not ACcepted by leetcode (GOT TIME LIMIT EXCEEDED :_:) ============

var minWindow = function(s, t) {
    let l = 0; r = t.length-1;
    let subStr = "";
    let result = ""
    let minSubStr = Infinity;

    // for(let i = 0; i<=r; i++) {
    //     subStr += s[i];
    // }

    const findSubString = function () {
        let isSubString = true;
        let subStrCp = subStr;
         
        for(let i = 0; i<=t.length-1; i++) {
            const index = subStrCp.indexOf(t[i])
            if(index === -1) {
                isSubString = false;
                break;
            } else {
                subStrCp = subStrCp.substring(0, index) + subStrCp.substring(index + 1);
            }
        }
        return isSubString
    }


    while (l <= r && r < s.length) {
        subStr = s.substring(l, r + 1);
        const isExists = findSubString();
        if(isExists && subStr.length >= t.length) {
            minSubStr = Math.min(minSubStr, subStr.length);
            if(minSubStr === subStr.length) {
                result = subStr;
            }
            l++;
        } else {
            r++;
        }
    }
    return result;
};


// const s = "ADOBECODEBANC";
// const t = "ABC";
// const s = "acbbaca";
// const t = "aba";
const s = "aa";
const t = "aa";
console.log(minWindow(s, t));
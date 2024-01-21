  /*
========== Question:  =========
14. Longest Common Prefix

========== Description: =========== 
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

========== Example 1: ============ 
Input: strs = ["flower","flow","flight"]
Output: "fl"

========== Example 2: ============ 
Input: strs = ["flower","flow","flight"]
Output: "fl"
*/

const longestCommonPrefix = (strs) => {
    const firstWord = strs[0].split("");
    let commonPrefix = "";

    if(strs.length == 1) commonPrefix = strs[0];

    else {
        // loop over character of first word
        for(i=0; i<=firstWord.length-1; i++) {
            let foundPrefix = false;
            // loop over remaining words
            for(j=1; j<=strs.length-1; j++) {
                if(strs[j].split("")[i] == firstWord[i]) foundPrefix = true;
                else {
                    foundPrefix = false;
                    break;
                }
            }
            foundPrefix
            if(foundPrefix) commonPrefix+= firstWord[i];
            else break;
        }
    }
    return commonPrefix;
}

const strs = ["flower","flow","flight"];
const result = longestCommonPrefix(strs); 
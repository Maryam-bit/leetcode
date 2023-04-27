/*
========== Question:  =========
Sorting the Sentence

========== Example 1: ============ 
Input: s = "is2 sentence4 This1 a3"
Output: "This is a sentence"
Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.


========== Example 2: ============ 
Input: s = "Myself2 Me1 I4 and3"
Output: "Me Myself and I"
Explanation: Sort the words in s to their original positions "Me1 Myself2 and3 I4", then remove the numbers.
*/

var sortSentence = function(s) {
    const sentenceArr = s.split(' ');
    return sentenceArr.map((element, index) => sentenceArr.find(word => word.includes(index+1)).slice(0, -1)).join(' ');
}

const s = "is2 sentence4 This1 a3";
const result = sortSentence(s);

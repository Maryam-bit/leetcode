/*
========== Question:  =========
Maximum Number of Words Found in Solution

========== Description: =========== 
Return the maximum number of words that appear in a single sentence.

========== Example 1: ============ 
Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
Output: 6
== Explanation: == 
- The first sentence, "alice and bob love leetcode", has 5 words in total.
- The second sentence, "i think so too", has 4 words in total.
- The third sentence, "this is great thanks very much", has 6 words in total.
Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.
*/

var mostWordsFound = function(sentences) {
    let count = 0;
    sentences.forEach(element => {
        const sentenceLen = element.split(' ').length
        if (count < sentenceLen) count = sentenceLen;
    });
    return count
};

const sentences = ["this is great thanks very much", "alice and bob love leetcode", "i think so too"];
const result = mostWordsFound(sentences);

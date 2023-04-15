// ==== Maximum Number of Words Found in Solution ====

/*
Example 1
Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
Output: 6
Explanation: 
- The first sentence, "alice and bob love leetcode", has 5 words in total.
- The second sentence, "i think so too", has 4 words in total.
- The third sentence, "this is great thanks very much", has 6 words in total.
Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.
*/

// My Answer
var mostWordsFound = function(sentences) {
    let count = 0;
    const arr = [];
    sentences.forEach(element => {
        arr.push(element.split(' ').length)
        count = Math.max(...arr)
    });
    return count
};

const sentences = ["this is great thanks very much", "alice and bob love leetcode", "i think so too"];
const result = mostWordsFound(sentences);


// ===== other good solutions =====
var mostWordsFound = sentences => sentences.map(item => item.split(' ')).sort((a, b) => b.length - a.length)[0].length;

// for loop
var mostWordsFound = function(sentences) {
    let count = 0;
    for(let i of sentences) {
        if(i.split(' ').length > count) count = i.split(' ').length;
    }
    return count;
}

// forecah without creating extra arr
var mostWordsFound = function(sentences) {
    let ans = 0;
    sentences.forEach(s => {
        const temp = s.split(' ').length;
        if(temp > ans) ans = temp
    })
    return ans;
}
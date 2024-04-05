/*
========== Question:  =========
68. Text Justification

========== Description: =========== 
Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left-justified, and no extra space is inserted between words.

Note:

A word is defined as a character sequence consisting of non-space characters only.
Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
The input array words contains at least one word.
 
========== Example 1: ============  
Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]

Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
Output:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
Note that the second line is also left-justified because it contains only one word.
*/

var fullJustify = function(words, maxWidth) {
    let result = [];
    let row = [];
    let rowLength = 0;

    const transform = (row, isLastRow) => {
        let line = "";
        if (isLastRow || row.length === 1) {
            // console.log(row.join(" ").length)
            line = row.join(' ') + " ".repeat(maxWidth - row.join(' ').length);
        } else {
            const totalSpaces = maxWidth - rowLength;
            const totalWords = row.length - 1;
            const minSpaces = Math.floor(totalSpaces / totalWords);
            const remainingSpaces = totalSpaces % totalWords;

            for (let i = 0; i < row.length - 1; i++) {
                line += row[i] + " ".repeat(minSpaces + (i < remainingSpaces ? 1 : 0));
            }
            line += row[row.length - 1];
        }
        result.push(line);
    };

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if ((rowLength + word.length + row.length) <= maxWidth) {
            row.push(word);
            rowLength += word.length;
        } else {
            transform(row, false);
            row = [word];
            rowLength = word.length;
        }
    }
    transform(row, true);

    return result;
};

const words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"]
const maxWidth = 20
console.log(fullJustify(words, maxWidth))
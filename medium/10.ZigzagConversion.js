/*
========== Question:  =========
6. Zigzag Conversion
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
========== Example 1: ============  
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

========== Example 2: ============  
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I

========== Example 3: ============  
Input: s = "A", numRows = 1
Output: "A"
*/

var convert = function(s, numRows) {
    if(numRows.length === 1) return s;

    let currentRow = 0;
    let rows = new Array(numRows).fill("");
    let goingDown = false;

    for(let i = 0; i<=s.length-1; i++) {
        rows[currentRow] += s[i];

        if(currentRow === 0 || currentRow === numRows -1 ) {
            goingDown = !goingDown
        } 

        currentRow += goingDown ? 1 : -1;
    }
    return rows.join("");
};

const s = "PAYPALISHIRING";
console.log(convert(s, 4));
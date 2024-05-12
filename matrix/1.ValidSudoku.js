/*
========== Question:  =========
36. Valid Sudoku

========== Description: =========== 
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

========== Example 1: ============  
Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
*/

var isValidSudoku = function(board) {
    const seen = new Set();

    for(let i =0; i<9; i++) { 
        for(let j = 0; j<9; j++) {
            const currentValue = board[i][j];
            if (currentValue === '.') continue;
            const row = `${currentValue} in row at ${i}`;
            const col = `${currentValue} in col at ${j}`;
            const cube = `${currentValue} in cube at ${Math.floor(i/3)} - ${Math.floor(j/3)}`;
            
            if(seen.has(row) || seen.has(col) || seen.has(cube)) {
                return false
            }

            seen.add(row)
            seen.add(col)
            seen.add(cube)
        }
    }
    console.log(seen)
    return true
};

const board = [["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

console.log(isValidSudoku(board));
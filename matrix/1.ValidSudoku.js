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
var gameOfLife = function (board) {
    for(let i = 0; i<board.length; i++) {
        for(let j = 0; j<board[0].length; j++) {
            const current_val = board[i][j]
            let left = 0, topLeft = 0, top = 0, topRight = 0, right = 0, bottomRight = 0, bottom = 0, bottomLeft = 0

            if(j>0) left = board[i][j-1] || 0
            if(i>0 && j>0) topLeft = board[i-1][j-1] || 0
            if(i>0) top = board[i-1][j] || 0
            if(i>0 && j<board[0].length-1) topRight = board[i-1][j+1] || 0
            if(j<board[0].length-1) right = board[i][j+1] || 0
            if(i<board.length-1 && j<board[0].length-1) bottomRight = board[i+1][j+1] || 0
            if(i<board.length-1) bottom = board[i+1][j] || 0
            if(i<board.length-1 && j>0) bottomLeft = board[i+1][j-1] || 0

            const liveNeighbors =
            (left == -2 ? 0 : left == -1 ? 1 : left) +
            (topLeft == -2 ? 0 : topLeft == -1 ? 1 : topLeft) +
            (top == -2 ? 0 : top == -1 ? 1 : top) +
            (topRight == -2 ? 0 : topRight == -1 ? 1 : topRight) +
            (right == -2 ? 0 : right == -1 ? 1 : right) +
            (bottomRight == -2 ? 0 : bottomRight == -1 ? 1 : bottomRight) +
            (bottom == -2 ? 0 : bottom == -1 ? 1 : bottom) +
            (bottomLeft == -2 ? 0 : bottomLeft == -1 ? 1 : bottomLeft);

            // -2 defines previous 1 value 
            // -1 defines previous 0 value 
            if((current_val == 1) && liveNeighbors<2) board[i][j] = -1
            if((current_val == 1) && (liveNeighbors==2||liveNeighbors==3)) board[i][j] = 1
            if((current_val == 1) && liveNeighbors>3) board[i][j] = -1
            if((current_val == 0) && liveNeighbors==3) board[i][j] = -2
        }
    }


    for(let i = 0; i<board.length; i++) {
        for(let j = 0; j<board[0].length; j++) {
            const current_val = board[i][j]
            if(current_val == -1) {
                board[i][j] = 0
            } else if (current_val == -2) {
                board[i][j] = 1
            }

        }
    }
    return board
}

const board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]];
console.log(gameOfLife(board));
/*
========== Question:  =========
73. Set Matrix Zeroes

========== Description: =========== 
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

========== Example 1: ============  
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
*/

var setZeroes = function(matrix) {
    const zeros = new Set();

    for(let i = 0; i<matrix.length; i++) {
        for(let j = 0; j<matrix[0].length; j++) {
            if(matrix[i][j] == 0){
                zeros.add(`${i},${j}`);
            }
        }
    }

    zeros.forEach(zero => {
        const [row, col] = zero.split(',').map(Number);
        for(let i = 0; i<matrix.length; i++) {
            matrix[i][col] = 0
        }
        for(let j = 0; j<matrix[0].length; j++) {
            matrix[row][j] = 0
        }
    })
    return matrix
};

const matrix = [[0,1]]
console.log(setZeroes(matrix))
/*
========== Question:  =========
48. Rotate Image

========== Description: =========== 
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

========== Example 1: ============  
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
*/



// ======== in place ===========
var rotate = function (matrix) {
    const n = matrix.length;

    for(let i = 0; i<n; i++) {
        for (let j = i; j<n; j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    for (let i = 0; i<n; i++) {
        for (let j = 0; j<(Math.floor(n/2)); j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[i][n-1-j]
            matrix[i][n-1-j] = temp
        }
    }
    return matrix;
}

// extra space 
var rotate = function(matrix) {
    const newV = []
    for(let i = 0; i <= matrix[0].length-1; i++)  {
        const row = []
        for(let j = matrix[0].length-1; j>=0; j--){
            row.push(matrix[j][i])
        }
        newV.push(row)
    }
    return newV
};




const matrix = [[1,2,3],[4,5,6],[7,8,9]]
// const matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
console.log(rotate(matrix))
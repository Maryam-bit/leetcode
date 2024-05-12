/*
========== Question:  =========
54. Spiral Matrix

========== Description: =========== 
Given an m x n matrix, return all elements of the matrix in spiral order.

========== Example 1: ============  
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
*/

var spiralOrder = function(matrix) {
    let left = 0;
    let top = 0;
    let right = matrix[0].length-1;
    let bottom = matrix.length-1;
    let size = matrix[0].length*matrix.length;
    let nums = [];

    while (nums.length < size) {
        for(let i = left; i<=right && nums.length < size; i++) {
           nums.push(matrix[top][i]) 
        }
        top++

        for(let i = top; i<=bottom && nums.length < size; i++) {
            nums.push(matrix[i][right])
        }
        right--

        for(let i = right; i>=left && nums.length < size; i--) {
            nums.push(matrix[bottom][i])
        }
        bottom--

        for(let i = bottom; i>=top && nums.length < size; i--) {
            nums.push(matrix[i][left])
        }
        left++
    }
    return nums;
};

const matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
console.log(matrix)
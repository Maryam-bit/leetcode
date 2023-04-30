/* 
========== Question:  =========
Reverse String

========== Description: =========== 
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

========== Example 1: ============ 
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
*/

//  ========== ANSWER ==========
var reverseString = function(s) {
    return s.reverse()
};
const s = ["h","e","l","l","o"];
const result = reverseString(s);

//  ========== TEST CASE ==========
function testCase () {
    const input1 = ["h","e","l","l","o"];
    const expectedOutput1 = ["o","l","l","e","h"];
    const result1 = reverseString(input1);
    if(result1.toString() !== expectedOutput1.toString()) {
        console.error(`Test case 1 failed: Expected ${expectedOutput1}, but found ${result1}`);
    } else {
        console.log('Test case 1 passed');
    }

    const input2 = ["H","a","n","n","a","h"];
    const expectedOutput2 = ["h","a","n","n","a","H"];
    const result2 = reverseString(input2);
    if(result2.toString() !== expectedOutput2.toString()) {
        console.error(`Test case 2 failed: Expected ${expectedOutput2}, but found ${result2}`);
    } else {
        console.log('Test case 2 passed');
    }
}
testCase()
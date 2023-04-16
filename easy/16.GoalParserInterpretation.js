/*
========== Question:  =========
Goal Parser Interpretation

========== Description: =========== 
Given the string command, return the Goal Parser's interpretation of command.

========== Example 1: ============ 
Input: command = "G()(al)"
Output: "Goal"
=== Explanation: === 
The Goal Parser interprets the command as follows:
G -> G
() -> o
(al) -> al
The final concatenated result is "Goal".
*/

var interpret = function(command) {
    return command.replaceAll('()', 'o').replaceAll('(al)', 'al')
};

const command = "(al)G(al)()()G"
const result = interpret(command);
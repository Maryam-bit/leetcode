/*
========== Question:  =========
150. Evaluate Reverse Polish Notation

========== Description: =========== 
You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:

The valid operators are '+', '-', '*', and '/'.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 32-bit integer.

==== example 1 
Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
*/

var evalRPN = function(tokens) {
    const numStack = [];  
  
      for(let i = 0; i<=tokens.length-1; i++) {
          const token = tokens[i];
          if(!isNaN(token)) {
              numStack.push(Number(token))
          } else {
              const second = numStack.pop();
              const first = numStack.pop();
              let res;
  
              console.log(first, token,second)
              switch(token) {
                  case '+': 
                      res = first + second;
                      break;
                  case '-': 
                      res = first - second;
                      break;
                  case '*':
                      res = first * second;
                      break;
                  case '/': 
                      res = Math.trunc(first / second);
                      break;
              }
              numStack.push(res);
          }
      }
      return numStack.pop();
  };
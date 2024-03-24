/*
========== Question:  =========
12. Integer to Roman

========== Description: =========== 
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral.

========== Example 1: ============  
Input: num = 3
Output: "III"
Explanation: 3 is represented as 3 ones.
*/


var intToRoman = function (num) {
    const romanNumerics = [
        [1,    'I'],
        [4,    'IV'],
        [5,    'V'],
        [9,    'IX'],
       [10,    'X'],
       [40,    'XL'],
       [50,    'L'],
       [90,    'XC'],
      [100,    'C'],
      [400,    'CD'],
      [500,    'D'],
      [900,    'CM'],
     [1000,    'M']
    ];
    let roman = "";

    for(let i = romanNumerics.length-1; i>=0; i--) {
        let romanNum = romanNumerics[i][0];
        let romanStr = romanNumerics[i][1];
        if(num>=romanNum) {
            const div = Math.floor(num/romanNum);
            const mod = num%romanNum;
            if(div==1) {
                roman+= romanStr;
                num = mod;
            } else if (div>1) {
                for(let j=1; j<=div; j++) {
                    roman += romanStr;
                    num = mod;
                }
            }
        }
    }
    return roman
}

const num = 1994;
console.log(intToRoman(num)); // MCMXCIV
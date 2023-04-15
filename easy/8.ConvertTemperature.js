/*
========== Question:  =========
Convert the Temperature

========== Description: =========== 
Convert Celsius into Kelvin and Fahrenheit and return it as an array ans = [kelvin, fahrenheit].
Return the array ans. Answers within 10-5 of the actual answer will be accepted.

========== Example 1: ============ 
Input: celsius = 36.50
Output: [309.65000,97.70000]
== Explanation: == 
Temperature at 36.50 Celsius converted in Kelvin is 309.65 and converted in Fahrenheit is 97.70.
*/

var convertTemperature = function(celsius) {
    const kelvin = (celsius + 273.15).toFixed(5);
    const fahrenheit = (celsius * 1.80 + 32.00).toFixed(5);
    return [Number(kelvin), Number(fahrenheit)];
};

const celsius = 36.50;
const result = convertTemperature(celsius); 
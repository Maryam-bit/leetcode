/*
========== Question:  =========
121. Best Time to Buy and Sell Stock

========== Description: =========== 
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

========== Example 1: ============ 
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
*/

// ======= Solution 1 =======
var maxProfit = function(prices) {
    let minVal = prices[0]
    let maxProfit = 0

    for(i=1; i<=prices.length-1; i++) {
        if(prices[i] < minVal) {
            minVal = prices[i]
        }
        else if (prices[i] - minVal > maxProfit) {
            maxProfit = prices[i] - minVal
        }
    }
    return maxProfit;;
};


// ======= Solution 2 =======
var findMax = function (prices, minIdx) {
    let max = prices[minIdx]
    for(i=minIdx; i<=prices.length-1; i++) {
        if(prices[i] > max) {
            max = prices[i];
        }
    }
    return max;
}

var findMin = function (prices) {
    let min = prices[0];
    for(i=0; i<=prices.length-1; i++) {
        if(prices[i] < min) {
            min = prices[i];
        }
    }
    return min;
}

var findIndex = function (prices, indexOf) {
    for(i=0; i<=prices.length-1; i++) {
        if(prices[i] == indexOf) {
            return i;
        }
    }
}

var maxProfit = function(prices) {
    const minVal = findMin(prices)
    const indexofMinVal = findIndex(prices, minVal)
    const maxval = findMax(prices, indexofMinVal)
    const profit = maxval - minVal;
    return profit;
};

let prices = [7,1,5,3,6,4]
maxProfit(prices); // 5
/*
========== Question:  =========
122. Best Time to Buy and Sell Stock II

========== Description: =========== 
You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
Find and return the maximum profit you can achieve.

========== Example 1: ============ 
Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.
*/

/*
Solution way ====> 
find diff between previous dat and current day
if current days value is greater than the previous days value, it means we got profit 
becuase the prevoious day, we had buy the stocka dn in current day we are selling it
*/

var maxProfit = function(prices) {
    let maxProfit = 0;
    for(i=1; i<=prices.length-1; i++) {
        if(prices[i] > prices[i-1]) {
            maxProfit += prices[i] - prices[i-1]
        }
    }
    return maxProfit;
};

const prices = [7,6,4,3,1]
console.log(maxProfit(prices))

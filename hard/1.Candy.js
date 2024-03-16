/*
========== Question:  =========
135. Candy

========== Description: =========== 
There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
Return the minimum number of candies you need to have to distribute the candies to the children.

========== Example 1: ============ 
Input: ratings = [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.

========== Example 2: ============ 
Input: ratings = [1,2,2]
Output: 4
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
The third child gets 1 candy because it satisfies the above two conditions.
*/

var candy = function(ratings) {
    let candies = new Array(ratings.length).fill(1);
    let totalCandies = 0

    for(let i=0; i<=ratings.length-1; i++) {
        if(ratings[i] > ratings[i-1]) {
            candies[i]=candies[i-1]+1;
        }
    }

    for(let j=ratings.length-1; j>=0; j--) {
        if(ratings[j] > ratings[j+1]) {
            candies[j]=Math.max(candies[j], candies[j+1]+1);
        }
        totalCandies+=candies[j];
    }
    return totalCandies;
}

const ratings = [1,6,10,8,7,3,2];
console.log(candy(ratings));
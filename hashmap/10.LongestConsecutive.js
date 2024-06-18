/*
========== Question:  =========
128. Longest Consecutive Sequence

========== Description: =========== 
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

========== Example 1: ============  
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

========== Example 2: ============  
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
*/

// Solution 1 
var longestConsecutive = function(nums) {
    const numsSet = new Set(nums);
    let longestStreak = 0;

    for(let num of numsSet) {
        if(!numsSet.has(num-1)) {
            let currentNum = num;
            let currentStreak = 1;

            while(numsSet.has(currentNum+1)) {
                currentNum++
                currentStreak++
            }

            longestStreak = Math.max(longestStreak, currentStreak)
        }
    }
    return longestStreak
};

// Solution 2 
var longestConsecutive = function(nums) {
    if(!nums.length) return 0
    const sortedArr = [...new Set(nums)].sort((a,b) => a-b);
    let currentStreak = 1;
    let longestStreak = 1;


    for(let i = 1; i<=sortedArr.length-1; i++) {
        if(sortedArr[i-1] + 1 == sortedArr[i]) {
            currentStreak+=1;
        } else {
            longestStreak = Math.max(longestStreak, currentStreak);
            currentStreak = 1
        }
    }
    longestStreak = Math.max(longestStreak, currentStreak);
    return longestStreak;
};


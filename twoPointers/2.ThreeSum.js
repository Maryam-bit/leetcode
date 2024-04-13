/*
========== Question:  =========
15. 3Sum

========== Description: =========== 
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

========== Example 1: ============ 
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

========== Example 2: ============ 
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
*/

var threeSum = function(numbers) {
    
    let result = []
    numbers.sort((a, b) => a-b);

    for(let i = 0; i <= numbers.length-1; i++) {
        if(i>0 && numbers[i] === numbers[i-1])
        continue;

        let l = i+1
        let r = numbers.length-1
        
        while(l<r) {
            const sum = numbers[i] + numbers[l] + numbers[r];
            if (sum < 0) l++;
            else if (sum > 0) r--
            else {
                result.push([numbers[i], numbers[l], numbers[r]])
                l++;
                while(numbers[l] === numbers[l-1] && l<r) l++;
            }
        }
    }
    return result;
}

const numbers = [-1,0,1,2,-1,-4]
console.log(threeSum(numbers));
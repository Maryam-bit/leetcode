/*
========== Question:  =========
Decompress Run-Length Encoded List

========== Description: =========== 
We are given a list nums of integers.

We need to make a pair of these integers using this condition [freq, val] = [nums[2i], nums[2i+1]] where if we start from 0 then we get the following arrays:

[freq, val] = [nums[2 * 0], nums[2 * 0+1]] = [nums[0], nums[1]] = [1, 2], where i=0;
[freq, val] = [nums[2 * 1], nums[2 * 1+1]] = [nums[2], nums[3]] = [3,4], where i=1;

[freq, val] = [nums[2 * 2], nums[2 * 2 + 1]] = [nums[4], nums[5]] = [0, 0], where i=2; but this is out of the array size;

Now we take the [freq, val] pair and make a array of val with the number of freq as shown below:

[freq, val] = [1, 2] = array of freq 1 and the value in the array is 2 so we add val=2, 1 time = [2]
[freq, val] = [3, 4] = array of freq 3 and the value in the array is 4 so we add val=4. 3 times = [4, 4, 4]

Now we need to concatenate or add all these values into a single array which is going to be our output.


========== Example 1: ============ 
Input: nums = [1,2,3,4]
Output: [2,4,4,4]
Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
At the end the concatenation [2] + [4,4,4] is [2,4,4,4].
*/


var decompressRLElist = function(nums) {
    const decompressedArr = [];
    
    // the number of times this loop iterates = number of pairs in array
    for(i=0; i<=(nums.length/2)-1; i++) {
        const arrPair = [nums[2*i], nums[2*i+1]]
        
        // fill decompressedArr with frequency of num => arrPair[0] = freq, arrPair[1] = num
        decompressedArr.push(...Array.from({ length: arrPair[0] }).fill(arrPair[1]))
    }

    return decompressedArr
};

const nums = [1, 2, 3, 4]
const result = decompressRLElist(nums)

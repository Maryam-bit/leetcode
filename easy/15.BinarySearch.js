/*
========== Question:  =========
Binary Search

========== Description: =========== 
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity.

========== Example 1: ============ 
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
== Explanation: == 
9 exists in nums and its index is 4
*/


const nums = [-1, 0, 3, 5, 9 , 12];
const target = 9;

function search(nums, target) {
    const recursiveSearch = (low, high) => {
        let mid = Math.floor((low+high) / 2)
        if(nums[mid] == target) 
            return mid;
        if(nums[mid] >  target)
        return recursiveSearch(low, mid - 1)
        if(nums[mid] < target)
        return recursiveSearch(mid + 1, high)
        return -1
    }
    return recursiveSearch(0, nums.length -1)
    
};

const searchedIndex = search(nums, target) 
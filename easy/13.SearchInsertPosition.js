/*
========== Question:  =========
Search Insert Position

========== Description: =========== 
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.

========== Example 1: ============ 
Input: nums = [1,3,5,6], target = 5
Output: 2
*/


var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length-1
    while(left<=right) {
        const mid = Math.floor((left+right)/2);
        if(nums[mid] == target) {
            return mid;
        }
        else if (nums[mid] > target) {
            right = mid - 1
        }
        else {
            left = mid + 1
        }
    }
    if(target > nums[right]) {
        return right + 1
    }
    else if (target < nums[left]) {
        return left
    }
    else {
        return left + 1
    }
};

const nums = [1,3,5,6];
const target = 7;
const searchedIndex = searchInsert(nums, target);

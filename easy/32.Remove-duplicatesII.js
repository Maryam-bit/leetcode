/*
========== Question:  =========
80. Remove Duplicates from Sorted Array II

========== Description: =========== 
Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.
Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
Return k after placing the final result in the first k slots of nums.
Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

========== Example 1: ============ 
Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores)
*/


// var removeDuplicates = function(nums) {
//     let existingValue = nums[0];
//     let appearance = 1; 
//     for(i=1; i<=nums.length-1; i++) {
//         existingValue
//         appearance
//         if(existingValue == nums[i]) {
//             if(appearance >= 2) {
//                 nums.splice(i,1)
//                 i--
//             }
//             appearance++;
//         }
//         else {
//             existingValue = nums[i];
//             appearance = 1
//         }
//     }
// }


var removeDuplicates = function(nums) {
    let j = 2;
    for(i=1; i<=nums.length-1; i++) {
        if(nums[i] !== nums[j-2]) {
            nums[j] = nums[i]
            j++
        }
    }
}
const nums = [0,0,1,1,1,1,2,3,3]
const n = 5

removeDuplicates(nums)
// 0,0,1,1,2,3,3,3,3

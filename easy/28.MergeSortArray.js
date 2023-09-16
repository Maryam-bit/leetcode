/*
========== Question:  =========
88. Merge Sorted Array

========== Description: =========== 
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
Merge nums1 and nums2 into a single array sorted in non-decreasing order.
The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

========== Example 1: ============ 
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
*/

var merge = function(nums1, m, nums2, n) {
    const merged = []
    let idx1 = 0;
    let idx2 = 0
    let x = 0;

    for(let i=m; i<nums1.length; i++) {
        nums1.splice(i, 1)
        i--
    }

    for(let i=n; i<nums2.length; i++) {
        nums2.splice(i, 1)
        i--
    }

    while(idx1 <= nums1.length-1 && idx2 <= nums2.length-1) {
        if(nums1[idx1] < nums2[idx2]) {
            merged[x++] = nums1[idx1++]
        } else {
            merged[x++] = nums2[idx2++]
        }
    }

    while(idx1 <= nums1.length-1) {
        merged[x++] = nums1[idx1++]
    }

    while(idx2 <= nums2.length-1) {
        merged[x++] = nums2[idx2++]
    }

    for(let i = 0, j = 0; i<=merged.length-1; i++, j++) {
        nums1[j] = merged[i]
        nums2.pop()
        m = nums1.length
        n = nums2.length
    }
};
/*
========== Question:  =========
238. Product of Array Except Self

========== Description: =========== 
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

========== Example 1: ============  
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
*/

// ============ NOT ACCEPTED ==============
// var productExceptSelf = function(nums) {
//     let product = [] 
//     for (let i = 0; i<=nums.length-1; i++) {
//     let numsExceptSelf = [...nums];
//     numsExceptSelf.splice(i, 1);
//     product[i] =eval(numsExceptSelf.join('*'));
//  }
//  return product;
// }


var productExceptSelf = function(nums) {
    let product = new Array(nums.length).fill(1);
    let prefix = 1; 
    let postfix = 1; 

    for (let i = 0; i<=nums.length-1; i++) {
        product[i] = prefix;
        prefix *= nums[i];
    }

    for (let j = nums.length -1; j>=0; j--) {
        product[j] = postfix * product[j];
        postfix *= nums[j];
    }

    return product;
}

const nums = [-1,1,0,-3,3];
console.log(productExceptSelf(nums))
var singleNumber = function(nums) {
    let res = nums[0];
    for (let i = 1; i < nums.size; i++)
        res = res ^ nums[i];
console.log(res)
    return res;
};
singleNumber([2,2,1])
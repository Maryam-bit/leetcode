var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length-1
    while(left<right) {
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
    else if (target > nums[left]) {
        return left - 1
    }
    else {
        return left + 1
    }
};

const nums = [1,3,5,6];
const target = 7;
const searchedIndex = searchInsert(nums, target);
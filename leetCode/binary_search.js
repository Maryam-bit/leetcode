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
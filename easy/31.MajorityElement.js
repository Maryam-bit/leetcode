var majorityElement = function(nums) {
    const n = nums.length;
    const majority = Math.floor(n/2);
    let bucket = {};

    for(i=0; i<n; i++) {
        bucket[nums[i]] = bucket[nums[i]] || 0;
        bucket[nums[i]]++

        if(bucket[nums[i]] > majority ) {
            return nums[i];
        }
    }
}

const nums = [2,2,1,1,1,1,1,1,2,2]
const n = 2

const majority = majorityElement(nums);
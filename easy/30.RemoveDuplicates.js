var removeDuplicates = function(nums) {
    for(i=0; i<=nums.length; i++) {
        for(j=i+1; j<=nums.length; j++) {
            if(nums[i] == nums[j]){
                nums.splice(j, 1);
                j--
            }
        }
    }
}

const nums = [1, 1, 2]
removeDuplicates(nums)